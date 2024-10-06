const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  country: String,
  street: String,
  city: String,
  state: String,
  postalcode: String,
});

const contactSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  country: String,
  street: String,
  city: String,
  state: String,
  postalcode: String,
});

const beneficialOwnerSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  country: String,
  street: String,
  city: String,
  state: String,
  postalcode: String,
});

const userCompanyInfoSchema = new mongoose.Schema({
  preferredName: { type: String, required: true },
  alternateName: String,
  industry: String,
  businessDescription: String,
  address: addressSchema,
  contact: contactSchema,
  businessRun: String,
  beneficialOwners: [beneficialOwnerSchema],
  importantNotice: { type: Boolean, required: true },
  shippingAddress: addressSchema,
  llcDuration: String,
  incorporator: contactSchema,
  businessEmail: { type: String, required: true },
  businessPhone: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserAuth',
    required: true,
  },

  
});

module.exports = mongoose.model('UserCompanyInfo', userCompanyInfoSchema);
