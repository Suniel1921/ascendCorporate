// const mongoose = require ('mongoose');

// const authSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     otp: { 
//         type: Number
//      },
//      isVerified:{
//         type: Boolean,
//         defaul: false
//      },
//      role : {
//         type : String,
//         default: 'user'
//     }
// },{timestamps: true})

// const userAuthModel = mongoose.model('UserAuth', authSchema);
// module.exports = userAuthModel;







const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // It's a good idea to ensure email is unique
    },
    password: {
        type: String,
        required: true,
    },
    otp: { 
        type: Number
    },
    isVerified: {
        type: Boolean,
        default: false // Fixed the typo here
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Adding enum for better validation
        default: 'user'
    }
}, { timestamps: true });

const userAuthModel = mongoose.model('UserAuth', authSchema);
module.exports = userAuthModel;
