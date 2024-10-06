const mongoose = require('mongoose');


const fileUploadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    
    images: [{
        type: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAuth',
        required: true
    },

}, { timestamps: true });


const fileUploadModel = mongoose.model('Documents', fileUploadSchema);
module.exports = fileUploadModel;


