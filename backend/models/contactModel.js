



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  primaryPhone: {
    type: String,
    required: true,
  },
  secondaryPhone: {
    type: String,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  confirmEmail: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
  },
  orderNumber: {
    type: String,
  },
  invoiceNumber: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  captcha: {
    type: Number,
    required: true,
  },

},{timestamps: true});


const contactModal = mongoose.model('newOrderData', contactSchema);
module.exports = contactModal;
