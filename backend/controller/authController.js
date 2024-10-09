// with otp verifcatoin

const userAuthModel = require('../models/authModel');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();


const tempUserStore = new Map(); // Temporary in-memory store for user data

// register controller
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Check if user exists in the database
        const userExists = await userAuthModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hash user password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        // Temporarily store user data with OTP
        tempUserStore.set(email, { name, email, password: hashedPassword, otp });

        // Send OTP email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

    
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'OTP Verification - Ascend Incorporate LLC',
            html: `
                <p>Dear ${name},</p>
                <p>Thank you for registering with <strong>Ascend Incorporate LLC</strong>.</p>
                <p>To complete your registration and verify your email address, please use the following One-Time Password (OTP):</p>
                <p><strong>OTP Code: ${otp}</strong></p>
                <p>This code is valid for 10 minutes. If you did not initiate this request, please ignore this email.</p>
                <p>Thank you for choosing <strong>Ascend Incorporate LLC</strong>.</p>
                <p>Best regards,<br/>Ascend Incorporate LLC</p>
            `,
        };
        

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                // console.error('Error sending email:', error);
                return res.status(500).json({ success: false, message: 'Error sending OTP email' });
            } else {
                // console.log('Email sent:', info.response);
            }
        });

        return res.status(200).json({ success: true, message: 'OTP sent to email. Please verify to complete registration.' });

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}




// login controller
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email or Password is required' });
        }

        // Check if user exists
        const userExists = await userAuthModel.findOne({ email });
        if (!userExists) {
            return res.status(404).json({ success: false, message: 'Invalid Credentials' });
        }

        // Check password
        const isMatchPassword = await bcrypt.compare(password, userExists.password);
        if (!isMatchPassword) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        // Generate token
        const token = JWT.sign({ _id: userExists._id }, process.env.SECRET_KEY, { expiresIn: '7d' });

        // Include role in the response
        return res.status(200).json({
            success: true,
            message: 'Login Successful',
            user: { 
                name: userExists.name, 
                email: userExists.email, 
                role: userExists.role
            }, 
            token 
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
};


// Protected route controller
exports.protectedRoute = async (req, res) => {
    res.status(200).send({ ok: true });
}

// Admin route controller
exports.admin = (req, res) => {
    res.status(200).send({ ok: true });
}

// OTP verification controller
exports.verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Validation
        if (!email || !otp) {
            return res.status(400).json({ success: false, message: 'Email and OTP are required' });
        }

        // Retrieve stored user data
        const userData = tempUserStore.get(email);
        if (!userData || userData.otp !== parseInt(otp)) {
            return res.status(400).json({ success: false, message: 'Invalid OTP' });
        }

        // Create new user in the database
        const newUser = await userAuthModel.create({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            isVerified: true,
        });

        // Clear OTP and user data from temporary store
        tempUserStore.delete(email);

        return res.status(201).json({ success: true, message: 'OTP verification successful. User registered.', newUser });

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};



// forgotPassword controller
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Validation
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }

        // Check if user exists
        const user = await userAuthModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User does not exist' });
        }

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        // Temporarily store OTP
        tempUserStore.set(email, { otp });

        // Send OTP email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP code is ${otp}. Please enter this code to reset your password.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ success: false, message: 'Error sending OTP email' });
            } else {
                console.log('Email sent:', info.response);
            }
        });

        return res.status(200).json({ success: true, message: 'OTP sent to email. Please verify to reset password.' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// resetPassword controller
exports.resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        // Validation
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Retrieve stored OTP
        const userData = tempUserStore.get(email);
        if (!userData || userData.otp !== parseInt(otp)) {
            return res.status(400).json({ success: false, message: 'Invalid OTP' });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user password
        const user = await userAuthModel.findOneAndUpdate(
            { email },
            { password: hashedPassword },
            { new: true }
        );

        // Clear OTP from temporary store
        tempUserStore.delete(email);

        return res.status(200).json({ success: true, message: 'Password reset successful.', user });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};










// Get all users without pagination
exports.getAllUsers = async (req, res) => {
    try {
        // Fetch all users
        const users = await userAuthModel.find();

        return res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
