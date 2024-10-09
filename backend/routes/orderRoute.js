
const express = require('express');
const routes = express.Router();
const controller = require('../controller/orderController');
const { requireLogin, isAdmin } = require('../middleware/authMiddleware');

routes.post('/createOrder', requireLogin, controller.createOrder);
// routes.get('/getOrders', requireLogin, controller.getOrders);
// routes.get('/yourOrder', requireLogin, controller.getYourOrders);
// routes.put('/updateOrderStatus', requireLogin, controller.updateOrderStatus);


//stripe payment route
routes.post('/create-payment-intent', controller.createPaymentIntent);



//saving user data in one modal (like cart data , contact info data)
routes.post('/save-order-details', requireLogin, controller.saveOrderDetails);
routes.get('/yourOrder', requireLogin, controller.getSingleOrder);
routes.get('/getOrders', requireLogin, controller.getAllUserOrderData);
routes.get('/order-count',requireLogin, controller.getOrderCount); 
routes.put('/updateOrderStatus', requireLogin, isAdmin, controller.updateOrderStatus);
routes.get('/totalsaleprice', requireLogin, isAdmin, controller.getTotalSales)






module.exports = routes;
