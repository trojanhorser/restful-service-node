// Basic Program Initialization
//* has the comments related to frames for a window
//var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
notabs_$reconstruct='';
if (typeof  productionmode == 'undefined') {
    productionmode=false;
}

var dataLog=new Object();
var dataDic=new Object();
dataDic.field=new Object();
dataDic.table=new Object();
var dialogparm=new Object();
var globaldialogparm=new Object(); 
var allowadd=true;
var allowchange=true;
var allowdelete=true;
var username='';
currenttab='';
previoustab='';
hta_related=false;
setoffalert=false; //true, always;
isiniframe = window.frameElement && window.frameElement.nodeName == "IFRAME";

if (window.dialogArguments) {
   if (!window.dialogArguments.allowadd) allowadd=false;
   if (!window.dialogArguments.allowchange) allowchange=false;
   if (!window.dialogArguments.allowdelete) allowdelete=false;
   if (window.dialogArguments.username) username=window.dialogArguments.username;
   if (window.dialogArguments.globaldialogparm) globaldialogparm=window.dialogArguments.globaldialogparm;
   if (window.dialogArguments.dialogparm) dialogparm=window.dialogArguments.dialogparm;
   if (window.dialogArguments.dataLog) dataLog=window.dialogArguments.dataLog;
   if (window.dialogArguments.dataDic) dataDic=window.dialogArguments.dataDic;
   if (window.dialogArguments.productionmode) productionmode=window.dialogArguments.productionmode;
} 
else {
   var passedparms=parent.document.getElementsByTagName('iframeparm')[0];
   if (passedparms) {
       if (!passedparms.allowadd) allowadd=false;
       if (!passedparms.allowchange) allowchange=false;
       if (!passedparms.allowdelete) allowdelete=false;
       if (passedparms.username) username=passedparms.username;
       if (passedparms.globaldialogparm) {
          if (passedparms.globaldialogparm.passglobalparms==true) {
              globaldialogparm=passedparms.globaldialogparm;
          }
       }
       if (passedparms.dialogparm) dialogparm=passedparms.dialogparm;
       if (passedparms.dataLog) dataLog=passedparms.dataLog;
       if (passedparms.dataDic) dataDic=passedparms.dataDic;
	   if (passedparms.productionmode) productionmode=passedparms.productionmode;
   }
   else {
      try {
		  passedparms=window.opener.document.getElementsByTagName('windowparm')[0];
		  if (passedparms) {
		       if (!passedparms.allowadd) allowadd=false;
			   if (!passedparms.allowchange) allowchange=false;
			   if (!passedparms.allowdelete) allowdelete=false;
			   if (passedparms.username) username=passedparms.username;
			   if (passedparms.globaldialogparm) {
				  if (passedparms.globaldialogparm.passglobalparms==true) {
					  globaldialogparm=passedparms.globaldialogparm;
				  }
			   }
			   if (passedparms.dialogparm) dialogparm=passedparms.dialogparm;
			   if (passedparms.dataLog) dataLog=passedparms.dataLog;
			   if (passedparms.dataDic) dataDic=passedparms.dataDic;
			   if (passedparms.productionmode) productionmode=passedparms.productionmode;
		   }
	   } catch(e) {}
   }   
}


var caller=window.location.href.split('.');
calltype=caller[caller.length-1].toLowerCase();
if (calltype=='hta') {
    globaldialogparm.hta_related=true;
}
if (globaldialogparm.hta_related) {hta_related=true}

if (typeof initialprogram=='undefined') {
    initialprogram=false;
}

allowprogramrun=true;

if (productionmode && calltype != 'hta') {
	if (username == '' && !initialprogram) {
	    allowprogramrun=false;
	}
	else {
	   	if (initialprogram && !isiniframe) {
		    allowprogramrun=false;
		}
	}
    if (!allowprogramrun) {
	   document.getElementsByTagName('body')[0].innerhtml='';
	   alarm('Program execution terminated...Possible security breach');
  	   window.close(); 
	}    
}

//var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
//var xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
xmlHttp='';
try {xmlHttp=new XMLHttpRequest()} catch (e) {}
if (!xmlHttp) {
    try {xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {}
}
if (!xmlHttp) {
   try {xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {}
}
//xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
var CGIresponse="";
var CGImsgsplit='|';
var CGIdatasplit='�';
var CGIrtnprefix="";
var CGIrtnerror="";
var CGIrtnfocus="";
var CGIrtnmsg="";
var CGIrtndata="";
var CGIwaitonreturn=false;
var CGIlockscreen=true;
var urlparm={};
var inlurlstring=document.URL;
var path="";
var inpath="";
var inurlparm="";
var inonreturncall="";
var indirective="";
var rows="";
var headrows="";
var col="";
var headcol="";
var oddrowcolor="#effbff";
var evenrowcolor="#f2f2ff";
var clickedtable="";
var dialogrtnval="";
var clickedrow;
//var opopup = window.createPopup();
var focusform='';
var currentrow=-1;
var currenttable="";
var tablenames=["","","","","","","","","","","","","","","","","","","",""];
var tabrows=["","","","","","","","","","","","","","","","","","","",""];
var tabheadrows=["","","","","","","","","","","","","","","","","","","",""];
//var tabrowsslt=["","","","",""];
var tablecursor=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var tabrowclicked= new Object();
var tabindex="";
var eof=true;
var optmenu="";
var optobj="";
var CGIreturncall="";
var keylist="";
var DIRective="";
var refobjtable="";
var zidx=100;
var wincount=0;
var popcount=0;
var winform=["","","","","","","","","","","","","","","","","","","",""]
var popform=["","","","","","","","","","","","","","","","","","","",""]
var pophow=["","","","","","","","","","","","","","","","","","","",""]
var ypos=0;
var xpos=0;
var popupY=0;
var popupX=0;
var isuserpop=false;
var lastimportpath="";
//var rowselectcolor="#CCCFFF"
var rowselectcolor="#f7df95" 
var lasttrobj="";
var loadingmessage="<img style='width:14px' src='../image/waiting.gif'> processing..."
var checkedrowtable="";
var checkedrowoptfld="";
var ispop=false;
var submit$tring="";
var rtnfldstring="";
var lookupidx=-1;
var lookuppath=["","","","","","","","","","","","","","","","","","","",""];
var lookupparms=["","","","","","","","","","","","","","","","","","","",""];
var lookupHTML=["","","","","","","","","","","","","","","","","","","",""];
var lookupcount=-1;
var hideedit=false;
var importtype='*window';
var divsrc='divsource';
var suggestfld='';
var suggestdiv=false;
//var processerror=false;
var loadfrmtps='no';
var dialognbr=0;
var dialogidarray=new Array();
var currenttabobj;
var applicationname=window.location.pathname;
var datefmt='d';
var timefmt='a';
targetclicked={}
targetpressed={}
eventkeycode='';
browsertype='ie';
if (navigator.userAgent.indexOf("Firefox") != "-1") {browsertype='ff'}
else {
     if (navigator.userAgent.indexOf("Safari") != "-1") {
         browsertype='sf';
     } 
}
if (browsertype=='ie') {
    ie_version = 10;
	//Detect IE 9 or lower
	var ua = navigator.userAgent;
	var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	if (re.exec(ua) != null) { ie_version = parseFloat( RegExp.$1 );}

}
//  --- Some default button settings --
//var buttonareacolor=['#54CADD:#125080','#125080:#4881B5'];
//var buttonareapercent=[50,50];
//var buttonborder='1px solid #072933'; 
var buttonareacolor=['#A6DDF2:#558EC3','#558EC3:#4A78A9','#4A78A9:#558EC3','#558EC3:#A6DDF2'];
var buttonareapercent=[30,20,30,20];     
var buttonborder='1px solid #2D4F7D'; 

if (browsertype=='sf') {
 buttonareacolor=['#558EC3:#A6DDF2','#558EC3:#4A78A9','#A6DDF2:#558EC3'];
 buttonareapercent=[30,40,30];
} 

var domove=false;
//var x,y;
var fobj;
var mobj;
var windowbgcolor='#bfcfff';
var windowbgfade='50';
var snduniquerowname=false;
//* var mfobj;
var popupid='';
var allowpopup=false;
var $cal$day;
var $cal$mth;
var $cal$yer;
var popcalfmt='';
var popcalcode='';
var newrowpos=-9;
var undoclickrow=false; 
var sortorder='ascend';
var fu$$width=0;
returnobject={};
returnValue='';
$serverbin='c:/advantumbin/';
$userreports='c:/advantumreports/';

calledfromphp=false;
if (typeof htaapp=='object' && typeof htaapp.commandLine=='string') {
    if (htaapp.commandLine.split("_fromPHP").length>1) {
	  calledfromphp=true;
   }
}

function alarm(txt) {
  if (setoffalert==false) {
      alert(txt);
  }
  else {
      returnobj.msg=txt;
	  if (setoffalert==true) {
          setoffalert=false;
	  }
  }
}

eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.1=\'2\';',3,3,'globaldialogparm|accesscode|nopass'.split('|'),0,{}))

if (!globaldialogparm.sessionid) {
    sessionid=(Math.floor(Math.random() * (99999999 - 1)) + 1);
    globaldialogparm.sessionid=sessionid;
}
else {
    sessionid=globaldialogparm.sessionid
}   

if (!globaldialogparm.environment) {
    if (window.location.href.split(':')[0]=='file') {
        globaldialogparm.environment='intranet';
    }
    else {
        globaldialogparm.environment='internet';
    }
}

runenvironment=globaldialogparm.environment;

document.onmousedown=mouseDown
document.onmouseup=mouseUp;
document.onmousemove=moveMouse;
document.onclick=onClick;
document.onkeypress=onKeyPress;
document.onkeydown=onKeyDown;

window.onerror = doError;

/*
function docClick(e) {
  if (!window.event) {targetclicked=e.target}
  else {targetclicked = event.srcElement}
  onClick(e);
}
*/
//-------- Start Prototype Section ------------------------
String.prototype.trim = function() {
  //return this.replace(/^\s+|\s+$/g, "");
  var str = this.replace(/^\s\s*/, ''), ws = /\s/, i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
};

String.prototype.triml = function() {
 var r=/\s*((\S+\s*)*)/;
 return this.replace(r,"$1");
};

String.prototype.trimr = function() {
 var r=/((\s*\S+)*)\s*/;
 return this.replace(r,"$1");
};

String.prototype.sst = function(start,length) {
  return this.substring(start-1,start-1+length); 
}

String.prototype.strip = function(str) {
  var strarr=this.split(str);
  var txt=strarr.join(''); 
  for (var i=1; i<arguments.length; i++) {
      strarr=txt.split(arguments[i]);
      txt=strarr.join('');

  }
  return txt; 
}

String.prototype.moveRight = function(string) {
 var olen=this.length;
 string=''+string;
 var len=string.length;
 var dif=olen-len; 
 if (dif>=0) { 
     return this.substr(0,dif)+string;
 }
 else {
     dif=dif*-1;
     return string.substr(dif,olen);
 }
}

String.prototype.moveLeft = function(string) {
 var olen=this.length;
 string=''+string;
 var len=string.length;
 var dif=olen-len; 
 if (dif>=0) { 
     return string+this.substr(len,dif);
 }
 else {
     return string.substr(0,olen);
 }
}

String.prototype.toCamelCase = function() {
  var i, l;
  str=this.trim().split(' '); 
  for (i=0; i<str.length; i++) {
       l=str[i].length; 
       if (l==1) {str[i]=str[i].toUpperCase();}
       else {
          str[i]=str[i].sst(1,1).toUpperCase()+str[i].sst(2,(l-1)).toLowerCase();
       }
  }
  return str.join(' ');  
}

Number.prototype.chgDateFmt = function(ffmt,tfmt) {
  ffmt=ffmt.toUpperCase();
  if (!tfmt) {
     var tfmt='Y';
  }
  else {tfmt=tfmt.toUpperCase();}
  if (ffmt==tfmt) {return this;}
  var fmdate=this;
  var todate=''; 
  if (numeric(this)==0) return this;
  var now=convertToISODate(fmdate,ffmt); 
  var year=now.getFullYear(); 
  var month=now.getMonth()+1;
  var day=now.getDate(); 
  if (month <= '9') month='0'+month; 
  if (day <= '9') day='0'+day; 
  if (tfmt=='Y') {
     todate=''+year+month+day;  
  }
  if (tfmt=='D') {
     todate=''+day+month+year;
  }
  if (tfmt=='M') {
     todate=''+month+day+year;
  } 
  //return numeric(todate);
  return todate; 
}

//-------- End Prototype Section ------------------------

function encrypt(str){
  var hash = 0;
  var ii;
  if (str.length == 0) return hash;
  for (ii = 0; ii < str.length; ii++) {
       char = str.charCodeAt(ii);
       hash = ((hash<<5)-hash)+char;
       hash = hash & hash; // Convert to 32bit integer8.    
  }
  return ''+hash;
}

function validName(string) {
 try {
      eval("var "+string+"={}");
 }
 catch(e) {return false}
 return true; 
}

function isAlphaNumeric(str) {
  var code, i, len;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};


function doError(msg,url,ln) {
  try {
	  if (!calledfromphp) {
		 return false;
	  }
	  else {
		returnobject.msg=msg;
		return true;
	  }
 } catch(e) {return false}  
}


function topIt() {
  try {
   header.style.top=document.body.scrollTop+'px';
   header.style.left=document.body.scrollLeft+'px';
   optionarea.style.top=document.body.scrollTop+'px';
   optionarea.style.left=document.body.scrollLeft+'px';
   footer.style.left=document.body.scrollLeft+'px';
   db_c_h=document.body.clientHeight;
   if (browsertype !='Kie') {db_c_h += 18}
   footer.style.top=(document.body.scrollTop+db_c_h-20)+'px';
   optionarea2.style.top=document.body.scrollTop+'px';
   optionarea2.style.right=document.body.scrollRight+'px';
  } catch (e) {}

  try {
   divcover.style.top=document.body.scrollTop+'px';
   divcover.style.left=document.body.scrollLeft+'px';
  } catch (e2) {}

  try {
   cover.style.top=document.body.scrollTop+'px';
   cover.style.left=document.body.scrollLeft+'px';
  } catch (e3) {}
}


function topIt2() {
  try {
   pagebottomleft.style.height=(document.body.clientHeight-pageheader.offsetHeight)+'px';
   pagebottomleft.style.top=pageheader.offsetHeight+'px';
   pagebottomright.style.top=pageheader.offsetHeight+'px';
   pagebottomright.style.left=pagebottomleft.offsetWidth+'px';
   pagebottomright.style.width=(document.body.clientWidth-pagebottomleft.offsetWidth)+'px';
   pagebottomright.style.height=(document.body.clientHeight-pageheader.offsetHeight)+'px';
 } catch (e) {}
}

function topIt22() {
  try {
   /*pagebottomleft.style.height=(document.body.clientHeight-pageheader.offsetHeight)+'px';*/
   pagebottomleft.style.top=pageheader.offsetHeight+'px';
   pagebottomright.style.top=pageheader.offsetHeight+'px';
   pagebottomright.style.left=pagebottomleft.offsetWidth+'px';
   pagebottomleft.style.height='100%';
       db_c_w =document.body.clientWidth; 
	   if (browsertype !='Kie') {db_c_w += 18}
 /*
       db_c_h =document.body.clientHeight;
	   if (browsertype !='ie') {db_c_h += 18}
*/
   pagebottomright.style.width=(db_c_w-pagebottomleft.offsetWidth)+'px';
 /*  pagebottomright.style.height=(db_c_h-pageheader.offsetHeight)+'px'; */
   pagebottomright.style.height='100%';
 } catch (e) {}
}

function mouseDown(e) {
 if (!window.event) {targetclicked=e.target}
 else {targetclicked = event.srcElement}
 try {
      //var extformobj=document.getElementById('divextform');
      //if (extformobj==null) {
      //    var divextform=document.createElement('div');
      //    divextform.id="divextform";
      //    divextform.className="importWindow";
      //    divextform.style.display="none";
      //    divextform.innerHTML='<form name="extform" onSubmit="return false"> <div id="extformdata"></div></form>'
      //    document.getElementsByTagName('body')[0].appendChild(divextform);
      //}

      getForm(e);

  } catch (e) {};

}


function moveMouse(e) {
 
 if (!domove) {return}

 var newx='';
 var newy='';
 if (!window.event) {
     newx=$tx + e.clientX-$mvx;
     newy=$ty + e.clientY-$mvy;
 }
 else {
     newx=$tx + event.clientX-$mvx;
     newy=$ty + event.clientY-$mvy;
 }
 try {
      if (newx<0) newx=0;
      if (newy<0) newy=0;
 } catch (e) {};

 var xxdif=newx-numeric(mobj.style.left);
 var yydif=newy-numeric(mobj.style.top);
 mobj.style.left = newx+'px';
 mobj.style.top  = newy+'px';

 return false;

}


function selectMouse(e) {
  var moveit=false;
  var fobj;
  if (!window.event) {fobj=e.target}
  else {fobj = event.srcElement}
  var uclass;

  if (fobj.id=='cover' || fobj.id=='divcover') return;

  while (fobj.tagName != 'BODY') {
         uclass=fobj.className.toUpperCase(); 
         if (uclass=="MOVEIT" || uclass=="TITLEBAR" || uclass=="TITLEBARI") moveit=true;
         if (uclass.search("WINDOW")!=-1) break;
         fobj = fobj.parentNode;
  }

  if (moveit==false) {
      if (!window.event) {fobj=e.target}
      else {fobj = event.srcElement}
  }
  if (fobj.className.toUpperCase().search("WINDOW")!=-1) {
      moveit=true;
  } 
  if (attributeValue(fobj,'nomove') != undefined) {moveit=false}  

  if (moveit) {
      mobj = fobj;
      $tx = parseInt(mobj.style.left+0,10);
      $ty = parseInt(mobj.style.top+0,10);
      domove = true;
      if (window.event) {
          $mvx =  event.clientX;
          $mvy =  event.clientY;
      }
      else {
          $mvx =  e.clientX;
          $mvy =  e.clientY;
      }
      mobj.style.cursor='move';
      return false;
  }
}


function mouseUp() {

try {up$Pos()} catch(e) {}
if (popcount != 0 && ispop==false) {
    for (var j=1; j<=popcount; j++) {
      if (pophow[j]=='') {
         document.getElementById(popform[j]).style.display='none';
      }  else howClosePopUps(popform[j],pophow[j]);
    }
    popcount=0;
 }
 ispop=false;

try {optmenu.style.display = "none";} catch (e){};

 if (domove==true){
  mobj.style.cursor='';
  domove=false;
 }
}


function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

function getCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
var i = 0;
while (i < clen) {
  var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
        return getCookieVal (j);
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break;
    }
    return null;
  }

function setCookie (name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) +
      ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
}

function deleteCookie (name) {
  var exp = new Date();
  exp.setTime (exp.getTime() - 1);  // This cookie is history
  var cval = GetCookie (name);
  document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}

//function numOrdA(a, b){ return (a-b); }
function numOrdD(a, b){ return (b-a); }

//function charOrdA(a, b){
//a = a.toLowerCase(); b = b.toLowerCase();
//if (a>b) return 1;
//if (a <b) return -1;
//return 0;
//}

function charOrdD(a, b) {
 a = a.toLowerCase(); b = b.toLowerCase();
 if (a<b) return 1;
 if (a >b) return -1;
 return 0;
}


function startDebug() {
   processerror=true;
   try {createdbghtml();} catch(e) {}
}


function onKeyDown(e) {
  eventkeycode = getKeyCode(e); 
}

function onKeyPress (e) {
  if (isuserpop) {closePopUps()}
  if (wincount!=0) {
      getForm(e);
      if (winform[wincount] != focusform) {focusform=winform[wincount]; return false;}
  }
  //eventkeycode = getKeyCode(e); 
  if (eventkeycode == 13) {
      var obj;
      if (!window.event) {obj=e.target}
      else {obj=event.srcElement}
	  targetpressed=obj;
      if (obj.tagName !='TEXTAREA') {return false;}
  }
  eventkeycode='';
}

function windowDef() {

  this.height=''
  this.width='';
  this.center="yes";
  this.dialoghide="no";
  this.edge="raised"; //or sunken
  this.resizable="on";
  this.scroll="yes";
  this.status="no";
  this.help="no";
  this.unadorded="yes";
  this.dialogparm=new Object();
  this.passglobalparms=true;
  this.iframe=''; // The name (not id) of the iFrame to display the url
  this.newtab=false;
  this.onexit='';

}



function displayWindow(exturl,dobj) {
  if (!dobj) {
     var dobj=new windowDef();
  } 
  var parms=document.getElementById('windowparmid');
  if (!parms) {
      parms=document.createElement('windowparm');
      parms.id='windowparmid';
      document.getElementsByTagName('body')[0].appendChild(parms);
  }
  var wheight=numeric(dobj.height);
  if (wheight==0) {wheight=(document.body.clientHeight-70)+'px'}
  else (wheight=wheight+'px')
  var wwidth=numeric(dobj.width);
  if (wwidth==0) {wwidth=(document.body.clientWidth-100)+'px'}
  else (wwidth=wwidth+'px')
  
  parms.style.display='';
  parms.dialogparm=dobj.dialogparm; 
  parms.allowadd=allowadd; 
  parms.allowdelete=allowdelete;
  parms.allowchange=allowchange; 
  parms.productionmode=productionmode; 
  //if (dobj.passglobalparms) {
  parms.globaldialogparm=globaldialogparm;
  parms.globaldialogparm.passglobalparms=dobj.passglobalparms;
  //}
  parms.dataLog=dataLog;
  parms.dataDic=dataDic;  
  parms.username=username;
  parms.exturl=exturl;
  
  var boxfeatures='';
  if (!dobj.newtab) {
      boxfeatures='scrollbars=yes,location=no,left=20,top=20,width='+wwidth+',height='+wheight+',toolbar=1,resizable=0';
  }
  
  var winname=(Math.floor(Math.random() * (9999999 - 1)) + 1);
  returnValue='';
  if (!dobj.iframe) {var openwin=window.open('displayWindow.htm',winname,boxfeatures)}
  else {
	var openwin=window.open('displayWindow.htm',dobj.iframe,boxfeatures);
  }
  openwin.onexit=dobj.onexit;
} 

function closeOpenWindow(openwindow) {
  returnValue=openwindow.returnValue; 
  eval(openwindow.onexit);
}

function closeThisWindow() {
   parent.window.returnValue=returnValue;
   parent.window.close();
   parent.opener.closeOpenWindow(parent.window);
}

function dialogDef() {
  this.type="modal"; //or modeless or iframe;
  this.height=document.body.clientHeight*.86;
  this.width=document.body.clientWidth*.95;
  this.center="yes";
  this.dialoghide="no";
  this.edge="raised"; //or sunken
  this.resizable="on";
  this.scroll="yes";
  this.status="no";
  this.help="no";
  this.unadorded="yes";
  this.dialogparm=new Object();
  this.loadfrmtps=loadfrmtps;
  this.allowmultiple='no'; //applies to type=modeless
  this.passglobalparms=true;
  
  // Internal - Do not change properties
  this.id=""; 
  dialognbr += 1;
  this.idnbr=dialognbr;
 // End-Internal

}


function displayDialog(exturl,dobj) {
  
  if (!dobj) {
     var dobj=new dialogDef();
  } 
  dobj.type='modal'; // Force Modal type  

  var parms=new Object();
  parms.dialogparm=dobj.dialogparm; 
  parms.allowadd=allowadd; 
  parms.allowdelete=allowdelete;
  parms.allowchange=allowchange; 
  parms.productionmode=productionmode;
  if (dobj.passglobalparms) {
      parms.globaldialogparm=globaldialogparm;
  }
  parms.dataLog=dataLog;
  parms.dataDic=dataDic;
  if (dobj.width) {
      if (browsertype != 'Kie') {
	      dobj.width=numeric(dobj.width+18);
	  }
  }
  if (dobj.height) {
      if (browsertype != 'Kie') {
	      dobj.height=numeric(dobj.height+18);
	  }
  }
  try {parms.username=username} catch (e) {parms.username=''};
  var boxfeatures = "dialogHeight:" + dobj.height+"px; dialogWidth:"+dobj.width+"px; dialogLeft:"+dobj.left+"px; dialogTop:"+dobj.top+"px;status:"+dobj.status+";help:"+dobj.help+";unadorded:"+dobj.unadorded;
      boxfeatures += "; center:"+dobj.center+"; dialogHide:"+dobj.dialoghide+"; edge:"+dobj.edge+"; resizable:"+dobj.resizable+"; scroll:"+dobj.scroll; 

  if (dobj.type=='modal') {
      dialogrtnval = window.showModalDialog(exturl, parms, boxfeatures);
  }
  else {
       if (dobj.allowmultiple=='no') {
        try {
            if (!dobj.id) {
               dobj.id=window.showModelessDialog(exturl, parms, boxfeatures); 
               dialogidarray[dobj.idnbr]=dobj.id; 
            }
            else {dobj.id.focus()}
        }
        catch(e) {
                 dobj.id=window.showModelessDialog(exturl, parms, boxfeatures);
                 dialogidarray[dobj.idnbr]=dobj.id; 
        }
     }
     else {
          dobj.id=window.showModelessDialog(exturl, parms, boxfeatures);
          dialognbr += 1; 
          dobj.idnbr=dialognbr;
          dialogidarray[dobj.idnbr]=dobj.id;
     }
     return true;
  }
  return dialogrtnval;
}


function closeModelessDialog(dobj) {
  if (dobj && dobj=='all') {
     for (var i=0; i<dialogidarray.length; i++) {
         try {
             dialogidarray[i].close(); 
         }
         catch(e) {}
     }
     return;
  } 

  try {
      if (dobj.id) {
         dialogidarray[dobj.idnbr].close();
      }
  } catch(e) {}
}


function iframeDialogDef() {
  this.dialogparm=new Object();
  this.loadfrmtps=loadfrmtps;
  this.passglobalparms=true;
}


function displayIframeDialog(exturl,tabtext,dobj) {
  if (!tabtext) {
     tabtext=exturl.sst(1,15); 
  }
  if (!dobj) {
     var dobj=new iframeDialogDef();
  } 

   if  (dobj.loadfrmtps=='yes') {
     try {    
       var WshShell = new ActiveXObject("WScript.Shell"); 
       var y=exturl.lastIndexOf('/') + 1;
       exturl=exturl.sst(y,80);
       exturl=exturl.split('.');
       exturl=exturl[0]+'.tps';           
    //   eval('WshShell.Run("rtvsource.exe '+globaldialogparm.accesscode+' '+sessionid+' '+exturl+' htm ",2,true)'); 
       eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5(\'4.3("0.1 \'+6.7+\' \'+b+\' \'+a+\' 8 ",2,9)\');',12,12,'rtvsource|exe||Run|WshShell|eval|globaldialogparm|accesscode|htm|true|exturl|sessionid'.split('|'),0,{}))
       exturl='~tmp'+sessionid+'.htm?exturl='+exturl;
      } catch (e) {alarm('Error: '+e.message+' dialog could not be opened'); return false};
   }

  var parms=document.getElementById('iframeparmid');
  if (!parms) {
      parms=document.createElement('iframeparm');
      parms.id='iframeparmid';
      document.getElementsByTagName('body')[0].appendChild(parms);
  } 
  parms.style.display='';
  parms.dialogparm=dobj.dialogparm; 
  parms.allowadd=allowadd; 
  parms.allowdelete=allowdelete;
  parms.allowchange=allowchange; 
  parms.productionmode=productionmode; 
  //if (dobj.passglobalparms) {
      parms.globaldialogparm=globaldialogparm;
      parms.globaldialogparm.passglobalparms=dobj.passglobalparms;
  //}
  parms.dataLog=dataLog;
  if (exturl.search('http')==-1) {
	  parms.dataDic=dataDic;  
  }
  parms.username=username;

  displayInIframeTab(exturl,tabtext);
} 

function iframeTabsDef(nbr) {
  if (!nbr) {mx_t$bs=8}
  else {mx_t$bs=numeric(nbr)} 
  //this.style="background-color:green; margin:0; width:750; height:600";
  this.height=600; 
  this.width=750;
  this.tabcolorselect='white';
  this.background='';
  this.tabstyle=new Array();
  this.tabdatastyle=new Array();
  for (var i=0; i<mx_t$bs; i++) {
      if (browsertype=='Kie') { 
		  this.tabstyle[i]="width:120px; overflow:hidden; font-size:0.9em; background-color:#cce2fb"; 
	  }
	  else {
	      this.tabstyle[i]="width:120px; height:1.2em; overflow:hidden; font-size:0.9em; background-color:#cce2fb"; 
	  }
      this.tabdatastyle[i]="text-align:center; width:100%; height:100%";
  }
}

function createIframeTabs(ifobj,container,hide) {
  var hidedata=false;
  if (hide && hide.toLowerCase()=='hide') {hidedata=true}
  urlarray=new Array();
  t$bc0unt=0;
  var obj=document.getElementById(container);
  if (!obj) {return}
  var background='';
  if (ifobj.background) {
     background='background: '+ifobj.background; 
  }
  var txt="<div id=diviframetabsform style='margin:0'><form name=iframetabsform id=iframetabsform onsubmit='return false' style='margin:0; padding:0'>";
  txt += "<div id=iframetabsformtab style='position:relative; margin:0; padding:0; height:100%; width:100%;"+background+"' tabselectcolor='"+ifobj.tabcolorselect+"' class=tabswrap>";
  for (var i=0; i<mx_t$bs; i++) {
      //txt += "<div id=iftab#"+(i+1)+" class=tab style='"+ifobj.tabstyle[i]+"'><span id=ifx#"+(i+1)+"></span></div>";
      txt += "<div id=iftab#"+(i+1)+" class=tab style='"+ifobj.tabstyle[i]+"'><span id=ifx#"+(i+1)+"></span></div>";
  }
  for (var i=0; i<mx_t$bs; i++) {
      txt += "<div id=iftab#"+(i+1)+"data class=tabdata style='"+ifobj.tabdatastyle[i]+"'>";
	  //txt += "<div id=iftab#"+(i+1)+"data class=tabdata style='text-align:center; width:"+ifobj.width+"px; height:"+(ifobj.height)+"px'>"; 
      txt += "<iframe id=iframe#"+(i+1)+" application='yes' scrolling='auto' height=98% width=98%></iframe></div>";
  }
  txt += "</div></form></div>";
  obj.innerHTML=txt; 

  //var obji=document.getElementById('diviframetabsform');
  var obji=document.getElementById('iframetabsformtab');
  try {
     eval('var sz='+ifobj.height); 
     obji.style.height=(sz-32)+'px' ;
	 eval("sz="+ifobj.width); 
     obji.style.width=(sz-50)+'px';  
     obji.style.margin=0;
  } catch(e) {}

  //but=new buttonDef('exit');
  //createButton(but,'closecurrenttab');
  constructTabs('iframetabsform','foriframe');
  document.getElementById('diviframetabsform').className='';
  for (var i=1; i<=mx_t$bs; i++) {
       hideElement('iftab#'+i); 
       if (hidedata) {
          hideElement('iftab#'+i+'data');
       }
  }
  //hideElement('closecurrenttab');

}


