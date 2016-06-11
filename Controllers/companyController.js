var companyController = function(Company){
    
    var post = function(req,res){
        var company = new Company(req.body);
        company.save();

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
           console.log(company)
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
    req.company.compcode = req.body.json.compcode;
    req.company.compname = req.body.json.compname;
    req.company.compaddr = req.body.json.compaddr;
    req.company.comptele = req.body.json.comptele;
    req.company.compfax = req.body.json.compfax;
    req.company.compemail = req.body.json.compemail;
    req.company.complogo = req.body.json.complogo;
    req.company.compcontact = req.body.compcontact;
    req.company.taxno = req.body.json.taxno;
    req.company.tccno = req.body.json.tccno;
    req.company.trnno = req.body.json.trnno;
    req.company.lrcpvariance = req.body.json.lrcpvariance;
    req.company.uprcpvariance = req.body.json.uprcpvariance;
    req.company.lrcpno = req.body.json.lrcpno;
    req.company.linvno = req.body.json.linvno;
    req.company.lgpno = req.body.json.lgpno;
    req.company.lcdnno = req.body.json.lcdnno;
   
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
      
      for(var key in req.body){
          req.company[key] = req.body[key];     
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