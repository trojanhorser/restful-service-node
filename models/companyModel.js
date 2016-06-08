var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companyModel = new Schema({
   number:{
      type:String    
   },
   name:{
      type:String    
   },
   address:{
      type:String    
   },
   telephone:{
      type:String    
   },
   fax:{
      type:String    
   },
   email:{
      type:String    
   },
   logo:{
      type:String    
   },
   contact:{
      type:String    
   },
   taxNumber:{
      type:String    
   },
   tccNumber:{
      type:String    
   },
   trnNumber:{
      type:String    
   }
   ,
   shortPaymentVariance:{
      type:String    
   },
   excessPaymentVariance:{
      type:String    
   },
   lastReceiptNumber:{
      type:String    
   },
   lastInvoiceNumber:{
      type:String    
   },
   lastGatePassNumber:{
      type:String    
   },
   lastCreditNoteNumber:{
      type:String    
   }
});

module.exports = mongoose.model('Company',companyModel);