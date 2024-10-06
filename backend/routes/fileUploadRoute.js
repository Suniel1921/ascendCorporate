const express = require('express');
const routes = express.Router();
const controller = require ('../controller/fileUploadController');
const { requireLogin, isAdmin } = require('../middleware/authMiddleware');

routes.post('/uploadDocuments', requireLogin, controller.uploadDocuments);
routes.get('/allDocuments', requireLogin, controller.getAllDocuments);



module.exports = routes;
