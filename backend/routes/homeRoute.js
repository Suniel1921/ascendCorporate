const express = require('express');
const routes = express.Router();
const controller = require ('../controller/homeController');


routes.post('/createHome', controller.uploadHomeData);
routes.get('/getHome', controller.getHomeData);

module.exports = routes;
