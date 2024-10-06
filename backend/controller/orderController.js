const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
    try {
        const { items, total, status } = req.body;
        const newOrder = new orderModel({
            user: req.user._id,
            items,
            total,
            status: status || 'pending'
        });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().populate('user', 'name');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order status updated', order });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getYourOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orderInfo = await orderModel.find({ user: userId }).populate({ path: 'user', select: '-password' });
        res.status(200).json({ success: true, message: 'Order information retrieved successfully', orderInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// get the count of orders for the current user
exports.getOrderCount = async (req, res) => {
    try {
        const userId = req.user._id;
        const orderCount = await orderModel.countDocuments({ user: userId });
        res.status(200).json({ success: true, orderCount });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    } 
};















//payment integration

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 


exports.createPaymentIntent = async (req, res) => {
    const { amount } = req.body;

    // Ensure amount is in the smallest currency unit (e.g., cents for USD)
    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    try {
        // Create a PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount, // Amount should be in the smallest currency unit
            currency: 'usd',
        });

        // Send the client secret to the client
        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        // Handle errors
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: error.message });
    }
};












// *********************new way order *****************



// controllers/userDataController.js


const UserAllData = require("../models/userAllData");


exports.saveOrderDetails = async (req, res) => {
    try {
        console.log('Request user:', req.user);

        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const { cartData, contactInfo, paymentIntentId, status } = req.body;

        console.log('Received Data:', req.body);

        if (!cartData || !contactInfo || !paymentIntentId) {
            return res.status(400).json({ message: 'Missing required data' });
        }

        const newOrder = new UserAllData({
            quoteData: cartData,
            contactData: contactInfo,
            packageData: { paymentIntentId },
            user: req.user._id,
            status: status || 'pending',
        });

        const savedOrder = await newOrder.save();

        res.status(200).json({ message: 'Order details saved successfully', order: savedOrder });
    } catch (error) {
        console.error('Error saving order details:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};




//get single user
exports.getSingleOrder = async (req, res) => {
    const userId = req.user._id;
    try {
        const orders = await UserAllData.find({ user: userId }).populate('user', 'name');
        res.status(200).json({ success: true, orderInfo: orders });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};





//get all user data
  exports.getAllUserOrderData = async (req, res) => {
    try {
        const userId = req.user._id;
        const orderInfo = await UserAllData.find({ user: userId }).populate({ path: 'user', select: '-password' });
        res.status(200).json({ success: true, message: 'Order information retrieved successfully', orderInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};




// update user data status

exports.updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
        return res.status(400).json({ message: 'OrderId and status are required' });
    }

    try {
        const order = await UserAllData.findByIdAndUpdate(orderId, { status }, { new: true });

        if (!order) {
            return res.status(404).json({ sucess: false, message: 'Order not found' });
        }

        res.status(200).json({ success: true, message: 'Order status updated', order });
    } catch (err) {
        console.error('Error updating order status:', err);
        res.status(500).json({sucess: false, message: 'Internal server error', error: err.message });
    }
};







