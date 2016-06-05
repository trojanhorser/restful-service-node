var express = require("express");
var mongoose = require('mongoose');

var mongoDB = mongoose.connect("mongodb://localhost/bookAPI"); 

var Book = require('./models/BookModel');

var app = express();

var port = process.env.port || 3000;
 
var bookRouter = express.Router();

bookRouter.route('/Books')
  .get(function(req,res){
      
      Book.find(function(error,books){
          if(error){
              console.log('Error')
          }else{
               res.json(books);        
          }
      })
  });

app.use('/api',bookRouter);

app.get('/', function(req,res){
   res.send('Welcome To My API'); 
});

app.listen(port, function(){
   console.log("Running On Port " + port); 
});