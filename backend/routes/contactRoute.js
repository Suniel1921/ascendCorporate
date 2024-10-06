const express = require ('express');
const routes = express.Router();
const controller = require ('../controller/contactController');
const { requireLogin } = require('../middleware/authMiddleware');

routes.post('/contacts', controller.contact);
routes.post('/userCompanyInfo', requireLogin, controller.createUserCompanyInfo);
routes.get('/getAllCompanyInfo', requireLogin, controller.getAllCompanyInfo);
routes.post('/userChat', controller.saveUserChatData)


module.exports = routes;
