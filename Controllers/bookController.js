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
   
  return {
      post: post,
      get: get
  }  
}

module.exports = bookController;