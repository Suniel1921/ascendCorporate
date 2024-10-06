const express = require('express');
const routes = express.Router();
const controller = require ('../controller/guideInfoController');


routes.post('/guide-info', controller.submitGuideForm);


module.exports = routes;
