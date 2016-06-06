var express = require('express');

var bookRouter = express.Router(); 

var routes = function(Book){
    
    bookRouter.route('/Books')
  .post(function(req,res){
    var book = new Book(req.body);
    book.save();
    console.log(book);
   //Status 201 means created
    res.status(201).send(book);
  })
  .get(function(req,res){
      
      var query = req.query;
      
      if(req.query.genre){
          query.genre = req.query.genre;
      }
           
      Book.find(query,function(error,books){
          if(error){
              console.log('Error')
          }else{
               res.json(books);        
          }
      })
  });

bookRouter.route('/Books/:bookId')
  .get(function(req,res){
           
      Book.findById(req.params.bookId, function(error,book){
          if(error){
              console.log(error);
          }else{
               res.json(book);        
          }
      })
  });
return bookRouter;
};

module.exports = routes;