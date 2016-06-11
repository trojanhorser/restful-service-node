
//****************** Set Database type
  dbasetype='sqlserver';
  //dbasetype='access';
//*********************************************************

//****************** Set program-defined system values
  sysval=new Object(); 
//*********************************************************
// Program defined system values
// System Values		Remarks
// sysval.client		Internal code for clients using the application
//                              Values: 'scaspa',
// sysval.clienttype		Type of client
//                              Values: 'agent','port'
// sysval.nogatepass            Gatepass processing not to be done
//                              Values: true, false
// sysval.autovalidatebl        Automatically validates a B/L once all charges have been billed
//                              Values: true, false    

sysval.client='MTS'; //Maritime and Transport 
sysval.clienttype='agent';
sysval.nogatepass=true;
sysval.useinvoiceinterest = false;
sysval.invoiceapprovalrequired=false; // invoiceapproval == Approval needs to be given before an invoice is activated

applicationname=window.location.pathname.split('applications/')[1]+' - '+document.title; 
windowbgcolor="#bfcfff";

documentpath='../SystemDocuments/';
      
//Connection to database 

//Connection to database 
if (runenvironment =='intranet') {
   conn = new ActiveXObject ("ADODB.Connection"); 
	if (!globaldialogparm.conn) {
		conn = new ActiveXObject ("ADODB.Connection"); 
		//conn.open ("FileDSN=w:/applications/accesspromis.dsn");    
		eval('conn.open ("FileDSN='+getPcFilePath('startup.js').split('\\').join('/')+'/accesspromis.dsn")');
		globaldialogparm.conn=conn;
	}
	else {
	   conn=globaldialogparm.conn
	}
	// Create monitoring connection definition
	monconn=new ADOConnection();

}
else {
    monconn={};
    //submitsqlodbc='advantumJFS';

} 

//If no data dictionary data, include the datadictionary js that builds the datadictionary 
var dicfield=false;
for (property in dataDic.field) {
      dicfield=true;
      break; 
}  
if (!dicfield) { 
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", 'datadictionary.js')
  if (typeof fileref!="undefined") {
     document.getElementsByTagName("head")[0].appendChild(fileref)
  }
}


reportdefaultfilepath='c:/advantumreports/';
querydefinitionpath='c:/advantumreports/'; 
queryfilepath='c:/advantumreports/'; 

getLoggingData(); 

emailsearch='CustomerEmailSearch.htm';

// SOF Related

evntcde_slt=new selectList();
evntcde_slt.sqlselect="select evntcde,evntdsc from wssfactcd order by evntdsc";
evntcde_slt.defaultvalue='';

// End SOF related 

 
port_slt=new selectList();
port_slt.sqlselect="Select iprtcd, iprtnm from wsport order by iprtnm"; 
port_slt.defaultvalue='';
      
commodity_slt=new selectList();
commodity_slt.sqlselect="select sitccd, sitcln from wscomm order by sitcln";
  
conprofile_slt=new selectList();
//conprofile_slt.sqlselect="select chgprfcde, chgprfdsc from wschgprf order by chgprfdsc";
conprofile_slt.sqlselect="select DISTINCT wschgprf.chgprfcde, chgprfdsc from wschgprf, wsprfgrpd where wschgprf.chgprfcde=wsprfgrpd.chgprfcde and chgprfgrp='CONGENPRF' order by chgprfdsc"; 
conprofile_slt.defaultvalue='';

profile_slt=new selectList();
profile_slt.sqlselect="select chgprfcde, chgprfdsc from wschgprf order by chgprfdsc";
profile_slt.defaultvalue='';

chargeitem_slt=new selectList();
//chargeitem_slt.sqlselect="select chgitem, chgdesc from wschgitm order by chgdesc";
chargeitem_slt.sqlselect="select chgitem, longdesc from wschgitm order by chgdesc";
chargeitem_slt.defaultvalue='';

company_slt=new selectList();
company_slt.sqlselect="select compcode, compname from company order by compname";
company_slt.defaultvalue='';

