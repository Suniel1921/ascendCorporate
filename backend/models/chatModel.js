// models/UserChat.js
const mongoose = require('mongoose');

const userChatSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  primaryPhone: { type: Number, required: true },
  secondaryPhone: { type: Number },
  contactEmail: { type: String, required: true },
  confirmEmail: { type: String, required: true },
  industry: { type: String },
  orderNumber: { type: Number },
  invoiceNumber: { type: Number },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const UserChat = mongoose.model('UserChat', userChatSchema);

module.exports = UserChat;
