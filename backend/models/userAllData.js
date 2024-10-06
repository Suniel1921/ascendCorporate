// // models/UserData.js
// const mongoose = require('mongoose');

// const UserAllDataSchema = new mongoose.Schema({
//     quoteData: Object,
//     packageData: Object,
//     contactData: Object,
//     companyData: Object,
//     status: {
//       type: String,
//       enum: ['pending', 'processing', 'verified'],
//       default: 'pending'
//   },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'UserAuth',
//       required: true
//   },


//   }, { timestamps: true }); 
  

// const UserAllData = mongoose.model('UserData', UserAllDataSchema);

// module.exports = UserAllData;





const mongoose = require('mongoose');

const UserAllDataSchema = new mongoose.Schema({
  quoteData: Object,
  packageData: Object,
  contactData: Object,
  companyData: Object,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserAuth',
    required: true
},
userDocuments: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Documents',
  default: null,
},

status: { 
  type: String,
  enum: ['pending', 'processing', 'verified'],
  default: 'pending',
},


}, { timestamps: true });

const UserAllData = mongoose.model('UserData', UserAllDataSchema);

module.exports = UserAllData;
