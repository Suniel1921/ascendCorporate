
const mongoose = require('mongoose');

const guideInfoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  primaryNumber: {
    type: String,
    required: true,
  },
  secondaryNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  marketingOption: {
    type: String,
    required: true,
  },
 
},{timestamps: true});
const guideInfoModel = mongoose.model('GuideInfo', guideInfoSchema);
module.exports = guideInfoModel;
// module.exports = mongoose.model('Guide', GuideSchema);