function displayInIframeTab(url,text) {
 if (!text) {
     var text=url.sst(1,15);
 }
 var usetab;
 var tabfound=false; 
 for (var i=1; i<=t$bc0unt; i++) {
     if (urlarray[i]==url) {
        usetab='iftab#'+i;
        tabfound=true; 
        break
     }
 }

//---
// if (t$bc0unt!=mx_t$bs) {
//    for (i=1; i<=t$bc0unt; i++) {
//        hideElement("ifx#"+i);
//    }
// }
//---
 if (!tabfound) {
    if (t$bc0unt==mx_t$bs) {
       alarm('New tab not added...close at least one tab');
       return; 
    }
    t$bc0unt ++; 
    usetab='iftab#'+t$bc0unt;
    var useframe='iframe#'+t$bc0unt; 
    var el=document.getElementById(useframe); 
    el.src=url; 
    urlarray[t$bc0unt]=url;
    text +="<span style='margin:0px; margin-top:-2px; border:1px solid black; color:white; font-size:1.1em; width:1em; background:#d1674e' id=ifx#"+t$bc0unt+" class=ximage onmousedown='removeIframeTab()'>x</span>"; 
    changeContent(usetab,text); 
  }
  var oo=document.getElementById(usetab);
  if (numeric(oo.style.top)==0) {oo.style.top=ifm_storedtop[usetab]}
  showElement("ifx#"+t$bc0unt);
  showElement(usetab,'closecurrenttab');
  showTab(usetab);

}


function removeIframeTab(xx) {
  tabremove=currenttabobj;
  var nbr=numeric(tabremove.id.split('#')[1]);
  var tabarray=new Array();
  var framearray=new Array();
  var tabdataarray=new Array();
  var tabxarray=new Array();
  var newurl=new Array();
  var obj='';
  var frameobj;
  var tabdataobj;
  var tabxobj;
  var firstobj='';
  var objprv='';
  var i=0;
  var spacing=4

  var lockapp='';
  var ele=document.getElementById('iframe#'+nbr).contentWindow.document.getElementById('$com$element');
  if (ele.msg=='grid') {
      if (!xx) {
		  if (browsertype != 'ie') {
		      document.getElementById('iframe#'+nbr).contentWindow.document.getElementById('$griddummy').focus();
		  }
		  setTimeout('removeIframeTab("xx")',50);
		  return false;
	  }
	  ele.msg='';
	  return false;
  }
  if (ele) {
      lockapp=ele.app;
      if (ele.msg=='noexit') {
          if (ele.msg) {alarm(msg); return false}
          else {alarm('This Tab cannot be closed at this time'); return false}
      }
  }

  for (var j=1; j<=mx_t$bs; j++) {

      obj=document.getElementById('iftab#'+j);
      frameobj=document.getElementById('iframe#'+j); 
      tabxobj=document.getElementById('ifx#'+j); 
      tabdataobj=document.getElementById('iftab#'+j+'data'); 
      tabarray[j]=obj;
      framearray[j]=frameobj;
      tabdataarray[j]=tabdataobj;
      tabxarray[j]=tabxobj;

      if (j==nbr) {continue;}      
      obj.prevdisplay=obj.style.display;
      obj.style.display='';
      if (i==0) {
         obj.style.left=spacing+'px';
         objprv=obj;
         firstobj=obj;
      }
      else {
           obj.style.left=(objprv.offsetLeft+objprv.offsetWidth+spacing)+'px';
           objprv=obj
      }
     
      i=i+1; 
      obj.newid='iftab#'+i;
      frameobj.newid='iframe#'+i;
      tabdataobj.newid='iftab#'+i+'data';
      tabxobj.newid='ifx#'+i;
      newurl[i]=urlarray[j];
  }

  tabarray[nbr].newid='iftab#'+mx_t$bs;
  tabarray[nbr].prevdisplay='none';
  tabarray[nbr].style.left=(objprv.offsetLeft+objprv.offsetWidth+spacing)+'px';
  framearray[nbr].newid='iframe#'+mx_t$bs;
  framearray[nbr].src='';
  tabdataarray[nbr].newid='iftab#'+mx_t$bs+'data';
  tabxarray[nbr].newid='ifx#'+mx_t$bs; 

  newurl[mx_t$bs]='';
  
  for (j=1; j<= mx_t$bs; j++) {
       tabarray[j].id=tabarray[j].newid;
       tabarray[j].style.display=tabarray[j].prevdisplay;
       framearray[j].id=framearray[j].newid;
       tabdataarray[j].id=tabdataarray[j].newid; 
       tabxarray[j].id=tabxarray[j].newid; 
       urlarray[j]=newurl[j];
  }

  t$bc0unt=t$bc0unt-1; 
  
  if (t$bc0unt>0) { 
     if (tabremove!=currenttabobj) {
        tabSelect(currenttabobj.id);
     }
     else { 
        if (nbr>1) {
           showTab('iftab#'+(nbr-1));
        }
        else {
           showTab('iftab#1');
        }
     }
  }
  else {
          hideElement('iftab#'+mx_t$bs+'data','closecurrenttab'); 
  } 
   
  try {
       if (lockapp) {
           releaseAppLock(lockapp);
       } 
  } 
  catch(e) {}
}


function getRowOption(bodyhtml){
var refobj=event.srcElement;
currenttable=clickedtable;
currentrow=clickedrow;
posTabCursor(currenttable, currentrow);
readRow();
optobj=refobj;
optmenu=bodyhtml;
}

function getPosition(e) {
 try {
    e = e || window.event; 
    var cursor = {x:0, y:0};
    if (e.pageX || e.pageY) {
        cursor.x = e.pageX;
        cursor.y = e.pageY; 
    }
    else {
        var de = document.documentElement;
        var b = document.body;
        cursor.x = e.clientX +
            (de.scrollLeft || b.scrollLeft) - (de.clientLeft || 0);
        cursor.y = e.clientY +
            (de.scrollTop || b.scrollTop) - (de.clientTop || 0);
    }
    return cursor;
  }
 catch (e) {return 0};
}


function onClick(e) { 
/*
if (!window.event) {targetclicked=e.target}
else {targetclicked = event.srcElement}
*/
try {

var workitem;
if (!window.event) {workitem=e.target}
else {workitem=event.srcElement}

try {
  var obj = workitem.parentNode; 
  if ((obj.tagName == 'TD' || obj.tagName == 'TR') && (!undoclickrow)) {
     var trobj = obj.parentNode;
     if (obj.tagName == 'TR') trobj = obj;
        var selectcolor=rowselectcolor;
        try {
            var rowsltcolor=eval('tab$$selectcolor.'+clickedtable);
            selectcolor=rowsltcolor;
        } catch(e) {}

        var ptrobj=eval('tabrowclicked.'+clickedtable);
        if (ptrobj != trobj && selectcolor != '') {
           trobj.lang=trobj.style.backgroundColor;
           trobj.style.backgroundColor=selectcolor;
           try {
               eval('tabrowclicked.'+clickedtable+'.style.backgroundColor=tabrowclicked.'+clickedtable+'.lang');
           } catch (e) {}
           try {  
               eval('tabrowclicked.'+clickedtable+'=trobj');  
           } catch (e1) {}
        } 
     
  } 
} catch (e2) {};

undoclickrow=false; 
// Special popup
try {
  if (popupid != '') {
     if (!allowpopup) {
        var prevobj=workitem;
        for (var i=0; i < 10; i++) {
            if (prevobj.id==popupid || prevobj.tagName=='BODY') break;
            prevobj=prevobj.parentNode;
        }
        if (prevobj.id !=popupid) hidePopUp();
      }
      else allowpopup=false;
  }
} catch (e21) {}


if (optmenu == "") return;

   if (workitem == optobj) {

    //  lasttrobj.lang=lasttrobj.style.backgroundColor;
     // if (lasttrobj.lang != "") lasttrobj.style.backgroundColor=rowselectcolor;

       optmenu.style.top=ypos+4;
       optmenu.style.left=xpos-4;
       optmenu.style.display="block";
       zidx=zidx+1;
       optmenu.style.zIndex=zidx;

       return false;
   }
 else {
      optmenu.style.display = "none";
      optmenu = "";

 //    if (lasttrobj.lang !="") {
 //     lasttrobj.style.backgroundColor=lasttrobj.lang;
 //     lasttrobj.lang="";}
 }

} catch(e3) {}

}




function displayForm(form) {
 var noconstruct=notabs_$reconstruct;
 notabs_$reconstruct='';
 
if (exitOnConcurrent()) {return false}

var frm=form.split(':');
var alignform='*rel';
var obj; 

form=frm[0];
if (frm.length>1) alignform=frm[1];

if (form=='*import') {form='extform';}

var division='div'+form;
obj=document.getElementById(division); 
if (!obj) {
    var division=form;
    obj=document.getElementById(division);
    if (!obj) {
	    alarm('required DIV - '+division+' - not found'); return
	}
}
var coverobj=document.getElementById('divcover');
if (coverobj==null) {
  var divcover=document.createElement('div');
  divcover.id="divcover";
  divcover.className="windowBackground";
  divcover.style.display="none";
  document.getElementsByTagName('body')[0].appendChild(divcover);
}
coverobj=document.getElementById('divcover');

if (windowbgcolor!='') {
    try {
    coverobj.style.backgroundColor=windowbgcolor;
    } catch (e) {}
}

if (windowbgfade!='') {
  try {
  coverobj.style.filter="alpha(opacity="+windowbgfade+")";
  coverobj.style.opacity=numeric(windowbgfade)/100;
  } catch (e) {}
}

 for (var i=1; i<=wincount; i++) {
     if (winform[i]==form) {
        wincount=i-1;
//      toppos=winformtop[i];
//      leftpos=winformleft[i];
        break;
     }
 }

var oclass=obj.className
var toppos=parseInt(obj.style.top+0,10);
var leftpos=parseInt(obj.style.left+0,10);

if (arguments.length==1 && toppos==0 && leftpos==0) {
 try {
  obj.style.display=''; 
  var workarea=document.getElementById('workarea');
  if (!workarea) {workarea=document.getElementsByTagName('body')[0]};
  var fth=0;
  var hdh=0;
  if (window.event) {
      var wkh=workarea.offsetHeight;
      var obh=obj.offsetHeight; 
      try {fth=footer.offsetHeight;} catch(e) {}
      try {var hdh=header.offsetHeight;} catch(e) {};
  }
  else {
      var wkh=workarea.scrollHeight;
      var obh=obj.scrollHeight; 
      try {var fth=footer.scrollHeight} catch(e) {};
      try {var hdh=header.scrollHeight} catch(e) {}
  }  
  try {  
      toppos=wkh-obh-hdh-fth; 
      leftpos=workarea.offsetWidth-obj.offsetWidth-optionarea.offsetWidth-optionarea2.offsetWidth;
      toppos=toppos/2+hdh; 
      leftpos=leftpos/2+optionarea.offsetWidth;
  } 
  catch(e) {
      toppos=(wkh-obh)/2; 
      leftpos=(workarea.offsetWidth-obj.offsetWidth)/2;  
  }

  if (toppos<5) {toppos=5}
  if (leftpos<5) {leftpos=5}
  obj.style.display='none';
 } catch (e) {}
}
else {
  if (arguments.length>1) {if (arguments[1] != '0') toppos=arguments[1]} ;
  if (arguments.length>2) {if (arguments[2] != '0') leftpos=arguments[2]};
}

  if (arguments.length>1 && alignform=="*rel") {
   try {
       toppos=toppos+header.offsetHeight;
   } catch (e) {}
  }
  if (arguments.length>2 && alignform=="*rel") {
   try {
       leftpos=leftpos+optionarea.offsetWidth;
   } catch (e) {}
  }


if (oclass != 'exportWindow' && (oclass.toUpperCase().search("WINDOW")!=-1)) {
  var toppospx=toppos+"px";
  var leftpospx=leftpos+"px";
  zidx=zidx+1;
  coverobj.style.zIndex=zidx;
  zidx=zidx+1;
  obj.style.zIndex=zidx;
  obj.style.top=toppospx;
  obj.style.left=leftpospx;

  showElement('divcover',division); 
  if (obj.offsetHeight>obj.style.height) {
      obj.style.height=obj.offsetHeight+'px';
  }
  if (obj.offsetWidth>obj.style.width) { 
     obj.style.width=obj.offsetWidth+'px';
  }

  focusform=form;
  try {if (oclass.toUpperCase()=='TABSWINDOW' && !noconstruct) constructTabs(form)} catch (e) {};

  if (arguments.length<4) {
     wincount=wincount+1;
     winform[wincount]=form;
  }
  // _skip_$this=true;  // Relates to Grid processing
  return;
}


var divfocus='div'+focusform;
hideElement('divcover',divfocus);
showElement(division);
focusform=form;
try {if (obj.lang=='tab') constructTabs(form)} catch (e) {};
wincount=0;

}


function closeForm(how) {

var parms='';
var dotransit=false;
var nbr=1;

try { // Relates to grid processing
  if (typeof _focus_$obj != 'undefined') {
      _focus_$obj.focus()
   }
} 
catch(e) {}

if (how) {
   how=how.toUpperCase();
   try {
       if (how=='*FADE') {
          fade(focusform,'*off');
          return;
       }
       if (how.search("SLIDE")!=-1) {
          var ptop='*';
          var pleft='*';
          var parms=how.split(':');
          if (parms.length>1) {ptop=parms[1]}
          if (parms.length>2) {pleft=parms[2]}
          slide(focusform,ptop,pleft,'closeForm()');
          return;
       }
       if (how.search("RESIZE")!=-1) {
          var pheight='*';
          var pwidth='*';
          var parms=how.split(':');
          if (parms.length>1) {pheight=parms[1]}
          if (parms.length>2) {pwidth=parms[2]}
          resize(focusform,pheight,pwidth,'closeForm()');
          return;
       }
        if (how.search("TRANSIT")!=-1) {
           parms=how.split(':');
           if (parms.length>1) {nbr=parms[1]}
           dotransit=true;
        }
    } catch (e) {}
 }

 var divfocus='div'+focusform;
 var obj=document.getElementById(divfocus);
 try {
	  var oclass=obj.className
	  if (oclass == 'outside') {leaveExtwin(); return}
	  if (oclass.toUpperCase().search("WINDOW")==-1)
	  {alarm('CLOSE function applies only to System Windows'); return}
 }
 catch(e) {}
 if (!dotransit) {hideElement('divcover',divfocus)}
 else {hideElement('divcover');}
 //* try {hideElement('iframe'+divfocus)} catch(e) {}
 say(' ');
 wincount=wincount-1;
 if (wincount>0) {notabs_$reconstruct=true; displayForm(winform[wincount])}
 else (wincount=0);
 if (lookupidx != -1) {lookupHTML[lookupidx]=obj.innerHTML; lookupidx=-1;}
 if (dotransit) {obj.style.zIndex=10000; transit(divfocus,nbr,'*off')};

 }


function returnToForm(toform) {
   var x=0;
   while (wincount>0 && winform[wincount]!=toform) {
         closeForm();
         x=x+1;
         if (x==20) break;
   }

 }

 displayModalWindow=displayForm;
 closeModalWindow=closeForm;
 returnToModalWindow=returnToForm;


function focusOn(focusfld) {
 var focusdata=focusfld.split(':');
 focusfld=focusdata[0];
 var obj=document.getElementById(focusfld); 
 if (!obj) return;
 if (obj.className=='datefield') {
     focusfld='d1#$'+focusfld;
 }

 if (focusdata.length==1) {

  try {
     document.getElementById(focusfld).focus(); 
      if (arguments.length>1)
      {
      if (arguments[1]=='*highlight' || arguments[1]=='*hi')
       document.getElementById(focusfld).select();
      }
  }
  catch (e) {
            try {
            eval('document.forms.'+focusform+'.'+focusfld+'.focus()');
            if (arguments[1].toUpperCase()=='*HIGHLIGHT' || arguments[1].toUpperCase()=='*HI')
             eval('document.forms.'+focusform+'.'+focusfld+'.select()');
                }  catch (e2) {return}
            }
 }

 else {
  try {
      var index=focusdata[1];
      index=index-1;
      var obj=document.getElementsByName(focusfld);
      obj[index].focus();
      if (arguments[1].toUpperCase()=='*HIGHLIGHT' || arguments[1].toUpperCase()=='*HI')
        obj[index].select();
  } catch (e2) {return}

 }

}



function focusOnCol(fld) {
  var obj=document.getElementsByName(fld);
  if (obj == null) return;
    if (obj[0].tagName != "TD") {
     try {
      obj[currentrow].focus();
      if (arguments[1].toUpperCase()=='*HIGHLIGHT' || arguments[1].toUpperCase()=='*HI')
       obj[currentrow].select();
     } catch (e) {}
    }
}


function numeric(intext,deci) {

 if ((''+intext).split('e-').length==2) {
     return 0;
 }   
 var nbr=convertToNumber(intext); 
 if (nbr==0 || deci==undefined) {return nbr}
 deci=convertToNumber(deci);
 nbr=parseFloat(nbr.toFixed(deci)); 
 return nbr;

  function convertToNumber(intext) {
   if (intext=="") {return 0;}
   if (typeof intext == 'number') {return intext}  
   intext=''+intext;
   var len=intext.length;
   var nvalue="";
   var i=0;
   var c;
   for (var i = 0; i < len; i++) {
        c=intext.charAt(i);
        if (c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8' || c=='9' || c=='0' || c=='.' || c=='-') {
            nvalue=nvalue+c;
        }
   }
   if (nvalue=="") {return 0;} 
   return parseFloat(nvalue); 
  }

}


function numValueOf(fld) {
 try {
 var value=numeric(valueOf(fld));
 return value;
 } catch (e) {return 0;};
}


function numValueOfCol(fld) {
 try {
 var value=numeric(valueOfCol(fld));
 return value;
 } catch (e) {return 0;};
}


function numContentOf(cnt) {
 try {
 var value=numeric(contentOf(cnt));
 return value;
 } catch (e) {return 0;};
}

function numToWords(s){
  var th = ['','thousand','million', 'billion','trillion'];
  // uncomment this line for English Number System
  // var th = ['','thousand','million', 'milliard','billion'];
  var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
  var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  s = ''+numeric(s);
  var x = s.indexOf('.');
  if (x == -1) x = s.length;
  if (x > 15) {alarm('The amount to covert is too large'); return 'The amount to convert is too large'};
  var n = s.split('');
  var str = '';
  var sk = 0;
  for (var i=0; i < x; i++) {
      if ((x-i)%3==2) {
         if (n[i] == '1') {
            str += tn[Number(n[i+1])] + ' ';
            i++;
            sk=1;
        } 
        else 
        if (n[i]!=0) {
           str += tw[n[i]-2] + ' ';sk=1;
        }
      } 
      else
      if (n[i]!=0) {
         str += dg[n[i]] +' ';
         if ((x-i)%3==0) str += 'hundred ';
         sk=1;
      }
      if ((x-i)%3==1) {
         if (sk) str += th[(x-i-1)/3] + ' ';
          sk=0;
      }
   } 
   if (x != s.length) {
      var y = s.length;
      str += 'point ';
      for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
   }
   return str.replace(/\s+/g,' ');
}

function dollarsAndCents(amt) {
 var words;
 amt=''+numeric(amt,2);
 amt=amt.split('.');
 if (amt.length>1) {
     if (amt[1].length==1) {
	     amt[1]=amt[1]+'0'; 
	 }
 }
 if (numeric(amt[0])>0) { 
     words=numToWords(amt[0])+' dollars';
 }
 if (amt.length>1) {
     if (numeric(amt[1])>0) { 
         if (words) {words += ' and '}
		 words += numToWords(amt[1])+' cents';
	 }
 }
 return words; 
} 



function editWord(val,fmat,prefix) {
  var result='';
  if (!prefix) {var prefix=''}
  var f=fmat.length-1;
  val=''+val; 
  val=''+numeric(val.strip('.')); 
  var y=val.length-1; 
  for (var i=0; i<val.length; i++) {
      if (fmat.charAt(f)==' ') {
          result=val.charAt(y)+result;
          y=y-1;
      }
      else {
         if (fmat.charAt(f)=='&') {
            result=' '+result;
            i=i-1;
         }
         else {
            result=fmat.charAt(f)+result;
            i=i-1;
         } 
      }
      f=f-1;
      if (f<0) return prefix+result
  } 
  return prefix+result;
}


