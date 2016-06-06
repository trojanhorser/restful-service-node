var express = require("express");
var mongoose = require('mongoose');

var mongoDB = mongoose.connect("mongodb://localhost/books"); 

var Book = require('./models/BookModel');

var app = express();

var port = process.env.port || 3000;

var bodyParser = require('body-parser');

var bookRouter = require('./Routes/bookRoutes')(Book);

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/api/books',bookRouter);
//app.use('/api/author',authors);

app.get('/', function(req,res){
   res.send('Welcome To My API'); 
});

app.listen(port, function(){
   console.log("Running On Port " + port); 
});