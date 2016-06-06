var express = require('express');

var bookRouter = express.Router(); 


var routes = function(Book){

var bookController = require('../Controllers/bookController')(Book);

bookRouter.route('/')
  .post(bookController.post)
  .get(bookController.get);

bookRouter.use('/:bookId',bookController.middleWear);

bookRouter.route('/:bookId')
  .get(bookController.getById)
  .put(bookController.update)
  .patch(bookController.patch)
  .delete(bookController.removeBook);
return bookRouter;
};

module.exports = routes;