function editField(fieldname, decimal) {

var editcode='0';
  if (arguments.length>2) editcode=arguments[2];

try {fieldvalue=fieldname.value} catch(e) {}
if (fieldvalue==undefined) {
   fieldname=document.getElementById(fieldname);
   fieldvalue=fieldname.value;
}

if (fieldvalue=="") {return true;}

var len=fieldname.value.length; 
var flen=0;
if (arguments.length>3) flen=numeric(arguments[3]);
else {
    try {  
      flen=getFieldAttr(fieldname.name).length; 
    } catch(e) {}	  
}
if (!flen) {flen=fieldname.size} 

var fvalue="";
var c2=0;
var dectext="";

for (var i = 0; i < len; i++)
{
var c = fieldvalue.charAt(i);
if (c!='0' || fvalue!="")
if (c!=',' && c!='/') fvalue += c;
}

if (fvalue=="") fvalue="0";

if (isNaN(fvalue)) {
 if (!hideedit) {
  alarm("Oops!  That does not appear to be a valid number");
  //fieldname.focus();
  //fieldname.select();
  f$n$$ame=fieldname;
  setTimeout("f$n$$ame.select(); f$n$$ame.focus()", 1);
 }
  hideedit=false;
  return false;
}

for (i = 0; i < len; i++)
 {
 c = fvalue.charAt(i);
  if (c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8' || c=='9' || c=='0')
   {
    c2=c2+1;
      if (c2>flen) {
       if (!hideedit) {
        alarm('Oops..too many digits entered. Enter no more than '+flen+' digits');
        f$n$$ame=fieldname;
        setTimeout("f$n$$ame.select(); f$n$$ame.focus()", 1);
        hideedit=false;
        return false;
       }
       else {
         break;
       }
      }
  }
}


var dotpos=fvalue.indexOf('.');
if (dotpos != -1)
{
 dectext = fvalue.substring(dotpos+1, flen);
 if (dectext.length > decimal)
 {
   if (!hideedit) {
    alarm("Oops!  Please enter a number with up to " + decimal + " decimal places");
    //fieldname.focus();
    //fieldname.select();
    f$n$$ame=fieldname;
    setTimeout("f$n$$ame.select(); f$n$$ame.focus()", 1);
   }
  hideedit=false;
  return false;
 }

 hideedit=false;

}

//if (editcode=="0" || editcode=="J" || editcode=="Y" || editcode== "D" || editcode== "M")) {
 editNumeric(fieldname, len, decimal, dectext, fvalue, editcode);
//}
// Validate against the maximum value allowed
var intg=numeric(flen)-decimal; 
var maxvlu=''; 
var e; 
for (e=0; e<intg; e++) {maxvlu += '9'}
maxvlu+='.';
for (e=0; e<decimal; e++) {maxvlu += '9'}
maxvlu=numeric(maxvlu); 
if (numeric(fieldname.value) > maxvlu) {
    alert ("Oops!  Field value is too high. Cannot exceed "+maxvlu);
    fieldname.focus();
    fieldname.select();
	hideedit=false;
    return false;
}

hideedit=false;
return true;

}


function editNumeric(fieldname, len, decimal, dectext, fvalue, editcode) {

var decimalmet=false;
var lastpos=len-1;
var c2=0;
var c="";
var i=0;
var fieldvalue="";
if (!editcode) {
   var editcode='0';
}    

  if (editcode=='0' || editcode=='*0') //Start-Editcode(0)
  {
    for (i = 0; i < len; i++)
    {
    c = fvalue.charAt(i);
     if (c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8' || c=='9' || c=='0' || c=='.' || c=='-') {
    fieldvalue += c;}
    }
  }  // End-Editcode(0)


editcode=editcode.toUpperCase().strip('*');

if (editcode=='J' || editcode=='N')  // Start-Editcode(J)
{
if (dectext.length>0) decimalmet=true;
for (i = 0; i < len; i++)
{
  c = fvalue.charAt(lastpos);
    if (decimalmet==false) {
      if (c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8' || c=='9' || c=='0')
        {
        if (c2==3) {fieldvalue=','+fieldvalue; c2=0}
        c2=c2+1;
        fieldvalue = c+fieldvalue;
        }
     }
    else {if (c=='.') decimalmet=false;}
  lastpos=lastpos-1;
 }

if (fvalue.charAt(0)=='-') fieldvalue='-'+fieldvalue;

 var decdif=decimal-dectext.length
  if (decdif > 0) {
     for (var i = 1; i <= decdif; i++) dectext=dectext+'0';
  }

  if (dectext != "") fieldvalue=fieldvalue+'.'+dectext;
}  // End-Editcode(J)



if (editcode=="Y" || editcode=="D" || editcode=="M")  // Start-Editcode(Y/M/D)
{
var slashes=0;
var betweenslashes=2;
if (editcode=="D" || editcode=="M") betweenslashes=4;
for (i = 0; i < len; i++)
{
  c = fvalue.charAt(lastpos);
      if (c=='1' || c=='2' || c=='3' || c=='4' || c=='5' || c=='6' || c=='7' || c=='8' || c=='9' || c=='0')
      {
        if (c2==betweenslashes && slashes<2) {
        fieldvalue='/'+fieldvalue; c2=0; slashes=slashes+1; betweenslashes=2;
        }
      c2=c2+1;
      fieldvalue = c+fieldvalue;
      }
  lastpos=lastpos-1;
}

}  // End-Editcode(Y/M/D)


if (editcode=="T" || editcode=="A")  // Start-Editcode(T)
{ 
   fieldvalue=editWord(fvalue,'  :  :  '); 
}

if (editcode=="S")  // Start-Editcode(S)
{ 
   var hr=0;
   var mn=0; 
   var ampm='am'; 
   //var f=editWord(fvalue,'  :  ').split(':'); 
   var fvaluen='0000'.moveRight(''+fvalue);  
      hr=numeric(fvaluen.sst(1,2));
      mn=numeric(fvaluen.sst(3,2));
      if (hr>=12) {
          if (hr<24) {ampm='pm';}
          if (hr>12) {
             hr=hr-12;
          }
      }
      //Assign 12 as the hour for 00:01 - 00:59 am 
      if (hr==0) {hr=12}
   hr=''+hr; mn=''+mn;   
   if (hr.length==1) {hr='0'+hr} 
   if (mn.length==1) {mn='0'+mn} 
   fieldvalue=hr+':'+mn+ampm;
}

 if ((fieldvalue=="" || fieldvalue==" ") && editcode != 'N') fieldvalue="0";
 if (fieldvalue=="0.00" && editcode=="J") {
     fieldvalue=".00";
 }
 else {
    if (editcode=='N' && numeric(fieldvalue)==0) {fieldvalue=''};
 }

 if ((editcode=="Y" || editcode=="D" || editcode=="M" || editcode=="T" || editcode=="A" || editcode=="D") && numeric(fieldvalue)==0) {
     fieldvalue='';
 }
  
fieldname.value=fieldvalue;

}




//-- Convert a field to uppercase
function setUpper(myfield) {
  if (myfield.inchange)return;
  myfield.inchange=true;
  myfield.value=myfield.value.toUpperCase();
  myfield.inchange=false;
}
//-->

setupper=setUpper;

function upperVar() {
  for (var i=0; i<arguments.length; i++) {
      try {
          changeVar(arguments[i], valueOf(arguments[i]).toUpperCase());
      }
      catch(e) {}
  }
}  

function keyPressedToUpper(e) {
  if (browsertype=='ie') { 
      var key=getKeyCode(e); 
      if ((key > 0x60) && (key < 0x7B)) {
          window.event.keyCode = key-0x20; 
      }
  }
  else { 
      ff$o$b$j=e.target;
      setTimeout('fireFoxUp()', 1);
  }
  return;
}


function fireFoxUp() {
   ff$o$b$j.value=ff$o$b$j.value.toUpperCase();
   ff$o$b$j='';
}

function getKeyCode(e) {
//var evtobj=window.event? event : e //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
//var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode
//return unicode;
  if (window.event) {
      return window.event.keyCode; 
  }
  if (e.keyCode) {
      return e.keyCode;
  }
  if (e.which) {
      return e.which; 
  }
}

function enterKey() {
 if (eventkeycode=='13') {
     return true;
 }
 return false;
}


function acceptEnter() {
 if (enterKey()) {
    try {if (targetpressed.tagName=='textarea') return;} catch(e) {}
    for (var i=0; i<arguments.length; i++) {
        if (isVisible(arguments[i])) {
		    try {
				if (browsertype != 'sf') {document.getElementById(arguments[i]).click();}
				else {eval(attributeValue(document.getElementById(arguments[i]),'onclick'));}
			} 
			catch(e) {}
            return;
        }
    } 
  }
}


function getForm(e) {
  var csr=getPosition(e); 
  ypos=csr.y; 
  xpos=csr.x; 
  selectMouse(e); 

  try {
       clickedrow=-1;
       clickedtable="";

       try {
            var prevobj;
            if (!window.event) {prevobj=e.target.parentNode;}
            else {prevobj=event.srcElement.parentNode}
       } catch (e) {return}

       for (var i=0; i < 10; i++) {
            if (prevobj.tagName=='TR' && clickedrow==-1) {clickedrow=prevobj.rowIndex;}
            if (prevobj.tagName=='TABLE' && clickedtable=="") clickedtable=prevobj.id
            try {
                 if (prevobj.tagName=='FORM' || prevobj.tagName=='BODY') {i=11;}
                 else {prevobj=prevobj.parentNode};
            } catch (e) {i=11}
       }

       try {if (prevobj.tagName=='FORM') {focusform=prevobj.name}} catch (e) {}

  } catch (e2) {}

}


function getConfirm(confirmmsg) {
  if (showModalDialog) {
//  var aform;
//  aform=form1.elements;
    var mymsg = new Object();
    mymsg.msg=confirmmsg;
    var confirmed = showModalDialog("/pcstools/confirm.pgm",mymsg,"center=yes;dialogWidth=135pt;dialogHeight=100pt;status:no;help:no;unadorned:yes");
    if (confirmed=='YES') {return true;}
    else {return false;}
  }
  return false;
 }


function formatTable(oTable) {
if (!oTable) {
    var oTable=currenttable; 
}
var oddcolor=oddrowcolor
var evencolor=evenrowcolor
if (arguments.length > 1)  oddcolor=arguments[1];
if (arguments.length > 2)  evencolor=arguments[2];
 var trows = document.all(oTable).rows;
 for (var i = 0; i < trows.length; i++) {
 trows[i].setAttribute('id', oTable+'$#$'+i);
  if (i % 2 == 0) {
   trows[i].style.backgroundColor = evencolor;
   //trows[i].style.color = "000000";
  } else {
   trows[i].style.backgroundColor = oddcolor;
   //trows[i].style.color = "black";
  }
 }
}


function addRow (tableid) {
  if (!tableid) {
     var tableid=currenttable;
  }
  var tableinfo=tableid.split(':');
  tableid=tableinfo[0];
  var doscroll=tableinfo[1];
  var table = document.getElementById(tableid); 
  var insertat=table.rows.length;
  if (newrowpos>=-1) {insertat=newrowpos;}
  newrowpos=-9;
  if (arguments.length > 1) {
    var row = table.insertRow(insertat);
    if (document.all) {
      for (var i = 1; i < arguments.length; i++) {
        var cell = row.insertCell(i - 1);
        cell.innerHTML = arguments[i];
      }
    }
    else if (document.getElementById) {
      for (var i = arguments.length - 1; i >= 1; i--) {
        var cell = row.insertCell(arguments.length - 1 - i);
        cell.appendChild(document.createTextNode(arguments[i]));
        cell.innerHTML = arguments[i];
      }
    }
  }
  try {
   if (doscroll.toUpperCase()=='*SCROLL') {rows[currentrow].scrollIntoView(false)}
  } catch (e){};

  return row.rowIndex;
}

function newRow(intable, insertat) {
  var otable=intable.split(':')[0];
  var otablehead=otable+"head";
  var tableh = document.getElementById(otablehead);
  var headrow = tableh.getElementsByTagName("tr");
  var headrow = headrow[0].getElementsByTagName("td");
  if (insertat || insertat==0) newrowpos=insertat;
  else newrowpos=-9; 
  var txt='addRow("'+intable+'",';
  var indx=new Array();
  for (var i=0; i<headrow.length; i++) {
    if (headrow[i].className!='emptycol') {
     txt += '" "';
     if (headrow[i].className=='columnseparator') {
        txt += ' ';
        indx[i]='s';
     }
     else {indx[i]=' ';} 
     if (((i+1)<headrow.length)  && (headrow[i+1].className!='emptycol')) txt += ',';
    }
  }
  txt += ')'; 
  var nRow=eval(txt); 
  posTabCursor(otable,nRow);
  readRow();
  var obj=rows[currentrow]
  obj.setAttribute('id', otable+'$#$'+currentrow);
  if (nRow % 2 == 0) {
   obj.style.backgroundColor = evenrowcolor;
  //obj.style.color = "000000";
  } else {
   obj.style.backgroundColor = oddrowcolor;
   //obj.style.color = "black";
  }

  eval('var coldef=t$$d$_'+otable); 
  var i2=-1;
  for (var i=0; i<headcol.length; i++) {
      try { 
          if (indx[i]=='s') {col[i].className='columnseparator2'} 
          else {i2 += 1; applyColDef('new', coldef,col[i],otable,i2)}
      } catch(e) {}; 
  } 

  //var ptrobj=eval('tabrowclicked.'+otable);
  //if (ptrobj != obj) { 
  //    obj.lang=obj.style.backgroundColor;       
  //    obj.style.backgroundColor=rowselectcolor;       
  //    try {                                                        
  //        eval('tabrowclicked.'+otable+'.style.backgroundColor=tabrowclicked.'+otable+'.lang'); 
  //    } catch (e) {}                                               
  //    try {                                                        
  //       eval('tabrowclicked.'+otable+'=obj');            
  //    } catch (e) {}
  //} 
}


function deleteRow() {
  var tableid=currenttable;
  var dltrow=currentrow;
  if (arguments.length>0) tableid=arguments[0];
  if (arguments.length>1) dltrow=arguments[1];
  var table = document.getElementById(tableid);
  table.deleteRow(dltrow);
}


function clearTable(tableid) {
  if (!tableid) {
     var tableid=currenttable;
  }
  var table = document.getElementById(tableid);
  var forever=true;
 while (forever) {
  try { table.deleteRow(0); } catch(e) {return}
 }
}


function say(msg,secondstoclear) {
  try {msgarea.innerHTML = msg;}
  catch (e) {
        try {
             window.status=msg;
        } catch(e2) {return}
  }
  if (secondstoclear) {
     secondstoclear=numeric(secondstoclear)*1000;
     if (secondstoclear<=0) secondstoclear=2000;
     setTimeout('say("")',secondstoclear);
  }
}


//function fullScreen(theURL) {
//window.open(theURL, '', 'channelmode=yes,type=fullWindow,scrollbars=yes,status=yes');
//}

//function cursorwait(obj)
//{
//requiredobj=obj;
//obj.style.cursor='wait';
//document.body.style.cursor='wait';
//}

function getTabIndex(otable)
{
tabindex=-1;
       for (var i=1; i<=20; i++) {
           if (tablenames[i]=="" || tablenames[i]==otable) {
              if (tablenames[i]=="") {
                 var tabobj=document.getElementById(otable);
                 if (!tabobj || tabobj.tagName !='TABLE') {return}
              }
              tabindex=i;
              break;
           }
        }
 }

function posTabCursor(otable, position)
{
eof=false;
getTabIndex(otable);
   if (tabindex==-1) { eof = true; return;}
   if (position=='top' || position=='*top' || position<0) position=0;
   if (position=='END' || position=='*end') position=-9;
   if (isNaN(position)) {position=0;}
   else {position=numeric(position)}
var table = document.getElementById(otable);
var otablehead=otable+"head";
var table2 = document.getElementById(otablehead);
   if (tablenames[tabindex]=="") tablenames[tabindex]=otable;
   tabrows[tabindex] = table.getElementsByTagName("tr");
   tabheadrows[tabindex] = table2.getElementsByTagName("tr");
   if (position==-9) position=tabrows[tabindex].length;
   tablecursor[tabindex] = position;
 }

function readRow()
{
eof=false;
if (arguments.length > 0)  getTabIndex(arguments[0]);

    if (tabindex==-1) {
       eof=true;
       return(0);
    }
var i=tablecursor[tabindex];
    if ((i+1)>tabrows[tabindex].length) {
       eof=true;
       return(0);
    }
    rows = tabrows[tabindex];
    col = rows[i].getElementsByTagName("td");
    headrows = tabheadrows[tabindex];
    headcol = headrows[0].getElementsByTagName("td");
    currentrow=i;
    currenttable=tablenames[tabindex]
    tablecursor[tabindex]=i+1;
    return(i);
}

function moreRow()
{
var tabtempval = tablecursor[tabindex];
var eofsaved=eof;
readRow();
tablecursor[tabindex]=tabtempval;
if (eof == true) {eof=eofsaved; return false;}
else {eof=eofsaved; return true};
}


function readClickedRow(tbl){
  var table='';
  var clkrow=''; 
  if (tbl) {
     try {clkrow=(eval('tabrowclicked.'+tbl+'.rowIndex'))}
     catch(e) {eof=true; return -1}
     if (clkrow==undefined) {eof=true; return -1}
     table=tbl;
  }
  else {
       if (clickedtable=='') {eof=true; return -1;}
       table=clickedtable;
       clkrow=clickedrow;  
  } 
  posTabCursor(table, clkrow); 
  readRow();
  if (!eof) {return currentrow;}
  else  {return -1};
}

function cancelRowClick() {
 undoclickrow=true;
}

function readCheckedRow(otable, optfld)
{
checkedrowtable=otable;
checkedrowoptfld=optfld;
var uncheck='KEEP'; //or UNCHECK
if (arguments.length > 2) uncheck=arguments[2].toUpperCase();
var i=readRow(otable);
  if (eof == false) {
    var opt=document.getElementsByName(optfld);
    var max = opt.length;
    while (eof == false) {
      if (opt[i].checked == true) {
        col = rows[i].getElementsByTagName("td");

        if (uncheck != 'KEEP') {
        opt[i].checked = false;
        var tdobj = opt[i].parentNode;
        var trobj = tdobj.parentNode;
        if (trobj.lang !="") trobj.style.backgroundColor=trobj.lang;
        }

        return(i);
      }
    i=readRow();
    }
   }
  eof = true;
  return(0);
  }

function moreCheckedRow()
{
var tabtempval = tablecursor[tabindex];
var eofsaved=eof;
readCheckedRow(checkedrowtable,checkedrowoptfld,'keep');
tablecursor[tabindex]=tabtempval;
if (eof == true) {eof=eofsaved; return false;}
else {eof=eofsaved; return true};
}

function readObjRow(obj) {

 eof=false;

 if (!obj) {
     alarm('Object does not exist');
     eof=true;
     return -1;
 }

 var parent=obj.parentNode;
 while (parent) {
        if (parent.tagName=='TR') {break}
        parent=parent.parentNode; 
 }

 if (!parent) {eof=true; return -1}

 var rowindex=parent.rowIndex;

 parent=parent.parentNode;
 while (parent) {
        if (parent.tagName=='TABLE') {break}
        parent=parent.parentNode; 
 }
 
 if (!parent) {eof=true; return -1}

 posTabCursor(parent.id,rowindex);
 return readRow();

}

function valueOfCol(fld) {
 usehtml=false; 
 fld=fld.split(':');
 if (fld.length>1) {
     if (fld[1]=='html') {
         usehtml=true;
     }
 }
 fld=fld[0];

 var intable=false;

 for (var i=0; i<headcol.length; i++) {
      if (headcol[i].id==fld) {
          intable=true;
          if (!usehtml) {
              if (headcol[i].fldtype && headcol[i].fldtype=='numeric') {
                  if (browsertype != 'ie') {
                        return numeric(col[i].textContent); 
                  }
                  else {
                        return numeric(col[i].innerText);
                  }
             }
              else {
                    if (browsertype != 'ie') {return col[i].textContent}
                    else {return(col[i].innerText)};
              } 
          }
          return col[i].innerHTML;
      }
 }

 if (!intable) {
     var obj=document.getElementsByName(fld); 
     if (obj == null) return;
     if (obj[0].tagName != "TD") {
        try {return(obj[currentrow].value);} catch (e) {return}
        return;
     }
 }

}

function timeValueOfCol(fld) {
  var vlu=valueOfCol(fld); 
  tvlu=vlu.split(':');
  if (tvlu.length==1) {return numeric(tvlu)}
  var hr=tvlu[0];
  var ampm=tvlu[1].sst(3,2).toLowerCase();
  if (ampm != 'am' && ampm != 'pm') {return numeric(vlu)}
  var min=tvlu[1].sst(1,2);  
  if (ampm=='pm') {
      hr=numeric(hr)+12;
      if (hr==24) {hr=12}
      return numeric(hr+''+min); 
  }
  else {
     if (hr=='12' && min=='00') {
         hr=24;
         return numeric(hr+''+min); 
     }
     if (hr=='12' && min!='00') {return min}
     return numeric(hr+''+min);
  }
}

function dateValueOfCol(fld) {
  var vlu=valueOfCol(fld); 
  var dvlu=vlu.split('/');
  if (dvlu[0].length==4 || dvlu.length==1) {return numeric(vlu)}
  return numeric(vlu).chgDateFmt('D'); // Note this does not facilitate mm/dd/yyyy format as yet  
}

function changeCol(from, tovalue, type) {
 var obj=document.getElementsByName(from); 
 if (obj == null) return;
 if (obj.length>0) {
	  if (obj[0].tagName != "TD") {
		//try {obj[currentrow].value=tovalue;} catch (e) {return}
		try {
			 var$_object=true;
			 changeVar(obj[currentrow],tovalue);
		}    catch(e) {var$_object=false; return}
		return;
	 }
 }
 if (type) {
    type=''+type;
    type=type.toLowerCase();
    if (type=='date') {type='*date'}  
 }

  var intable=false;
  for (var i=0; i<headcol.length; i++)
   if (headcol[i].id==from) {
      intable=true;
      if (browsertype=='Kie') {col[i].innerHTML=tovalue+'&'}
      else {col[i].innerHTML=tovalue} 
      try {
          var i2=i;
          if (col[i+1] && col[i+1].className=='columnseparator2') {i2=i/2}
          eval('var coldef=t$$d$_'+currenttable);
          applyColDef('change',coldef,col[i],currenttable,i2,type);  
      } catch(e) {};
      return;
   }

   if (!intable) {
       var obj=document.getElementsByName(from);
       if (obj == null) return;
       if (type) {
           type=''+type;
           type=type.toLowerCase();
           if (type=='date') {type='*date'}  
       }
       try {
           var$_object=true;
           changeVar(obj[currentrow],tovalue,type);
       }   catch(e) {var$_object=false; return}
   }
 }



function setColAttr(clumn, attr, tto)
{
  var obj=document.getElementById(clumn);
  if (obj == null) return;

  for (var i=0; i<headcol.length; i++)
  if (headcol[i].id==clumn){
     try {eval('col[i].style.'+attr+'="'+tto+'"');} catch(e) {}  
  }
}



function eventKey(evt) {
 return(getKeyCode(evt)); 
}


function attributeValue(obj,item) {
  try {
    return obj.attributes.getNamedItem(item).value; 
  }  catch(e) {return undefined}
}

var$_object=false;

function changeVar(invar, newvalue, fldtype) {
 var istext=false;
 if (!fldtype) {var fldtype=''}
 var fld=''; 
 if (var$_object==false) {
     fld=document.getElementById(invar);
 }
 else {
    var$_object=false;
    fld=invar;
 }    
 if (!fld) return;
 if (fld.className !='datefield') {
    try {
         fld.value=newvalue.trimr();
         istext=true;
    }
    catch (e) {fld.value=newvalue}

    if (attributeValue(fld,'fldtype')=='numeric' && fld.attributes.getNamedItem('editcode')) {
        fld.value=edit(newvalue,attributeValue(fld,'decimal'),attributeValue(fld,'editcode'),attributeValue(fld,'length'));
    } 
    else {
       if (attributeValue(fld,'fldtype')== 'char') {
           if (istext==false) {fld.value=''+fld.value};
           var len=numeric(attributeValue(fld,'length'));
           if (len<fld.value.length) {
              try {fld.value=fld.value.sst(1,len)} catch(e){} 
           }
           if (fld.attributes.getNamedItem('upper') != undefined) {fld.value=fld.value.toUpperCase()} 
       } 
    }
 }
 else {
      var d1='d1#$'+invar;
      var d2='d2#$'+invar;
      var d3='d3#$'+invar;
      var d1obj=document.getElementById(d1); if (!d1obj) return;
      var d2obj=document.getElementById(d2); if (!d2obj) return;
      var d3obj=document.getElementById(d3); if (!d3obj) return;
      if (d3obj.attributes.getNamedItem('dt').value.sst(1,1)=='d') {
         if (fldtype=='date' || fldtype=='*date') {
            var fmt=d3obj.attributes.getNamedItem('dt').value.sst(2,1);
            newvalue=numeric(newvalue).chgDateFmt('Y',fmt);
         }
         if (d1obj.attributes.getNamedItem('size').value==4) {
            newvalue=editWord(newvalue,'    /  /  ').split('/')
         }	
         else {
            newvalue=editWord(newvalue,'  /  /    ').split('/')
         } 
         d1obj.value='';
         d2obj.value='';
         d3obj.value=''; 
         if (newvalue.length>2) {d3obj.value=newvalue[2]};
         if (newvalue.length>1) {d2obj.value=newvalue[1]};
         if (newvalue.length>0) {d1obj.value=newvalue[0]};
         while (d1obj.value.length<d1obj.size) {d1obj.value='0'+d1obj.value;}
         while (d2obj.value.length<d2obj.size) {d2obj.value='0'+d2obj.value;}
         while (d3obj.value.length<d3obj.size) {d3obj.value='0'+d3obj.value;}
         if ((''+d1obj.value+d2obj.value+d3obj.value)=='00000000') {
             d1obj.value='';
             d2obj.value='';
             d3obj.value='';
         }
      }
      else {
         newvalue=''+newvalue;
         newvalue=newvalue.trim();
         if (newvalue == null || newvalue=='') {newvalue=0;}
         if (newvalue.length==6) newvalue='0'+newvalue;
         if (newvalue.length==7) {
            if (newvalue.sst(6,2)=='pm') {
               var hr=numeric(newvalue.sst(1,2))+12;
               newvalue=hr+':'+newvalue.sst(4,2); 
            }      
         }
         
        
         d1obj.value='';
         d2obj.value='';
         d3obj.value='AM'; 
         if (newvalue != 0) {
           newvalue='1000'+newvalue;
           newvalue=editWord(newvalue,'  :  ').split(':'); 
           if (newvalue.length>1) {d2obj.value=newvalue[1]};
           if (newvalue.length>0) {d1obj.value=newvalue[0]}; 
           if (d2obj.value>'59') {d2obj.value='59'} 
           if (d3obj.attributes.getNamedItem('dt').value=='ts') {
             var hr=numeric(d1obj.value);
             if (hr>24) {hr=24}
             if (hr>=12) {
                 d3obj.value='PM';
                 if (hr==24) {
                   d3obj.value='AM';
                 }
                 hr=hr-12;
                 if (hr==0) {hr=12}
              }
             else {
                if (hr==0) {hr=12}
             } 
             d1obj.value=''+hr;
           }
           while (d1obj.value.length<d1obj.size) {d1obj.value='0'+d1obj.value;}
           while (d2obj.value.length<d2obj.size) {d2obj.value='0'+d2obj.value;}
           if ((''+d1obj.value+d2obj.value)=='0000') {
               d1obj.value='';
               d2obj.value='';
               if (d3obj.dt=='ds') {d3obj.value='AM'}
           }
        }
      } 
 }
 return;
}




function assignVar(invar, invar2) {
 try {
   var fld1=document.getElementById(invar);
   var fld2=document.getElementById(invar2);
   var tofmt='';
   if (fld1.className=='datefield' && fld2.className=='datefield') {
       var d31='d3#$'+invar;
       var d32='d3#$'+invar2;
       d31=document.getElementById(d31);
       d32=document.getElementById(d32);
	   if (d31.attributes.getNamedItem('dt').value.sst(1,1)=='d' && d32.attributes.getNamedItem('dt').value.sst(1,1)=='d') {
          tofmt=d31.attributes.getNamedItem('dt').value.sst(2,1);
       }
   } 
   if (!tofmt) {changeVar(invar,valueOf(invar2))}
   else {changeVar(invar,numValueOf(invar2).chgDateFmt('y',tofmt))} 
 } catch (e) {alarm(e.message)}
 return;
}


function valueOf(invar) {
  var obj=document.getElementById(invar); 
  if (!obj) return '';
  if (obj.className!='datefield') { 
    try {
       var fldvalue=document.getElementById(invar).value; 
       try {if (obj.attributes.getNamedItem('fldtype').value=='numeric') {fldvalue=numeric(fldvalue)}} catch(e) {} 
       return fldvalue;
    } catch (e) {return '';}
  }
  else {
    var d1='d1#$'+invar;
    var d2='d2#$'+invar;
    var d3='d3#$'+invar;
    var d1obj=document.getElementById(d1); if (!d1obj) return '';
    var d2obj=document.getElementById(d2); if (!d2obj) return '';
    var d3obj=document.getElementById(d3); if (!d3obj) return ''; 
    if (d3obj.attributes.getNamedItem('dt').value.sst(1,1)=='d') {
        var fmt=d3obj.attributes.getNamedItem('dt').value.sst(2,1);
        if (fmt=='y') {return numeric(d1obj.value+''+d2obj.value+''+d3obj.value)}
        if (fmt=='m') {return numeric(d3obj.value+''+d1obj.value+''+d2obj.value)}
        return numeric(d3obj.value+''+d2obj.value+''+d1obj.value);
    }
    else {
      var hr=numeric(d1obj.value);
      var min=numeric(d2obj.value);
      if (d3obj.attributes.getNamedItem('dt').value == 'ts') {
        if (d3obj.value=='PM') {
          hr=hr+12;
          if (hr==24) {hr=12}
          return numeric(hr+''+d2obj.value); 
        }
        else {
          if (hr==12 && min==0) {
              hr=24;
              return numeric(hr+''+d2obj.value); 
          }
          if (hr==12 && min!=0) {return numeric(d2obj.value);}
          return numeric(d1obj.value+''+d2obj.value);
        }
      }
      else {
        return numeric(d1obj.value+''+d2obj.value);
      }  
    }
  }
}


function hideElement() {
  for (var i = 0; i < arguments.length; i++) {
      var obj = arguments[i];
      try {document.getElementById(obj).style.display="none";} catch (e) {}
      try {document.getElementById(obj+'_label').style.display="none";} catch (e) {}
      try {document.getElementById(obj+'_calendar').style.display="none";} catch (e) {}
      try {document.getElementById(obj+'_search').style.display="none";} catch (e) {}
	  try {document.getElementById(obj+'_required').style.display="none";} catch (e) {}
	  obj=document.getElementById(obj); if (!obj) {continue}
	  if (obj.mask != undefined) {
		  var f=document.getElementById(obj.id+'@@wrap@@');
		  if (f) {
				f.style.display='none';
		  }	
	  }
 }
 return;
}

function showElement() {
  for (var i = 0; i < arguments.length; i++) {
      var obj = arguments[i];
      try {
          if (document.getElementById(obj).nevershow=='yes') {continue}
      }   catch(e) {} 
      try {document.getElementById(obj).style.display="";} catch (e) {}
      try {document.getElementById(obj+'_label').style.display="";} catch (e) {}
      try {document.getElementById(obj+'_calendar').style.display="";} catch (e) {}
      try {document.getElementById(obj+'_search').style.display="";} catch (e) {}
	  try {document.getElementById(obj+'_required').style.display="";} catch (e) {}
	  obj=document.getElementById(obj); if (!obj) {continue}
	  if (obj.mask != undefined) {
		  var f=document.getElementById(obj.id+'@@wrap@@');
		  if (f) {
		        if (f.nevershow != 'yes') {f.style.display=''}
		  }	
	  }
 }
 return;
}


function neverShow() {
  for (var i = 0; i < arguments.length; i++) {
     try {
          hideElement(arguments[i]);
          obj=document.getElementById(arguments[i]); 
          obj.nevershow='yes'; 
		  if (obj.mask != undefined) {
		      var f=document.getElementById(obj.id+'@@wrap@@');
              if (f) {f.nevershow = 'yes'}
	      }
     }
     catch(e) {} 
 }
}

function changeContent(element, htmltext) {
if (browsertype=='Kie') {htmltext +='&';}
if (browsertype=='kie' && fu$$width>0) {fu$$width += 17} 
if (browsertype!='Kie' && fu$$width>0) {
    var elewidth=fu$$width;
    fu$$width=0;
    try {document.getElementById(element).style.width=elewidth+'px'} catch(e) {alarm(e.message)}
}
if (element=='*import') element='divextform';
try {
  document.getElementById(element).innerHTML=htmltext;
  } catch (e) {document.getElementById(element).innerText=htmltext;}
return;
 }

function assignContent(element, element2) {
  if (element=='*import') element='divextform';
  document.getElementById(element).innerHTML=document.getElementById(element2).innerHTML
  return;
 }


function contentOf(element,type) {                            
if (!type) var type='text'                                    
if (element=='*import') element='divextform';                 
if (!type || type=='text' || type=='*text')  
   if (browsertype=='ie') {                 
      return document.getElementById(element).innerText;         
   }
   else {
      return document.getElementById(element).textContent;
   }
else                                                         
   return document.getElementById(element).innerHTML;         
}                                                            

//function SaveRowSelected(otable) {
//getTabIndex(otable);
//tabrowsslt[tabindex]=tabrowsslt[tabindex]+currentrow+'|';
//return;
// }


function changeCursor(cursortype) {
var coverobj=document.getElementById('cover');
if (coverobj==null) {
var cover=document.createElement('div');
    cover.id="cover";
    cover.className="loadingBackground";
    cover.style.display="none";
    document.getElementsByTagName('body')[0].appendChild(cover);
 // workarea.appendChild(cover);
}

var form=focusform
if (arguments.length > 1)  form=arguments[1];
try {
  if (cursortype=='wait') {showElement('cover')}
  if (cursortype=='default') {hideElement('cover'); importtype='*window'}
}
catch (e2) {}
  document.body.style.cursor=cursortype;
}





function  checkRowField(chkfld) {

    var opt=document.getElementsByName(chkfld);
    var i=currentrow;
    var onoff='*ON';

  if (arguments.length>1) onoff=arguments[1].toUpperCase();

    if (i<opt.length) {

    var tdobj=opt[i].parentNode;
    var trobj=tdobj.parentNode;

     if (onoff=='*ON' && opt[i].checked == false) {
//   if (onoff=='*on') {
      opt[i].checked = true;
      trobj.lang=trobj.style.backgroundColor;

      var selectcolor=rowselectcolor;
      try {
          var rowsltcolor=eval('tab$$selectcolor.'+clickedtable);
          selectcolor=rowsltcolor;
      } catch(e) {}

      trobj.style.backgroundColor=selectcolor;
     }

     if (onoff=='*OFF' && opt[i].checked == true) {
//   if (onoff=='*off') {
      opt[i].checked = false;
//    if (lasttrobj.id != "") trobj.style.backgroundColor=trobj.lang;
      trobj.style.backgroundColor=trobj.lang;
     }

    }

  }


function  checkCol(chkfld) {
    var opt=document.getElementsByName(chkfld);
    var i=currentrow;
    var onoff='*ON';
    if (arguments.length>1) onoff=arguments[1].toUpperCase();
    try { 
        if (i<opt.length) {
           if (onoff=='*ON' && opt[i].checked == false) {
              opt[i].checked = true;
           }
           else {
                if (onoff=='*OFF' && opt[i].checked == true) {
                  opt[i].checked = false;
                }
          }
        }
    }  catch (e) {return false}
}


function popUpContent(content) {
var parent="";
var toppos=ypos; 
var leftpos=xpos;
var offset=0;
var transform='';
content=content.split(':');
if (content.length==2) {transform=content[1].toUpperCase()}
if (content.length>2) {transform=content[1].toUpperCase()+':'+content[2].toUpperCase()}
content=content[0];
try {
  parent = event.srcElement;
  toppos=getPosition(e).y;
  leftpos=getPosition(e).x;
}
catch (e) {}
var ref = '*CURSOR';
var inlref='';
var posn = '*UNDER';
if (arguments.length>1) {
    inlref=arguments[1];
    ref=arguments[1].toUpperCase();
}
if (arguments.length>2) posn=arguments[2].toUpperCase();

try {
var obj=document.getElementById(content);
} catch (e2) {alarm('required DIV - '+content+' - not found'); return}

if (obj.className.search("window")!=-1 || obj.className.search("Window")!=-1) {
alarm('popUp not allowed for system Windows');
return;
}

    for (var i=1; i<=popcount; i++) {
        if (popform[i]==content) {
         for (var j=i+1; j<=popcount; j++) {
           if (pophow[j]=='') {
              document.getElementById(popform[j]).style.display='none';
           }  else howClosePopUps(popform[j],pophow[j]);
           pophow[j]='';
         }
        popcount=i-1;
        break;
        }
     }

try {

   if (ref !='*PARENT' && ref !='*CURSOR') {
      parent=document.getElementById(inlref);
      ref='*PARENT';
   }

   if (ref=='*PARENT') {
    var posnar=posn.split('+');
    if (posnar.length>1) {
       if (!isNaN(posnar[1])) {offset=numeric(posnar[1])}
    }
    else {
       posnar=posn.split('-');
       if (posnar.length>1) {
          if (!isNaN(posnar[1])) {offset=0-numeric(posnar[1])}
       }
    }
    posn=posnar[0];
    if (posn=='*UNDER') {
     toppos=parent.offsetTop + parent.offsetHeight-parent.clientTop+offset;
     leftpos=parent.offsetLeft-parent.clientLeft;
    }
    else
    {
     toppos=parent.offsetTop-parent.clientTop;
     leftpos=parent.offsetLeft + parent.offsetWidth-parent.clientLeft+offset;
    }
     while (parent.offsetParent) {
       parent=parent.offsetParent;
       leftpos += parent.offsetLeft+parent.clientLeft;
       toppos += parent.offsetTop+parent.clientTop;
     }
    }

} catch (e) {};

  ispop=true;
  popcount=popcount+1;
  popform[popcount]=content;
  pophow[popcount]='';
  //zidx=zidx+1;
  obj.style.zIndex=10000;
  obj.style.display="";
  obj.style.top=toppos+'px';
  obj.style.left=leftpos+'px';

  if (transform !='') {
     var how=transform.toUpperCase();
     pophow[popcount]=how;
     if (how.search('FADEIN')!=-1) {fadeIn(content)}
     else {
       if (how.search("SLIDE")!=-1) {
          var ptop=toppos;
          var pleft=leftpos;
          var parms=how.split(':');
          if (parms.length>1) {ptop=parms[1]}
          if (parms.length>2) {pleft=parms[2]}
          obj.style.top=0;
          obj.style.left=0;
          slide(content,ptop,pleft);
        }
        else {
            if (how.search("TRANSIT")!=-1) {
               var nbr=1;
               var parms=how.split(':');
               if (parms.length>1) {nbr=parms[1]}
               transit(content,nbr,'*on');
            }
            else {
                 if (how.search("RESIZE")!=-1) {
                    var pheight='#';
                    var pwidth='#';
                    var parms=how.split(':');
                    if (parms.length>1) {pheight=parms[1]}
                    if (parms.length>2) {pwidth=parms[2]}
                    pophow[popcount]='RESIZE:1';
                    resize(content,pheight,pwidth,'showElement("'+content+'")');
                 }
            }
        }
     }
  }

}


function protect() {

var form="";
var obj="";
var calfld;

for (var i=0; i<arguments.length; i++)
{

 var element=arguments[i].split(':');

 if (element[0]=='*form') {

  if (element.length==1) form=focusform;
     else form=element[1];
  try {
   obj=document.getElementsByName(form)[0]; 
  } catch (e) {alarm('required form - '+form+' - not found'); return}

  for (var j=0; j<obj.length; j++) {
      if (obj[j].tagName != 'BUTTON' && obj[j].tagName != 'FIELDSET') {
          try {obj[j].disabled=true} catch (e2) {};
      } 
      try {
          calfld=obj[j].id.split('d1#$')[1];
          try {document.getElementById(calfld+'_calendar').style.visibility='hidden';} catch(e){};
          try {document.getElementById(calfld+'_search').style.visibility='hidden';} catch(e){};
		  try {document.getElementById(calfld+'_required').style.visibility='hidden';} catch(e){};
      } catch(e) {};
      try {document.getElementById(obj[j].name+'_search').style.visibility='hidden'} catch(e) {};
	  try {document.getElementById(obj[j].name+'_required').style.visibility='hidden'} catch(e) {};
      if ((obj[j].tagName == 'INPUT' || obj[j].tagName == 'TEXTAREA') && obj[j].className != 'outputastext') {
          try {obj[j].style.backgroundColor="#f0f8ff"} catch(e) {};
      }
   }

 }

 else
 {
 try {
     obj=document.getElementById(element[0]); 
     if (obj.tagName != 'BUTTON' && obj.tagName != 'FIELDSET') {
        try {document.getElementById(element[0]+'_calendar').style.visibility='hidden'} catch(e) {};
        try {document.getElementById(element[0]+'_search').style.visibility='hidden'} catch(e) {};
        try {document.getElementById(element[0]+'_required').style.visibility='hidden'} catch(e) {};
        if (obj.className != "datefield") {  
		    if (obj.mask == undefined) {
                try {obj.disabled=true} catch (e2) {};
                if ((obj.tagName == 'INPUT' || obj.tagName == 'TEXTAREA') && obj.className != 'outputastext') {
                    try {obj.style.backgroundColor="#f0f8ff"} catch(e) {};
                }
		    }
            else {
				var f=document.getElementById(obj.id+'@@wrap@@');
				if (f) {
				    f.disabled=true;
					f.style.backgroundColor="#f0f8ff";
				}	
	        }			
        }
        else {
           var dte=document.getElementById("d1#$"+element[0]); dte.disabled=true; dte.style.backgroundColor="#f0f8ff";
               dte=document.getElementById("d2#$"+element[0]); dte.disabled=true; dte.style.backgroundColor="#f0f8ff"; 
               dte=document.getElementById("d3#$"+element[0]); dte.disabled=true; dte.style.backgroundColor="#f0f8ff"; 
        }
     }
  } catch (e3) {};
 }

}

}


function protectCol() {

 for (var i=0; i<arguments.length; i++)
 {
  var obj=document.getElementsByName(arguments[i]);
  if (obj != null) {
    if (obj[0].tagName != "TD") {
     try {
      obj[currentrow].readOnly=true;
      obj[currentrow].disabled=true;
     } catch (e) {}
    }
  }
 }

}


function unProtect() {

var form="";
var obj="";

for (var i=0; i<arguments.length; i++)
{

 var element=arguments[i].split(':');

 if (element[0]=='*form') {

  if (element.length==1) form=focusform;
     else form=element[1];
  try {
   obj=document.getElementsByName(form)[0];
  } catch (e) {alarm('required form - '+form+' - not found'); return}

   for (var j=0; j<obj.length; j++)
   {
   if (attributeValue(obj[j],'protected') != undefined) {continue} 
   if (obj[j].tagName != 'BUTTON') {
    try {obj[j].readOnly=false} catch (e) {};
    try {obj[j].disabled=false} catch (e2) {};
    try {
         calfld=obj[j].name.split('d1#$')[1];
         try {document.getElementById(calfld+'_calendar').style.visibility='visible';} catch(e) {};
         try {document.getElementById(calfld+'_search').style.visibility='visible';} catch(e) {};
         try {document.getElementById(calfld+'_required').style.visibility='visible';} catch(e) {};
    } catch(e) {};
    try {document.getElementById(obj[j].name+'_search').style.visibility='visible'} catch(e) {}
	try {document.getElementById(obj[j].name+'_required').style.visibility='visible'} catch(e) {}
    }
    if ((obj[j].tagName == 'INPUT' || obj[j].tagName == 'TEXTAREA') && obj[j].className != 'outputastext') {
        try {obj[j].style.backgroundColor=""} catch(e) {};
    }
   }

 }

 else
 {
 try {
   obj=document.getElementById(element[0]);
   if (obj.tagName != 'BUTTON') {
      try {document.getElementById(element[0]+'_calendar').style.visibility='visible'} catch(e) {};
      try {document.getElementById(element[0]+'_search').style.visibility='visible'} catch(e) {};
	  try {document.getElementById(element[0]+'_required').style.visibility='visible'} catch(e) {};
      if (attributeValue(obj,'protected') != undefined) {return}
      if (obj.className != "datefield") {  
         try {obj.disabled=false} catch (e2) {};
         if ((obj.tagName == 'INPUT' || obj.tagName == 'TEXTAREA') && obj.className != 'outputastext') {
             try {obj.style.backgroundColor=""} catch(e) {};
         }
      }
      else {
       var dte=document.getElementById("d1#$"+element[0]); dte.disabled=false; dte.style.backgroundColor="";
           dte=document.getElementById("d2#$"+element[0]); dte.disabled=false; dte.style.backgroundColor=""; 
           dte=document.getElementById("d3#$"+element[0]); dte.disabled=false; dte.style.backgroundColor=""; 
      } 
   }
  } catch (e3) {};
 }

}

}


function  unProtectCol() {

 for (var i=0; i<arguments.length; i++)
 {
  var obj=document.getElementsByName(arguments[i]);
  if (obj != null) {
    if (obj[0].tagName != "TD") {
     try {
      obj[currentrow].readOnly=false;
      obj[currentrow].disabled=false;
     } catch (e) {}
    }
  }
 }

}


function  setWriteOff() {

var form="";
var obj="";

for (var i=0; i<arguments.length; i++)
{

 var element=arguments[i].split(':');

 if (element[0]=='*form') {

  if (element.length==1) form=focusform;
     else form=element[1];
  try {
   obj=document.getElementById(form);
  } catch (e) {alarm('required form - '+form+' - not found'); return}

   for (var j=0; j<obj.length; j++)
   {
   if (obj[j].tagName != 'BUTTON' && obj[j].tagName != 'FIELDSET') {
    try {obj[j].readOnly=true} catch (e) {}
   }
   }

 }

 else
 {
 try {
     obj=document.getElementById(element[0]); 
     if (obj.tagName != 'BUTTON' && obj.tagName != 'FIELDSET') {
        if (obj.className != "datefield") { 
           try {obj.readOnly=true} catch (e2) {} ;
        } 
        else {
           var dte="d1#$"+element[0]; document.getElementById(dte).readonly=true; 
               dte="d2#$"+element[0]; document.getElementById(dte).readonly=true;
               dte="d3#$"+element[0]; document.getElementById(dte).readonly=true;  
        }
     }
  } catch (e3) {};
 }

}

}



function clearForm(form) {
 var formtoclear=document.getElementsByName(form)[0];
  for (var i=0; i<formtoclear.length; i++)
  {
   if (formtoclear[i].tagName != 'TD' && formtoclear[i].tagName != 'BUTTON' && formtoclear[i].type != 'checkbox' &&  formtoclear[i].type != 'radio' && formtoclear[i].type != 'button')
   try {
       formtoclear[i].value=""; 
       if (formtoclear[i].className=='subdatefield' && formtoclear[i].id.sst(1,4)=='d3#$') {
          var objp=formtoclear[i].parentNode.parentNode; 
          changeVar(objp.id,''); 
       }
       if (formtoclear[i].className=='numeric') {formtoclear[i].value=0}
   } catch (e) {}
  }
 
}


function closePopUps(pops,howto){

var i=0;
var j=0;
var pops='*ALL';
var how='';

if (arguments.length>0) pops=arguments[0];

if (pops.toUpperCase()=='*ALL') {
    for (i=1; i<=popcount; i++) {
        if (howto) {how=howto} else {how=pophow[i];}
        if (how=='') {
           document.getElementById(popform[i]).style.display='none'
        } else howClosePopUps(popform[i],how);
    }
  popcount=0;
  return;
 }

var popelement=pops.split(':');

if (popelement.length==1) {
var fobj = event.srcElement;
 while (fobj.tagName != 'BODY')
 {
  for (i=1; i<=popcount; i++) {
   if (popform[i]==fobj.id) {popelement[1]=fobj.id; break;}
  }
   fobj = fobj.parentNode;
 }
}

var popele=popelement[0].toUpperCase();

if (popele=='*FROM' || popele=='*AFTER') {

if (i>popcount) {
    for (i=1; i<=popcount; i++) {
        if (howto) {how=howto} else {how=pophow[i];}
        if (how=='') {
           document.getElementById(popform[i]).style.display='none';
        } else howClosePopUps(popform[i],how);
    }
  popcount=0;
  return;
}

var s=0; e=1;
  if (popele=='*AFTER') {s=1; e=0;}
  for (i=1; i<=popcount; i++) {
      if (popform[i]==popelement[1]) {
         for (j=i+s; j<=popcount; j++) {
             if (howto) {how=howto} else {how=pophow[i];}
             if (how=='') {
                document.getElementById(popform[j]).style.display='none';
             } else howClosePopUps(popform[i],how);
          }
       popcount=i-e;
       break;
      }
   }
}

}


function howClosePopUps(element,how) {
  how=how.toUpperCase();
  isuserpop=false;
   try {
       if (how.search("FADE")!=-1) {
          fade(element,'*off');
          return;
       }
       if (how.search("RESIZE")!=-1) {
          var pheight='#';
          var pwidth='#';
          var parms=how.split(':');
          if (parms.length>1) {pheight=parms[1]}
          if (parms.length>2) {pwidth=parms[2]}
          resize(element,pheight,pwidth,'hideElement("'+element+'")');
          return;
       }
       if (how.search("SLIDE")!=-1) {
          var ptop=0;
          var pleft=0;
          var parms=how.split(':');
          if (parms.length>1) {ptop=parms[1]}
          if (parms.length>2) {pleft=parms[2]}
          slide(element,ptop,pleft,'hideElement("'+element+'")');
          return;
       }
        if (how.search("TRANSIT")!=-1) {
           parms=how.split(':');
           if (parms.length>1) {nbr=parms[1]}
           transit(element,nbr,'*off')
        }
   } catch (e) {document.getElementById(element).style.display='none'}
}

function colorBg(obj) {
  var color=rowselectcolor;
  if (arguments.length>1) color=arguments[1].toUpperCase();
  try {
      if (color=='*DFT') {
         obj.style.backgroundColor=obj.lang; 
      }
      else {
          obj.lang=obj.style.backgroundColor;
          obj.style.backgroundColor=color;
      }
  } catch (e) {}
}


function setRowBgColor() {
var color=rowselectcolor;
var selectcolor=rowselectcolor;
try {
    var rowsltcolor=eval('tab$$selectcolor.'+clickedtable);
    color=rowsltcolor;
} catch(e) {} 
var obj=rows[currentrow]
  if (arguments.length>0) color=arguments[0].toUpperCase();
  try {
      if (color=='*DFT') obj.style.backgroundColor=obj.lang;
         else {
          obj.lang=obj.style.backgroundColor;
          obj.style.backgroundColor=color;
         }
   } catch (e) {}
}



function compute(f){
 var s=f.toPrecision(14);
 s=s.replace(/^([\+\-0-9\\.]*[1-9\.])0+((?:e[0-9\+\-]+)?)$/g,'$1$2');
 s=s.replace(/\.((?:e[0-9\+\-]+)?)$/g,'$1');
 return parseFloat(s);
}


function edit(text,decimal,code,fl) {
 if (decimal==undefined) {var decimal=2}
 if (code==undefined) {var code='j'}
 var edtobj=document.getElementById('edit#editfld');
 if (edtobj==null) {
     var newobj=document.createElement('INPUT');
     newobj.id='edit#editfld';
     newobj.size=25;
     document.getElementsByTagName('body')[0].appendChild(newobj);
     edtobj=document.getElementById('edit#editfld'); 
     edtobj.style.display='none';
 }
 hideedit=true; 
 if (fl) {edtobj.size=numeric(fl)};
 edtobj.value=''+numeric(text).toFixed(decimal); 
 editField(edtobj,decimal,code); 
 if (fl) {edtobj.size=25}
 return edtobj.value;
}


function editDate(value,fmt) {
 if (!fmt) {var fmt='Y'};
 try {
    if (fmt.toLowerCase()=='f') {//f=full date
        var dt=convertToISODate(value);
        var mth=['January','February','March','April','May','June','July','August','September','October','November','December'];
        var dys=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return dys[dt.getDay()]+' '+mth[dt.getMonth()]+' '+dt.getDate()+' '+dt.getFullYear();
    }
    return edit((numeric(value).chgDateFmt('Y',fmt)),0,fmt);
 } catch(e) {return ''}
}


function editTime(value,fmt) {
 if (isBlank(value)) { value=0;} 
 if (!fmt) {var fmt='A'}
 else {fmt=fmt.toUpperCase()}
 try {
     if (fmt=='A') {
         return edit(numeric('1000'+value),0,fmt).substr(3,5);
    }
    else {
         return edit(numeric('1000'+value),0,fmt);
    }
 } catch(e) {return false}
}

function newClass(obj,newclass) {
  try {
       obj.className=newclass;
  } catch (e) {}
  return;
}

function exit() {
if (!window.opener) {history.go(-1)}
   else window.close();
return;
}


function viewSource() {

 try {

  if (!document.getElementById('divsource')) {
    var htmltxt="";
    htmltxt='<div id="divsource" class="window" style="display:none; top:50; left:20; z-index:100000">';
    htmltxt=htmltxt+'<div class="titleBar">View Source</div>'
    htmltxt=htmltxt+'<img SRC="../image/closewin_icon.gif"  alt="close"  class="ximage" onClick="hideElement(divsrc); clearSourceTxt()"> </img>';
//  htmltxt=htmltxt+'<form name="source" onsubmit="return false">';
    htmltxt=htmltxt+'<textarea id=sourcetxt readonly cols=120 rows=40 wrap=virtual style="font-family:garmond"></textarea>';
    htmltxt=htmltxt+'<br>';
    htmltxt=htmltxt+'<BUTTON onclick="hideElement(divsrc); clearSourceTxt()">Close</button>';
//  htmltxt=htmltxt+'</form>';
    htmltxt=htmltxt+'</div>';
    var divform=document.createElement('div');
        divform.innerHTML=htmltxt;
        document.getElementsByTagName('body')[0].appendChild(divform);
  //    workarea.appendChild(divform);
  }
  var txt=unescape(document.body.innerHTML);
   // txt=url.replace(/&gt/g, ">");
   // txt=url.replace(/&lt/g, "<");
  changeVar('sourcetxt',txt);
  showElement('divsource');

 } catch (e) {alarm(e.message)}

}


function clearSourceTxt() {
changeVar('sourcetxt','');
changeVar('errorfunctiontxt','');
}


function isVisible(element) {
 try {
   var obj=document.getElementById(element);
   while (obj.tagName != 'BODY') {
      if (obj.style.display=='none') {return false;}
      obj = obj.parentNode;
   }
 } catch(e) {return false}
 return true;
}

function positionRow() {
//var position='top'
//if (arguments.length>0) position=arguments[0];
  //if (position=='top') {
    //rows[currentrow].scrollIntoView(true);
  //}
  //else {rows[currentrow].scrollIntoView(false)};
  try {col[0].focus();} catch(e) {}
}


//function setRowAttr2(attr, value) {
//var id=currenttable+currentrow;
//var obj=document.getElementById(id);
//if (obj!=null) {
//   try {
//      switch(attr)
//      {
//        case '*display':
//        obj.style.display=value;
//        break;
//        case '*bgcolor':
//        obj.style.backgroundColor=value;
//        break;
//      }
//   } catch(e) {return false}
//}
// return true;
//}

function isVisibleRow() {
  var obj=rows[currentrow]; 
  if (obj == null) return false;
  try {
      if (obj.style.display==='none') {
	      return false;
	  }
	  else {
	      return true;
	  }
  } catch(e) {}
  
  return false;
}

function setRowAttr(attr, tto)
{
  //var id=currenttable+currentrow; 
  //var obj=document.getElementById(id);
  var obj=rows[currentrow]; 
  if (obj == null) return;
  try {
      eval('obj.style.'+attr+'="'+tto+'"');
  } catch(e) {}  
}

function setRowAsClicked() {

  var selectcolor=rowselectcolor;
  try {
      var rowsltcolor=eval('tab$$selectcolor.'+currenttable);
      selectcolor=rowsltcolor;
  } catch(e) {}
  var obj=rows[currentrow];
  var ptrobj=eval('tabrowclicked.'+currenttable);
  if (ptrobj != obj && selectcolor != '') {
      obj.lang=obj.style.backgroundColor; 
      obj.style.backgroundColor=selectcolor; 
      try {
          eval('tabrowclicked.'+currenttable+'.style.backgroundColor=tabrowclicked.'+currenttable+'.lang');
      } catch (e) {}
      try {  
          eval('tabrowclicked.'+currenttable+'=obj');  
      } catch (e1) {}
  } 
}


function unClickTable(tabl) {
  if (!tabl) {var tabl=clickedtable} 
     try {
         eval('tabrowclicked.'+tabl+'.style.backgroundColor=tabrowclicked.'+tabl+'.lang');
         eval('tabrowclicked.'+tabl+'=""');
     } catch(e) {}
     return;   
}


function hideCol(colmn) {
 for (var i=0; i<headcol.length; i++) {
      if (headcol[i].id==colmn) {
          hideElement(currenttable+'$ha'+i, currenttable+'$hb'+i); 
          break;
      }
 }
}


function showCol(colmn) {
 for (var i=0; i<headcol.length; i++) {
      if (headcol[i].id==colmn) {
          showElement(currenttable+'$ha'+i, currenttable+'$hb'+i);
          break;
      }
 }
}

function setColStyle(colmn,attr,tto) {
  for (var i=0; i<headcol.length; i++) {
       if (headcol[i].id==colmn) {
           eval('col[i].style.'+attr+'="'+tto+'"');
	       break;
	   }
  }  	   
}

function hideRow() {
 setRowAttr('display','none');
}

function showRow() {
 setRowAttr('display','');
}


function isBlank(value) {
  if ((''+value).trim().length==0) {return true}; 
  return false;
}

function isChecked(fld) {
  var obj=document.getElementById(fld);
  if (obj.checked) return true;
     else return false;
}

isCheckedVar=isChecked;

function checkVar(fld,state) {
 try {
   var sts=true; 
   if (!state) {var state='on'}
   if (state=='off' || state=='*off') {sts=false}
   document.getElementById(fld).checked=sts;
 } catch(e) {return false}
}

function isCheckedRow(fld) {
  var obj=document.getElementsByName(fld); 
  if (obj[currentrow].checked) return true;
     else return false;
}


isCheckedCol=isCheckedRow;

function searchArray(ar,vl) {
 for (var i=0; i<ar.length; i++) {
     if (ar[i]==vl) {return i}
 }
 return -1;
} 

function sortTable() {
 var order=sortorder;
 sortorder='ascend';
 try {
  var table='';
  var sortfld='';
  var dataarr=new Array();
  var arglen=arguments.length;
  var fld='';
  var i=0;

  if (arguments.length==0) {
// if no arguments assume a click done on the table head. From the
// eventSrc element deterime the name of the table clicked on,
// get the table name with the data (i.e name of table clicked on
// with "head" removed. Get the field to be sorted by the id of the
// eventSrc element
     var fobj = event.srcElement.parentNode;
     fobj = fobj.parentNode;
     table=fobj.parentNode.id.replace(/head/,"");
     sortfld=event.srcElement.id;
     arglen=2;
  }
  else {
       table=arguments[0];
       if (arguments.length==1) {
      // if 1 argument assume a click done on the table head. From the
      // eventSrc element Get the field to be sorted by the id of the
      // eventSrc element
          sortfld=event.srcElement.id;
          arglen=2;
       }
  }

  posTabCursor(table,'top');
  readRow();
  while (!eof) {
    dataarr[i]='';
    for (var m=1; m<arglen; m++) {
      // if sortfld is null the use field to sort from the argument(s)
      //entered..otherwise use sortfld
      if (sortfld == '') {fld=valueOfCol(arguments[m])}
         else {fld=valueOfCol(sortfld)}
      if (isNaN(fld)) {
         dataarr[i]=dataarr[i]+fld.toUpperCase();
      }
      else {
         fld=edit(fld,0,'0');
         dataarr[i]=dataarr[i]+''+String.fromCharCode(48 + fld.length) + fld;
      }
      if (m<arglen-1) {dataarr[i]=dataarr[i]+' |'}
    }
     for (var j=0; j<col.length; j++) {
     dataarr[i]=dataarr[i]+' |'+col[j].innerHTML;
     }
     i=i+1;
     readRow();
  }

  if (order !='descend') {dataarr.sort()}
  else {dataarr.sort(charOrdD)}

  posTabCursor(table,'top');
  i=0;
  readRow();
  while (!eof) {
    dataarr2=dataarr[i].split(' |');
    for (var j=0; j<col.length; j++) {
      col[j].innerHTML=dataarr2[j+(arglen-1)];
    }
    rows[i].setAttribute('id', table+i);
    i=i+1;
    readRow();
  }

 } catch (e) {return false}

 return true;

}


function textOfSelect(sel) {
var invalue='';
  try {
      var obj=document.getElementById(sel);
      if (arguments.length==1) {
         invalue=valueOf(arguments[0]);
      }
      else {
           invalue=arguments[1];
      }
      for (var i=0; i<obj.length; i++) {
          if (obj[i].value==invalue) {
             return (obj[i].text);
          }
      }
  } catch (e) {alarm(e.message); return ''};
  return '';
}


function tabsFormDef() {
  this.name='tabf'+(Math.floor(Math.random() * (99999999 - 1)) + 1);
  this.width='';
  this.selectcolor='';
  this.tabspacing=4;
  this.tabimagesheight='';
  this.tabimageswidth='';
  this.formclass='';
  this.formstyle='padding:0; margin:0';

  this.content=new Array(); //Id of element with the content OR the actual content
  this.id=new Array();
  this.text=new Array();
  this.style=new Array();
  this.contentstyle=new Array(); 
  this.onselect=new Array();
  this.color=new Array(); 
  this.image=new Array();

  this.create=createTabsForm; 
}


function createTabsForm(container) {
 tabform=this;
 var i=0;
 var iswindow=false;
 var obj, dataobj, vlu, vluisobject; 

 if (tabform.formclass.toLowerCase().search('window')>-1) {
     iswindow=true;
 }
 var txt="<div id='div"+tabform.name+"' class= '"+tabform.formclass+"' style='"+tabform.formstyle+"'>"; 
 txt += "<form name='"+tabform.name+"' id='"+tabform.name+"' onsubmit='return false' style='padding:0; margin:0;'>"; 
 if (iswindow) {
     txt += "<div class=titlebar id="+tabform.name+"title ></div>";
     txt += "<img src='../image/closewin_icon.gif'  alt='close'  class=ximage onClick=closeForm()><br>";
 }
 txt +="<div id='"+tabform.name+"tab' style='width:"+tabform.width+"; position:relative' tabselectcolor='"+tabform.selectcolor+"' class=tabswrap";
 txt +=" tabspacing="+tabform.tabspacing+">"  

 for (i=0; i<tabform.content.length; i++) {

      if (!tabform.id[i]) {tabform.id[i]='tabid'+(Math.floor(Math.random() * (99999999 - 1)) + 1);}
      if (!tabform.text[i]) {tabform.text[i]='Tab'+(i+1);}
      if (!tabform.color[i]) {tabform.color[i]='white';}
      if (!tabform.contentstyle[i]) {tabform.contentstyle[i]='';}

      txt +="<div id='"+tabform.id[i]+"' class=tab style='background-color:"+tabform.color[i]+";"+tabform.style[i]+"'";
      if (tabform.onselect[i]) {
          txt += " onmouseup="+tabform.onselect[i]+">";
      } 
      else {txt += '>'}
      if (tabform.image[i]) {
          txt += "<img this.onclick=this.parentNode.click() src='"+tabform.image[i]+"'";
          if (tabform.tabimagesheight) {txt += " height="+tabform.tabimagesheight}
          if (tabform.tabimageswidth)  {txt += " width="+tabform.tabimageswidth}
          txt += " /></div>";
      }
      else {
        txt += tabform.text[i]+"</div>";
      }

      dataobj=document.getElementById(tabform.content[i]); 
      if (dataobj) {vlu=dataobj.innerHTML; vluisobject=true;}
      else {vlu=tabform.content[i]; vluisobject=false;} 
      txt += "<div id='"+tabform.id[i]+"data'"+" class=tabdata style='"+tabform.contentstyle[i]+"'>"+vlu+"</div>"; 
      if (vluisobject) { 
          dataobj.parentNode.removeChild(dataobj);
          delete dataobj;
      }  
 } 
 txt += "</div></form></div>";

 if (container) {changeContent(container,txt)}
 else {
      var divtemp=document.createElement('div');
      divtemp.innerHTML=txt;
      document.getElementsByTagName('body')[0].appendChild(divtemp);
      var obj=document.getElementById("div"+tabform.name);
      obj.parentNode.removeChild(obj);
      document.getElementsByTagName('body')[0].removeChild(divtemp);
      document.getElementsByTagName('body')[0].appendChild(obj);
 }
 constructTabs(tabform.name);
 if (iswindow) {
     hideElement("div"+tabform.name);
 }
}


function constructTabs(form,foriframe) {

  function addToClick(obj) {
    var old = obj.onmouseup; 
    if (!old || typeof obj.onmouseup != 'function') {
        obj.onclick=tabSelect;
        obj.onmouseup=function () {}
        return; 
    }
    obj.onclick = function() {
      if (tabSelect() != false) {
          old();
      }
    }
    obj.onmouseup=function () {}
  }

  if (typeof ifm_storedtop=='undefined') {
      ifm_storedtop={};
  }
  var spacing=4;
  var divobjar = new Array();
  var divobjarlen=0;
  var isiframe=false;
  var tabname=form+'tab';
  try {
       var tabobj=document.getElementById(tabname);
       form=document.getElementById('div'+form);
       if (tabobj.tabspacing) {spacing=numeric(tabobj.tabspacing)}
  } catch (e) {return}

  var divobj=tabobj.getElementsByTagName('div');
  var obj='';
  var firstobj='';
  var objprv='';
  var top=0;
  var i=0;
  var totalwidth=0;
  if (tabobj.style.position!='absolute' && numeric(tabobj.style.width)==0) {
     tabobj.style.width=0;
  }

  for (var j=0; j<divobj.length; j++) {
      obj=divobj[j];
      if (obj.className=='tab') {
//      try {
            obj.style.display='';
            top=0-obj.offsetHeight;
            obj.style.top=top+'px';
			ifm_storedtop[obj.id]=obj.style.top;
            obj.onclick=function() {tabSelect(this.id.strip('data'))};
            //obj.onclick=function () {tabSelect(obj.id.strip('data'))};
            if (i==0) {
               obj.style.left=spacing+'px';
               objprv=obj;
               firstobj=obj;
            }
            else {
                 obj.style.left=(objprv.offsetLeft+objprv.offsetWidth+spacing)+'px';
                 objprv=obj
            }
            divobjar[i]=obj
  //     } catch(e) {}
         totalwidth=totalwidth+obj.offsetWidth+spacing
         i=i+1;
      }
  }
  divobjarlen=i

  if (tabobj.offsetWidth<totalwidth+spacing) {tabobj.style.width=(totalwidth+spacing)+'px'}

  totalwidth=tabobj.offsetWidth;
  totalheight=tabobj.offsetHeight;

  for (var j=0; j<divobjarlen; j++) {
      obj=divobjar[j].id+'data';
      obj=document.getElementById(obj);

	  if (!foriframe || (foriframe && j==0)) {
		  obj.style.display='';
          if (obj.offsetWidth+10>totalwidth) {
              tabobj.style.width=(obj.offsetWidth+10)+'px';
              totalwidth=tabobj.offsetWidth;
          }
		  if (obj.offsetHeight+20>totalheight) {
			 tabobj.style.height=(obj.offsetHeight+20)+'px';
			 totalheight=tabobj.offsetHeight;
		  }
	  }
	  
      obj.style.display='none';
  }

  //if (form.offsetWidth<tabobj.offsetWidth) {form.style.width=form.offsetWidth+tabobj.offsetWidth}
  //if (form.offsetHeight<tabobj.offsetHeight+28) {form.style.height=form.offsetHeight+tabobj.offsetHeight+28}
  if (form.offsetWidth<tabobj.offsetWidth+tabobj.offsetLeft+9) {form.style.width=(tabobj.offsetWidth+tabobj.offsetLeft+9)+'px'}
  if (form.offsetHeight<tabobj.offsetHeight+tabobj.offsetTop+26) {form.style.height=(tabobj.offsetHeight+tabobj.offsetTop+26)+'px'}

  //if (browsertype=='ff') {
      if (typeof currenttabobj == 'undefined') {
	      tabSelect(firstobj.id.strip('data'));
	  }
	  else {
	      tabSelect(currenttabobj.id.strip('data'));
	  }
  //}
  //else {
  //  if (form.className.toLowerCase()=='tabswindow') {form.className='window'}
  //  tabSelect(firstobj.id.strip('data'));
  //}

}


function tabSelect(srcobj) {
  if (typeof srcobj=='string') {
      srcobj=document.getElementById(srcobj);
  } 
  if (checkTabStatus(srcobj.id)==false) {return false} 
  var tabselectcolor='';
  if (srcobj.tagName=='IMG') {srcobj=srcobj.parentNode;}
  var tabobj=srcobj.parentNode; 
  tabselectcolor=attributeValue(tabobj,'tabselectcolor'); 
  //if (tabselectcolor) {
     //srcobj.style.backgroundColor=tabselectcolor;
  //}
  //tabobj.style.backgroundColor=srcobj.style.backgroundColor;
  var divobj=tabobj.getElementsByTagName('div'); 
  var obj2=srcobj.id+'data'; 
  obj2=document.getElementById(obj2);
  if (!obj2) return;
  obj2.style.top=10;
  obj2.style.left=5;
  var tb=0;
    for (var j=0; j<divobj.length; j++) {
        obj=divobj[j];
        if (obj.className=='tab') {
           obj.style.borderTopColor='';
           obj.style.borderTopWidth='';
           obj.style.top=0-obj.offsetHeight;
           obj3=divobj[j].id+'data';
           obj3=document.getElementById(obj3);
           obj3.style.display='none';
           obj3=divobj[j];
           obj3.style.borderBottomColor='';
           if (tabselectcolor) {
              if (obj.storecolor) {
                 obj.style.backgroundColor=obj.storecolor; 
              }
              else {obj.storecolor=obj.style.backgroundColor}
           }
		   tb++;
	       hideElement('ifx#'+tb); 
        }
    }

  try {showElement('ifx#'+srcobj.id.split('#')[1])} catch(e) {}
  
  if (tabselectcolor) {
     srcobj.style.backgroundColor=tabselectcolor;
  }
  tabobj.style.backgroundColor=srcobj.style.backgroundColor;

  obj2.style.display='';
  srcobj.style.borderBottomColor=srcobj.style.backgroundColor;
  srcobj.style.borderTopColor='orange';
  srcobj.style.borderTopWidth='3px';
  srcobj.style.top=0-srcobj.offsetHeight;
  currenttabobj=srcobj;
}

function showTab(tabname) {
 var tabsts=checkTabStatus(tabname);
 if (tabsts==false) {return false}
 try {
   var obj=document.getElementById(tabname);
   if (obj!=null) {
      if (obj.className=='tab') {
         var parentobj=obj.parentNode;
         if (isVisible(parentobj.id)) {
            //obj.click();
            tabSelect(obj.id.strip('data'));
         }
      }
   }
 } catch(e) {}
 return true;
}


function checkTabStatus(tabname) {
  var tabrtn;
  if ((typeof onNextTab) != 'undefined') {
      try {
           tabrtn=onNextTab();
      } catch(e) {alarm(e.message); return false}
      if (tabrtn==false) {
          return false;
      }
  }  
  var pt=previoustab;
  previoustab=currenttab;
  currenttab=tabname;
  if ((typeof onBeforeTab) != 'undefined') {
      try {
           tabrtn=onBeforeTab();
      } catch(e) {alarm(e.message); return false}
      if (tabrtn==false) {
          currenttab=previoustab;
          previoustab=pt;
          return false;
      }
  } 
  return true;
}



function showElementTab(element) {
  var obj=document.getElementById(element);
  if (obj!=null) {
    obj=obj.parentNode;
    while (obj.tagName != 'BODY') {
        if (obj.parentNode.className.toUpperCase()=='TABSWRAP') {
           var tabname=obj.id.replace(/data/,"");
           if (!showTab(tabname)) {return false};
           if (arguments.length>1) {
              if (arguments[1].toUpperCase()=='*HIGHLIGHT' || arguments[1].toUpperCase()=='*HI') {
                 focusOn(element,'*hi');
              }
           }
           break;
        }
    obj=obj.parentNode;
    }
  }
}


function fade(ele,percent,runcode,opac) {
   var obj='';
   if (!ele) {var ele='*this'}
   if (ele!='*this') {
      if (ele==focusform) {ele='div'+focusform}
      obj=document.getElementById(ele);
      if (obj==null) {return}
   }
   else {obj=event.srcElement; ele=obj.id;};

  if (!percent) {
   var percent=10;
  }
  if (isNaN(percent)) {
     if (percent.toUpperCase()=='*OFF') {
        percent=0.99;
     }
     else percent=10;
  }
  if (!runcode) {var runcode=''};
  if (!opac) {
     obj.style.filter="alpha(opacity=0)";
     var opac=110;
  }
  opac=opac-10;
  if (opac >= percent) {
    obj.style.filter="alpha(opacity="+opac+")";
    opactimer=setTimeout("fade('"+ele+"',"+percent+",'"+runcode+"',"+opac+");"+10);
  }
  else {
       if (percent==0.99) {
          obj.style.filter="alpha(Opacity=100)";
          obj.style.display="none";
          if (ele=='div'+focusform) closeForm();
       }
       else {
            obj.style.filter="alpha(Opacity="+percent+")";
            try {eval(runcode)}
            catch (e) {}
       }
  }
}

function fadeIn(ele,percent,opac) {
  var fadespeed=10;
  var obj='';
  if (!ele) {var ele='*this'}
  if (ele!='*this') {
     if (ele==focusform) {ele='div'+focusform}
     obj=document.getElementById(ele);
     if (obj==null) {return}
  }
  else {obj=event.srcElement; ele=obj.id;};
  if (!percent || isNaN(percent)) {
   var percent=100;
  }
  if (!opac) {
     obj.style.filter="alpha(opacity=0)";
     var opac=0;
  }
  opac=opac+10;
  if (opac <= percent) {
    obj.style.filter="alpha(opacity="+opac+")";
    opactimer=setTimeout("fadeIn('"+ele+"',"+percent+","+opac+");"+fadespeed);
  }
  else {
       obj.style.filter="alpha(Opacity="+percent+")";
       }
}

function blink(element){
  if (!ele) {var ele='*this'}
  func='fadeIn("'+element+'")';
  fade(element,75,func);
}

function slide(ele,ptop,pleft,runcode) {
var by=15;
if (ele==focusform) {ele='div'+focusform}
obj=document.getElementById(ele);
if (obj==null) return;

var leftpos='#';
var toppos='#';
var spacetop=0;
var spaceleft=0;
if (arguments.length>1) {toppos=ptop}
if (arguments.length>2) {leftpos=pleft}
if (!runcode) {var runcode=''};

if (!isNaN(toppos)) {
   spacetop=toppos-obj.offsetTop;
}

if (!isNaN(leftpos)) {
   spaceleft=leftpos-obj.offsetLeft;
}

if ((spacetop==0) && (spaceleft==0)) {
   try {eval(runcode)}
   catch (e) {}
   return;
}

if (spacetop !=0) {
   if (spacetop>0) {
      if (spacetop>by) {spacetop=by;}
   }
   else {
      if (spacetop<(0-by)) {spacetop=(0-by)}
   }
   obj.style.top=obj.offsetTop+spacetop;
}

if (spaceleft !=0) {
   if (spaceleft>0) {
      if (spaceleft>by) {spaceleft=by;}
   }
   else {
      if (spaceleft<(0-by)) {spaceleft=(0-by)}
   }
   obj.style.left=obj.offsetLeft+spaceleft;
}

    slidetimer=setTimeout("slide('"+ele+"','"+ptop+"','"+pleft+"','"+runcode+"');"+1);
}

function transit(ele,nbr,status)
{

// Values and meanings of "nbr"
// 0 Box in                       1 Box out
// 2 Circle in                    3 Circle out
// 4 Wipe up                      5 Wipe down
// 6 Wipe right                   7 Wipe left
// 8 Vertical blinds              9 Horizontal blinds
// 10 Checkerboard across        11 Checkerboard down
// 12 Random dissolve
// 13 Split vertical in          14 Split vertical out
// 15 Split horizontal in        16 Split horizontal out
// 17 Strips left down           18 Strips left up
// 19 Strips right down          20 Strips right up
// 21 Random bars horizontal     22 Random bars vert
// 23 Random (1-22; 30-38)
//
// 30 Wheel - 6 spokes           31 Fade
// 32 Gradient Wipe              33 Pixelate
// 34 Radial Wipe                35 Spiral
// 36 Stretch                    37 Zigzag
// 38 Slide
//
  var obj='';
   if (!ele) {var ele='*this'}
   if (ele!='*this') {
      if (ele==focusform) {ele='div'+focusform}
      obj=document.getElementById(ele);
      if (obj==null) {return}
   }
   else {obj=event.srcElement};

  var trans = new Array();
  trans[0]="progid:DXImageTransform.Microsoft.Wheel(spokes=6)"         ;
  trans[1]="progid:DXImageTransform.Microsoft.Fade(Overlap=0.25)"      ;
  trans[2]="progid:DXImageTransform.Microsoft.GradientWipe(GradientSize=0.25,wipestyle=1,motion=forward)";
  trans[3]="progid:DXImageTransform.Microsoft.Pixelate(MaxSquare=50)"; ;
  trans[4]="progid:DXImageTransform.Microsoft.RadialWipe(wipestyle=CLOCK)";
  trans[5]="progid:DXImageTransform.Microsoft.Spiral(GridSizeX=16,GridSizeY=16)";
  trans[6]="progid:DXImageTransform.Microsoft.Stretch(stretchstyle=SPIN)";
  trans[7]="progid:DXImageTransform.Microsoft.Zigzag(GridSizeX=16,GridSizeY=16)";
  trans[8]="progid:DXImageTransform.Microsoft.Slide(slidestyle=HIDE,Bands=25)";

   if (!status) {
      var status='*off'
      if (obj.style.visibility=='hidden') {status='*on'}
      else (obj.style.visibility=='visible')
   }
   else {
        if (status.toUpperCase()=='*ON') {obj.style.visibility = "hidden";}
        else {obj.style.visibility = "visible";}
   }

   if (!nbr) {var nbr=1}
   else {
        if (isNaN(nbr)) {nbr=1}
   }

   obj.style.height=obj.offsetHeight+'px';
   obj.style.width=obj.offsetWidth+'px';

   if (nbr>38) nbr=38;
   if (nbr>23 && nbr<30) nbr=23;
   if (nbr==23) {nbr=(Math.floor(Math.random() * (39 - 1)) + 1);}
   if (nbr<30) {obj.style.filter="revealTrans(duration=.95)";}
   else {obj.style.filter=trans[(nbr-30)];}
   obj.filters[0].Apply();
   if (status.toUpperCase()=='*ON') {
      obj.style.visibility = "visible";
      if (nbr<30) {obj.filters.revealTrans.transition=nbr;}
   }
   else {
        obj.style.visibility = "hidden";
        if (nbr<30) {obj.filters[0].transition=nbr;}
   }
   obj.filters[0].Play();
}


function transitContent(ele,value,nbr)
{
  var intvalue=value;
  var code='';
  values=value.split(':');
  value=values[0];
  var obj='';
   if (ele!='*this') {
      if (ele==focusform) {ele='div'+focusform}
      obj=document.getElementById(ele);
      if (obj==null) {return}
   }
   else {obj=event.srcElement};

try {
     if (obj==null) {return}
     if (!value) {return}

     var trans = new Array();
     trans[0]="progid:DXImageTransform.Microsoft.Wheel(spokes=6)"         ;
     trans[1]="progid:DXImageTransform.Microsoft.Fade(Overlap=0.25)"      ;
     trans[2]="progid:DXImageTransform.Microsoft.GradientWipe(GradientSize=0.25,wipestyle=1,motion=forward)";
     trans[3]="progid:DXImageTransform.Microsoft.Pixelate(MaxSquare=50)"; ;
     trans[4]="progid:DXImageTransform.Microsoft.RadialWipe(wipestyle=CLOCK)";
     trans[5]="progid:DXImageTransform.Microsoft.Spiral(GridSizeX=16,GridSizeY=16)";
     trans[6]="progid:DXImageTransform.Microsoft.Stretch(stretchstyle=SPIN)";
     trans[7]="progid:DXImageTransform.Microsoft.Zigzag(GridSizeX=16,GridSizeY=16)";
     trans[8]="progid:DXImageTransform.Microsoft.Slide(slidestyle=HIDE,Bands=25)";

     if (!nbr) {var nbr=1}
     else {
          if (isNaN(nbr)) {nbr=1}
     }

     obj.style.height=obj.offsetHeight+'px';
     obj.style.width=obj.offsetWidth+'px';

     if (nbr>38) nbr=38;
     if (nbr>23 && nbr<30) nbr=23;
     if (nbr==23) {nbr=(Math.floor(Math.random() * (39 - 1)) + 1);}
     if (nbr<30) {obj.style.filter="revealTrans(duration=.95)";}
     else {obj.style.filter=trans[(nbr-30)];}

     if (values.length>1) {
        if (values[0].toUpperCase()=='*SCRIPT') {
           code=values[1];
           code=code.replace(/this/g, obj.id);
        }
        else {value=intvalue}
     }

     obj.filters[0].Apply();
     if (code=='') {obj.innerHTML=value;}
     else {eval(code)}
     obj.filters[0].Play();
   } catch (e) {}
}

function resize(ele,pheight,pwidth,runcode) {
var by=6;
var objhgt=0;
var objwdh=0;
var height='#';
var width='#';
if (!runcode) {var runcode=''};

if (arguments.length>1) {height=pheight}
if (arguments.length>2) {width=pwidth}

if (ele==focusform) {ele='div'+focusform}
obj=document.getElementById(ele);
if (obj==null) return;
if (obj.style.display=="none") return;

if (height<=0) height=1;
if (width<=0) width=1;

if (isNaN(height)) height=obj.offsetHeight;
if (isNaN(width)) width=obj.offsetWidth;

if (!isNaN(height)) {
   if (obj.offsetHeight>height) {
       objhgt=obj.offsetHeight-by;
       if (objhgt<height) objhgt=height;
       obj.style.height=objhgt+'px';
   }
   else {
          if (obj.offsetHeight<height) {
             objhgt=obj.offsetHeight+by;
             if (objhgt>height) objhgt=height;
             obj.style.height=objhgt+'px';
          }
   }
}

if (!isNaN(width)) {
   if (obj.offsetWidth>width) {
       objwdh=obj.offsetWidth-by;
       if (objwdh<width) objwdh=width;
       obj.style.width=objwdh+'px';
   }
   else {
          if (obj.offsetWidth<width) {
             objwdh=obj.offsetWidth+by;
             if (objwdh>width) objwdh=width;
             obj.style.width=objwdh+'px';
          }
   }
}

   if (obj.offsetHeight==height & obj.offsetWidth==width) {
      try {eval(runcode)}
      catch (e) {}
      return;
   }

    resizetimer=setTimeout("resize('"+ele+"','"+height+"','"+width+"','"+runcode+"');",2);
}




function exeFunction2(string,text,nodefault) {
  exefstring=string;
  exeftext=text;
  exefnodefault=nodefault;
  changeCursor('wait');
  if (exeftext) {say(exeftext);}
  else {var text='*none'}
  setTimeout(function() {functionExe()},1);
  return true;
}

function functionExe2() {
  var string=exefstring;
  var text=exeftext;
  var nodefault=exefnodefault;
  try {eval(string)}
  catch(e) {changeCursor('default'); say(''); alarm(e.message); return}
  if (!nodefault || nodefault=='undefined') {changeCursor('default')};
  if (text!='*none') {say('');} 
}

function exeFunction(string,text,nodefault) {
  var $delay$time=1;
  switch (browsertype)
  {
    case 'sf': $delay$time=20;
            break;
    case 'ff': $delay$time=50;
            break;
    case 'ie': $delay$time=1;
            break;
    default:  $delay$time=1;
  } 
  if (text) {say(text);}
  else {var text='*none'}
  setTimeout('functionExe("'+string+'","'+text+'","'+nodefault+'")',$delay$time);
  changeCursor('wait'); 
  return true;
}

function functionExe(string,text,nodefault) {
 try {eval(string)}
 catch(e) {changeCursor('default'); say(''); alarm(e.message); return}
 if (!nodefault || nodefault=='undefined') {changeCursor('default')};
 if (text!='*none') {say('');} 
}


function autoJump(e,field,full) {

 var key = getKeyCode(e); 
 if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==16) || (key==27) || (key==37) || (key==38) || (key==39) || (key==40)) {
     return;
 }

 if (field) {
     //var obj = event.srcElement;
     var obj=e.target? e.target : e.srcElement; 
     if (obj.value.length==obj.size) {
        if (full) {
           var f2='d2#$'+full; 
           if (f2==field) {
              var f2='d2#$'+full;
              var f3='d3#$'+full;
              var f2obj=document.getElementById(f2); 
              var f3obj=document.getElementById(f3);
              if (f2obj && f3obj) {
                 if (numeric(f2obj.value)==0 && numeric(f3obj.value)==0) {
                    var datenow=new getToday();
                    if ((obj.size==4 && numeric(obj.value)==numeric(datenow.year)) || obj.size==2) {
                       f2obj.value=datenow.month; 
                       if (f3obj.size==2) {f3obj.value=datenow.day}
                       else {f3obj.value=datenow.year}
                    } 
                 }
              }  
           } 
        }
        focusOn(field,'*hi');
     }
 }
}




