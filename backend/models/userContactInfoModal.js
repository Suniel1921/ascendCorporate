// models/ContactInfo.js
const mongoose = require('mongoose');

const ContactInfoSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  secondaryPhoneNumber: { type: String },
  email: { type: String, required: true, unique: true },
  confirmEmail: { type: String, required: true },
}, { timestamps: true });

const ContactInfoModel = mongoose.model('ContactInfo', ContactInfoSchema);

module.exports = ContactInfoModel;
