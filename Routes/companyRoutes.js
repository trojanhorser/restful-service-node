var express = require('express');

var companyRouter = express.Router(); 


var routes = function(Company){

var companyController = require('../Controllers/companyController')(Company);

companyRouter.route('/')
  .post(companyController.post)
  .get(companyController.get);

companyRouter.route('/bubblesort')
  .get(companyController.bubbleSort);


companyRouter.use('/:companyId',companyController.middleWear);

companyRouter.route('/:companyId')
  .get(companyController.getById)
  .put(companyController.update)
  .patch(companyController.patch)
  .delete(companyController.removeCompany);


return companyRouter;

};



module.exports = routes;