var express = require("express")

var app = express();

var port = process.env.port || 3000;
    
app.get('/', function(req,res){
   res.send('Welcome To My API'); 
});

app.listen(port, function(){
   console.log("Running On Port " + port); 
});