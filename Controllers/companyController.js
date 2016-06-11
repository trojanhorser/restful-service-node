var companyController = function(Company){
    
    var post = function(req,res){
        var company = new Company(req.body);
        company.save();
       
        //Status 201 means created
        res.status(201).send(company);
    }
    
    var get = function(req,res){
      
      var query = req.query;
      
      if(req.query.genre){
          query.genre = req.query.genre;
      }
           
      Company.find(query,function(error,companys){
          if(error){
              console.log('Error')
          }else{
               res.json(companys);        
          }
      });
  }
  
  var companyRouterMiddleWear = function(req,res,next){
      
   Company.findById(req.params.companyId, function(err,company){
       if(err){
           res.status(500).send(err);
       }else if(company){
           req.company = company;
           next();
       }else{
           res.status(404).send('no company found');
       }
   }) 
}

var getById = function(req,res){      
      res.json(req.company);
}

var update = function(req,res){
    req.company.companyNumber = req.body.companyNumber;
    req.company.name = req.body.name;
    req.company.address = req.body.address;
    req.company.telephone = req.body.telephone;
    req.company.fax = req.body.email;
    req.company.logo = req.body.contact;
     req.company.tccNumber = req.body.tccNumber;
    req.company.trnNumber = req.body.trnNumber;
    req.company.shortPaymentVariance = req.body.shortPaymentVariance;
    req.company.excessPaymentVariance = req.body.excessPaymentVariance;
    req.company.lastReceiptNumber = req.body.lastReceiptNumber;
    req.company.lastInvoiceNumber = req.body.lastInvoiceNumber;
    req.company.lastGatePassNumber = req.body.lastGatePassNumber;
    req.company.lastCreditNoteNumber = req.body.lastCreditNoteNumber;
  
    req.company.save(function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(req.company);
        }            
    });
            
  }

var patch = function(req,res){
      
      if(req.body._id){
          delete req.body._id;
      }
      
      for(var key in req.body.json){
          console.log(req.body.json[key]);
          req.company[key] = req.body.json[key];     
      }
     
      req.company.save(function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.json(req.company);
        }            
      });      
     
  }
 
var removeCompany = function(req,res){
      req.company.remove(function(err){
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
      middleWear: companyRouterMiddleWear,
      getById: getById,
      update: update,
      patch: patch,
      removeCompany: removeCompany
    }  
}

module.exports = companyController;