cargoduescharge_slt=new selectList();
cargoduescharge_slt.sqlselect="select wschgitm.chgitem,chgdesc from wschgitm,wschgprfd where wschgitm.chgitem=wschgprfd.chgitem and chgprfcde='CARGODUES' order by chgdesc";
cargoduescharge_slt.defaultvalue='';

concharge_slt=new selectList();
//concharge_slt.sqlselect="select wschgitm.chgitem, chgdesc from wsprfgrp,wschgitm where wschggrpd.chgitem=wschgitm.chgitem and chggrpcde='CONGENPRF' order by chgdesc";
concharge_slt.sqlselect="select DISTINCT wschgitm.chgitem, chgdesc from wsprfgrpd, wschgprfd, wschgitm where wsprfgrpd.chgprfcde=wschgprfd.chgprfcde and wschgprfd.chgitem=wschgitm.chgitem and chgprfgrp='CONGENPRF' order by chgdesc";
concharge_slt.defaultvalue='';

currency_slt=new selectList();
currency_slt.sqlselect="select currcode, curshrtnm from wscur order by curshrtnm";
currency_slt.defaultvalue='000';
      
line_slt=new selectList();
line_slt.defaultvalue='';
line_slt.sqlselect="select linnum,linnam from wsline order by linnam"; 

tradelane_slt=new selectList();
tradelane_slt.defaultvalue='';
tradelane_slt.sqlselect="select tradelne,tradedsc from wstrdlne order by tradedsc"; 

principal_slt=new selectList();
principal_slt.defaultvalue='';
principal_slt.sqlselect="select princode,prinname from principal order by prinname"; 
     
     
package_slt=new selectList();
package_slt.defaultvalue='';
package_slt.sqlselect="select paccde, pacdes from wspack order by pacdes"; 

wgtunit_slt=new selectList();
wgtunit_slt.defaultvalue='';
wgtunit_slt.sqlselect="select unit as unt, unit from wschgbasu where basiscde = 'WEIGHT' order by unit"; 

msrunit_slt=new selectList();
msrunit_slt.defaultvalue='';
msrunit_slt.sqlselect="select unit as unt, unit from wschgbasu where basiscde = 'MEASURE' order by unit"; 

location_slt=new selectList();
location_slt.defaultvalue='';
location_slt.sqlselect="select loccode, location from wsloc order by location"; 

chgprfgrp_slt=new selectList();
chgprfgrp_slt.defaultvalue='';
chgprfgrp_slt.sqlselect="select chgprfgrp, chgprfgrpd from wsprfgrp order by chgprfgrpd"; 

acc_select= new selectList();
acc_select.defaultvalue='@$^';
acc_select.sqlselect= "select accnum, accdesc from WSACC order by accdesc";

shiptype_slt=new selectList();
shiptype_slt.defaultvalue='';
shiptype_slt.sqlselect="select vsltyp, vsltypdes from wsvsltyp order by vsltypdes";

port_lkp=new tableDef('lookup');
port_lkp.header=['Port','Code'];
port_lkp.id=['iprtnm','iprtcd'];
port_lkp.width=[250,90];
port_lkp.returnfld=['iprtcd','iprtnm'];
port_lkp.returninto=['iprtcd','iprtnm'];
port_lkp.lookupfldlen=20;
port_lkp.sqlselect="select iprtnm,iprtcd from wsport where iprtnm like 'lookupfld%' order by iprtnm"; 

berth_slt=new selectList();
berth_slt.defaultvalue='';
berth_slt.sqlselect="select brth, brthdsc from wsberth order by brthdsc";

country_slt=new selectList(); 
country_slt.defaultvalue='';
country_slt.sqlselect="select * from wscountry order by contname";
   
ship_lkp=new tableDef('lookup');
ship_lkp.header=['Ship','Code'];
ship_lkp.width=[250,90];
ship_lkp.returnfld=['shpnum','shpnam'];
ship_lkp.returninto=['ship','shpnam'];
ship_lkp.lookupfldlen=20; 
ship_lkp.sqlselect="select shpnam, shpnum from wsship where shpnam like 'lookupfld%' order by shpnam" 
 
