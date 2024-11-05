const express = require ('express');
const routes = express.Router();
const controller = require ('../controller/contactController');
const { requireLogin, isAdmin } = require('../middleware/authMiddleware');

routes.post('/contacts', controller.saveContactForm);
routes.get('/userNewOrderContact', requireLogin, controller.getAllUserOderContact);
routes.post('/userCompanyInfo', requireLogin, controller.createUserCompanyInfo);
routes.get('/getAllCompanyInfo', requireLogin, controller.getAllCompanyInfo);
routes.post('/userContactInfo', controller.userContactinfoController)


module.exports = routes;
