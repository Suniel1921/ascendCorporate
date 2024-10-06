
const mongoose = require('mongoose');


const homefileUploadSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'heading is required'],
    },
    paragraph:{
        type: String,
        required: [true, 'para is required'],
    },
    contactNumber:{
        type: String,
        required: [true, 'Contact number is required'],

    },

    images: [{
        type: String
    }]
}, { timestamps: true });


const homeModel = mongoose.model('Home', homefileUploadSchema);
module.exports = homeModel;
