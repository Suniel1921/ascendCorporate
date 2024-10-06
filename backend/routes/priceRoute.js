const express = require('express');
const routes = express.Router();
const controller = require('../controller/priceController');

routes.post('/createPrice', controller.createPrice);
routes.get('/getAllPrice', controller.getAllPrice);
routes.get('/getSinglePackage/:id', controller.getSinglePackage)

module.exports = routes;
