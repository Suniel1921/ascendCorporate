
const express = require('express');
const routes = express.Router();
const controller = require('../controller/orderController');
const { requireLogin, isAdmin } = require('../middleware/authMiddleware');

routes.post('/createOrder', requireLogin, controller.createOrder);
// routes.get('/getOrders', requireLogin, controller.getOrders);
// routes.get('/yourOrder', requireLogin, controller.getYourOrders);
// routes.put('/updateOrderStatus', requireLogin, controller.updateOrderStatus);
routes.get('/order-count',requireLogin, controller.getOrderCount); 


//stripe payment route
routes.post('/create-payment-intent', controller.createPaymentIntent);



//saving user data in one modal (like cart data , contact info data)
routes.post('/save-order-details', requireLogin, controller.saveOrderDetails);
routes.get('/yourOrder', requireLogin, controller.getSingleOrder);
routes.get('/getOrders', requireLogin, controller.getAllUserOrderData);
routes.put('/updateOrderStatus', requireLogin, controller.updateOrderStatus);





module.exports = routes;
