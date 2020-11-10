const express = require('express');
const cRoute = express.Router();
const courseController = require('../controller');

//read
cRoute.route('/course').get(courseController.readAll);
cRoute.route('/course/:id').get(courseController.readSingle);
//create
cRoute.route('/course').post(courseController.create);
//update
cRoute.route('/course/:id').patch(courseController.update);
//delete
cRoute.route('/course/:id').delete(courseController.delete);

module.exports = cRoute;
