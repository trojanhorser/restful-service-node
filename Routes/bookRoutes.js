var express = require('express');

var bookRouter = express.Router(); 

var routes = function(Book){
    
    bookRouter.route('/')
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

bookRouter.use('/:bookId',function(req,res,next){
   Book.findById(req.params.bookId, function(err,book){
       if(err){
           res.status(500).send(err);
       }else if(book){
           req.book = book;
           next();
       }else{
           res.status(404).send('no book found');
       }
   }) 
});
bookRouter.route('/:bookId')
  .get(function(req,res){
           
      res.json(req.book);
  })
  .put(function(req,res){
    book.title = req.body.title;
    book.author = req.body.autor;
    book.genre = req.body.genre;
    book.read = req.body.read;
    
    req.book.save(function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(req.book);
        }            
    });
            
  })
  .patch(function(req,res){
      
      if(req.body._id){
          delete req.body._id;
      }
      
      for(var key in req.body){
          
          req.book[key] = req.body[key];
      }
        
      req.book.save(function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(req.book);
        }            
      });      
     
  });
return bookRouter;
};

module.exports = routes;