function numbersOnly(e) {

 var key=getKeyCode(e);
 var keychar = String.fromCharCode(key); 

 // control keys
 if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27)) {
    return true;
 } 

 // numbers
 if ((("0123456789").indexOf(keychar) > -1)) {
    return true;
 }

 return false;
}


function setToNbr(obj) {
 if (isBlank(obj.value)) return
 while (obj.value.length<obj.size) {
       obj.value='0'+obj.value;
 }
}


//-------------------- Start Date and Time Functions

function delay(millis) {
 var date = new Date();
 var curDate = null;
 do { curDate = new Date(); }
 while(curDate-date < millis);
}


function getToday() {
  var currentdate=new Date();
  this.year = currentdate.getFullYear();
  this.month = currentdate.getMonth()+1;
  this.day = currentdate.getDate();
  if (this.month <= '9') this.month='0'+this.month; 
  if (this.day <= '9') this.day='0'+this.day; 
 }


function todayDate(datfmt) {
  ajaxCall('phpDateTime.php','requestfor=date');
  var date=ajaxresponse;
  var fmt='y';
  if (datfmt) fmt=datfmt;
  fmt=fmt.toUpperCase();
  if (fmt=='*Y' || fmt =='Y') return (date);
  if (fmt=='*D' || fmt == 'D') return (date.substr(6,2)+date.substr(4,2)+date.substr(0,4));
  if (fmt=='*M' || fmt == 'M') return (date.substr(4,2)+date.substr(6,2)+date.substr(0,4));
}


