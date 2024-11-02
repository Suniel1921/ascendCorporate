
// // const companyInfoModel = require('../models/companyInfoModel')
const nodemailer = require('nodemailer');
const contactModal = require('../models/contactModel');

exports.saveContactForm = async (req, res) => {
  try {
    const {
      subject,
      firstName,
      lastName,
      primaryPhone,
      secondaryPhone,
      contactEmail,
      confirmEmail,
      industry,
      orderNumber,
      invoiceNumber,
      message,
      captcha,
    } = req.body;

    // Create a new contact record
    const contact = new contactModal({
      subject,
      firstName,
      lastName,
      primaryPhone,
      secondaryPhone,
      contactEmail,
      confirmEmail,
      industry,
      orderNumber,
      invoiceNumber,
      message,
      captcha,
    });

    // Save the contact data to the database
    await contact.save();

    // Set up NodeMailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: contactEmail, // Send confirmation to the contact's email
      subject: 'Thank you for contacting us!',
      text: `Dear ${firstName} ${lastName},\n\nThank you for reaching out. We have received your message regarding ${subject}. We will get back to you as soon as possible.\n\nBest regards,\nNepal Tech Innovations`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      success: true,
      message: 'New order form submitted successfully! Confirmation email sent.',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while saving the form or sending the email. Please try again later.',
    });
  }
};




exports.getAllUserOderContact = async (req, res) => {
  try {
    const contacts = await contactModal.find({});
    return res.status(200).json({ success: true, message: 'new order contact fetched sucessfully',contacts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while fetching contact data.',
    });
  }
};








// //create user company information 
// exports.createUserCompanyInfo = async (req, res) => {
//   try {
//     const userId = req.user._id; // Ensure `req.user` is not undefined

//     if (!userId) {
//       return res.status(400).json({ success: false, message: 'User ID is missing' });
//     }

  

//     // Create new UserCompanyInfo with orders
//     const newInfo = new companyInfoModel({
//       ...req.body,
//       user: userId,
//     });

//     await newInfo.save();
//     res.status(201).json({ success: true, message: 'Form submitted successfully', data: newInfo });
//   } catch (error) {
//     res.status(500).json({ success: false, message: `Failed to submit form: ${error.message || error}` });
//   }
// };



//bypassing duplicate form submmited
// Create user company information
exports.createUserCompanyInfo = async (req, res) => {
  try {
    const userId = req.user._id; // Ensure `req.user` is not undefined

    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is missing' });
    }

    // Check if the same company data already exists for this user
    const existingInfo = await companyInfoModel.findOne({
      user: userId,
      preferredName: req.body.preferredName, // Check if company name is already submitted by the same user
      // Add other fields if necessary (like address, etc.)
    });

    if (existingInfo) {
      return res.status(400).json({ success: false, message: 'Company information already exists for this user' });
    }

    // Create new UserCompanyInfo with orders if no duplicate is found
    const newInfo = new companyInfoModel({
      ...req.body,
      user: userId,
    });

    await newInfo.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully', data: newInfo });
  } catch (error) {
    res.status(500).json({ success: false, message: `Failed to submit form: ${error.message || error}` });
  }
};





//get user company information
// exports.getAllCompanyInfo = async (req, res) => {
//   try {
//     const companyInfo = await companyInfoModel.find().populate({path: 'user', select: '-password'});
//     if (companyInfo.length === 0) {
//       return res.status(404).json({ success: false, message: 'No company info found' });
//     }
//     res.status(200).json({ success: true, message: 'Company information retrieved successfully', companyInfo });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
//   }
// };





// controller/contactController.js

exports.getAllCompanyInfo = async (req, res) => {
  try {
    const userId = req.user._id; 
    
    // Find company info only for the logged-in user
    const companyInfo = await companyInfoModel.find({ user: userId }).populate({path: 'user', select: '-password'});
    res.status(200).json({ success: true, message: 'Company information retrieved successfully', companyInfo });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
};











// controllers/userChatController.js

// const UserChat = require ('../models/chatModel');

exports.saveUserChatData = async (req, res) => {
  try {
    const userChat = new UserChat({
      subject: req.body.subject,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      primaryPhone: req.body.primaryPhone,
      secondaryPhone: req.body.secondaryPhone,
      contactEmail: req.body.contactEmail,
      confirmEmail: req.body.confirmEmail,
      industry: req.body.industry,
      orderNumber: req.body.orderNumber,
      invoiceNumber: req.body.invoiceNumber,
      message: req.body.message
    });

    // Save the document to the database
    await userChat.save();

    // Send a success response
    res.status(201).json({ message: 'User chat data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};