arrdate_lkp=new tableDef('lookup');
arrdate_lkp.header=['Arrival Date','Voyage #','Imp/Exp'];
arrdate_lkp.width=[100,60,60];
arrdate_lkp.align=['right','center'];
arrdate_lkp.returnfld=['arrdate','vgeno'];
arrdate_lkp.returninto=['arrdate','vgeno'];
arrdate_lkp.valuefunction[0]="arrdatesysdatefmt"; 
arrdate_lkp.valuefunction[2]="importExportTxt";
//arrdate_lkp.tableonclick="changeVar('arrdate', edit(numValueOf('arrdate2').chgDateFmt('Y',datefmt),0,datefmt))";
     
cnsacc_lkp=new tableDef('lookup');
cnsacc_lkp.header=['Code','Customer','Address','Address2'];
cnsacc_lkp.id=['concde','connam','conadd','conadd2'];
cnsacc_lkp.width=[40,200,200,0];
cnsacc_lkp.returnfld=['concde','connam','conadd','conadd2'];
cnsacc_lkp.returninto=['cnsacc','cnsign','cnsadd','cnsadd2'];
cnsacc_lkp.lookupfldlen=20;
cnsacc_lkp.sqlselect="select concde, connam, conadd, conadd2 from wsconsgn where connam like 'lookupfld%' order by connam";


//Howard's additions

  cont_lkp=new tableDef('lookup');
  cont_lkp.header=['Container Number','Size'];
  cont_lkp.width=[200,40];
  cont_lkp.returnfld=['connum'];
  cont_lkp.returninto=['connum'];
  cont_lkp.lookupfldlen=20;
  cont_lkp.sqlrcdcnt=300; 
  cont_lkp.sqlselect="select connum, size from wscon where connum like 'lookupfld%' order by connum" 

  agent_slt=new selectList();
  agent_slt.sqlselect="Select concde,connam from wsconsgn where custype='A' order by connam"; 
  agent_slt.defaultvalue='';

  ctype_slt=new selectList();
  ctype_slt.sqlselect="Select cnttype,cnttpdsc from wiscontp order by cnttpdsc"; 
  ctype_slt.defaultvalue='';

  csize_slt=new selectList();
  csize_slt.sqlselect="Select cntsize,cntszdsc from wsconsz order by cntszdsc"; 
  csize_slt.defaultvalue='';

  voycont_lkp=new tableDef('lookup');
  voycont_lkp.header=['Container Number'];
  voycont_lkp.width=[100];
  voycont_lkp.returnfld=['connum'];
  voycont_lkp.returninto=['connum']; 
 
  employee_slt=new selectList();
  employee_slt.defaultvalue='';
  employee_slt.sqlselect="select empid,empname from wsemployee order by empname"  
  
function getNextCompanyVal(field,companycode) {

   var where="compcode = " + companycode;
   var sqltxt='select '+field+' from company where ' +where;
   if (!sqlSelect(sqltxt,'$sys',1)) {alarm(sqlerr); return "error"};
   var updsys=new Object(); 
   eval("var nbr=numeric($sys."+field+"[0])+1"); 
   eval("updsys."+field+"=sqlNum(nbr)");  
   if (!sqlUpdate('company',updsys,where)) {alarm(sqlerr); return "error"}
   delete updsys; delete $sys;
  
   if (companycode < 10) {
     companycode = '0'+ companycode;
   }

   var type='';

   switch (field) {
     case 'lrcpno': type='1'; break;
     case 'linvno': type='2'; break;
     case 'lcdnno': type='3'; break;
     case 'lgpno':  type='4'; break;     
   }

   nbr= numeric("" +  companycode + type + '0000000'.moveRight(nbr) );

   return nbr;
}