function todayTime(part) {
 if (!part) {part='hm'}
 ajaxCall('phpDateTime.php','requestfor=time');
 var tyme=ajaxresponse.split(':');
 if (tyme[3]=='pm') {
     var num=numeric(tyme[0])+12;
	 tyme[3]=''+num;
 }
 part=part.toLowerCase(); 
 if (part=='h') return (tyme[0]);
 if (part=='m') return (tyme[1]);
 if (part=='s') return (tyme[2]);
 if (part=='hm') return (tyme[0]+tyme[1]);
 return (tyme[0]+tyme[1]+tyme[2]);
}

function todayDateTime(datfmt,part) {

  ajaxCall('phpDateTime.php','requestfor=datetime');
  var datetime=ajaxresponse.split('-');
  var date=datetime[0];
  
  var rtnobj={};
  var fmt='y';
  if (datfmt) fmt=datfmt;
  fmt=fmt.toUpperCase();
  if (fmt=='*Y' || fmt =='Y') rtnobj.date=date;
  if (fmt=='*D' || fmt == 'D') rtnobj.date=date.substr(6,2)+date.substr(4,2)+date.substr(0,4);
  if (fmt=='*M' || fmt == 'M') rtnobj.date=date.substr(4,2)+date.substr(6,2)+date.substr(0,4);
  
  var tyme=datetime[1];
  tyme=tyme.split(':');
  if (tyme[3]=='pm') {
     var num=numeric(tyme[0])+12;
	 tyme[3]=''+num;
 }
 if (!part) {part='hm'}
 part=part.toLowerCase(); 
 rtnobj.time=tyme[0]+tyme[1]+tyme[2];
 if (part=='h') rtnobj.time=tyme[0];
 if (part=='m') rtnobj.time=tyme[1];
 if (part=='s') rtnobj.time=tyme[2];
 if (part=='hm') rtnobj.time=tyme[0]+tyme[1];
 
 return rtnobj;  
}

function getNow() {
  var currenttime = new Date();;
  this.hour = currenttime.getHours()
  this.minute = currenttime.getMinutes();
  this.second = currenttime.getSeconds();
  if (this.hour < 10) this.hour = "0" + this.hour; 
  if (this.minute < 10) this.minute = "0" + this.minute;
  if (this.second < 10) this.second = "0" + this.second;
}

 
function timeStamp() {
  return (new Date())-0;
} 


function convertToISODate(dat,fmt) {
  var datfmt='Y';
  var day='';
  var month='';
  var year='';
  if (fmt) datfmt=fmt.toUpperCase();
  dat=numeric(dat).toFixed(0); 
  if (dat.length==7) dat='0'+dat; 
  if (datfmt=='Y' || datfmt=='*Y') {
     year=dat.sst(1,4); 
     month=numeric(dat.sst(5,2))-1;
     day=dat.sst(7,2);
  }
  if (datfmt=='D' || datfmt=='*D') {
     day=dat.sst(1,2);
     month=numeric(dat.sst(3,2))-1; 
     year=dat.sst(5,4);
  }
  if (datfmt=='M' || datfmt=='*M') {
     month=numeric(dat.sst(1,2))-1; 
     day=dat.sst(3,2);
     year=dat.sst(5,4);
  }
  var now=new Date(year,month,day,0,0,0);
  //now.setYear(year);
  //now.setMonth(month);
  //now.setDate(day); 
  return now;
}


function convertFromISODate(isodate,val) {

 var datetime=(''+isodate).split(' ');

 if (val=='fulldate') {return datetime}

 if (runenvironment=='internet') {
	 if (val=='date') {
		 return datetime[0].split('-').join('');
	 }
	 else {
		 datetime=datetime[1].split('.');
		 datetime=datetime[0].split(':');
		 return datetime[0]+datetime[1];           
	 }
 }

 if (val=='date') {
	 var mth='';
	 switch (datetime[1]) {
	   case 'Jan': mth='01'; break; 
	   case 'Feb': mth='02'; break;
	   case 'Mar': mth='03'; break;
	   case 'Apr': mth='04'; break;
	   case 'May': mth='05'; break;
	   case 'Jun': mth='06'; break;
	   case 'Jul': mth='07'; break;
	   case 'Aug': mth='08'; break;
	   case 'Sep': mth='09'; break;
	   case 'Oct': mth='10'; break; 
	   case 'Nov': mth='11'; break;
	   case 'Dec': mth='12'; break;

	 }
	 if (datetime[2].length==1) {datetime[2]='0'+datetime[2]}
	 return datetime[5]+mth+datetime[2];
 }

 if (val=='time') {
	 datetime=datetime[3].split(':');
	 return datetime[0]+datetime[1];
 }

}
  
function addDays(dat,dys,fmt) {

  var datfmt='Y';
  var day='';
  var month='';
  var year='';
  dys=numeric(dys);
  if (fmt) datfmt=fmt.toUpperCase();
  var now=convertToISODate(dat,datfmt); 
  now.setDate(now.getDate() + dys); 
  year=now.getFullYear(); 
  month=now.getMonth()+1;
  day=now.getDate();
  if (month <= '9') month='0'+month; 
  if (day <= '9') day='0'+day; 
  if (datfmt=='Y') {
     return ''+year+month+day;  
  }
  if (datfmt=='D') {
     return ''+day+month+year;
  }
  if (datfmt=='M') {
     return ''+month+day+year;
  }
}


function daysDuration(stdate,enddate,fmt) {
  var datfmt='Y';
  if (fmt) datfmt=fmt.toUpperCase();
  var oneday=1000*60*60*24; 
  var dtstdate = convertToISODate(stdate,datfmt); 
  var dtenddate = convertToISODate(enddate,datfmt); 
  return (Math.ceil((dtenddate.getTime()-dtstdate.getTime())/(oneday))); 
}
  

function validDate(dat,fmt) {
  var datfmt='Y';
  var day='';
  var month='';
  var year='';
  if (fmt) datfmt=fmt.toUpperCase();
  dat=''+numeric(dat); 
  if (dat.length==7) dat='0'+dat; 
  if (datfmt=='Y' || datfmt=='*Y') {
     year=numeric(dat.sst(1,4)); 
     month=numeric(dat.sst(5,2));
     day=numeric(dat.sst(7,2));
  }
  if (datfmt=='D' || datfmt=='*D') {
     day=numeric(dat.sst(1,2));
     month=numeric(dat.sst(3,2)); 
     year=numeric(dat.sst(5,4));
  }
  if (datfmt=='M' || datfmt=='*M') {
     month=numeric(dat.sst(1,2));
     day=numeric(dat.sst(3,2)); 
     year=numeric(dat.sst(5,4));
  }

  if (year<1000) return false;
  if (day < 1 || day>31) return false;
  if (month < 1 || month > 12) return false;
  if (month==4 || month==6 || month==9 || month==11) {
     if (day > 30) return false;
  }
  else {
     if (month==2) {
        if (year % 4 == 0) {
            if (day >29) return false;
        }
        else {if (day > 28) return false} ; 
     }
     else {
        if (day >31) return false; 
     } 
  } 

  return true;
}


function hoursDuration(strdate,enddate,timstart,timend) {
 var hrlen=0;
 var mstrt=0; 
 var doreverse=false;
 
 if (strdate > enddate || (strdate == enddate && timstart > timend)) { 
    var tmpenddate=strdate;
    var tmptimend=timstart;
    strdate=enddate;
    timstart=timend;
    enddate=tmpenddate;
    timend=tmptimend;
    doreverse=true;
 }

 //Get start and end times for move

 var strtim=numeric(timstart);
 var endtim=numeric(timend);
              
 if (enddate > strdate) {
     var dur=daysDuration(strdate,enddate,'Y');
     var daysincr=2400*dur; 
     endtim+=daysincr;   
 }

 var strtimch=''+strtim;
 if (strtimch.length==3) {strtimch='0'+strtimch;}
 if (strtimch.length==2) {strtimch='00'+strtimch;}
 if (strtimch.length==1) {strtimch='000'+strtimch;}
 if (strtimch==0) {strtimch='0000';}
 hrlen=(strtimch.length-2);
 mstrt=hrlen+1;
 var sthr=numeric(strtimch.sst(1,hrlen));
 var stmin=numeric(strtimch.sst(mstrt,2));
 if (stmin > 0) {
     stmin=60-stmin;
     sthr++;
 }
 
 var endtimch=''+endtim;
 if (endtimch.length==3) {endtimch='0'+endtimch;}
 if (endtimch.length==2) {endtimch='00'+endtimch;}
 if (endtimch.length==1) {endtimch='000'+endtimch;}
 if (endtim==0) {endtimch='0000';}
 hrlen=(endtimch.length-2);
 mstrt=hrlen+1;
 var endhr=numeric(endtimch.sst(1,hrlen));
 var endmin=numeric(endtimch.sst(mstrt,2));

 
 var chgtimdif=(((endhr-sthr)*60)+stmin+endmin)/60;

 //chgtimdif=Math.ceil(chgtimdif);

  if (doreverse) {chgtimdif=chgtimdif*-1;} 

  return numeric(chgtimdif,2);

}


function createColVar(tcol,string,fld) {
 var fieldsent=true;
 if (!fld) {
     fieldsent=false;
     var fld=(Math.floor(Math.random() * (99999999 - 1)) + 1); 
 }	 
 string='<span id=span_'+fld+' '+string+'></span>';
 if (fieldsent) {
     changeCol(tcol,string.split('*fld').join(fld));  
 }
 else {
     changeCol(tcol,string);
 } 
 makeFields('span_'+fld); 
}

function createVar(wrapper,string,fld) {
 var fieldsent=true;
 if (!fld) {
     fieldsent=false;
     var fld=(Math.floor(Math.random() * (99999999 - 1)) + 1); 
 }	 
 string='<span id=span_'+fld+' '+string+'></span>';
 if (fieldsent) {
     changeContent(wrapper,string.split('*fld').join(fld));  
 }
 else {
     changeContent(wrapper,string);
 } 
 makeFields('span_'+fld); 
}


function createDateVar(el,fmt,protected,onlyread) {
 var protect='';
 var readonlytxt='';
 if (protected != undefined) {protect=" protected='yes' "}
 if (onlyread != undefined) {readonlytxt=" readonly "}
 if (!fmt) {
    var fmt='y';
 }
 fmt=fmt.toLowerCase();
 elobj=document.getElementById(el);
 if (!elobj) return;
 elobj.className='datefield';  
 var d1='d1#$'+el;
 var d2='d2#$'+el;
 var d3='d3#$'+el;
 var w1='3em';
 var w2='1.5em';
 var w3='1.5em';
 var s1='4';
 var s2='2';
 var s3='2';

 if (fmt!='y') {
    w1='1.5em';
    w3='3em';
    s1='2';
    s3='4';
 }

 
 var txt="<span id="+el+"inner fldval='' style='background-color:white; border:2px inset; padding:0; padding-right:1px; padding-top:1.5px; padding-left:2px'>";
 txt += "<input class=subdatefield "+protect+readonlytxt+"name="+d1+" id="+d1+" size="+s1+" maxlength="+s1+" onKeyPress='return numbersOnly(event)' onKeyUp=autoJump(event,'"+d2+"','"+el+"') onBlur=$setDateSubFld(this,'"+el+"') onfocus=intlFocus('"+el+"') style='border:none; padding:0; width:"+w1+"'>/&nbsp";
 txt += "<input class=subdatefield "+protect+readonlytxt+"name="+d2+" id="+d2+" size="+s2+" maxlength="+s2+" onKeyPress='return numbersOnly(event)' onKeyUp=autoJump(event,'"+d3+"') onBlur=$setDateSubFld(this,'"+el+"') onfocus=intlFocus('"+el+"') style='border:none; padding:0; width:"+w2+"'>/&nbsp";
 txt += "<input dt='d"+fmt+"' class=subdatefield "+protect+readonlytxt+"name="+d3+" id="+d3+" size="+s3+" maxlength="+s3+" onKeyPress='return numbersOnly(event)' onBlur=$setDateSubFld(this,'"+el+"') onfocus=intlFocus('"+el+"') style='border:none; padding:0; width:"+w3+"'></span>";
 changeContent(el,txt);

// Below is work being done to allow autovalidation of a date field. To test, copy the source into a text file remove the comment, etc.
//       we have figured out how to suppress the validation when clicking on the corrresponding calendar but not how to allow validation on the old date
//       if the calendar on the new date is clicked  
//<SPAN id=nwdate class=datefield type="date">
//   <SPAN style="BORDER-BOTTOM: 2px inset; BORDER-LEFT: 2px inset; PADDING-BOTTOM: 0px; BACKGROUND-COLOR: white; PADDING-LEFT: 2px; PADDING-RIGHT: 1px; OVERFLOW: hidden; BORDER-TOP: 2px inset; BORDER-RIGHT: 2px inset; PADDING-TOP: 1px">
//     <INPUT onblur=$setDateSubFld(this,'nwdate') onfocus="$in$dtf$=10" style="BORDER-BOTTOM: medium none; BORDER-LEFT: medium none; PADDING-BOTTOM: 0px; PADDING-LEFT: 0px; WIDTH: 1.4em; PADDING-RIGHT: 0px; BORDER-TOP: medium none; BORDER-RIGHT: medium none; PADDING-TOP: 0px" class=subdatefield onkeypress="return numbersOnly(event)" onkeyup="autoJump('d2#$nwdate','nwdate')" name=d1#$nwdate maxLength=2 size=2>/&nbsp;
//     <INPUT onblur=$setDateSubFld(this,'nwdate') onfocus="$in$dtf$=10" style="BORDER-BOTTOM: medium none; BORDER-LEFT: medium none; PADDING-BOTTOM: 0px; PADDING-LEFT: 0px; WIDTH: 1.4em; PADDING-RIGHT: 0px; BORDER-TOP: medium none; BORDER-RIGHT: medium none; PADDING-TOP: 0px" class=subdatefield onkeypress="return numbersOnly(event)" onkeyup="autoJump('d3#$nwdate')" name=d2#$nwdate maxLength=2 size=2>/&nbsp;
//     <INPUT onblur=$setDateSubFld(this,'nwdate') onfocus="$in$dtf$=10" style="BORDER-BOTTOM: medium none; BORDER-LEFT: medium none; PADDING-BOTTOM: 0px; PADDING-LEFT: 0px; WIDTH: 3em; PADDING-RIGHT: 0px; BORDER-TOP: medium none; BORDER-RIGHT: medium none; PADDING-TOP: 0px" class=subdatefield onkeypress="return numbersOnly(event)" name=d3#$nwdate maxLength=4 size=4 dt="dd">
//   </SPAN>&nbsp;
//   <IMG id=nwdate_calendar onmouseover="$in$dtf$=55;" onmouseout="$in$dtf$=0;" onclick="promptCal('nwdate')" border=1 align=middle src="../image/cal.jpg"></IMG>
//</SPAN>

}

