var bookController = function(Book){
    
    var post = function(req,res){
        var book = new Book(req.body);
        book.save();
       
        //Status 201 means created
        res.status(201).send(book);
    }
    
    var get = function(req,res){
      
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
      });
  }
  
  var bookRouterMiddleWear = function(req,res,next){
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
}

var getById = function(req,res){      
      res.json(req.book);
}

var update = function(req,res){
    req.book.title = req.body.title;
    req.book.author = req.body.autor;
    req.book.genre = req.body.genre;
    req.book.read = req.body.read;
    
    req.book.save(function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(req.book);
        }            
    });
            
  }

var patch = function(req,res){
      
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
     
  }
 
var removeBook = function(req,res){
      req.book.remove(function(err){
          if(err){
              res.status(500).send(err);
          }else{
              res.status(204).send('Removed');
          }
      });
  }


   
  return {
      post: post,
      get: get,
      middleWear: bookRouterMiddleWear,
      getById: getById,
      update: update,
      patch: patch,
      removeBook: removeBook
    }  
}

module.exports = bookController;