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

var bubbleSort = function(){
    
    for (var a=[],i=0;i < 200000;++i) a[i]=i;

        function shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
        }

        a = shuffle(a); 
        
        function bubbleSort(a)
        {
            var swapped;
            do {
                swapped = false;
                for (var i=0; i < a.length-1; i++) {
                    if (a[i] > a[i+1]) {
                        var temp = a[i];
                        a[i] = a[i+1];
                        a[i+1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }

        console.log("Start: " + new Date().toLocaleTimeString('en-US', { hour12: false, 
                                                    hour: "numeric",                                                     minute: "numeric"}))
        bubbleSort(a);

        console.log("End: " + new Date().toLocaleTimeString('en-US', { hour12: false, 
                                                    hour: "numeric", 
                                                    minute: "numeric"}))   
}
   
  return {
      post: post,
      get: get,
      middleWear: bookRouterMiddleWear,
      getById: getById,
      update: update,
      patch: patch,
      removeBook: removeBook,
      bubbleSort: bubbleSort
    }  
}

module.exports = bookController;