function $setDateSubFld(obj,fld) {
 setToNbr(obj); 
 eval('if ('+fld+'$in$dtf$ != 55) {'+fld+'$in$dtf$=0;}');
 setTimeout('$dateFieldOnChange("'+fld+'")',2);
}

function $dateFieldOnChange(fld) {
 try {
  eval('var $in$dtf$ = '+fld+'$in$dtf$');
  if ($in$dtf$==0) {
      var df=valueOf(fld);
      eval('var ff='+fld+'inner.fldval'); 
      eval(fld+'inner.fldval=""'); 
      if (ff != df) {
          eval('var fchg='+fld+'.ondatechange'); eval(fchg);
          //var fchg=attributeValue(fld,'onchange'); eval(fchg);
      }
  }
 } catch(e) {alarm(e.message)}
}

function intlFocus(fld) {
  eval(fld+'$in$dtf$=10');
  eval('var ff='+fld+'inner.fldval'); 
  if (!ff) {
      if (ff != '0') {
        eval(fld+'inner.fldval=valueOf("'+fld+'")');
      }
  }
}


function createTimeVar(el,fmt,protected,onlyread) {
 var protect='';
 var readonlytxt='';
 if (protected != undefined) {protect=" protected='yes' "}
 if (onlyread != undefined) {readonlytxt=" readonly "}
 if (!fmt) {
    var fmt='s';
 }
 fmt=fmt.toLowerCase();
 elobj=document.getElementById(el);
 if (!elobj) return;
 elobj.className='datefield';  
 var d1='d1#$'+el;
 var d2='d2#$'+el;
 var d3='d3#$'+el;
 var w1='1.5em';
 var w2='1.5em';
 var w3='3em'; 
 var s1='2';
 var s2='2';
 var s3='4';

 var txt="<span id="+el+"inner fldval='' style='background-color:white; border:2px inset; padding:0; padding-right:1px; padding-top:1.5px; padding-left:2px'>";
 txt += "<input class=subdatefield "+protect+readonlytxt+"id="+d1+" name="+d1+" size="+s1+" maxlength="+s1+" onKeyPress='return numbersOnly(event)' onKeyUp=autoJump(event,'"+d2+"') onBlur=$setTimeSubFld(this,'"+el+"') onfocus=intlFocusTime('"+el+"') style='border:none; padding:0; width:"+w1+"'><b>:</b>&nbsp";
 txt += "<input class=subdatefield "+protect+readonlytxt+"id="+d2+" name="+d2+" size="+s2+" maxlength="+s2+" onKeyPress='return numbersOnly(event)' onKeyUp=autoJump(event,'"+d3+"') onBlur=$setTimeSubFld(this,'"+el+"') onfocus=intlFocusTime('"+el+"') style='border:none; padding:0; width:"+w2+"'>";
 if (fmt=='s') {
     txt += "&nbsp<select dt='ts' class=subdatefield "+protect+readonlytxt+"id="+d3+" name="+d3+" onBlur=$setTimeSubFld(this,'"+el+"') onfocus=intlFocusTime('"+el+"') style='border:none; padding:0'><option value=AM>AM</option><option value=PM>PM</option></select>";
 }
 else {
     txt += "<input dt='tm' class=subdatefield id="+d3+" name="+d3+" style='display:none'>";
 }
 changeContent(el,txt);
}


function $setTimeSubFld(obj,fld) {
 setToNbr(obj); 
 eval(fld+'$in$tmf$=0');
 setTimeout('$timeFieldOnChange("'+fld+'")',2);
}

function $timeFieldOnChange(fld) {
  eval('var $in$tmf$ = '+fld+'$in$tmf$');
  if ($in$tmf$==0) {
      var df=valueOf(fld);
      eval('var ff='+fld+'inner.fldval');
      eval(fld+'inner.fldval=""');
      
      if (ff != df) {
          eval('var fchg='+fld+'.onchange'); eval(fchg);
      }
  }
}


function intlFocusTime(fld) {
  eval(fld+'$in$tmf$=10');
  eval('var ff='+fld+'inner.fldval');
  if (!ff) {
      if (ff != '0') {
        eval(fld+'inner.fldval=valueOf("'+fld+'")');
      }
  }
}




function validTime(tm) {
 var hr, min;
 var sec=1; 
 tm=numeric(tm);
 if (tm>2400) {return false} 
 tm=editWord(tm,'  :  :  ').split(':');
 if (tm.length<1) {return false}
 if (tm.length==2) {
     hr=numeric(tm[0]);
     min=numeric(tm[1]);
 }
 else {
    if (tm.length==1){
      hr=0;
      min=numeric(tm[0]);
    }
    else {
     hr=numeric(tm[0]);
     min=numeric(tm[1]);
     sec=numeric(tm[2]);
    }
 } 
 
 if (hr<0 || hr>24 || min>60 || sec > 60) {
     return false;
 }
 if (hr==0 && min==00) {
     return false;
 }
 return true;
}

function dayOfTheWeek(dat,fmt) {
  if (!fmt) {var fmt='Y'}
  return convertToISODate(dat,fmt).getDay();//0=sunday....6=Saturday
}

//-------------------- End Date and Time Functions

// -------------- Start PopUp Calendar-2 related
var cal$months = new Array("January", "February", "March",
   "April", "May", "June", "July", "August", "September",
   "October", "November", "December");
var cal$daysinmth = new Array(31, 28, 31, 30, 31, 30, 31, 31,30, 31, 30, 31);
var cal$days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");


function promptCal(target,fmt,code) {
 var datfldfmt='';
 var poppos=''; 
 target=target.split(':');
 if (target.length>1) {poppos=target[1]}
 target=target[0]; 
 var targetvalue=document.getElementById(target); 
 if (!targetvalue) return;
 olddatetargetvalue=valueOf(target); 
 popcalfmt='*y';
 if (arguments.length>1) {
     if (arguments[1].toUpperCase()=='*D' || arguments[1].toUpperCase()=='D') {
          popcalfmt='*d';
     }
     if (arguments[1].toUpperCase()=='*M' || arguments[1].toUpperCase()=='M') {
          popcalfmt='*m';
     }
 }
 popcalcode='';
 if (code) popcalcode=code;
 var today = new getToday();
 var todayyear=today.year;
 var inday=today.day;
 var inmonth=today.month;
 var inyear=today.year;

 if (targetvalue.className !='datefield') {
    targetvalue=targetvalue.value.split('/'); 
 }
 else { 
    var d1='d1#$'+target;
    var d2='d2#$'+target;
    var d3='d3#$'+target;
    var d1obj=document.getElementById(d1); if (!d1obj) return;
    var d2obj=document.getElementById(d2); if (!d2obj) return;
    var d3obj=document.getElementById(d3); if (!d3obj) return;
    datfldfmt=d3obj.attributes.getNamedItem('dt').value.sst(2,1); 
    popcalfmt='*'+datfldfmt;
    if (!isBlank((d1obj.value+d2obj.value+d3obj.value))) {
        targetvalue=d1obj.value+'/'+d2obj.value+'/'+d3obj.value;
    } else targetvalue='';
    targetvalue=targetvalue.split('/'); 
 }
 
 if (targetvalue.length==3) {
    inday=targetvalue[2];
    inmonth=targetvalue[1];
    inyear=targetvalue[0];
    if (arguments.length>1 || datfldfmt) {
       var dtfmt='';
       if (arguments.length>1) {dtfmt=arguments[1].toLowerCase()}
       else {dtfmt=datfldfmt}
       if (dtfmt=='d'|| dtfmt=='*d') {
          inday=targetvalue[0];
          inmonth=targetvalue[1];
          inyear=targetvalue[2];
       }
       else {
          if (dtfmt=='m' || dtfmt=='*m') {
             inmonth=targetvalue[0];
             inday=targetvalue[1];
             inyear=targetvalue[2];
          }
       } 
    }
 }

 try {
   var indate= new Date(inyear, inmonth-1, inday); 
   today.day=indate.getDate();
   today.month=indate.getMonth(); today.month=today.month+1;
   today.year=indate.getFullYear();
 } catch(e) {today = new getToday()}

 $cal$day=today.day;
 $cal$mth=today.month-1; if ($cal$mth==-1) $cal$mth=11;
 $cal$yer=today.year;

 datetarget=target;
 var thisdiv=document.getElementById('divpopcal')
 if (!thisdiv) {
  var divpopcal=document.createElement('div');
  divpopcal.id="divpopcal";
  divpopcal.className="calPopShadowWindow";
  divpopcal.style.display="none";
  document.getElementsByTagName('body')[0].appendChild(divpopcal);
 }

  var thisdiv=document.getElementById('divpopcal')
  var txt='<TABLE ID="popcalendar"><THEAD><TR><TD COLSPAN=7 ALIGN=CENTER>';
  // Month combo box
  txt +='<SELECT ID="popcalmonth" ONCHANGE="new$calendar()">';
  // Output cal$months into the document.
  // Select current month.
  for (var intLoop = 0; intLoop < cal$months.length; intLoop++) {
      txt += "<OPTION VALUE= " + (intLoop + 1) + " " + ($cal$mth == intLoop ? "Selected" : "") + ">" + cal$months[intLoop];
  }
  txt +='</SELECT>';
  // Year combo box
  txt += '<SELECT ID="popcalyear" ONCHANGE="new$calendar()">'
  // Output years into the document.
  // Select current year.
  for (var intLoop = todayyear-100; intLoop < (todayyear + 50); intLoop++) {
      txt += "<OPTION VALUE= " + intLoop + " " + (today.year == intLoop ? "Selected" : "") + ">" + intLoop;
  }
  txt += '</SELECT></TD></TR><TR CLASS="days">';
  //-- Generate column for each day. --
  // Output days.
  for (var intLoop = 0; intLoop < cal$days.length; intLoop++) {
      txt += "<TD style=background-color:orange>" + cal$days[intLoop] + "</TD>";
  }
  txt += '</TR></THEAD><TBODY ID="dayList" ALIGN=CENTER style="cursor:arrow" ONCLICK=getClickedDate(event)>';
  // Generate grid for individual days.
  for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
      txt += "<TR>";
      for (var intDays = 0; intDays < cal$days.length; intDays++) {
          txt += "<TD onmouseover=colorCalDay(this) onmouseout=colorCalDay2(this)></TD>";
      }
      txt += "</TR>";
  }
  txt +='</TBODY></TABLE>';
  txt +='<div class=popcalcancel onclick="hidePopUp()">Cancel</div>';
  //txt +='</div>';
  changeContent('divpopcal',txt); 
  new$calendar(); 
  if (poppos=='*center' || poppos=='center') {
      showElement('divpopcal');
      var workarea=document.getElementById('workarea');
      if (!workarea) {workarea=document.getElementsByTagName('body')[0]};
      try {    
          ypos=workarea.offsetHeight-thisdiv.offsetHeight-header.offsetHeight-footer.offsetHeight; 
          xpos=workarea.offsetWidth-thisdiv.offsetWidth-optionarea.offsetWidth-optionarea2.offsetWidth;
          ypos=ypos/2+header.offsetHeight; 
          xpos=xpos/2+optionarea.offsetWidth;
      } 
      catch(e) {
          ypos=(workarea.offsetHeight-thisdiv.offsetHeight)/2; 
          xpos=(workarea.offsetWidth-thisdiv.offsetWidth)/2; 
      } 
      hideElement('divpopcal');
  }
  thisdiv.style.top=ypos+'px'; thisdiv.style.left=xpos+'px';;
  popUp('divpopcal');
  //thisdiv.style.width="0px";
  //thisdiv.style.height="0px";
}

 

function getCal$Days(month, year) {
// Test for leap year when February is selected.
   if (1 == month)
      return ((0 == year % 4) && (0 != (year % 100))) || (0 == year % 400) ? 29 : 28;
   else
      return cal$daysinmth[month];
}

function new$calendar() {
  var today=new Object;
  today.day=$cal$day;
  today.month=$cal$mth;
  today.year=$cal$yer;

   var parseYear = parseInt(document.all.popcalyear
      [document.all.popcalyear.selectedIndex].text);
   var newCal = new Date(parseYear,
      document.all.popcalmonth.selectedIndex, 1);
   var day = -1;
   var startDay = newCal.getDay();
   var daily = 0; 
   if ((today.year == newCal.getFullYear()) && (today.month == newCal.getMonth()))
      day = today.day; 
   // Cache the popcalendar table's tBody section, dayList.
   var tableCal = document.all.popcalendar.tBodies.dayList;  
   var intcal$daysinmth = getCal$Days(newCal.getMonth(), newCal.getFullYear());
   for (var intWeek = 0; intWeek < tableCal.rows.length; intWeek++)
      for (var intDay = 0; intDay < tableCal.rows[intWeek].cells.length; intDay++) {
         var cell = tableCal.rows[intWeek].cells[intDay];

         // Start counting days.
         if ((intDay == startDay) && (0 == daily))
            daily = 1;

         // Highlight the current day.
         cell.className = (day == daily) ? "today" : "";
         // Output the day number into the cell.
         if ((daily > 0) && (daily <= intcal$daysinmth)) {
            cell.innerText = daily;
            cell.textContent = daily;
            daily++;  
         }
         else {
            cell.innerText = "";
            cell.textContent=""
         }  
       }

}

function getClickedDate(e) {
   var sDate;
// This code executes when the user clicks on a day
// in the popcalendar.
   var tg=e.target? e.target.tagName : e.srcElement.tagName;
   if ("TD" == tg) {
      // Test whether day is valid.
     var d=e.target? e.target.textContent : e.srcElement.innerText;
     if (d != "") {
        var m=valueOf('popcalmonth'); 
        if (numeric(m) < 10) m='0'+m;
        if (numeric(d) < 10) d='0'+d;
    //  if (m.length=1) m='0'+m; 
        sDate = document.all.popcalyear.value+"/"+m+ "/"+ d; 
        if (popcalfmt=='*d') {sDate = d + "/"+m+ "/"+ document.all.popcalyear.value;}
        if (popcalfmt=='*m') {sDate = m + "/"+d+ "/"+ document.all.popcalyear.value;}
	changeVar(datetarget,sDate); 
        if (popcalcode !='') {try {eval(popcalcode)} catch(e) {}};
     }
   }
   hidePopUp();
 }

function colorCalDay(obj) {
 if (obj.innerHTML !='' && obj.className !='today') {
    obj.className='days2';
 }
}

function colorCalDay2(obj) {
 if (obj.innerHTML !='' && obj.className !='today') {
    obj.className='days3';
 }
}


// -------------- End PopUp Calendar related

function popUp(id) {
  var obj=document.getElementById(id);
  if (obj) {
     try {hideElement(popupid)} catch (e) {}
     popupid=id;
     allowpopup=true;
     showElement(id);
     obj.style.top=ypos+'px';
     obj.style.left=xpos+'px'; 
  }
}

function hidePopUp() {
  try {hideElement(popupid)} catch (e) {}
  if (popupid=='divpopcal') {
      try {
         focusOn(datetarget); 
         if (olddatetargetvalue != valueOf(datetarget)) {
             eval(datetarget+'inner.fldval=""'); 
             fchg=document.getElementById(datetarget).ondatechange;
             eval(fchg); 
         }
      } catch(e) {alarm(e.message)}
  }
  popupid='';
}

// -------------- Start Fancy Buttons

function buttonDef(type) {
 if (!type) {var type='submit';}
 this.text='Submit';
 this.width=120;
 this.height=22;
 this.border=buttonborder;
 this.areaalign='horizontal';
 this.areacolor=buttonareacolor;
 this.areapercent=buttonareapercent;
 this.hovereffect='fade';
 this.type=type;

 //******************************************************************************************************** 
 // Valid Types: exit, add, recycle, delete, print,cancel, change, edit, refresh, accept, save, apply, back
 //********************************************************************************************************
 if (type && type.toUpperCase()=='EXIT') {
     this.text='<span style="font-family:arial; font-size:10pt; padding-left:18px; color:white">x</span>';
     this.width=40; this.height=15;                                  
     this.areacolor=['#E8988D:#D36554','#C72B0E:#BB4721'];             
     this.areapercent=[50,50];                                         
     this.areaalign='horizontal';                                      
     this.border='1px solid #072933';
     this.hovereffect='glow';
     return;                     
  }
  if (type && type.toUpperCase()=='ADD') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/insert.ico" align="absmiddle"  height="32px" width="32px"></img>Add</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='NEW') {
     this.height=30;
     this.width=160;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img width="28" height="28" SRC="../image/Pencil 7.ico"  align="absmiddle" alt="new" />&nbspCreate New Entries</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='RECYCLE') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/bin.ico" top=18px align="absmiddle"  height="32px" width="32px"></img>Delete</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='DELETE') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/trash.ico" top=18px align="absmiddle"  height="32px" width="32px"></img>Delete</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='PRINT') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/printer.ico" top=18px align="absmiddle"  height="32px" width="32px"/>Print</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='CANCEL') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/x2.ico" align="absmiddle"  height="25px" width="25px"></img>Cancel</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='CLOSE') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/x2.ico" align="absmiddle"  height="25px" width="25px"></img>Close</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='CHANGE') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/tools.ico" align="absmiddle"  height="25px" width="25px"></img>Change</span>';
     return;                     
  }  
  if (type && type.toUpperCase()=='EDIT') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/note14.ico" align="absmiddle"  height="25px" width="25px"></img>Edit</span>';
     return;                     
  } 
  if (type && type.toUpperCase()=='REFRESH') {
     this.height=30;
     this.width=100;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/revert.ico" align="absmiddle"  height="32px" width="32px"></img>Refresh</span>';
     return;                     
  }   

  if (type && type.toUpperCase()=='ACCEPT') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/ok.ico" align="absmiddle"  height="25px" width="25px"></img>Accept</span>';
     return;                     
  }   

  if (type && type.toUpperCase()=='SAVE') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/save.ico" align="absmiddle"  height="25" width="25"></img>Save</span>';
     return;                     
  }   

  if (type && type.toUpperCase()=='APPLY') {
     this.height=30;
     this.width=80;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/apply.ico" align="absmiddle"  height="25" width="25"></img>Apply</span>';
     return;                     
  }  

  if (type && type.toUpperCase()=='BACK') {
     this.height=30;
     this.width=100;
     this.text='<span style="font-family:Helvetica; font-size:9pt; color:white"><img src="../image/back.png" align="absmiddle"  height="25" width="25"></img>&nbspBack</span>';
     return;                     
  }  

 
 //this.areacolor=new Array();
 //this.areacolor[0]='#ffdc8a';
 //this.areapercent=new Array();
 //this.areapercent[0]=100;
}

function createButton(but,div) {
 var butobj=document.getElementById(div);
 if (!butobj) {return;}

 var butname = 'but'+(Math.floor(Math.random() * (99999999 - 1)) + 1);

 //if (browsertype=='iex') {
 //    but.height=numeric(but.height)+'px';
 //    but.width=numeric(but.width)+'px';
 //    if (butobj.innerHTML) {but.text=butobj.innerHTML}
 //    //butobj.innerHTML="<button class=noniebutton id="+butname+" style='width:"+but.width+"; height:"+but.height+"'>"+but.text+"</button>";
 //    if (but.type != 'exit') { 
 //         butobj.innerHTML="<button class=noniebutton id="+butname+" style='height:"+but.height+"'>"+but.text+"</button>";
 //    }
 //    else {
 //         butobj.innerHTML="<button class=nonieexitbutton id="+butname+" style='width:"+but.width+"; height:"+but.height+"px'>"+but.text+"</button>";
 //    }
 //   return;
 //}

if (but.areaalign.toUpperCase()=='VERTICAL') {but.areaalign='HORIZONTAL'}
var dummy$$but=document.getElementById('dummy$$but');
if (dummy$$but==null) {
    dummy$$but=document.createElement('div');
    dummy$$but.id="dummy$$but";
    document.getElementsByTagName('body')[0].appendChild(dummy$$but);
}

 var gradienttype='0';
 var ffgradienttype='top'; 
 var sfgradienttype='90deg';
 var ele=but.areacolor.length;
 dummy$$but.innerHTML='';
 but.areaalign=but.areaalign.toUpperCase();
 if (but.areaalign!='HORIZONTAL') {gradienttype='1'; ffgradienttype='left'; sfgradienttype='45deg'}
 if (ele<but.areapercent.length) ele=but.areapercent.length;
 var txt='<div class=fancydatawrap style="cursor:pointer; border:'+but.border;
 if (but.width) txt += '; width:'+but.width+'px';
 if (but.width) txt += '; height:'+but.height+'px';
 txt += '" onmousedown=chg$$But("in",this,"'+butname+'")';
//txt += ' onmouseover=chg$$ButFilter("over",this)';
//txt += ' onmouseout=chg$$ButFilter("out",this)';
  txt += ' onmouseover=chg$$ButFilter("over",this,"'+butname+'","'+but.hovereffect+'")';
  txt += ' onmouseout=chg$$ButFilter("out",this,"'+butname+'","'+but.hovereffect+'")';
 txt += ' onmouseup=chg$$But("out",this,"'+butname+'")';
 txt +='>';
 for (var x=0; x<ele; x++) {
     if (but.areaalign=='HORIZONTAL')
        txt +='<div class=fancycolor style="'
     else
        txt +='<div class=fancycolor style="height:100%;';
     if (but.areacolor[x]) {
        var colors=but.areacolor[x].split(':');
        if (colors.length==1) {txt +='background-color:'+colors[0];}
        else {
            if (browsertype=='ie') {
				if (ie_version < 10) {txt += ' filter:progid:DXImageTransform.Microsoft.Gradient (GradientType='+gradienttype+', StartColorStr=' +colors[0]+' endColorStr=' +colors[1]+')';}
				else {txt += 'background: -ms-linear-gradient('+ffgradienttype+', ' +colors[0]+' 0%, ' +colors[1]+' 100%)'; }
//                txt += ' filter:progid:DXImageTransform.Microsoft.Gradient (GradientType='+gradienttype+', StartColorStr=' +colors[0]+' endColorStr=' +colors[1]+')';
            }
            else {
                if (browsertype=='ff') {
                    txt += '; background: -moz-linear-gradient('+ffgradienttype+', '+colors[0]+', '+colors[1]+')';
                }
                else { 
                    txt += '; background-image: -webkit-linear-gradient('+sfgradienttype+', '+colors[0]+', '+colors[1]+')';
                    
                }
            }
        }
     }
     if (but.areaalign=='HORIZONTAL') {
       if (but.areapercent[x]) txt +='; height:'+but.areapercent[x]+'%';
       txt +='"></div>';
     }
     else  {
        if (but.areapercent[x]) txt +='; width:'+but.areapercent[x]+' %';
        txt +='"></div>';
     }
 }
 if (!isBlank(butobj.innerHTML)) {but.text=butobj.innerHTML};
 if (browsertype!='Kie' && but.type.toUpperCase() !='EXIT') {txt += '<div style="position:absolute; width:'+but.width+'px;"><div class=fancydatanonie id='+butname+'>'+but.text+'</div></div></div>';} 
 else {txt += '<div class=fancydata id='+butname+'>'+but.text+'</div></div>';}
 dummy$$but.innerHTML=txt;
 var butobjdata=document.getElementById(butname);
 var top=but.height-butobjdata.offsetHeight-3;
 var left=but.width-butobjdata.offsetWidth;
 if (browsertype=='Kie') {
   butobjdata.style.top=top/2;
   butobjdata.style.left=left/2;
   butobj.style.width=0;
 }
 else {
   if (but.height<= 30) { 
      if (but.height > 20 && but.height < 25) {butobjdata.style.paddingTop='7px';}
      var toppadamt=0;
      var offsetdiff=but.height-butobjdata.offsetHeight;
      if (offsetdiff > 4) {
        toppadamt=(but.height/2)-(butobjdata.offsetHeight/2);
        toppadamt=toppadamt.toFixed(0);
        if (toppadamt > 5) {toppadamt = 5;} 
        butobjdata.style.paddingTop=toppadamt+'px';
      }
   }
   if (but.type.toUpperCase()=='EXIT') {
      butobjdata.style.top=top/2;
      butobjdata.style.left=left/2;
      butobj.style.width=0;
      butobj.style.right='40px';
   }
 }
 butobj.innerHTML=dummy$$but.innerHTML
 dummy$$but.innerHTML='';
}


function chg$$But(dir,obj,dtaId)
{
 dir=dir.toUpperCase();
 var dobj=document.getElementById(dtaId);

 if(dir=='IN'|| dir=='*IN'){
  dobj.lang=obj.style.borderStyle;
  obj.style.borderStyle='inset';
  var top = parseInt(dobj.style.top+0,10);
  var left = parseInt(dobj.style.left+0,10);
  //dobj.style.top=top+1;
  //dobj.style.left=left+1;
 }

 if(dir=='OUT' || dir=='*OUT'){
  obj.style.borderStyle=dobj.lang;
//obj.style.borderStyle='solid';
  var top = parseInt(dobj.style.top+0,10);
  var left = parseInt(dobj.style.left+0,10);
  //dobj.style.top=top-1;
  //dobj.style.left=left-1;
 }
}

function chg$$ButFilter(posn,obj,butname,hover) {
 hover=hover.toUpperCase();
 var bobj=document.getElementById(butname);
   if (posn=='over') {
      switch(hover) {
        case 'FADE':
          obj.style.filter="alpha(opacity=75)";
          bobj.style.filter="alpha(opacity=100)";
          break;
        case 'GLOW':
          bobj.style.filter="glow(color=#0000FF,strength=2)";
          break;
        case 'SHADOW':
         bobj.style.filter="shadow(color=#0000FF,strength=1)";
         break
      } 
   }
   else {
      switch(hover) {
        case 'FADE':
         obj.style.filter="alpha(enabled=0)";
         bobj.style.filter="alpha(enabled=0)";
         break;
        case 'GLOW':
         bobj.style.filter="glow(enabled=0)";
         break
        case 'SHADOW':
         bobj.style.filter="shadow(enabled=0)";
         break
      }
  }
}

//function chg$$ButFilter2(posn,obj,butname,hover) {
// hover=hover.toUpperCase();
// var bobj=document.getElementById(butname);
//   if (posn=='over') {
//      if (hover=='FADE') {
//        obj.style.filter="alpha(opacity=75)";
//        bobj.style.filter="alpha(opacity=100)";
//      }
//      if (hover=='GLOW') {
//         bobj.style.filter="glow(color=#0000FF,strength=1)";
//      } 
//   }
//   else {
//      if (hover=='FADE') {
//         obj.style.filter="alpha(enabled=0)";
//         bobj.style.filter="alpha(enabled=0)";
//      }
//      if (hover=='GLOW') { 
//         bobj.style.filter="glow(enabled=0)";
//      }
//  }
//}
// -------------- End Fancy Buttons

function getFormVar(useform) {
  var form=' ';
  var obj="";
  var index=0; 
  var formarray=new Array();
  if (useform) form=useform;
  else form=currentform;
  obj=document.getElementsByName(form)[0];
   
  if (obj==null) {alarm('required form - '+form+' - not found'); return ''}

  for (var j=0; j<obj.length; j++) {
      if (attributeValue(obj[j],'dummy') != undefined) {continue} 
      if (obj[j].className=='subdatefield') {
          if (obj[j].name.sst(1,4)=='d1#$') {
              formarray[index]=obj[j].name.split('d1#$')[1];
              index ++;
          }
      }
      if ((obj[j].tagName == 'INPUT' && obj[j].className !='subdatefield') || obj[j].tagName == 'TEXTAREA' || obj[j].tagName=='SELECT' || obj[j].className=='datefield') {
        if (obj[j].name!='') formarray[index]=obj[j].name;
        else formarray[index]=obj[j].id; 
        index ++;  
      }
  }
  return formarray; 
 }


function loadSelect(sel,ary,dft) {                   
  if (ary.length<1) return;                      
  var obj=document.getElementById(sel);          
  if (obj==null) return;                         
  var len=obj.length;                            
    for (var i=0; i<len; i++) {                  
      try {                                      
        obj.options[0] = null;                   
      } catch (e) {}                             
    }                                            
    var opttxt='';                               
    for (i=0; i<ary.length; i++) {               
        ary[i]=''+ary[i];                        
        var opt=ary[i].split(':');               
        if (opt.length>1) opttxt=opt[1];         
        else opttxt=opt[0];                      
        var addopt = new Option(opttxt,opt[0]);  
        obj.options[obj.length] = addopt;        
    } 
    if (dft) {changeVar(sel,dft)} 
}


