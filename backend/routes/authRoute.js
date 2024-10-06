const express = require ('express');
const routes = express.Router();
const controller = require ('../controller/authController');
const {requireLogin, isAdmin} = require ('../middleware/authMiddleware');


routes.post('/register', controller.register);
routes.post('/login', controller.login);
routes.post('/verifyOtp', controller.verifyOTP);
routes.post('/forgotPassword', controller.forgotPassword);
routes.post('/resetPassword', controller.resetPassword);

routes.get('/protectedRoute', requireLogin, controller.protectedRoute);
routes.get('/admin', requireLogin, isAdmin, controller.admin);
routes.get('/all-users', controller.getAllUsers);


module.exports = routes