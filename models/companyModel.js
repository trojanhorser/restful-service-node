var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companyModel = new Schema({
   compcode:{
      type:String    
   },
   compname:{
      type:String    
   },
   compaddr:{
      type:String    
   },
   comptele:{
      type:String    
   },
   compfax:{
      type:String    
   },
   compemail:{
      type:String    
   },
   complogo:{
      type:String    
   },
   compcontact:{
      type:String    
   },
   taxno:{
      type:String    
   },
   tccno:{
      type:String    
   },
   trnno:{
      type:String    
   }
   ,
   lrcpvariance:{
      type:String    
   },
   uprcpvariance:{
      type:String    
   },
   lrcpno:{
      type:String    
   },
   linvno:{
      type:String    
   },
   lgpno:{
      type:String    
   },
   lcdnno:{
      type:String    
   }
});

module.exports = mongoose.model('Company',companyModel);