const contactModel = require("../models/contactModel");
const companyInfoModel = require('../models/companyInfoModel');
const UserChat = require("../models/chatModel");


exports.contact = async (req, res) => {
  try {
    const { firstName,middleName,lastName,country,street,city,state,postalCode,phoneNumber,secondaryPhoneNumber,email,confirmEmail,industry, } = req.body;

    // Validation
    if (
      !firstName ||
      !middleName ||
      !lastName ||
      !country ||
      !street ||
      !city ||
      !state ||
      !postalCode ||
      !phoneNumber ||
      !secondaryPhoneNumber ||
      !email ||
      !confirmEmail ||
      !industry
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Save contact information in the database
    const newContact = await contactModel.create({
      firstName,
      middleName,
      lastName,
      country,
      street,
      city,
      state,
      postalCode,
      phoneNumber,
      secondaryPhoneNumber,
      email,
      confirmEmail,
      industry,
    });

    return res
      .status(201)
      .json({ success: true, message: "Contact saved successfully", newContact });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `${error}` });
  }
};





//create user company information 
exports.createUserCompanyInfo = async (req, res) => {
  try {
    const userId = req.user._id; // Ensure `req.user` is not undefined

    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is missing' });
    }

  

    // Create new UserCompanyInfo with orders
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