function assignSelectVar(selfrom,selto,dft) {                   
                   
  var obj=document.getElementById(selfrom);          
  if (obj==null) return;  
  var obj2=document.getElementById(selto);          
  if (obj2==null) return;
                        
  var len=obj.length; 
  var len2=obj2.length;                          
  for (var i=0; i<len2; i++) {                  
      try {                                      
        obj2.options[0] = null;                   
      } catch (e) {}                             
    }                                            
                            
    for (i=0; i<len; i++) {               
        //var opt=obj[i].value;               
        //var opttxt=obj[i].text;                      
        var addopt = new Option(obj[i].text,obj[i].value);  
        obj2.options[obj2.length] = addopt;        
    } 
    if (dft) {changeVar(selto,dft)} 
}

function getUrlParms() {
  var urlprms=new Object();
  var getVars = new Array();
  var qString = unescape(document.location.search.substring(1));
  var pairs = qString.split('&');
  for (var i in pairs) {
      var nameval = pairs[i].split('=');
      if (nameval.length>1) {
         urlprms[nameval[0]]= nameval[1];
      }
  } 
  return urlprms;
}                

urlparm=getUrlParms();

function searchCol(tabl,column,val,matchtype,startatrow) { 

 //matchype='partial' or 'total' the default is 'full'

 var len=0; 
 if (!startatrow) {var startatrow='top'}
 else {startatrow=numeric(startatrow)}
 if (!matchtype || (matchtype != 'partial')) {var matchtype='full'}
 var valuetype='char';
 var cmpval='';
 try {
    val=val.trim().toUpperCase();
    if (matchtype='partial') {len=val.length}
 }
 catch(e) {val=numeric(val); valuetype='num';}
 posTabCursor(tabl,startatrow);
 readRow(); 
 while (!eof) {
   if (valuetype=='char') {
      cmpval=valueOfCol(column).trim();
      if (len !=0) {cmpval=cmpval.sst(1,len).toUpperCase()}
   }
   else {cmpval=numValueOfCol(column);}
   
   if (cmpval==val) {
      var obj=rows[currentrow]; 
      obj.scrollIntoView(false);      
      //try {
         //if (currentrow==0) {rows[currentrow].focus();}
         //else {rows[currentrow-1].focus();}  
      //}  catch(e) {}

      var ptrobj=eval('tabrowclicked.'+tabl);
      if (ptrobj != obj) { 
         obj.lang=obj.style.backgroundColor;   
         var selectcolor=rowselectcolor;
         try {
             var rowsltcolor=eval('tab$$selectcolor.'+clickedtable);
             selectcolor=rowsltcolor;
         } catch(e) {}    
         obj.style.backgroundColor=selectcolor;       
         try {                                                        
             eval('tabrowclicked.'+tabl+'.style.backgroundColor=tabrowclicked.'+tabl+'.lang'); 
         } catch (e) {}                                               
         try {                                                        
            eval('tabrowclicked.'+tabl+'=obj');            
         } catch (e) {}
      } 
      return currentrow;                                              
      break;
   }
   readRow();
 }
 return -1; 
}


function spinDef(id) {
this.id=id; 
this.size=10;
this.align='right';
this.maxlength=10;
this.increment=1;
this.lowervalue='none';
this.uppervalue='none';
this.upfunction='spinValue';
this.downfunction='spinValue'; 
}

function applySpinDef(obj,area) {
 var sw=28+(obj.size-1)*7; 
 var swfull=sw+13;
 var txt="<span class=spincontainer style='width:"+swfull+"px'>";
     txt += "<div class=spinwrap style='width:"+swfull+"px'>";
     txt += "<input name="+obj.id+" id=" +obj.id + " style='text-align:"+obj.align+"' size="+obj.size+" maxlength="+obj.maxlength+">";
     txt += "<div class=spinimgwrap>";
     txt += " <img class=spinimgup src='../image/spin_up.gif'";
     txt += " onclick="+obj.upfunction+"('"+obj.id+"','up',"+obj.increment+",'"+obj.lowervalue+"','"+obj.uppervalue+"') ondblclick="+obj.upfunction+"('"+obj.id+"','up',"+obj.increment;
     txt += ",'"+obj.lowervalue+"','"+obj.uppervalue+"')"; 
     txt += " onmouseover=this.className='spinimgupover' onmouseout=this.className='spinimgup'></img>";
    
     txt += " <img class=spinimgdown src='../image/spin_down.gif'";
     txt += " onclick="+obj.downfunction+"('"+obj.id+"','down',"+obj.increment+",'"+obj.lowervalue+"','"+obj.uppervalue+"') ondblclick="+obj.downfunction+"('"+obj.id+"','down',"+obj.increment;
     txt += ",'"+obj.lowervalue+"','"+obj.uppervalue+"')";
     txt += " onmouseover=this.className='spinimgdownover' onmouseout=this.className='spinimgdown'></img>"; 
       

     txt += "</div></div></span>"; 
 changeContent(area,txt);
 return true;
}
 
function spinValue(fld, dir, by, lower, upper) {
 var value=0;
 
 if (!by || by=='') {var by=1}
 else {by = numeric(by)} ;
 if (!lower || lower=='none') {var lower=-99999999999999}
 else {lower=numeric(lower)} ;
 if (!upper || upper=='none') {var upper=99999999999999;}
 else {upper=numeric(upper)}
 
 if (dir=='up') {value=numValueOf(fld)+by}
 else {value=numValueOf(fld)-by}
 if (value < lower || value > upper) {return}
 changeVar(fld,value);

}


function removeElement() {
 for (var i=0; i<arguments.length; i++) {
     var obj=document.getElementById(arguments[i]); 
     try { 
         obj.parentNode.removeChild(obj);
         delete obj;
     } catch (e) {}
 }
}


function isEqual(v1,v2) {
 try {v1=v1.trimr()} catch(e) {}
 try {v2=v2.trimr()} catch(e) {}  
 if (v1==v2) {return true}
 else return false;
}  


function dataStore() {
  var numflds='';
  for (var i=0; i<arguments.length; i++) {
      var fulldata=arguments[i].split(':');
      var use=fulldata[0];
      eval('this.'+use+'=new Array()');
      if (fulldata.length>1) {
         if (fulldata[1].toUpperCase()=='N') {
            if (numflds=='') numflds="'"+use+"'";
            else numflds += ','+"'"+use+"'";
         }
      }
  }
  if (numflds=='') this.numflds=new Array();
  else eval("this.numflds=["+numflds+"]"); 
}


function inzDataStore(obj,indx) {
  
  if (arguments.length==1) {
      for (var property in obj) {
          if (property !='numflds')
             eval('obj.'+property+'=new Array()');
      }
  return;
  }
  
  for (var property in obj) { 
      if (property !='numflds') {
         if (obj.numflds.length>0) {
            var matchfound=false;
            for (var i=0; i<obj.numflds.length; i++) {
                if (obj.numflds[i]==property) {
                   matchfound=true;
                   i=9999; 
                }
            }
            if (!matchfound) eval('obj.'+property+'['+indx+']=" "');  
            else eval('obj.'+property+'['+indx+']=0');
         }
         else eval('obj.'+property+'['+indx+']=" "');
      }
  }

}

//--- Start Saving/comparing and Restoring Variables

function saveVar() {

 var form='';
 var obj=''; 
  
 for (var i=0; i<arguments.length; i++) {
 
      var element=arguments[i].split(':');

  if (element[0]=='*form') {
     form=element[1];
     //obj=document.getElementById(form);

     try {
       obj=document.getElementsByName(form)[0];
     } catch (e) {alarm('required form - '+form+' - not found'); return}  

     if (obj) {
        for (var j=0; j<obj.length; j++) {
		    if (attributeValue(obj[j],'dummy') != undefined) {continue} 
            if ((obj[j].tagName == 'INPUT' || obj[j].tagName == 'TEXTAREA' || obj[j].tagName=='SELECT') && obj[j].className !='subdatefield') {
               eval("this."+obj[j].name+"=obj[j].value"); 
            }
            else {
                 if (obj[j].className=='subdatefield' && obj[j].name.sst(1,4)=='d1#$') {
                    var objp=obj[j].parentNode.parentNode; 
                    eval("this."+objp.id+"=valueOf(objp.id)"); 
                 }
            }
        }
     }
  }
  else {
       obj=document.getElementById(element[0]);
       if (obj) {
          if (obj.className !='datefield') {
             eval("this."+element[0]+"=obj.value");
          }
          else {
             eval("this."+element[0]+"=valueOf(obj.id)");
          }
       }
  }

 } //end for

} 


saveVar.prototype.restoreVar = function() {
 var obj='';
 if (arguments.length==0) {
    for (var property in this) {
       obj=document.getElementById(property);
       if (obj) {
          if (obj.className !='datefield') {
             eval("obj.value=this."+property);
          }
          else {
             eval("var v=this."+property); 
             changeVar(obj.id,v);
          }
       }
    }
    return;
 }

 var form='';
 
 for (var i=0; i<arguments.length; i++) {
 
      var element=arguments[i].split(':');

  if (element[0]=='*form') {
     form=element[1]
     obj=document.getElementById(form);
     if (obj) {
	 	for (var j=0; j<obj.length; j++) { //NEW NEW
	    if (attributeValue(obj[j],'dummy') != undefined) {continue} 
        try {
            if (obj[i].className !='datefield') {
               eval("obj[i].value=this."+obj[i].name);
            } 
            else {
              if (obj[i].name.sst(1,4)=='d1#$') { 
                 var obj2=obj[j].parentNode.parentNode;
                 eval("var v=this."+obj2.id);
                 changeVar(obj2.id,v);
              }
            }
        } catch(e) {}
     }
	}
  }
  else {
       obj=document.getElementById(element[0]);
       if (obj) {
          if (obj.className !='datefield') {
             eval("obj.value=this."+element[0]);
          }
          else {
              eval("var v=this."+element[0]);
              changeVar(obj.id,v);
          } 
       }
  }

 } //end for

} 


saveVar.prototype.hasChangedVar = function() {
 var obj='';
 var value='';
 if (arguments.length==0) {
    for (var property in this) {
       obj=document.getElementById(property);
       if (obj) {
          eval("value=this."+property);
          if (obj.className != 'datefield') {
             if (!isEqual(value,obj.value)) return true;
          }
          else {
             if (!isEqual(value,valueOf(obj.id))) return true;
          }
       }
    }
    return false;
 }

 var form='';
 
 for (var i=0; i<arguments.length; i++) {
 
      var element=arguments[i].split(':');

  //if (element[0]=='*form') {
  //   form=element[1]
  //   obj=document.getElementById(form);
   //  if (obj) {
    //    try {
   //         eval("value=this."+obj[j].id);
   //         if (!isEqual(value,valueOf(obj[j].id))) return true;  
   //    } catch(e) {}
    // }
  //}
  //else {
       obj=document.getElementById(element[0]);
       if (obj) {
          eval("value=this."+element[0]);
          try {
              if (obj.className !='datefield') {
                 if (!isEqual(value,obj.value)) return true;
              }
              else {
                 if (!isEqual(value,valueOf(obj.id))) return true;
              }  
          } catch(e) {}
       }
  //}

 } //end for
 return false;
} 


saveVar.prototype.savedValueOf = function(fld) {
 var value='';
 try {
     eval("value=this."+fld);
     return value;  
 } catch(e) {return ''}
}



saveVar.prototype.returnChangedVar = function(as) {
 var value=''; 
 if (!as) {var as='sqlupdateobj'}
 if (as != 'array') {as='sqlupdateobj'}
 if (as=='array') {var rtnas=new Array()}
 else {var rtnas=new sqlUpdateObj()}
  
 for (var property in this) {
     obj=document.getElementById(property);
     if (obj) {
        eval("value=this."+property);
        var vlu=''; 
        if (obj.className !='datefield') {vlu=obj.value;}
        else {vlu=valueOf(obj.id)} 
        if (!isEqual(value,vlu)) {
           if (as=='array') {rtnas.push(property)}
           else {rtnas.addVar(property)}
        }
     }
 }
 return rtnas;
} 


function clone(obj) {
 if (Object.prototype.toString.call(obj) === '[object Array]') {
    var out = [], i = 0, len = obj.length;
    for ( ; i < len; i++ ) {
        out[i] = arguments.callee(obj[i]);
    }
    return out;
 }
 if (typeof obj === 'object') {
    var out = {}, i;
    for ( i in obj ) {
         out[i] = arguments.callee(obj[i]);
    }
    return out;
 }
 return obj;
}


// Start email functions

function isValidEmail(str) {
 var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
 return (filter.test(str.trim()))
}

function emailDef() {
  this.to=''; //address1; address2;..addressn..
  this.from='auto@emailer.com';
  this.subject='';
  this.cc='';
  this.bcc='';
  this.attachment=new Array(); //drive/
  this.message='';
  this.type='html'; 
}


function sendEmail(email) {

  var i=0;

  var attachments='';
  var mailto='';
  var mailcc='';
  var mailbcc='';
  var emails='';
  if (!productionmode) { // In test mode all email addresses shoud therefore have "advantum" in it
	var txt=email.to+';'+email.cc+';'+email.bcc;
	txt=txt.toLowerCase().split(';'); 
	for (i=0; i<txt.length; i++) {
		 if (txt[i]) { 
			 if (txt[i].split('advantum').length==1) {
				 alarm('In test mode all email addresses should contain "advantum"\n\nemail not sent');
				 return false;
			 }
		 }				 
	}

  }
  
  emails=email.to.split(';');
  for (i=0; i<emails.length; i++) {
	   mailto += '&to[]='+emails[i];
  }	
  

  emails=email.cc.split(';');
  for (i=0; i<emails.length; i++) {
	   mailcc += '&cc[]='+emails[i];
  }	
  
  emails=email.bcc.split(';');
  for (i=0; i<emails.length; i++) {
	   mailbcc += '&bcc[]='+emails[i];
  }	
  
  
  for (i=0; i<email.attachment.length; i++) {
	   attachments += '&attachment[]='+email.attachment[i];
  }	
  if (!email.from) {
	 if (!isBlank(username)) {email.from=username.trim()+'.com'}
	 else {email.from='Auto@sender.com'}
  }

  ajaxCall('phpSendEmail.php',"to="+mailto+"&from="+email.from+"&subject="+email.subject+"&cc="+mailcc+"&bcc="+mailbcc+"&message="+email.message+attachments);
  //if (ajaxresponse.split('succesfully').length>1) {
  if (ajaxresponse.split('has been sent').length>1) {
	  return true;
  }
  else {
	  alarm(ajaxresponse.strip('<br>','</br>','<br />'));
	  return false;
  }

  return true;
}

// End email functions  


function ajaxCall(pgm,urlp){
 var dontwait=false;
 ajaxerror='';
 ajaxresponse='';
 //urlp=encodeURIComponent(urlp);     
 try {
    if ((urlp.length+pgm.length)<200) {
      var inpath=pgm+'?'+urlp+'&r_n='+(Math.floor(Math.random() * (99999999 - 1)) + 1)+'&sessionid='+sessionid;
      xmlHttp.open("GET",inpath, dontwait);
      xmlHttp.onreadystatechange = ajaxReturn;
      xmlHttp.send(null);
    }
    else {
      xmlHttp.open("POST",pgm, dontwait);
      xmlHttp.onreadystatechange = ajaxReturn;
      xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xmlHttp.send(urlp);
    }
 }
 catch (e){
      ajaxerror='Unspecified error on ajaxCall function\n'+e.message;
      return 
 }
}

function ajaxRequest(pgm,urlp,json,requestType){
 var dontwait=false;
 ajaxerror='';
 var ajaxresponse='';
 
 try {
    if (requestType==="GET") {
      
      var  inpath = "";
      
      if(urlp){
         inpath=pgm+'?'+urlp
      }else{
         inpath=pgm;
      }
      xmlHttp.open("GET", inpath, dontwait);
      xmlHttp.onreadystatechange = function(){
          
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status != 200) {
                    ajaxerror=xmlHttp.statusText;
                }
                if (xmlHttp.status == 200) {
                    ajaxresponse = xmlHttp.responseText;
                }
            }      
      };
      xmlHttp.send(null);
    }
    
    
    if (requestType=="POST") {
        
      xmlHttp.open("POST",pgm,dontwait);
      
      xmlHttp.onreadystatechange = function(){
          
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status != 200) {
                    ajaxerror=xmlHttp.statusText;
                }
                if (xmlHttp.status == 200) {
                    ajaxresponse = xmlHttp.responseText;
                }
            }      
      };
      
      xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xmlHttp.send(JSON.stringify(json));
    }
    
    
    if (requestType=="PATCH") {
        
      xmlHttp.open("PATCH",pgm, dontwait);
      
      xmlHttp.onreadystatechange = function(){
          
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status != 200) {
                    ajaxerror=xmlHttp.statusText;
                }
                if (xmlHttp.status == 200) {
                    ajaxresponse = xmlHttp.responseText;
                }
            }      
      };
        
      xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
      xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xmlHttp.send(JSON.stringify(json));
    }
 }
 catch (e){
      ajaxerror='Unspecified error on ajaxCall function\n'+e.message;
      alert(ajaxerror)
      return 
 }
 
 return ajaxresponse;
}

function ajaxRequestReturn() {
    
  var ajaxresponse;
  

} 



function ajaxReturn() {
  if (xmlHttp.readyState == 4) {
     if (xmlHttp.status != 200) {
         ajaxerror=xmlHttp.statusText;
     }
     if (xmlHttp.status == 200) {
         ajaxresponse = xmlHttp.responseText;
     }
  }
} 

function evalSpecial(string) {
  try {eval(string)} catch(e) {return false}
  return true;
}


