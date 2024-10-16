const mongoose = require ('mongoose');
const contactSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true,
    },
    middleName : {
        type: String,
        required: false,
    },
    lastName : {
        type: String,
        required: true,
    },
    country : {
        type: String,
        required: true,
    },
    street : {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    state : {
        type: String,
        required: true,
    },
    
    postalCode: {
        type: Number,
        required: true,
    },
    phoneNumber : {
        type: Number,
        required: true,
    },
    secondaryPhoneNumber : {
        type: String,
        required: false,
    },
    email : {
        type: String,
        required: true,
    },
    confirmEmail : {
        type: String,
        required: true,
    },
    industry : {
        type: String,
        required: false,
    },
})

const contactModel = mongoose.model('Contact', contactSchema);
module.exports = contactModel;