function getNextSysVal(field) {
   var where="lldgno <> -1";
   var sqltxt='select '+field+' from wssysprm';
   if (!sqlSelect(sqltxt,'$sys',1)) {alarm(sqlerr); return "error"};
   var updsys=new Object(); 
   eval("var nbr=numeric($sys."+field+"[0])+1"); 
   eval("updsys."+field+"=sqlNum(nbr)");  
   if (!sqlUpdate('wssysprm',updsys,where)) {alarm(sqlerr); return "error"}
   delete updsys; delete $sys;

   return nbr;
}


// Get all the System values and store in global parameter object
function getAllSysVals() {
 var sqltxt='select * from wssysprm';
 if (!sqlSelect(sqltxt,'$sys',1)) {
     alarm(sqlerr+'\n\nFATAL ERROR: System parameters table access error\n\nPlease contact Port Computer Services'); 
     return false
 }
 if (sqlrcdcnt==0) {
     alarm('FATAL ERROR: System parameters not set-up\n\nPlease contact your Systems Administrator'); 
     return false;
 }

 for (var i=0; i<$$sqlcol.length; i++) {
      sysval[$$sqlcol[i]]=$sys[$$sqlcol[i]][0];
 } 
 delete $sys;
 globaldialogparm.sysval=sysval;
 globaldialogparm.companyname=sysval.cmpname;
}

if (!globaldialogparm.sysval) {
    getAllSysVals();
}
else {
    sysval=globaldialogparm.sysval;
} 

datefmt=sysval.datefmt;
timefmt=sysval.timefmt;

//Gets the System Date format
function getSysDateFmt() {
 return sysval.datefmt; 
}

//Gets the System Time format
function getSysTimeFmt() {
 return sysval.timefmt; 
}


function arrdatesysdatefmt() {
 return editDate($r.arrdate[currentsqlrow],datefmt);
}


function importExportTxt() {
 try {
    if ($r.iocode[currentsqlrow]=='E') {return 'Export'}
    else {return 'Import'}
 }
 catch(e) {return '-'}
}


function questionBox($question) {
 var left   = (screen.width  - 145)/2 ;
 var top    = (screen.height - 290)/2 ;


  dlgquest=new dialogDef();  
  dlgquest.height=145;
  dlgquest.width=290;     
  dlgquest.top=190;
  dlgquest.left=300;
 
  dlgquest.dialogparm.question=$question;

  var $answer =displayDialog('question.html',dlgquest);
  return $answer;

     var $answer=null;
     var questform='questid';
     var questhtmlspan='squestid';
     var questformdiv='divquestid';
     var questdiv=questformdiv+'d';
     var x=0;

  var questformobj=document.getElementById(questformdiv);

  if (questformobj == null) {

     var divnewform=document.createElement('div');
     divnewform.id=questformdiv;
     divnewform.className="windowtrans";
     divnewform.style.display   ="none";
     divnewform.style.height    ="144px";
     divnewform.style.width     ="290px";
     divnewform.style.background="transparent url(../image/quest.png) no-repeat 0 0;";
     var inner='<form name="'+questform+'"><br>';
     inner += '<div  style="padding-left:42px" id="'+questdiv+'"></div>';
     inner += ' <button onclick="$answer= true;">Yes</button><button onclick="$answer= false;">No</button> </form>';
     divnewform.innerHTML=inner;       
     document.getElementsByTagName('body')[0].appendChild(divnewform); 

}

   changeContent(questdiv,$question);
   displayForm(questform,50,50);
  
   closeForm();
   return $answer;
}

function getCompanyData(cpny) {
  var compobj={};
  compobj.complogo = "companylogo.jpg";
  var sqltxt="select * from company where compcode="+cpny;
  if (!sqlSelect(sqltxt,'$$comp$',1)) {alarm(sqlerr); return false}
  if (sqlrcdcnt==0) {alarm('Company data not found'); return false}
  var pr;
  for (pr in $$comp$) {
       if (pr=='rcdcnt') {continue}
	   if (pr=='complogo') {
 	       if (!isBlank($$comp$.complogo[0])) {
	           compobj.complogo=$$comp$.complogo[0];
           }
	   }
	   else {
	       compobj[pr]=$$comp$[pr][0];
	   }
  } 
  delete $$comp$;  
  return compobj;
}