function parseLineCsv(linecsv) {  

 // parse csv line by line into array  
  var csv = new Array(); 
  var i=0, j=0; 
  var linecsv = linecsv.replace(/,/g," ,");  
  var linecsv = linecsv.split(/,/g);  

 // This is continuing of 'split' issue in IE  
 // remove all trailing space in each field  

  for (var i=0;i <linecsv.length;i++) {  
    linecsv[i] = linecsv[i].replace(/\s*$/g,"");     
  }   

  linecsv[linecsv.length-1]=linecsv[linecsv.length-1].replace(/^\s*|\s*$/g,"");  

  var fstart = -1;  

  for (var i=0;i<linecsv.length;i++) { 
    if (linecsv[i].match(/"$/)) {  
      if (linecsv[i].match(/^"/) && linecsv[i].length > 1) {
        linecsv[i] = linecsv[i].replace(/^"|"$/g,"");
      }
      else {
             
        if (fstart>=0) {  
          for (var j=fstart+1;j<=i;j++) {  
            linecsv[fstart]=linecsv[fstart]+","+linecsv[j];  
            linecsv[j]="-DELETED-";  
          }  
           
          fstart=-1;   
        }  
      }  
    } 
       
    fstart = (linecsv[i].match(/^"/)) ? i : fstart;  
  }  

  var j=0;  

  for (var i=0;i<linecsv.length;i++) {  
    if (linecsv[i]!="-DELETED-") {  
      csv[j] = linecsv[i];  
      csv[j] = csv[j].replace(/^\s*|\s*$/g,"");     // remove leading & trailing space  
      csv[j] = csv[j].replace(/^"|"$/g,"");         // remove " on the beginning and end  
      csv[j] =csv[j].replace(/""/g,'"');           // replace "" with "               
      j++;  
    }
  }  
     
  return csv;  
}  


function makeFields(fieldspan,forgridhtml) {

  //var field='*all'}
  var flds;
  if (fieldspan) {
      fieldspan=document.getElementById(fieldspan); 
      if (fieldspan.tagName=='SPAN' && attributeValue(fieldspan,'field') !=undefined) {
          var fobj=fieldspan.attributes; 
          var cfobj=fieldspan;
          makeAllFields();
      }
      return;
  }
 
  var flds=document.getElementsByTagName("span"); 
  var i=0;
  var j=0;
  var k=0;
  var slttxt='';
  var slt='';

  for (i=0; i<flds.length;i++) { 
    var fobj=flds[i].attributes;
    var cfobj=flds[i]; 
    if (attr('field')!=undefined) {makeAllFields()}
    else {
       if (attr('button') != undefined) {makeAllButtons()}
    }
  } 


  function makeAllFields() {

//.ref         {field from the data dictionary that is to be referenced}
//.type        {'char','numeric','time','date'}
//.length      {ll or ll,dd where ll=total length and dd=decimal length. eg: 8 or 11,0 or 13,3}
//             {ignored for type='time' or 'date'}    
//.decimal     {decimal protion if not stated in the length definition}
//             {ignored for type='time' or 'date'} 
//.editcode    {ignored for type='time' or 'date'} 
//.fieldclass
//.label       
//.nolabel     {no label is to be used}
//.labelclass
//.labelwidth
//.upper
//.output
//.textarea    {ignored for type='time' or 'date'} 
//.rows        {ignored for type='time' or 'date'} 
//.cols        {ignored for type='time' or 'date'} 
//.nocalendar  {Calendar not to be displayed for date field} 
//.select      {field create as a select field. Use a string of ordered pairs to show the values/text set
//              Example: select='1:One, 2:Two' eq. <select><option value=1>One</value><option value=2>Two</option></select>} 
//.readonly
//.editmask

    var fnam='';
    var f='';
    var len=0;
    var deci='';
    var nbr='';
    var nbr2='';
    var onblur='';
    var editcode='j';
    var txt1='';
    var txt2=''; 
    var ld='';
    var output='';
    var c=80; 
    var upper='';
    var upper2='';
    var upflag=0;
    var fieldclasstxt=''; 
	var readonlytxt='';
	var grid_skip='';
	if (forgridhtml) {
	    var grid_skip=' onmouseover=_skip_$outside=true;';
		if (browsertype != 'ie') {grid_skip += ' onmouseout=_skip_$outside=false'}
	}
	
    if (attr('readonly') != undefined) {
	    readonlytxt += ' readonly ';
		if (attr('readonly')=='text') {fieldclasstxt=" class=outputastext"}
	}
    var evnts=['onchange','onkeypress','onkeyup','onkeydown','onmousedown','onmouseover','onmouseout','onclick'];

    if (attr('fieldclass') != undefined) {fieldclasstxt=" class="+attr('fieldclass')}

    if (attr('output') != undefined && attr('output')=='text') {fieldclasstxt=" class=outputastext"}

    var txt="<input type=text name="+attr('field')+" ID="+attr('field')+fieldclasstxt+readonlytxt; 
    if (attr('output') != undefined) {txt += ' protected=yes ';}

    if (attr('ref') != undefined) {fnam=attr('ref')}
    else {fnam=attr('field')}
    f=clone(getFieldAttr(fnam)); 
    if (!f) {f=new Object()} 
   
    fnam=attr('field'); 

    if (attr('label'))    {f.desc=attr('label')}
    if (attr('type'))     {f.type=attr('type')}
    if (attr('length')) {
       ld=attr('length').split(',');
       f.length=ld[0];
       if (ld[1]) {f.decimal=ld[1]}
    }
    if (attr('decimal'))  {f.decimal=attr('decimal')}
    if (attr('editcode')) {f.editcode=attr('editcode')} 

    if (!f.type)   {f.type='char'}
    if (!f.length) {f.length=20}

    if (attr('labelclass')==undefined) {f.labelclass='label'}
    else {f.labelclass=attr('labelclass')}
    if (attr('labelwidth')==undefined) {f.labelwidth=''}
    else {f.labelwidth=" style='width:"+attr('labelwidth')+"px'";} 

    if (attr('nolabel') != undefined) {
       // Do nothing
    }
    else {
       if (attr('label') != undefined) {
           //if (attr('label')) {
               txt1 = "<span id="+fnam+"_label class="+f.labelclass+f.labelwidth+">"+attr('label')+"</span>";
           //}
       }
       else {
           if (f.desc) {
               txt1 = "<span id="+fnam+"_label class="+f.labelclass+f.labelwidth+">"+f.desc+"</span>"; 
           }
       } 

    }

	if (attr('editmask') != undefined) {
	    txt='';
		if (attr('required') != undefined) {
            txt += "&nbsp;&nbsp<img id="+fnam+"_required src='../image/itemRequired.gif'></img>"; 
        }
	    if (attr('search') != undefined) {
            txt += "&nbsp;&nbsp<img id="+fnam+"_search src='../image/lookup.gif' onmouseover=_skip_$outside=true; onmouseout=_skip_$outside=false; onClick="+attr('search')+"></img>"; 
        }
	    cfobj.innerHTML=txt1+editMask(fnam,f,attr('editmask'),readonlytxt)+txt;
        if (attr('output') != undefined) {protect(attr('field'))}
		return;
	}	
	

    if (f.type=='date' || f.type=='time') {
        cfobj.ondatechange=attributeValue(cfobj,'onchange');
        cfobj.onchange='';
    }


    if (f.type=='date') {
        cfobj.id=attr('field');
        createDateVar(attr('field'),datefmt,attr('output'),attr('readonly'));
        txt=cfobj.innerHTML;
		if (attr('required') != undefined) {
            txt += "&nbsp;&nbsp<img ID="+fnam+"_required src='../image/itemRequired.gif'></img>"; 
        }
        if (attr('output') == undefined && attr('nocalendar') == undefined) {
            txt += "&nbsp<img id="+fnam+"_calendar src='../image/cal.jpg' onclick=promptCal('"+cfobj.id+"') align=middle; border=1></img>";
        }
        if (attr('search') != undefined) {
            txt += "&nbsp;&nbsp<img id="+fnam+"_search src='../image/lookup.gif' "+grid_skip+"  onClick="+attr('search')+"></img>"; 
        }
        cfobj.innerHTML=txt1+txt;
        if (attr('output') != undefined) {protect(attr('field'))}
        return;
    }

 
    if (f.type=='time') {
        cfobj.id=attr('field');
        createTimeVar(attr('field'),timefmt,attr('output'),attr('readonly'));
        txt=cfobj.innerHTML;
		if (attr('required') != undefined) {
            txt += "&nbsp;&nbsp<img ID="+fnam+"_required src='../image/itemRequired.gif'></img>"; 
        }
        if (attr('search') != undefined) {
            txt += "&nbsp;&nbsp<img id="+fnam+"_search src='../image/lookup.gif'  "+grid_skip+" onClick="+attr('search')+"></img>"; 
        }
        cfobj.innerHTML=txt1+txt;
        if (attr('output') != undefined) {protect(attr('field'))}
        return;
    }

    if (attr('select') != undefined) {
        txt="<select name="+attr('field')+" ID="+attr('field')+fieldclasstxt+readonlytxt;
		assignFieldEvents();
        if (f.type=='numeric') {slttxt += " class=numeric fldtype=numeric";}
		if (forgridhtml) {
		       txt += " onblur=_check$_Entry('@nbr',this)"; 
 	    } 
        txt += ">";
        slt='';
        var pairs=attr('select').split(',');
        for (j=0; j<pairs.length; j++) {
           slt=pairs[j].split(':');
           if (slt.length>1) {txt += '<option value='+slt[0].trim()+'>'+slt[1].trim()+'</option>';}
           else {txt += '<option value='+slt[0].trim()+'>'+slt[0].trim()+'</option>';}   
        }
        txt += '</select>';
		if (attr('required') != undefined) {
            txt += "&nbsp;&nbsp<img id="+fnam+"_required src='../image/itemRequired.gif'></img>"; 
        }
		cfobj.innerHTML=txt1+txt;
        if (attr('output') != undefined) {protect(attr('field'))}
        return;
    }

    assignFieldEvents();

    len=numeric(f.length);
    if (f.type=='numeric' || f.decimal) { 
        f.type='numeric'; 
        deci=numeric(f.decimal);
        if (deci>len) {deci=len}
        if (f.editcode) {editcode=f.editcode}
		if (forgridhtml) {
			onblur="onBlur=grid_$Numeric(this,"+deci+",'"+editcode+"',"+len+",'@nbr')";
		}
		else {
			onblur="onBlur=editField(this,"+deci+",'"+editcode+"',"+len+")";
		}
        nbr=" class=numeric fldtype=numeric decimal="+deci+" editcode='"+editcode+"' ";
        txt += " length="+len+" size="+(len+(len-deci)/3)+nbr+onblur+">"; 
    }
    else {
       if (attr('upper') != undefined) {
	       upflag=1; 
		   upper=" upper='yes' onkeypress='keyPressedToUpper(event)'";
		   if (forgridhtml) {
		       upper2=" onblur=grid_$Upper(this,'@nbr')";
		   }
		   else {
		      upper2=" onblur='this.value=this.value.toUpperCase()' ";
		   }
	   }
	   else {
	       if (forgridhtml) {
		       onblur=" onblur=_check$_Entry('@nbr',this)"; 
		   } 
	   }
       if (attr('textarea')==undefined && len<80) {
           txt += " length="+len+" fldtype=char size="+(len+2)+" maxlength="+len+nbr+onblur+upper+upper2+">"; 
       }
       else {
           if (attr('cols')) {c=numeric(attr('cols'))} 
           if (attr('rows')) {r=numeric(attr('rows'))} else {r=len/c+1}
           txt="<textarea name="+attr('field')+" ID="+attr('field')+" rows="+r+" cols="+c+upper+" length="+len+" fldtype=char onkeyup='return limitTextLength(this,"+len+")'"
		   
		   if (forgridhtml) {
		       txt+=" onblur=grid_$Textarea(this,'@nbr',"+len+","+upflag+")";
		   }
		   else {
		       txt+=" onblur='setTextLength(this,"+len+","+upflag+")'";
		   }
		   txt+=fieldclasstxt+readonlytxt+"></textarea>";  
       }
    }
	if (attr('required') != undefined) {
		txt += "&nbsp;&nbsp;<img id="+fnam+"_required src='../image/itemRequired.gif'></img>"; 
	}
    if (attr('search') != undefined) {
        txt += "&nbsp;&nbsp;<img id="+fnam+"_search src='../image/lookup.gif' "+grid_skip+" onClick="+attr('search')+"></img>"; 
    }

    cfobj.innerHTML=txt1+txt;
    //assignFieldEvents()
    if (attr('output') != undefined) {protect(attr('field'))}
 

    function assignFieldEvents() {
      var evnt;
      for (z=0; z<evnts.length; z++) {
           evnt=attr(evnts[z]);
           if (evnt && evnt!=undefined) {
              txt += ' '+evnts[z]+'="'+evnt+'" ';
              eval('cfobj.'+evnts[z]+'=""');
           }
       }
    }


  } //End "makeAllFields"

  function attr(fld) {
    try {
      return fobj.getNamedItem(fld).value; 
    } catch(e) {return undefined}
  }

  function makeAllButtons() {
   var type='submit';
   if (attr('type') != undefined) {
       type=attr('type'); 
   }
   btn=new buttonDef(type);
   cfobj.id=attr('button');
   if (attr('text') != undefined) {btn.text=attr('text')}
   if (attr('width') != undefined) {btn.width=attr('width')}
   if (attr('height') != undefined) {btn.height=attr('height')}
   if (attr('border') != undefined) {btn.border=attr('border')}
   if (attr('areacolor') != undefined) {btn.areacolor=attr('areacolor')}
   if (attr('areaalign') != undefined) {btn.areaalign=attr('areaalign')}
   if (attr('areapercentage') != undefined) {btn.areapercentage=attr('areapercentage')}
   if (attr('hovereffect') != undefined) {btn.hovereffect=attr('hovereffect')}
   createButton(btn,cfobj.id);

  }


}// End makeFields();


function limitTextLength(obj,len) {
 if (obj.value.length>(len-1)) {
     alarm('Limit of '+len+' characters reached');
     obj.focus();
     return false;
 }
 return true;
}

function setTextLength(obj,len,upflag) {
  if (obj.value.length>len) {
    obj.value=obj.value.substr(0,len);
 }
 if (upflag==1) {obj.value=obj.value.toUpperCase()} 
}


function limitPasteTextLength(obj,len) {
 if (window.clipboardData.getData("Text").length+obj.value.length>(len-1)) {
     alarm('Text to paste would result in the limit of '+len+' characters be exceeded');
     obj.focus();
     return false;
 }
 return true;
}


function fieldHTML(fldattr,forgridhtml) {
 var dynmfld=document.createElement("span");
 dynmfld.id='dynmfldd';
 document.getElementsByTagName('body')[0].appendChild(dynmfld); 
 dynmfld.innerHTML="<span id=dyn$m$fld "+fldattr+"></span>"; 
 makeFields('dyn$m$fld',forgridhtml); 
 var txt;
 if (typeof dyn$m$fld != 'undefined') {
     txt=dyn$m$fld.innerHTML; 
 }
 else {
     txt=dynmfldd.innerHTML;
 }
 //if (dyn$m$fld.id != 'dyn$m$fld') {
 //    txt="<span id="+dynmfld.id+" class=datefield type="+attributeValue(dynmfld,'type')+">"+txt+"</span>"; 
 //}

 document.getElementsByTagName('body')[0].removeChild(dynmfld);
 delete dynmfld;
 return txt; 
}

function setMarkFieldValue(obj) {
  var f=obj.id.split('@@_@@')[0];
  var t=document.getElementById(f);
  if (!t) {return}
  var found=true;
  var txt='';
  var x=0;
  var v='';
  while (found) {
    found=document.getElementById(f+'@@_@@'+x);
    if (found) {
	    v=found.value;
		while (v.length<found.size) {
			   if (t.className=='numeric') {v ='0'+v}
			   else {v += ' '}
		}	
	    txt += v
	}	
	x++;
  }
  t.value=txt; 
}

function splitMarkFieldValue(f) {
  var f=document.getElementById(f);
  var id=f.id;
  var fval=''+f.value; 
  isnumeric=false;
  if (f.className=='numeric') {isnumeric=true}
  if (isnumeric) {
      while (fval.length<f.size) {
             fval='0'+fval;
      }
  }
  var x=0;
  var y=0;
  while (f) {
     f=document.getElementById(id+'@@_@@'+y); 
	 if (!f) {break}
	 f.value=fval.substr(x,f.size); 
	 if (isnumeric) {
	     var p=0;
		 vl='';
	     for (p=0; p<f.size; p++) {
		      if (f.value.charAt(p)=='0' && vl=='') {}
			  else {vl += f.value.charAt(p)}
		 }
		 f.value=vl;
	 }
	 x += f.size;
	 y ++;
  }
}


function maskAutoJump(e,obj,to) {
 var key = getKeyCode(e); 
 if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==16) || (key==27) || (key==37) || (key==38) || (key==39) || (key==40)) {
    return;
 }
 if (obj.value.triml().length==obj.size) {
     focusOn(to);
 }
}

function editMask(fnam,obj,fmat,readonlytxt) {
  var txt=[];
  var fld=[];
  var fldlen=0;
  var fmttxt='';
  var fullsize=0;
  var f=0;
  var i=0;
  var chr;
  var istxt=false;
  var isfld=false;
  var firsttype='char';
    
  for (var f=0; f<fmat.length; f++) {
       chr=fmat.charAt(f);
       if (chr==' ') {
	      if (f==0 || istxt) {
		      isfld=true;
			  istxt=false; 
			  fldlen=0;
			  if (f>0) {
			      txt.push(fmttxt);
				  fmttxt='';
			  }
			  if (f==0) {firsttype='dec'}
		  }
          fldlen++; fullsize++;		  
      }
	  else {
	  	  if (f==0 || isfld) {
		      istxt=true;
			  isfld=false;
			  if (f>0) {
			      fld.push(fldlen);
				  fldlen=0;
              }
		  }
		  if (chr=='&') {chr='&nbsp;'}
          fmttxt += chr;			  
	  }
  }
  if (fldlen) {fld.push(fldlen)}
  if (fmttxt) {txt.push(fmttxt)}
  var s=fld.length;
  var string='';
  
  var interpret=function(len,n,obj) {
      if (obj.type=='numeric') {
          return "<input class=numeric dummy=1 id="+fnam+"@@_@@"+n+" size="+len+" maxlength="+len+" style='font-size:95%; font-family: fixed,monospace; border:none; margin:0px; widthx:"+(len*0.74)+"em' onKeyPress='return numbersOnly()' onkeyUp=maskAutoJump(event,this,'"+fnam+"@@_@@"+(n+1)+"') onchange=setMarkFieldValue(this)"+readonlytxt+">";
      }
     else {
         return "<input id="+fnam+"@@_@@"+n+" dummy=1 size="+len+" maxlength="+len+" style='font-size:95%; font-family: fixed,monospace; border:none; margin:0px; widthx:"+(len*0.95)+"em' onkeyUp=maskAutoJump(event,this,'"+fnam+"@@_@@"+(n+1)+"') onchange=setMarkFieldValue(this)"+readonlytxt+">";
    }
  }
  
  if (txt.length<s) {s=txt.length}
  for (i=0; i<s; i++) {
       if (firsttype=='char') {
	       string += txt[i]+interpret(fld[i],i,obj); 
	   }
	   else {
	       string += interpret(fld[i],i,obj)+txt[i];
       }	   
  }   
  if (txt.length>s) {string += txt[s]}
  if (fld.length>s) {string += interpret(fld[s],s,obj)}
  
  if (obj.type=='numeric') {string += "<input type=hidden id="+fnam+" name="+fnam+" class=numeric fldtype=numeric mask=1 size="+fullsize+" length="+fullsize+">"}
  else {string += "<input id="+fnam+" name="+fnam+" type=hidden fldtype=char mask=1 length="+fullsize+">"}
    
  //changeContent('result',string);
  return "<span id="+fnam+"@@wrap@@ dummy=1 style='border:2px inset; font-family:monospace,fixed; background-color:white; color:blue; overflow:hidden; padding:0; padding-right:1px; padding-top:1.5px; padding-left:2px; white-space:nowrap'>"+string+"</span>";
 
}




function addLoadEvent(func,where) {
  var oldonload = window.onload; 
  if (!oldonload || typeof window.onload != 'function') {
      window.onload=func;
      return; 
  }
  if (where=='*top') {
      window.onload = function() {
        func();
        oldonload();
      }
  }
  else {
        window.onload = function() {
          oldonload();
          func();
       }
  }
}


function breakString(string,len) {
  var n=-1;
  var txt=[''];
  var btxt='';
  var increment=false;
  var long;
  var separator='';
  var i=0;
  var k=0;
  string=''+string;
  if (!len || isNaN(len)) {
      txt[0]=string;
      return txt;
  }
  for (i=0; i<len; i++) {
       btxt += ' ';
  }
  string=string.split('<br>').join(btxt);
  string=string.trimr();
  var words=string.split(' '); 
  for (var i=0; i<words.length; i++) {
       if (words[i].length>len) {
           long=words[i].match(RegExp('.{1,'+len+'}','g'));
           for (var k=0; k<long.length; k++) {
                n++;
                txt[n]=long[k];
           }
           
       }
       else {
          if (n==-1) {n=0}
          else {increment=true} 
          separator='';
          if (txt[n].length>0) {separator=' '} 
          if (txt[n].length+words[i].length+separator.length<=len) {
              txt[n]=txt[n]+separator+words[i];
          }
          else {
              if (increment) {n++};
              txt[n]=words[i];
          }
          increment;
       }
  }
  return txt;
}


function appendExternalScript(src,where) {//where='head','body'
  try {
       if (!where) {var where='head'}
       var srcref=document.createElement('script');
       srcref.type="text/javascript";
       srcref.src=src; 
       if (typeof srcref!="undefined") {
           document.getElementsByTagName(where)[0].appendChild(srcref);
       }
  } catch(e) {}; 
}


function afterLoading() {

 var i=0;
 try {
      if (header.style) {setInterval("topIt()",100)}
 } catch(e) {} 

 
// if (browsertype != 'ie') {
     try {
          if (pageheader.style) {
              if (!pagebottomright.style.height) {
                  pagebottomright.style.height='98%';
              }
              setInterval("topIt2()",100)
          }
     } catch(e) {} 
 //}

 //Ensure clicking a form button does not submit the form
 try { 
      var forms=document.getElementsByTagName('FORM');
      for (i=0; i<forms.length; i++) {
           forms[i].onsubmit=function() {return false}
           try {if (!forms[i].id) {forms[i].id=forms[i].name}}catch(e){}
		   try {if (!forms[i].name) {forms[i].name=forms[i].id}} catch(e){}
      }
 } catch(e) {}

 //Ensure that all "<input" fields have IDs
 try { 
      var inputs=document.getElementsByTagName('INPUT');
      for (var i=0; i<inputs.length; i++) {
           if (!inputs[i].id) {inputs[i].id=inputs[i].name};
      }
 } catch(e) {}


 //Ensure that all "<select" fields have IDs
 try { 
      var inputs=document.getElementsByTagName('SELECT');
      for (var i=0; i<inputs.length; i++) {
           if (!inputs[i].id) {inputs[i].id=inputs[i].name};
      }
 } catch(e) {}


//Ensure that all "<textarea" fields have IDs
 try { 
      var inputs=document.getElementsByTagName('TEXTAREA');
      for (var i=0; i<inputs.length; i++) {
           if (!inputs[i].id) {inputs[i].id=inputs[i].name};
      }
 } catch(e) {}


//Ensure Buttons are given the correct ClassName
 try { 
      var inputs=document.getElementsByTagName('BUTTON');
      for (var i=0; i<inputs.length; i++) {
           if (browsertype=='ie') {inputs[i].className='buttonie';}
           else {inputs[i].className='buttonother';}
      }
 } catch(e) {} 

}

function createComElement() {
 //Create element to do further communication with parent,sibling 
 try { 
      var ele=document.createElement('div');
      ele.id="$com$element";
	  ele.msg='';
	  ele.app='';
      ele.style.display="none";
      document.getElementsByTagName('body')[0].appendChild(ele);
  } catch(e) {}
}


function setConcurrentStatus() {
 if (!globaldialogparm.concurrent) {
    globaldialogparm.concurrent='yes';
    // Check if concurrent session is allowed
    var sqltxt='select concursess from syssecurity';
    if (sqlSelect(sqltxt,'$s',1)) {
        if (sqlrcdcnt==1) {
            if ($s.concursess[0]=='N') {
                globaldialogparm.concurrent='no';
            }
        }
    } 
 }
}


//------------------------------------------------


function loadEvents() {
 
  makeFields();
  afterLoading();
  createComElement();
  try {setConcurrentStatus()} catch(e) {}
  try {topIt()} catch(e) {}
  try {topIt2()} catch(e) {}
}

if (typeof js_codes != 'object') {
    addLoadEvent(loadEvents,'*top');
}

function dialogMsgDef() {
 this.options=['OK:&nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;',':&nbsp;Cancel&nbsp;'];
 this.height=160;
 this.width=380;
 this.title=': Message';
 this.bodystyle=''; 
}

function dialogMsg(message,dial) {
  var d=new dialogDef(); 
  d.dialogparm.text=message;
  if (!dial) {
       dial=new dialogMsgDef();
  } 
  d.dialogparm.options=dial.options;
  d.dialogparm.title=dial.title; 
  d.dialogparm.bodystyle=dial.bodystyle;
  d.height=dial.height;
  d.width=dial.width;
  return displayDialog('../pcstools/dialogmsgbox.htm',d);
}

function itemList(ar) {
 var i=0;
 var txt='';
 var vlu;
 for (i=0; i<ar.length; i++) {
      try {vlu=ar[i].sqlWrap()} catch(e) {vlu=ar[i]}
      if (i==0) {txt=vlu}
      else {txt += ","+vlu} 
 }
 return txt;
}


function checkAuthority(process,requestdesc) {

  var sqltxt = "select aprvtype, procname, alwusrapv from sysprocaprv where proccode = "+ process.sqlWrap();
  if (!sqlSelect(sqltxt,'$$prc',1)) {
    alarm(sqlerr);
    return false;
  }   
  if ($$prc.rcdcnt ==0) {
     alarm('Process not found.');
     return false;
  }
  var nowdate=todayDate();
  var nowtime=todayTime('hm');
  var insobj =new Object();
  var approveid = timeStamp();
  
  insobj.appvid =approveid; 
  insobj.proccode = process; 
  insobj.sendusrid = username;
  insobj.senddate = nowdate;
  insobj.sendtime = nowtime;
  insobj.requeststs = 'R';
  insobj.aprvtype = $$prc.aprvtype[0];
  
  //if same user approval is allowed, Check if user signed on is an approving officer for the process or is a super user. If so then bypass approval login window but still need to write to Request Approval File 
  if ($$prc.alwusrapv[0] == 'Y') {
      sqltxt = "select usrid from sysusraut where proccode = "+ process.sqlWrap() + " and usrid = " + username.sqlWrap()+" UNION select usrid from wmnuusr where usrlvl = 'SYSOP' and usrid = "+username.sqlWrap();
      if (!sqlSelect(sqltxt,'$$prcusr',1)) {
          alarm(sqlerr);
          return false;
      }
	  if (sqlrcdcnt>0) {
	      // if found then bypass approval login window but still need to write to Request Approval File
          insobj.requeststs = 'A';
          insobj.respusrid = username;
          insobj.respdate = nowdate;
          insobj.resptime = nowtime;  
          if (!writeToRequestApprovalTable(insobj,requestdesc)) {
              return false;
          }
          return true;
      }	  
  }	  
	
  var processname=$$prc.procname[0]; 

  if ($$prc.aprvtype[0] == 'ATUSER') {  
  
      //show  log on window for approving officer to login.  
      var obj=new dialogDef();
      obj.height=450;
      obj.width=728;
      obj.dialogparm.proccode=process;
      obj.dialogparm.aprvtype=$$prc.aprvtype[0];
      obj.dialogparm.appvid=approveid;
	  obj.dialogparm.alwusrapv=$$prc.alwusrapv[0];
	  obj.dialogparm.requestdesc=requestdesc;
	  obj.dialogparm.processname=processname;

      var rtnparm=displayDialog('processAuthentication.htm',obj);

      if (!rtnparm) {
        alarm('Authorization Process Cancelled...Cannot Proceed with the transaction.')
        return false;
      }
      
      insobj.requeststs = 'A'; 
      insobj.respusrid = rtnparm.respusrid 
      insobj.respdate = nowdate;
      insobj.resptime = nowtime;     
      
      if (!writeToRequestApprovalTable(insobj,requestdesc)) {
          return false;
      }
      
      return true;
  }
  else {
  //Approval is done remotely (using another option)

    if (!writeToRequestApprovalTable(insobj,requestdesc)) {
        return false;
    }
  
    var obj=new dialogDef();
    obj.height=244;
    obj.width=429;
    obj.dialogparm.proccode=process;
    obj.dialogparm.aprvtype=$$prc.aprvtype[0];
    obj.dialogparm.appvid=approveid;
	obj.dialogparm.alwusrapv=$$prc.alwusrapv[0];
	obj.dialogparm.requestdesc=requestdesc;
	obj.dialogparm.processname=processname;

    var rtnparm=displayDialog('processAuthentication.htm',obj);

    if (!rtnparm) {
      var sqltxt = "select requeststs from  sysapprovalreq where appvid = " + approveid;
      if (!sqlSelect(sqltxt,'$$rq',1)) {
        alarm(sqlerr);
        return false;
      }
       
      if ($$rq.rcdcnt ==0) {
        alarm('Approval Request not found');
        return false;
      }

      if ($$rq.requeststs[0] == 'R') { 
        var wherecon =  "appvid = " + approveid;       
        if (!sqlDelete('sysapprovalreq',wherecon)) {
          alarm(sqlerr);
          return false;
        }

        alarm('Authorization Request Cancelled.')
        return false
      }
       
      if ($$rq.requeststs[0] == 'J') { 
        alarm('Authorization Request Cancelled...However the request was previously rejected.');
        return false;
      }
        
      if ($$rq.requeststs[0] == 'A') {
        alarm('Trying to cancel but the process has already been APPROVED...Please Continue.');
        return true;
      }
    }

    if (rtnparm.requeststs == 'J') {
      alarm('Request for approval was REJECT...Cannot proceed with the transaction.'); 
      return false;
    }

    if (rtnparm.requeststs == 'A') {
      alarm('Approval Granted...you may continue with the process.'); 
      return true;
    }
    
  }
}

function writeToRequestApprovalTable(obj,desc) {

  if (!sqlInsert('sysapprovalreq',obj)) {
       alarm(sqlerr);
       return false;
  }
  var len=225;
  var f=getFieldAttr('reqdesc');
  if (f) {len=f.length}
  var n=0;
  desc=desc.trim();  
  desc=desc.match(RegExp('.{1,'+len+'}','g'));
  var $upd=new sqlSelectResult('appvid','dtlnbr','reqdesc'); 
  for (k=0; k<desc.length; k++) {
       n=addSqlSelectRow($upd);
       $upd.appvid[n]=numeric(obj.appvid);
       $upd.dtlnbr[n]=k+1;
       $upd.reqdesc[n]=desc[k];
  }
  if (!massSqlInsert('SYSAPRREQDTL',$upd)) {alarm(sqlerr); return false}
  
  return true;
}


function exitOnConcurrent() {      
  var concurses=globaldialogparm.concurrent;
  if (concurses=='no' && !isBlank(username)) { 
      var sqltxt="select lcktable from systablock where lcktable='LOGON' and lckuser="+username.sqlWrap()+" and lcksession="+sessionid;
      if (sqlSelect(sqltxt,'$ls',1)) {
          if (sqlrcdcnt==0) {
              globaldialogparm.exitapp=true;
              alarm('This session will be ended as a later session was started by the same user and allowed to override the current one');
              checkExitApp()
              return true; 
          }
      }
   } 
   return false;
}


function checkExitApp() {
 if (globaldialogparm.exitapp) {
     try {releaseUserLock()} catch(e) {}
     try {window.close()} catch(e) {}
     try {window.opener.close()} catch(e) {}
 }
}

if (!window.opener) {setInterval("checkExitApp()",1000);}



function stripInvalidXMLChar(str) {

  str = str.replace(/\u00B7/g,'');
  str = str.replace(/\u00C2/g,'');
  str = str.replace(/\u00A0/g,'');
  str = str.replace(/\u00A2/g,'');
  str = str.replace(/\u00A3/g,'');
  str = str.replace(/[^\u000D\u00B7\u0020-\u007E\u00A2-\u00A4]/g,'');

  return str;
}


function encode(str,maxlen) {
  
  str = str.split('&').join('&amp;');
  str = str.split('<').join('&lt;');
  str = str.split('>').join('&gt;');
  str = str.split('"').join('&quot;');
  str = str.split("'").join('&#39;');
  
  if (maxlen) { 
      if (str.length>maxlen) {
	      str=str.sst(1,maxlen);
	      var words=str.split('&');
	      if (words.length>1) {
		      var lastword=words[words.length-1];
	          if (lastword.indexOf(';')== -1) { 
		          str='';
		          for (var i=0; i < words.length-1; i++) {
		               if (i==0) {str += words[i]}
                       else {str += '&' + words[i]}
                  }
             }		   
         }
     }			   
  }
  
  return str;
}

function printContent(cont,title) {
  var obj=document.getElementById(cont);
  if (!obj) {
      alarm('Content '+cont+' does not exists');
      return false; 
  }
  var d=new dialogDef();
  d.dialogparm.printarea=obj.innerHTML;
  if (title) {d.dialogparm.title=title}
  d.width='1px'; d.height='1px';
  displayDialog('PRINTCONTENT.htm',d);
}

/*
function objectToString(o){
  var parse = function(_o){
	  var a = [], t;
	  for(var p in _o){
			if(_o.hasOwnProperty(p)){
				t = _o[p];
				if(t && typeof t == "object"){
					a[a.length]= p + ":{ " + arguments.callee(t).join(", ") + "}";
				}
				else {
					if(typeof t == "string"){
					    t=encodeForObject(t);
						a[a.length] = [ p+ ": \"" + t.toString() + "\"" ];
					}
					else{
						a[a.length] = [ p+ ": " + t.toString()];
					}
				}
			}
	 }
     return a;
 }
 return "{" + parse(o).join(", ") + "}";
}    
*/

function encodeForObject(tx) {
 tx=tx.split('\r\n').join('*sNLS*');
 tx=tx.split('\n').join('*!NL!*');
 tx=tx.split('"').join('AB__ab');
 tx=tx.split("'").join('Aa__Bb');
 tx=tx.split('(').join('Ab__Ba');
 tx=tx.split(')').join('A_b_aB');
 tx=tx.split('\\').join('_AB_ab');
 return tx;
}

function decodeForString(tx) {
 tx=tx.split('AB__ab').join('"');
 tx=tx.split("Aa__Bb").join("'");
 tx=tx.split('Ab__Ba').join('(');
 tx=tx.split('A_b_aB').join(')');
 tx=tx.split('_AB_ab').join('\\');
 tx=tx.split('*!NL!*').join('\n')
 tx=tx.split('*sNLS*').join('\r\n');
 return tx;
}

function decodeObjectString(t){
  for (var p in t) {
       if (typeof t[p]=='object') {
	       decodeObjectString(t[p]);
	   }
	   else {
	      if (typeof t[p]=='string') {
		      t[p]=decodeForString(t[p]);
		  }
	   }
  }
  return t;
}   

 
function getFileIcon(fnam) {
   var _extnicon={csv:'csv.png',doc:'word.png',docx:'word.png',pdf:'pdf.png',ppt:'ppt.png',pptx:'ppt.png',txt:'text.png',xls:'excel.png',xlsx:'excel.png',jpg:'png.png',bmp:'png.png',ico:'png.png',gif:'png.png'};
   var filimg='';
   var filnam='';
   //Get actual file
   var fnam1=fnam.replace(/\\/g, "/");
   var fspiltarry=fnam1.split('/');  
   filnam=fspiltarry[fspiltarry.length-1];  
   
   //Get icon
   var filextarry=filnam.split('.');
   var filextn=filextarry[filextarry.length-1].toLowerCase();
   var iconimg='text.png';
   if (_extnicon[filextn]) {
       iconimg=_extnicon[filextn];
   }	   
   var ficon = '<img src="../image/'+iconimg+'" height="16" width="16"/>';
   
   filimg=ficon+' '+filnam;  
   return filimg;
}


function filterTable(tablid,column,val,filtertype) {
  if (!filtertype) {filtertype='anywhere'}
  var sf=(''+val.trim()).toUpperCase();
  posTabCursor(tablid,'*top');
  readRow();
  var showthis;
  var colvlu;
  while (!eof) {
        showthis=false;
        colvlu=(''+valueOfCol(column).trim()).toUpperCase()
        if (filtertype=='anywhere') {
			if (colvlu.split(sf).length>1) {showthis=true}
		}
		else {
		    if (colvlu.sst(1,sf.length)==sf) {showthis=true}
		}
		if (showthis) {showRow()}
		else {hideRow()}
		
        readRow();
  }
}


function downloadFromServer(spath,sfile) {
/*
 if (!pcFileExists(spath+sfile)) {
     alarm('File '+spath+sfile+' does not exist');
     return false; 
 }
 */
 if (browsertype=='sf') {
	var kk=window.open("download.php?path="+spath+"&file="+sfile);
	//kk.close();
 } 
 else {
	 var dlobj=document.getElementById('dnl_load_obj');
	 if (!dlobj) {
		 dlobj=document.createElement('a');
		 dlobj.id='dnl_load_obj';
		 dlobj.style.display='none';
		 document.getElementsByTagName('body')[0].appendChild(dlobj);
	 }
	 dlobj.href="download.php?path="+spath+"&file="+sfile;
	 dlobj.click();
 }
}


function createZipFile(zfile,filearr) {
  var infile='';
  for (i=0; i<filearr.length; i++) {
	   infile += '&infile[]='+filearr[i];
  }	
  ajaxCall('phpCreateZipFile.php',"outfile="+zfile+infile);
  if (ajaxresponse=='ok') {
	  return true;	
  }
  else {
      alert(ajaxresponse);
      return false;
  }
  return false;  
}


function popUpMsg(msg,fld) {// if "fld" is supplied the message will be displayed immediately under the field
  var obj=document.getElementById('_user_msg');
  if (!obj) {
      var _um=document.createElement('div');
      _um.id="_user_msg";
      //_um.className="usrmsg";
      _um.style.display="none";
      document.getElementsByTagName('body')[0].appendChild(_um);
	  obj=document.getElementById('_user_msg');
  }
  
  var thisfld=document.getElementById(fld);
  if (thisfld) {
      obj.className='usrmsg';
      changeContent('_user_msg',msg);
      popUpContent('_user_msg',fld,'*under'); ispop=false;
	  isuserpop=true;
	  focusOn(fld);
  }
  else {
	 try {
	  obj.className='alertmsg';
      changeContent('_user_msg',msg.split('\n').join('<br>'));
	  popUpContent('_user_msg'); ispop=false;
	  var workarea=document.getElementById('workarea');
	  if (!workarea) {workarea=document.getElementsByTagName('body')[0]};
	  var fth=0;
	  var hdh=0;
	  if (window.event) {
		  var wkh=workarea.offsetHeight;
		  var obh=obj.offsetHeight; 
		  try {fth=footer.offsetHeight;} catch(e) {}
		  try {var hdh=header.offsetHeight;} catch(e) {};
	  }
	  else {
		  var wkh=workarea.scrollHeight;
		  var obh=obj.scrollHeight; 
		  try {var fth=footer.scrollHeight} catch(e) {};
		  try {var hdh=header.scrollHeight} catch(e) {}
	  }  
	  try {  
		  toppos=wkh-obh-hdh-fth; 
		  leftpos=workarea.offsetWidth-obj.offsetWidth-optionarea.offsetWidth-optionarea2.offsetWidth;
		  toppos=toppos/2+hdh; 
		  leftpos=leftpos/2+optionarea.offsetWidth;
	  } 
	  catch(e) {
		  toppos=(wkh-obh)/2; 
		  leftpos=(workarea.offsetWidth-obj.offsetWidth)/2;  
	  }

	  if (toppos<5) {toppos=5}
	  if (leftpos<5) {leftpos=5}
	  obj.style.top=toppos+'px';
	  obj.style.left=leftpos+'px';
	  
	 } catch (e) {alarm(msg)}
  }
}


function LZWCompress(uncompressed) {
	"use strict";
	// Build the dictionary.
	var i,
		dictionary = {},
		c,
		wc,
		w = "",
		result = [],
		dictSize = 256;
	for (i = 0; i < 256; i += 1) {
		dictionary[String.fromCharCode(i)] = i;
	}

	for (i = 0; i < uncompressed.length; i += 1) {
		c = uncompressed.charAt(i);
		wc = w + c;
		//Do not use dictionary[wc] because javascript arrays 
		//will return values for array['pop'], array['push'] etc
	   // if (dictionary[wc]) {
		if (dictionary.hasOwnProperty(wc)) {
			w = wc;
		} else {
			result.push(dictionary[w]);
			// Add wc to the dictionary.
			dictionary[wc] = dictSize++;
			w = String(c);
		}
	}

	// Output the code for w.
	if (w !== "") {
		result.push(dictionary[w]);
	}
	return result;
}


function LZWDecompress(compressed) {
	"use strict";
	// Build the dictionary.
	var i,
		dictionary = [],
		w,
		result,
		k,
		entry = "",
		dictSize = 256;
	for (i = 0; i < 256; i += 1) {
		dictionary[i] = String.fromCharCode(i);
	}

	w = String.fromCharCode(compressed[0]);
	result = w;
	for (i = 1; i < compressed.length; i += 1) {
		k = compressed[i];
		if (dictionary[k]) {
			entry = dictionary[k];
		} else {
			if (k === dictSize) {
				entry = w + w.charAt(0);
			} else {
				return null;
			}
		}

		result += entry;

		// Add w+entry[0] to the dictionary.
		dictionary[dictSize++] = w + entry.charAt(0);

		w = entry;
	}
	return result;
}


function runAtServer(callpgm,objparm) {
  var objasstring = LZWCompress(JSON.stringify(objparm));
  ajaxCall('runAtServer.php',"callprogram="+callpgm+"&dataparm="+objasstring);
  eval('var rtncalresult='+ajaxresponse);
  ajaxresponse='';
  return rtncalresult;
}


/*
    http://www.JSON.org/json2.js
    2010-11-17

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


function objectToString(obj) {
  return JSON.stringify(obj);
}

function loadXMLFromFile(filname) {

  var Connect = new XMLHttpRequest();
  // Define which file to open and send the request.
  Connect.open("GET",getPcFileData(filname), false);
  Connect.setRequestHeader("Content-Type", "text/xml");
  Connect.send(null);
 
  // return the response in an XML document.
  return Connect.responseXML;
}

