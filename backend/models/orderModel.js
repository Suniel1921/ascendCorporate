
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAuth',
        required: true
    },
    
    items: [
        {
            _id: String,
            heading: String,
            price: Number,
            quantity: Number,
            list: [String]
        }
    ],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'verified'],
        default: 'pending'
    },

    userDocuments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Documents',
        required: true
    }



}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);






