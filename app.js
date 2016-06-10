var express = require("express");
var mongoose = require('mongoose');

var mongoDB = mongoose.connect("mongodb://localhost/company"); 

var Book = require('./models/BookModel');
var Company = require('./models/CompanyModel');

var app = express();

var port = process.env.port || 3000;

var bodyParser = require('body-parser');

var bookRouter = require('./Routes/bookRoutes')(Book);
var companyRouter = require('./Routes/companyRoutes')(Company);

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/api/books',bookRouter);
app.use('/api/company',companyRouter);

app.use(express.static(__dirname + '/public'));

app.get('/public', function(req, res) {
    res.sendFile(__dirname+'/public/mntCompany.htm');
});

app.get('/public/dataDictionary.js', function(req, res) {
    res.sendFile(__dirname+'/public/dataDictionary.js');
});

app.get('/public/standardjs.js', function(req, res) {
    res.sendFile(__dirname+'/public/standardjs.js');
});

app.get('/public/standardsq.js', function(req, res) {
    res.sendFile(__dirname+'/public/standardsq.js');
});

app.get('/public/standardss.css', function(req, res) {
    res.sendFile(__dirname+'/public/standardss.css');
});

app.get('/public/startup.js', function(req, res) {
    res.sendFile(__dirname+'/public/startup.js');
});



app.get('/', function(req,res){
   res.send('Welcome To My API'); 
});

app.listen(port, function(){
   console.log("Running On Port " + port); 
});