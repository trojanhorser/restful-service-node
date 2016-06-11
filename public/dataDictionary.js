var dicfield = false;
for (property in dataDic.field) {
  dicfield=true;
  break; 
}  
if (!dicfield) { 
  loadDictionary();
}


function loadDictionary() {

addDicField('tgattime:1:char'); 
addDicField('tgevent:1:char');
addDicField('tgusr:30:char');
addDicField('tgdate:8,0:dec');
addDicField('tgtime:6,0:dec');
addDicField('tgkey:30:char');	

addDicField('custmcode:5:Customs Code');
addDicField('custmoffice:60:Customs Office');
addDicField('itmgrp:10:Item Group');
addDicField('emailaddr:300:email Address');
addDicField('maxnbrusr:3,0:Maximum Number of Users');
addDicField('concursess:1:Allow a User Concurrent Sessions');
addDicField('billinggrp:10:Billing Group');
addDicField('billingtxt:40:Billing Text');
addDicField('pvntblmnt:1:Prevent change at B/L Maintenance');
addDicField('reftype:1:Reference Type(1=CODECO, 2=COARRI, 3=Baplie)');

// SOF related field
addDicField('brth:10:Berth');
addDicField('brthdsc:35:Berth Description');
addDicField('donotprt:1:Do Not Print');

addDicField('aaftdft:15,3:Arrival Aft Draft');
addDicField('afwddft:15,3:Arrival Forward Draft');
addDicField('arrfo:15,3:Arrival Fuel Oil');
addDicField('arrifo:15,3:Arrival Intermediate Fuel Oil');
addDicField('arrlo:15,3:Arrival Lubricating Oil');
addDicField('arrmdo:15,3:Arrival Marine Diesel Oil');
addDicField('arrmgo:15,3:Arrival Marine Gas Oil');
addDicField('arrwatr:15,3:Arrival Water');
addDicField('depfo:15,3:Departure Fuel Oil');
addDicField('depifo:15,3:Departure Intermediate Fuel Oil');
addDicField('deplo:15,3:Departure Lubricating Oil');
addDicField('depmgo:15,3:Departure Marine Gas Oil');
addDicField('depmdo:15,3:Departure Marine Diesel Oil');
addDicField('depwatr:15,3:Departure Water');
addDicField('daftdft:15,3:Departure Aft Draft ');
addDicField('dfwddft:15,3:Departure Forward Draft');
addDicField('saftdft:15,3:Shifting Aft Draft ');
addDicField('sfwddft:15,3:Shifting Forward Draft');
addDicField('sofdesc:40:Description');
addDicField('sofnum:13,0:Statement of Fact Number');
addDicField('sofvoy:13,0:Statement of Fact Voyage Number');
addDicField('totcgdsc:15,3:Total Cargo Discharged');
addDicField('totcglod:15,3:Total Cargo Loaded');
addDicField('untaadft:10:Unit Arrival Aft Draft');
addDicField('untafdft:10:Unit Arrival Fwd Draft');
addDicField('untafo:10:Unit Arrival Fuel Oil');
addDicField('untaifo:10:Unit Arrival Intermediate Fuel Oil');
addDicField('untalo:10:Unit Arrival Lubricating Oil');
addDicField('untamdo:10:Unit Arrival Marine Diesel Oil');
addDicField('untamgo:10:Unit Arrival Marine Gas Oil');
addDicField('untawtr:10:Unit Arrival water');
addDicField('untdadft:10:Unit Departure Aft Draft');
addDicField('untdfdft:10:Unit Departure Fwd Draft');
addDicField('untdfo:10:Unit Departure Fuel Oil');
addDicField('untdifo:10:Unit Departure Intermediate Fuel Oil ');
addDicField('untdlo:10:Unit Departure Lubricating Oil');
addDicField('untdmgo:10:Unit Departure Marine Gas Oil');
addDicField('untdmdo:10:Unit Departure Marine Diesel Oil');
addDicField('untdwtr:10:Unit Departure water');
addDicField('untsadft:10:Unit Shifting Aft Draft');
addDicField('untsfdft:10:Unit Shifting Fwd Draft');
addDicField('unttotcgd:10:Unit Total Cargo Discharged');
addDicField('unttotcgl:10:Unit Total Cargo Loaded');
addDicField('untwtlod:10:Unit Fresh Water Loaded');
addDicField('wtrload:15,3:Fresh Water Loaded');
addDicField('vesshft:1:Shifting');

addDicField('actdetno:13,0:Activity detail Number');
addDicField('adcomnt:255:Comment');
addDicField('addescr:20:Short Description');
addDicField('adenddat:date:End Date');
addDicField('adendtim:time:End Time');
addDicField('adstrdat:date:Start Date');
addDicField('adstrtim:time:Start Time');
addDicField('adval:13,2:Value');
addDicField('denttyp:1:Date/Time Entry Type');
addDicField('dlydnum:3,0:Delay Detail Number');
addDicField('dlyenddat:date:End Date');
addDicField('dlyendtim:time:End Time');
addDicField('dlyreason:255:Delay Reason');
addDicField('dlystrdat:date:Start Date');
addDicField('dlystrtim:time:Start Time');
addDicField('entrord:3,0:Order of Entry');
addDicField('entrytyp:1:Entry Type');
addDicField('evntcde:10:Event Code');
addDicField('evntdsc:50:Event Description');
addDicField('rcshrtds:1:Record Short Description');
addDicField('rcvalam:1:Record Value');
addDicField('rmkdat:date:Remark Date');
addDicField('rmkno:3,0:Remark Number');
addDicField('rmktim:time:Remark Time');
addDicField('rmktyp:3:Remark Type ');
addDicField('sfgrpdsc:25:Group Description');
addDicField('sfgrpcd:3:Activity Group Code');
addDicField('sfremark:255:Remark');

addDicField('pfinvno:13,0:Proforma Invoice Number');

// End SOF Related fields

addDicField('tokenfld:1:Token Field');
addDicField('tablekey:13,0:tablekey');
addDicField('broker:10:Broker');
addDicField('startdate:date:Start Date');
addDicField('enddate:date:End Date');
addDicField('docname:70:Document Name');
addDicField('doctype:10:Document Type');
addDicField('procref:50:Process Reference');
addDicField('orgdocname:60:Original Document Name');
addDicField('codedesc:30:Description');
addDicField('accdesc:50:Account Description');
addDicField('accnum:10:Account Number');
addDicField('addedby:10:Added By');
addDicField('agtchgitm:10:Charge Item');
addDicField('agtnum:10:Agent Code');
addDicField('agtprfcde:10:Agent Group Profile');
addDicField('amdcode:10:Amendment Code');
addDicField('amddesc:255:Amendment Description');
addDicField('amount:13,2:Amount');
addDicField('arrdate:date:Arrival Date');
addDicField('arrtime:time:Arrival Time');
addDicField('ascgamt:13,2:Amount');
addDicField('ascgcur:3:Currency');
addDicField('ascgitm:10:Charge Item');
addDicField('ascgprf:10:Charge Profile');
addDicField('ascgquan:13,4:Quantity');
addDicField('aspaytyp:1:Payment Type (C=Collect P=Prepaid)');
addDicField('asref:13,0:Reference');
addDicField('asspcaddtl:30:AS Specific Charge Detail');
addDicField('atcode:1:Approved Flag');
addDicField('atdate:date:Approved Date');
addDicField('attime:time:Approved Time');
addDicField('atuser:10:Approved By');
addDicField('basis:20:basis');
addDicField('basiscde:10:Basis Code');
addDicField('beam:4,2:Maximum Beam');
addDicField('bilcgamt:13,2:B/L Charge Amount');
addDicField('bilcgcur:3:B/L Currency Code');
addDicField('bilcgitm:10:B/L Charge Item');
addDicField('bilgrppro:10:Bill Profile');
addDicField('bilno:25:Bill Of Lading');
addDicField('bilnum:25:Bill Of Lading');
addDicField('bilpaytyp:1:B/L Payment flag');
addDicField('bilpro:10:Bill Profile');
addDicField('bilref:13,0:B/L Reference');
addDicField('bilrefm:13,0:Master B/L Reference');
addDicField('blcgquan:13,4:Charge Quantity');
addDicField('blcur:3:B/L Currency');
addDicField('bldtldsc:40:BL Detail Profile Description');
addDicField('bldtlfld:10:Bl Detail Field');
addDicField('bldtlprf:10:Bl Detail Profile');
addDicField('blholddft:1:Hold B/Ls by Default?');
addDicField('useblval:1:Use B/L Validation Feature?');
addDicField('useblapv:1:Use B/L Approval Feature?');
addDicField('bowtrs:1:Bow Thrusters');
addDicField('cargpno:10,0:car Gate Pass Number');
addDicField('carloc:10:Car location');
addDicField('carsnum:35:Serial/Chassis Number');
addDicField('cartype:25:Car Type');
addDicField('caryear:4,0:Car Year');
addDicField('category:5:Category');
addDicField('chgapprte:7,4:Applied Rate');
addDicField('chgasfunc:20:Charge Assesment Sheet function');
addDicField('chgbasis:10:Charge Basis');
addDicField('chgbasis1:10:Charge Basis1 for Lesser/Greater');
addDicField('chgbasis2:10:Charge Basis2 for Lesser/Greater');
addDicField('chgcdtac:10:Charge Credit Account');
addDicField('chgdbtac:10:Charge Debit Account');
addDicField('chgdesc:40:Charge Description');
addDicField('longdesc:120:Long Description');
addDicField('chgdivsr:7,3:Charge Basis Divisor');
addDicField('chgdivsr1:7,3:Charge Basis1 Divisor');
addDicField('chgdivsr2:7,3:Charge Basis2 Divisor');
addDicField('chgfdatad:3,0:From Date Add Days');
addDicField('chgfdates:10:Charge From Date');
addDicField('chgfixamt:9,2:Fixed Amount');
addDicField('chgfixitm:1:Fixed Items Only');
addDicField('chgfunc:20:Charge Function');
addDicField('chgfunctn:20:Charge Function');
addDicField('chgitem:10:Charge Item Code');
addDicField('chgitm:10:Charge Item');
addDicField('chgitm1:10:Charge Item 1');
addDicField('chgitm2:10:Charge Item 2');
addDicField('chgitm3:10:Charge Item 3');
addDicField('chgitm4:10:Charge Item 4');
addDicField('chgitm5:10:Charge Item 5');
addDicField('chgitm6:10:Charge Item 6');
addDicField('chgitm7:10:Charge Item 7');
addDicField('chgitm8:10:Charge Item 8');
addDicField('chgitm9:10:Charge Item 9');
addDicField('chgitm10:10:Charge Item 10');
addDicField('chgitm11:10:Charge Item 11');
addDicField('chgitm12:10:Charge Item 12');
addDicField('chgitmcur:3:Charge Currency');
addDicField('chgitmfac:3,0:Charge Item Period Factor');
addDicField('chgitmop:5:Summary Operator');
addDicField('chgitmper:5:Charge Item Period');
addDicField('chgitmrte:12,6:Charge Rate');
addDicField('chgmaxval:9,2:Maximum Value');
addDicField('chgminval:9,2:Minimum Value');
addDicField('chgprf:10:Charge Profile Code');
addDicField('chgprfcde:10:Charge Profile Code');
addDicField('chgprfdl:1,0:Detail Level');
addDicField('chgprfdsc:50:Profile Description');
addDicField('chgprfgrp:10:Charge Profile Group');
addDicField('chgprfgrpd:40:Charge Profile Detail');
addDicField('dftdtlchgitm:10:Default Detail Charge Item');
addDicField('chgprftyp:3:Charge Profile Type');
addDicField('chgprfusg:10:Charge Profile Usage');
addDicField('chgprtabl:1:Printable');
addDicField('chground:5:Rounding Action');
addDicField('chground1:5:Rounding Action 1');
addDicField('chground2:5:Rounding Action 2');
addDicField('chgsysdfn:1:System Defined');
addDicField('chgtdatad:3,0:To Date Add Days');
addDicField('chgtdates:10:Charge To Date');
addDicField('chgunit:10:Charge Basis Unit');
addDicField('chgunit1:10:Charge Basis1 Unit');
addDicField('chgunit2:10:Charge Basis2 Unit');
addDicField('cnsacc:10:Customer Code');
addDicField('cmpname:60:Company Name');
addDicField('cmpaddr1:40:Company Address-1');
addDicField('cmpaddr2:40:Company Address-2');
addDicField('cmpaddr3:40:Company Address-3');
addDicField('cmpaddr4:40:Company Address-4');
addDicField('cmpaddr5:40:Company Address-5');
addDicField('cmpcontact:40:Company Contact');
addDicField('cmpemail:40:Company Email');
addDicField('cmpfax:40:Company Fax');
addDicField('cmptele:40:Company Telephone');
addDicField('cnsadd:200:Customer Address');
addDicField('cnsign:100:Customer name');
addDicField('cntsize:2,0:Container Size');
addDicField('cntszdsc:20:Container Size Description');
addDicField('cnttpdsc:20:Container Description');
addDicField('cnttype:2:Container Type');
addDicField('codetype:30:Code Type');
addDicField('comcde:3:Commodity Code');
addDicField('conadd:40:Customer Address');
addDicField('conadd2:40:Customer Address-2');
addDicField('conadd3:40:Customer Address-3');
addDicField('conadd4:40:Customer Address-4');
addDicField('conadd5:40:Customer Address-5');
addDicField('concde:10:Customer Code');
addDicField('concdtlm:13,2:Credit Limit');
addDicField('concdtob:13,2:Credit Already Used');
addDicField('concomm:3:Commodity');
addDicField('concontac:40:Contact');
addDicField('conemail:100:Email');
addDicField('conemldoc:1:Email Documents?');
addDicField('confax:20:Fax');
addDicField('confrc:30:Shipping Conference');
addDicField('confname:20:First Name');
addDicField('conlname:20:Last Name');
addDicField('conloc:10:Location');
addDicField('connam:40:Customer Name');
addDicField('connum:11:Container Number');
addDicField('sconnum:11:Stuffed Container');
addDicField('conphno:20:Phone Number');
addDicField('consize:2,0:Container Size');
addDicField('constatus:1:Status');
addDicField('contcd:3:Country Code');
addDicField('contcde:3:Country Code');
addDicField('contname:40:Country Name');
addDicField('contype:2:container Type');
addDicField('confeeitm:10:Conversion Fee Item');
addDicField('crsdisper:5,2:Cruise Ship Discount Percentage');
addDicField('cureffdt:date:Effective Date');
addDicField('currate:11,4:Currency Rate');
addDicField('curbuyrate:11,4:Currency Buying Rate');
addDicField('currcode:3:Currency Code');
addDicField('currdesc:20:Currency Description');
addDicField('curshrtnm:5:Short Name');
addDicField('cycleid:2,0:Interest Cycle ID');
addDicField('cycledesc:30:Interest Cycle Description');
addDicField('cycledays:3,0:Interest Cycle Days');
addDicField('dateadd:date:Date Added');
addDicField('datefmt:1:Date Format');
addDicField('dblrate:7,2:Double Time');
addDicField('definpfil:255:Defined Input File');
addDicField('defoutfil:255:Defined Output File');
addDicField('demstart:date:Demurrage Start Date');
addDicField('depdate:date:Departure Date');
addDicField('deptim:time:Departure Time');
addDicField('descr:2000:Description');
addDicField('description:120:Description');
addDicField('detstart:date:Detention Start Date');
addDicField('dprtdate:8,0:Date Departed');
addDicField('drght:5,3:Maximum Draught');
addDicField('dscamt:13,2:Discount Amount');
addDicField('dscapply:1:Discount Applied');
addDicField('dsccgitm:10:Discount Charge Item');
addDicField('dscnbr:2,0:Discount Number');
addDicField('dscpercnt:6,3:Discount Percent');
addDicField('dscreason:60:Discount Reason');
addDicField('dscref:13,0:Discount Reference');
addDicField('dscuser:10:User');
addDicField('dtlnbr:3,0:Detail Number');
addDicField('dtrate:9,2:Double Time');
addDicField('dttype:1:Dom/Trans Type');
addDicField('duedate:date:Date Discharge Completed');
addDicField('duetim:time:Time Discharge Completed');
addDicField('edidir:1:EDI Direction');
addDicField('ediprgfil:30:EDI Upload Program File');
addDicField('ediprgdsc:50:EDI Upload Program Descr');
addDicField('efcod:1:Empty/Full Code');
addDicField('effdate:date:Effective Date');
addDicField('effexrate:13,3:Effective Exchange Rate');
addDicField('empid:10:Employee ID');
addDicField('empname:40:Employee Name');
addDicField('enddate:date:End Date');
addDicField('endtime:time:End Time');
addDicField('exchlydayf:1:Exclude Holiday');
addDicField('exchlydayt:1:Exclude Holiday');
addDicField('exmpcsn:10:Customer');
addDicField('exmpitm:10:Exempt Item');
addDicField('exmptint:1:Exempt from Interest');
addDicField('extcode:50:External Code');
addDicField('fld1:10,0:Field1');
addDicField('fld2:30:Field2');
addDicField('fld3:30:Field3');
addDicField('fld4:10,0:Field4');
addDicField('frtchgitm:10:Freight Charge Item');
addDicField('gateid:10:Gate Id');
addDicField('gatedesc:25:Description');
addDicField('gatein:date:Gate In');
addDicField('gateintm:time:Gate In Time');
addDicField('gateinby:10:Gate In By');
addDicField('gateout:date:Gate Out');
addDicField('gatepsno:10,0:Gate Pass Number');
addDicField('gpcdate:date:Cancelled Date');
addDicField('gpcmt:255:Gatepass Comment');
addDicField('gpcrsn:60:Cancellation Reason');
addDicField('gpctime:time:Cancelled Time');
addDicField('gpcusr:10:Cancelled By');
addDicField('gpcustrl:15:Customs Release #');
addDicField('gpdate:date:Date');
addDicField('gpdevclk:25:Delivery Clerk');
addDicField('gpdriver:25:Driver');
addDicField('gpdtlnbr:3,0:Detail Number');
addDicField('gpexit:10:Exit Point');
addDicField('gpgateoff:25:GatePass Officer');
addDicField('gphauler:25:Hauler');
addDicField('gpno:10,0:Gate Pass Number');
addDicField('gpplate:8:Vehicle Used');
addDicField('gpquanty:9,0:Quantity');
addDicField('gpref:13,0:Reference');
addDicField('gprundate:date:Run Date');
addDicField('gpruntime:time:Run Time');
addDicField('gpstatus:1:Status');
addDicField('gptime:time:Time');
addDicField('gptype:1:Type');
addDicField('gpuser:10:User');
addDicField('grpdsc:20:Description');
addDicField('grpicn:20:Icon');
addDicField('grpid:10:Group');
addDicField('gtpass:1:Gate Pass Done');
addDicField('hauler:25:Hauler Name');
addDicField('hauleradd1:40:Address Line 1');
addDicField('hauleradd2:40:Address Line 2');
addDicField('haulertel:25:Telephone');
addDicField('haulercnt:40:Hauler Contact');
addDicField('hbrfee:11,2:Harbour Fee');
addDicField('hlydate:date:Holiday Date');
addDicField('hlydesc:40:Description');
addDicField('hrcode:1:Hold/Release Flag');
addDicField('hrdate:date:Hold/Release Date');
addDicField('hrtime:time:Hold/Release Time');
addDicField('hruser:10:Hold/Released By');
addDicField('ietype:1:Import/Export Type');
addDicField('imocde:7:IMO Code');
addDicField('intcode:30:Internal Code');
addDicField('intcycle:2,0:Interest Cycle');
addDicField('invamt:13,2:Invoice Amount');
addDicField('invamtdc:13,2:Invoice Amt Discounted');
addDicField('invamtpd:13,2:Invoice Amount Paid');
addDicField('invamtlcy:13,2:Invoice Amount Local Currency');
addDicField('invcdate:date:Cancelled Date');
addDicField('invcgaddtl:30:Additional Detail');
addDicField('invcgamt:13,2:Charge Amount');
addDicField('invcgamtlcy:13,2:Invoice Amount Local Currency'); 
addDicField('invcon:11:Container');
addDicField('invcrsn:60:Reason');
addDicField('invctime:time:Cancelled Time');
addDicField('invcur:3:Currency');
addDicField('invcuramt:13,2:Currency Amount'); //Amount in currency of charge Item
addDicField('invcurdca:13,2:Currency Discount Amount');
addDicField('invcusr:10:Cancelled By');
addDicField('invcust:10:Invoice Customer');
addDicField('invdate:date:Invoice Date');
addDicField('invdcamt:13,2:Discount Amount');
addDicField('invitm:10:Item');
addDicField('invnbr:10,0:Invoice Number');
addDicField('invpdto:date:Paid To');
addDicField('invref:13,0:Reference');
addDicField('invsts:1:Status'); // 'A'=Approved, 'C'=Canceled, U=Unapproved
addDicField('invtime:time:Time');
addDicField('invtype:1:Invoice Type');
addDicField('invusr:10:User');
addDicField('iocode:1:Import/Export Code');
addDicField('iprtcd:5:Port Code');
addDicField('iprtnm:40:Port Name');
addDicField('custype:1:Customer Type');
addDicField('itemno:3,0:Item Number');
addDicField('lcdnno:7,0:Last Credit Note Number');
addDicField('lckapp:80:Locking Application');
addDicField('lckdate:date:Date Locked');
addDicField('lckid:50:Lock ID');
addDicField('lcktable:20:Locked Table');
addDicField('lcktime:time:Time Locked');
addDicField('lcksession:15,0:Locking Session');
addDicField('lckuser:10:Locking User');
addDicField('length:7,2:length');
addDicField('lgpno:7,0:Last Gatepass Number');
addDicField('linenbr:3,0:Line Number');
addDicField('linkid:9,0:Link ID');
addDicField('linkname:60:Link Name');
addDicField('linnam:40:Line Name');
addDicField('linnum:3,0:Line Number');
addDicField('linvno:7,0:Last Invoice Number');
addDicField('loadtype:2:Load Type');
addDicField('location:25:location');
addDicField('loccode:10:location code');
addDicField('locidf:30:location Id');
addDicField('loctn:10:location');
addDicField('lrcpno:7,0:Last Receipt Number');
addDicField('lldgno:7,0:Last Lodgement Number');
addDicField('lrfnno:7,0:Last Refund Number');
addDicField('marks:200:Markings');
addDicField('masterbl:25:Bill Number');
addDicField('maxgrt:7,0:Max. Grs. Reg. Ton');
addDicField('maxnrt:7,0:Max. Net Reg. Ton');
addDicField('maxton:9,0:Maximum Tonnage');
addDicField('mesur:15,3:Measure');
addDicField('notify:100:Notify Name');
addDicField('ntfyacc:10:Notify Code');
addDicField('ntfyadd:200:Notify Address');
addDicField('notify2:100:Notify Name2');
addDicField('ntfyacc2:10:Notify Code2');
addDicField('ntfyadd2:200:Notify Address2');
addDicField('notify3:100:Notify Name3');
addDicField('ntfyacc3:10:Notify Code3');
addDicField('ntfyadd3:200:Notify Address3');
addDicField('numdoub:4,2:Double-time Hours');
addDicField('numtimhlf:4,2:Time-&-half Hours');
addDicField('numwrker:3,0:Number of Workers');
addDicField('optdsc:25:Description');
addDicField('optfnc:15:Function');
addDicField('optgrp:10:Group');
addDicField('opthgt:4,0:Height');
addDicField('opticn:20:Icon');
addDicField('optid:10:Option Id');
addDicField('optmode:1:Mode');
addDicField('optpgm:100:Program');
addDicField('optwdt:4,0:Width');
addDicField('othchg1:10:Other Charge Item1');
addDicField('othchg2:10:Other Charge Item2');
addDicField('paccde:3:Packaging Code');
addDicField('pacdes:30:Description');
addDicField('passenger:7,0:Passengers');
addDicField('dsempassr:7,0:Desembarking Passengers');
addDicField('styovpassr:7,0:Stay-Over Passengers');
addDicField('nvispassr:7,0:Passengers from Nevis');
addDicField('bnkglac:10:Bank General Ledger');
addDicField('paydsc:20:Description');
addDicField('paytyp:5:Type');
addDicField('pkgcde:3:Package Code');
addDicField('pltdpndnt:1:Pilot Dependent');
addDicField('pltfee:11,2:Pilot Fee');
addDicField('pltname:30:Pilot Name');
addDicField('pltpenper:5,2:Pilotage Penalty Percentage');
addDicField('portd:5:Port of Destination');
addDicField('portdc:5:Port of Discharge');
addDicField('portl:5:Port Of Loading');
addDicField('portld:5:Port of Loading');
addDicField('portn:5:Port Of Next Call');
addDicField('porto:5:Port Of Origin');
addDicField('prfcode:10:Profile Code');
addDicField('prfefdt:date:Effective Date');
addDicField('prfexdt:date:Expiry Date');
addDicField('prfsize:2,0:Size');
addDicField('prftype:2:Type');
addDicField('prfusge:10:Profile Usage');
addDicField('prognam:30:Program Name');
addDicField('prorate:1:Allow Prorating');
addDicField('pwexpdys:3,0:Expiry Days');
addDicField('pwlwer:1:Lowercase Required');
addDicField('pwminlen:3,0:Password Minimum Length');
addDicField('pwnbr:1:Number Required');
addDicField('pwupper:1:Uppercase Required');
addDicField('quan:9,0:Quantity');
addDicField('quan1:9,0:Quantity Remaining');
addDicField('quanord:9,0:Quantity Ordered');
addDicField('quangp:9,0:Quantity Gate-passed');
addDicField('quantity:13,4:Quantity');
addDicField('rate:13,4:Rate');
addDicField('rcpamt:13,2:Receipt Total Amount Net Of Discounts');
addDicField('rcpamtdc:13,2:Total Amount Discounted');
addDicField('rcpamtlcy:13,2:Receipt Amount Local Currency');
addDicField('rcpcdate:date:Cancelled Date');
addDicField('rcpcgaddtl:30:Additional Detail');
addDicField('rcpcgamt:13,2:Charge Amount');
addDicField('rcpcgamtlcy:13,2:Charge Amount Local Currency');
addDicField('rcpcon:11:Container');
addDicField('rcpcrsn:60:Reason');
addDicField('rcpctime:time:Cancelled Time');
addDicField('rcpcur:3:Currency');
addDicField('rcpcuramt:13,2:Currency Amount'); //For Payment on Invoice=>Amount in currency of Invoice otherwise amount in currency of charge Item
addDicField('rcpcurdca:13,2:Currency Discount Amount');
addDicField('rcpcusr:10:Cancelled By');
addDicField('rcpdate:date:Receipt Date');
addDicField('rcpdcamt:13,2:Discount Amount');
addDicField('rcpinvnbr:10,0:Invoice Number');
addDicField('rcpitm:10:Item');
addDicField('rcpnbr:10,0:Receipt Number');
addDicField('rcppdto:date:Paid To Date');
addDicField('rcppyamt:13,2:Payment Amount');
addDicField('rcppyccnm:25:Credit Card Name');
addDicField('rcppyccno:4:Credit Card Number');
addDicField('rcppycctp:5:Credit Card Type');
addDicField('rcppyccxd:date:Credit Card Expiry Date');
addDicField('rcppycmt:150:Comment');
addDicField('rcppycqbk:5:Cheque Bank');
addDicField('rcppycqno:15:Cheque Number');
addDicField('rcppycqpr:25:Cheque Payer');
addDicField('rcppydcnm:25:Debit Card Name');
addDicField('rcppydcno:4:Debit Card Number');
addDicField('rcppydctp:5:Debit Card Type');
addDicField('rcppydcxd:date:Debit Card Expiry Date');
addDicField('rcppytp:5:Payment Type');
addDicField('rcppywird:date:Wire Transfer Date');
addDicField('rcppywirr:20:Wire Transfer Reference');
addDicField('rcppylcsn:10:Lodgement Customer Code');
addDicField('rcpref:13,0:Reference');
addDicField('rcpsts:1:Receipt Status');
addDicField('rcptime:time:Time');
addDicField('rcpusr:10:User');
addDicField('rcpvarnce:7,2:Receipt Variance');
addDicField('rcrcvby:40:Received By');
addDicField('refcod:1:Reference Code');
addDicField('refno:13,0:Reference Number');
addDicField('regist:20:City of Registration');
addDicField('relchgitm:10:Related Item');
addDicField('reqaprvl:1:Requested Approval');
addDicField('rtcde:4,0:Rate Code');
addDicField('ship:10:Vessel');
addDicField('shipper:100:Shipper Name');
addDicField('shpacc:10:Shipper Code');
addDicField('shpadd:200:Shipper Address');
addDicField('shpnam:30:Vessel Name');
addDicField('shpnum:10:Vessel');
addDicField('shptype:10:Ship Type');
addDicField('sitccd:3:Commodity Code');
addDicField('sitcln:50:Long Description');
addDicField('sitcsn:25:Short Description');
addDicField('size:2,0:Container Size');
addDicField('stgdate:date:Storage Date');
addDicField('stpcod:2:Specific Type Code');
addDicField('stpdate:date:Stop Work Date');
addDicField('strdate:date:Start Work Date');
addDicField('strduedat:date:Storage Due date');
addDicField('strtim:time:Start Work Time');
addDicField('strtime:time:Start Time');
addDicField('sysdfn:1:System Defined');
addDicField('sysitm:1:system Item');
addDicField('syskeyflds:120:Keyfields');
addDicField('syslogadd:1:Log Addition');
addDicField('syslogchg:1:Log Change');
addDicField('syslogdlt:1:Log Delete');
addDicField('syslogto:10:Logto File');
addDicField('systab:30:System Table');
addDicField('timeadded:time:Time EDI Transmission Added');
addDicField('timefmt:1:Time Format');
addDicField('tmhfrate:7,2:Time and half Rate');
addDicField('tobeshpd:1:To Be Shipped');
addDicField('tradedsc:30:Trade description');
addDicField('tradelne:10:Trade lane');
addDicField('tranmisid:9,0:Tranmission ID');
addDicField('transfer:255:Transfer');
addDicField('trfuser:10:Transferred By');
addDicField('trfdate:date:Transfer Date');
addDicField('trftime:time:Transfer Time');
addDicField('type:2:Container Type');
addDicField('unit:10:Unit');
addDicField('unitmsr:10:Unit Measure');
addDicField('unitwgt:10:Unit Weight');
addDicField('uoadd:1:Allow Add');
addDicField('uochg:1:Allow Change');
addDicField('uodlt:1:Allow Delete');
addDicField('uooid:10:Option Id');
addDicField('uouid:10:User Id');
addDicField('usrgrpprf:10:User Group Profile'); 
addDicField('usrid:10:User ID');
addDicField('usrlvl:5:Level');
addDicField('usrnmf:20:First Name');
addDicField('usrnml:20:Last Name');
addDicField('usrpwd:20:Password');
addDicField('usrpwdchg:date:Date Password changed');
addDicField('usrpwexp:date:Password Expiry Date');
addDicField('usrpwdn:5,0:Password Number');
addDicField('usrsts:1:Status');
addDicField('vesopr:40:Vessel Operator');
addDicField('vesrgt:7:Vessel Registration');
addDicField('vgeno:10:Voyage Number');
addDicField('vlcode:1:Validated Flag');
addDicField('vldate:date:Validated Date');
addDicField('vltime:time:Validated Time');
addDicField('vluser:10:Validated By');
addDicField('voyptr:13,0:Voyage Pointer');
addDicField('voyref:13,0:Voyage Reference');
addDicField('svoyref:13,0:Stuffed Container Voyage Reference');
addDicField('vsltyp:10:Vessel Type');
addDicField('vsltypdes:40:Vessel Type Description');
addDicField('water:9,3:Water');
addDicField('weight:15,3:Weight');
addDicField('wftxcd:1:Wharf Tax');
addDicField('wsasapby:10:Approve By');
addDicField('wsasapdt:date:Approve Date');
addDicField('wsasapsts:1:Approve Status');
addDicField('wsasaptm:time:Approve Time');
addDicField('wsaschgto:10:Charge To');
addDicField('wsascom:3:Commodity');
addDicField('wsascon:10:Customer');
addDicField('wsascur:3:Currency');
addDicField('wsasdesc:40:Description');
addDicField('wsasinvno:10,0:Invoice Number');
addDicField('wsdscntper:5,3:Discount Percentage');

addDicField('cdnamt:13,2:Total Credit Note Amount');
addDicField('cdnamtlcy:13,2:Total Credit Note Amount Local Currency');
addDicField('cdncdate:date:Cancelled Date');
addDicField('cdncgamt:13,2:Credit Note Amount');
addDicField('cdncgamtlcy:13,2:Credit Note Amount Local Currency');
addDicField('cdncon:11:Container');
addDicField('cdncrsn:60:Reason');
addDicField('cdnctime:time:Cancelled Time');
addDicField('cdncur:3:Currency');
addDicField('cdncust:10:Customer');
addDicField('cdncusr:10:Cancelled By');
addDicField('cdndate:date:Credit Note Date');
addDicField('cdninvnbr:10,0:Invoice Number');
addDicField('cdnitm:10:Item');
addDicField('cdnnbr:10,0:Credit Note Number');
addDicField('cdnref:13,0:Reference');
addDicField('cdnsts:1:Status');
addDicField('cdntime:time:Credit Note Time');
addDicField('cdnusr:10:User');
addDicField('cdncmt:150:Comment');

addDicField('rfnamt:13,2:Total Refund Amount');
addDicField('rfnamtlcy:13,2:Total Refund Amount Local Currency');
addDicField('rfncdate:date:Cancelled Date');
addDicField('rfncgamt:13,2:Refund Amount');
addDicField('rfncgcura:13,2:Refund Amount in Currency of The Charge Item');
addDicField('rfncgamtlcy:13,2:Refund Amount Local Currency');
addDicField('rfncon:11:Container');
addDicField('rfncrsn:60:Reason');
addDicField('rfnctime:time:Cancelled Time');
addDicField('rfncur:3:Currency');
addDicField('rfncusr:10:Cancelled By');
addDicField('rfndate:date:Refund Date');
addDicField('rfnitm:10:Item');
addDicField('rfnrcpnbr:10,0:Receipt Number');
addDicField('rfnnbr:10,0:Refund Number');
addDicField('rfnref:13,0:Reference');
addDicField('rfnsts:1:Status');
addDicField('rfntime:time:Refund Time');
addDicField('rfnusr:10:User');
addDicField('rfncmt:150:Comment');

addDicField('wsldgcsn:10:Customer Code');
addDicField('wsldgcur:3:Currency Code');
addDicField('wsldgsts:1:Status');
addDicField('wsldgbal:13,2:Lodgement Balance');

addDicField('wsldgnbr:10,0:Transaction Number');
addDicField('wsldgusr:10:User');
addDicField('wsldgdate:date:Date');
addDicField('wsldgtime:time:Time');
addDicField('wsldgtype:3:Transaction Type');
addDicField('wsldgamt:13,2:Amount');
addDicField('wsldgrcp:10,0:Receipt Number');
addDicField('wsldgrnbl:13,2:Running Balance');
addDicField('wsldgdptp:3:Deposit Type'); 
addDicField('wsldgcqbk:5:Bank');
addDicField('wsldgcqno:15:Cheque Number');
addDicField('wsldgcqpr:25:Payer');

addDicField('bilpsts:1:B/L Presentation Status');
addDicField('seal1:15:Seal (1)');
addDicField('seal2:15:Seal (2)');
addDicField('seal3:15:Seal (3)');
addDicField('seal4:15:Seal (4)');
addDicField('seal5:15:Seal (5)');

addDicField('cmtnbr:5,0:Comment Number');
addDicField('blcmt:150:Comment');

addDicField('trandate:date:Date');
addDicField('trantime:time:Time');
addDicField('tranuser:10:User');
addDicField('trantype:1:Type');
addDicField('typenbr:10,0:Type Number');
addDicField('transts:1:Status');
addDicField('runbal:15,2:Running Balance');
addDicField('trannbr:13,0:Transaction Number');

addDicField('invexrtdt:1:Invoice Exchange Rate Applicable Date');
 
addDicField('driver:25:Driver');
addDicField('License:10:License Number');
addDicField('contsts:3:Container Status'); //PEN=pending, RCV=Received, STP=Stripped, EMP=Empty, STF=Stuffed, GOT='Gated Out', GOE='Gate Out Empty';
addDicField('strpdate:date:Date Stripped');
addDicField('strptime:time:Time Stripped');
addDicField('strpby:10:Stripped By');
addDicField('strpat:10:Stripped At');
addDicField('stufdate:date:Date Stuffed');
addDicField('stuftime:time:Time stuffed');
addDicField('stufby:10:Stuffed By');
addDicField('stuford:13:Stuffing Order');
addDicField('ordnbr:13:Order Number');
addDicField('dmgtxt:255:Damage Description');
addDicField('invid:13,0:Inventory Id');
addDicField('pinvid:13,0:Parent Inventory Id');

addDicField('remarks:150:Remarks');
addDicField('dstnid:13,0:Distribution Id');
addDicField('dstnname:50:Distribution Name');

addDicField('stploccd:10:Location Code');
addDicField('wharfcode:10:Wharf Code');
addDicField('stplocnm:50:Location Name');

addDicField('arrntsent:1:Arrival Notice Sent');

//For Approval Request Process
addDicField('proccode:20:Process Code');
addDicField('procname:50:Process Name');
addDicField('aprvtype:10:Approval Type'); 
addDicField('alwusrapv:1:Allow Same User Approval');
addDicField('appvid:13,0:Approval ID');
addDicField('sendusrid:10:User Requesting Approval');
addDicField('senddate:date:Date Sent for Approval');
addDicField('sendtime:time:Time Sent for Approval');
addDicField('reqdesc:255:Description Associated with Request');
addDicField('requeststs:1:Request Status');
addDicField('respusrid:10:Response User ID');
addDicField('respdate:date:Response Date');
addDicField('resptime:time:Response Time');

//For Range charge Setup
addDicField('decprecision:1,0:Decimal Precision');
addDicField('endlvl:10,3:Range End Level');
addDicField('rangetype:1:Range Type'); 

//addDicField('rangeunit:3:Range Unit');
//addDicField('unitdsc:15:Unit Description');
addDicField('chgrate:12,4:Charge Rate');

//For Multiple Company

addDicField('compcode:2,0:Company Number');
addDicField('compname:60:Company Name');
addDicField('compaddr:200:Company Address');
addDicField('comptele:20:Telephone');
addDicField('compfax:20:Fax');
addDicField('compemail:70:Company Email');
addDicField('compcontact:60:Company Contact');
addDicField('complogo:20:Company Logo');

//For Principal Maintenance
addDicField('princode:10:Principal Code');
addDicField('prinname:40:Principal Name');
addDicField('printype:2:Principal Type');
addDicField('prinloc:50:Principal Location');
addDicField('prinaddr:200:Principal Address');
addDicField('princity:30:Principal City');
addDicField('princntry:2:Principal Country');
addDicField('prinemail:70:Principal Email');
addDicField('princontct:60:Principal Contact');
addDicField('printele:20:Principal Telephone');
addDicField('prinfax:20:Principal Fax');
addDicField('scac:5:SCAC Code');

addDicField('tssaildate:date:Transshipment Sail Date');
addDicField('exclwkendf:1:Exclude Weekend From');
addDicField('exclwkendt:1:Exclude Weekend To');
addDicField('strdayvar:2,0:Start Date Variance');
addDicField('enddayvar:2,0:End Date Variance');

addDicField('movenbr:3,0:Move Number');
addDicField('movedate:date:Move Date');
addDicField('movetime:time:Move Time');
addDicField('movetype:2:Move Type');
addDicField('fromberth:10:From Berth');
addDicField('toberth:10:To Berth');
addDicField('fromport:5:From Port');
addDicField('toport:5:To Port');
addDicField('movecomment:150:Comment');

addDicField('portdp:5:Place of Dispatch');
addDicField('cntowner:2:Container Owner');

addDicField('vltype:1:Validator Type');
addDicField('vlcustcode:10:Validator Code');
addDicField('vlname:100:Validator Name');
addDicField('vltele:20:Validator Telephone');
addDicField('vlemail:70:Validator Email');

addDicField('depitem:1:Is Deposit Item');
addDicField('depchgitem:10:Deposit Charge Item');

addDicField('taxno:20:Tax Number');
addDicField('tccno:20:TCC Number');
addDicField('trnno:20:TRN Number');
addDicField('lrcpvariance:9,2:Short Payment Variance');
addDicField('uprcpvariance:9,2:Excess Payment Variance');
addDicField('callsign:20:Call Sign');
addDicField('portreg:5:Port of Registration');
addDicField('nationality:2:Nationality');
addDicField('shpemail:40:Email');
addDicField('collatport:5:Collect At Port');
addDicField('payertype:1:Payer Type');
addDicField('otherpayer:100:Payer Name');

addDicField('nportdc:5:Next Port of Discharge');
addDicField('tstbilref:13,0:Transhipped To B/L Ref');
addDicField('tstvoyref:13,0:Transhipped To Voyage Ref');
addDicField('tsfbilref:13,0:Transhipped From B/L Ref');
addDicField('tsfvoyref:13,0:Transhipped From Voyage Ref');
addDicField('contractno:15:Service Contract');
addDicField('receiver:100:Receiver Name');
addDicField('rcvracc:10:Receiver Code');
addDicField('rcvradd:200:Receiver Address');
addDicField('forwarder:100:Forwarder Name');
addDicField('fwdracc:10:Forwarder Code');
addDicField('fwdradd:200:Forwarder Address');

addDicField('crdays:3,0:Credit Days');
addDicField('extline:1:External Line');

addDicField('vslshare:1:Shared Vessel');

addDicField('ddepacc:10:Direct Deposit Account');
addDicField('ddepdate:date:Direct Deposit Date');

addDicField('hscode:15:H.S. Code');
addDicField('hsdesc:150:H.S. Description');
addDicField('chgowner:20:Charge Owner');
addDicField('proallcnt:1:Prorate On All Containers');

//Freedays setup
addDicField('fdysid:9,0:Basic Free Days ID');
addDicField('fdyslevel:1:Free Days Level');
addDicField('expdate:date:Expiry Date');
addDicField('demfree:5,0:Demurrage Free Days');
addDicField('detfree:5,0:Detention Free Days');
addDicField('combine:5,0:Combined Free Days');
addDicField('demincwknd:1:Include Weekend');
addDicField('deminchol:1:Include Holiday');
addDicField('detincwknd:1:Include Weekend');
addDicField('detinchol:1:Include Holiday');
addDicField('rolovrdem:1:Rollover Demurrage');
addDicField('excldetwk:1:Exclude 1st Weekend');
addDicField('wrkdystart:1:Only Work-Day Start');
addDicField('accumfdy:1:Accumulate Free Days');
addDicField('cfdysid:9,0:Commodity Free Days ID');
addDicField('vfdysid:9,0:Container Volume Free Days ID');
addDicField('endlevel:5,0:To Container Volume');
addDicField('rateid:9,0:Rate Rule ID');
addDicField('ratelevel:1:Rate Level');
addDicField('lrateid:9,0:Last Rate ID');
addDicField('lfdysid:9,0:Last Basic Free Days ID');
addDicField('lcfdysid:9,0:Last Commod Free Days ID');
addDicField('lvfdysid:9,0:Last CNT Vol Free Days ID');
addDicField('daysto:5,0:Charge Range End Days ');
addDicField('secdep:9,2:Security Deposit');
addDicField('rulnbrfdb:5,0:Rule Nbr Basic Free Dys');
addDicField('rulnbrfdc:5,0:Rule Nbr Commodity');
addDicField('rulnbrfdv:5,0:Rule Nbr Volume');
addDicField('rulnbrrat:5,0:Rule Nbr Rate');

addDicField('dschgdate:date:Discharge Date');
addDicField('transferdate:date:Transfer Date');
addDicField('loaddate:date:Load Date');
addDicField('prevdepdate:date:Departure Date from Previous Port');
addDicField('prevdeptim:time:Departure Time from Previous Port');
addDicField('splittoref:13,0:Split To B/L Reference');
addDicField('splitfromref:13,0:Split From B/L Reference');

addDicField('alwchqpay:1:Allow Payment by Cheque');
addDicField('trn:20:Tax Registration Number');

var $dt="";

$dt=new dbTableDef("token");
$dt.desc="Token - Data not relevant";
$dt.field="tokenfld";
applyDbTableDef($dt);

$dt=new dbTableDef("DocumentDetail");
$dt.desc="Document Details"
$dt.field="doctype,docname,remarks,orgdocname,proccode,procref,trandate,trantime,tranuser";
$dt.keyfield="docname";
$dt.index[0]="documentI1:proccode,procref,doctype,orgdocname";
applyDbTableDef($dt);

$dt=new dbTableDef("DocumentType");
$dt.desc="Document Type"
$dt.field="doctype,codedesc";
$dt.keyfield="doctype";
applyDbTableDef($dt);

$dt=new dbTableDef("wharfinger");
$dt.desc="Wharfinger/Stripping Location";
$dt.field="stploccd,stplocnm";
$dt.keyfield="stploccd,stplocnm";
applyDbTableDef($dt);

$dt=new dbTableDef("emaildstnh");
$dt.desc="Email Distribution Header";
$dt.field="dstnid,dstnname";
$dt.keyfield="dstnid";
applyDbTableDef($dt);

$dt=new dbTableDef("emaildstnd");
$dt.desc="Email Distribution Details";
$dt.field="dstnid,concde";
$dt.keyfield="dstnid,concde";
applyDbTableDef($dt);

$dt=new dbTableDef("wsfrtchg");
$dt.desc="Charge Item Group";
$dt.field="frtchgitm,itmgrp";
$dt.keyfield="frtchgitm,itmgrp";
applyDbTableDef($dt);

$dt=new dbTableDef("wsordchrg");
$dt.desc="Order Specific Charge";
$dt.field="ordnbr,chgitem,amount,currcode";
$dt.keyfield="ordnbr,chgitem";
applyDbTableDef($dt);

$dt=new dbTableDef("wscustrn");
$dt.desc="Customer Transactions";
$dt.field="concde,trantype,typenbr,transts,amount,runbal,trannbr,trandate,trantime,invnbr";
$dt.index[0]="wscustrnl1:concde,trandate,trantime";
$dt.index[1]="wscustrnl2:concde,trannbr desc";
applyDbTableDef($dt);

$dt=new dbTableDef("wsinvent");
$dt.desc="Inventory";
$dt.field="invid,cnsign,connum,voyref,bilref,dtlnbr,descr,pkgcde,marks,comcde,quan,quan1,weight,unitwgt,mesur,unitmsr,dmgtxt,trandate,trantime,tranuser,loccode,pinvid";
$dt.keyfield="invid";
$dt.index[0]="wsinventl1:trandate desc,trantime desc";
$dt.index[1]="wsinventl3:bilref";
$dt.view[0]="wsinventl2:*:quan1>0";
applyDbTableDef($dt);

$dt=new dbTableDef("wspinvent");
$dt.desc="Parent Inventory";
$dt.field="invid,cnsign,connum,voyref,bilref,dtlnbr,descr,pkgcde,marks,comcde,quan,quan1,weight,unitwgt,mesur,unitmsr,dmgtxt,trandate,trantime,tranuser,loccode";
$dt.keyfield="invid";
applyDbTableDef($dt);

$dt=new dbTableDef("wsordhead");
$dt.desc="Order Header";
$dt.field="ordnbr,trandate,trantime,tranuser,connum,voyref,cnsign,cnsadd,chgprfgrp,transts";
$dt.keyfield="ordnbr";
$dt.index[0]="wsordhedl1:connum,voyref";
applyDbTableDef($dt);

$dt=new dbTableDef("wsorddetl");
$dt.desc="Order Detail";
$dt.field="ordnbr,invid,quanord,quangp";
$dt.index[0]="wsorddetl1:ordnbr,invid";
applyDbTableDef($dt);

$dt=new dbTableDef("wsldgmst");
$dt.desc="Lodgement Master";
$dt.field="wsldgcsn,wsldgcur,wsldgbal,wsldgsts";
$dt.keyfield="wsldgcsn,wsldgcur";
applyDbTableDef($dt);

$dt=new dbTableDef("wsldgtrn");
$dt.desc="Lodgement Transaction";
$dt.field="wsldgcsn,wsldgcur,wsldgnbr,wsldgtype,wsldgdptp,wsldgusr,wsldgdate,wsldgtime,wsldgamt,wsldgrcp,wsldgcqbk,wsldgcqno,wsldgcqpr,wsldgrnbl,rcppywird,rcppywirr,rfnnbr,ddepdate,ddepacc";
$dt.keyfield="wsldgcsn,wsldgcur,wsldgnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("SYSTABLOCK")
$dt.desc="Locked Tables"
$dt.field="lcktable,lckid,lckuser,lckdate,lcktime,lckapp,lcksession"
$dt.keyfield="lcktable,lckid,lckuser,lckapp,lcksession";
applyDbTableDef($dt);

$dt=new dbTableDef("SYSTABLOG")
$dt.desc="Table Log Master File"
$dt.field="systab,syslogto,syslogadd,syslogchg,syslogdlt,syskeyflds"
$dt.keyfield="systab";
applyDbTableDef($dt);

$dt=new dbTableDef("SYSSECURITY")
$dt.desc="System Security"
$dt.field="maxnbrusr,concursess"
applyDbTableDef($dt);

$dt=new dbTableDef("WISCONTP")
$dt.desc="Container Types"
$dt.field="cnttype,cnttpdsc"
$dt.keyfield="cnttype";
applyDbTableDef($dt);

$dt=new dbTableDef("WMNUGRP")
$dt.desc="Menu Group"
$dt.field="grpid,grpdsc,grpicn"
$dt.keyfield="grpid";
applyDbTableDef($dt);

$dt=new dbTableDef("WMNUOPT")
$dt.desc="Menu Option"
$dt.field="optid,optgrp,optdsc,optfnc,opticn,optpgm,optmode,opthgt,optwdt"
$dt.keyfield="optid";
applyDbTableDef($dt);

$dt=new dbTableDef("WMNUUSOP")
$dt.desc="Menu User/MenuID pair"
$dt.field="uouid,uooid,uoadd,uochg,uodlt"
$dt.keyfield="uouid,uooid";
applyDbTableDef($dt);

$dt=new dbTableDef("WMNUUSR")
$dt.desc="Menu User"
$dt.field="usrid,usrpwd,usrnmf,usrnml,usrlvl,usrsts,usrgrpprf,usrpwexp,emailaddr"
$dt.keyfield="usrid";
applyDbTableDef($dt);

$dt=new dbTableDef("WMNUPWD")
$dt.desc="Password Requirements"
$dt.field="pwexpdys,pwminlen,pwupper,pwlwer,pwnbr"
applyDbTableDef($dt);

$dt=new dbTableDef("WMNUPWDH")
$dt.desc="Password History File"
$dt.field="usrid,usrpwdn,usrpwd,usrpwdchg"
$dt.keyfield="usrid,usrpwdn";
applyDbTableDef($dt);

$dt=new dbTableDef("WSACC")
$dt.desc="Account Master File"
$dt.field="accnum,accdesc"
$dt.keyfield="accnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSAMDCODE")
$dt.desc="Amendment Codes"
$dt.field="amdcode,amddesc"
$dt.keyfield="amdcode";
applyDbTableDef($dt);

$dt=new dbTableDef("WSASCHRG")
$dt.desc="Assessment Sheet General Charges"
$dt.field="asref,ascgprf,ascgitm,ascgquan"
$dt.keyfield="asref,ascgprf,ascgitm";
applyDbTableDef($dt);

$dt=new dbTableDef("WSASHEAD")
$dt.desc="Assessment Sheet"
$dt.field="asref,voyref,wsasdesc,wsascon,wsascom,wsascur,agtprfcde,wsasapsts,wsasapby,wsasapdt,wsasaptm,wsaschgto,wsdscntper,invnbr"
$dt.keyfield="asref";
$dt.index[0]="wsasheadl1:voyref";
$dt.view[0]="wsasheadl2:*:wsasapsts<>'A':";
applyDbTableDef($dt);

$dt=new dbTableDef("WSASDETAIL")
$dt.desc="Assessment Sheet Detail"
$dt.field="asref,chgprfcde,chgitm,quantity,rate,amount,description,effexrate"
$dt.index[0]="wsasdtlref:asref,chgprfcde,chgitm";
applyDbTableDef($dt);

$dt=new dbTableDef("WSASOT")
$dt.desc="Assessment Sheet Overtime Charges"
$dt.field="category,asref,arrdate,strdate,enddate,strtime,endtime,numwrker,numdoub,numtimhlf"
$dt.keyfield="category,asref,arrdate,strdate,enddate,strtime,endtime";
applyDbTableDef($dt);

$dt=new dbTableDef("WSASOTEMP")
$dt.desc="Assessment Sheet Overtime Workers"
$dt.field="category,asref,arrdate,strdate,enddate,strtime,endtime,empid"
$dt.keyfield="category,asref,arrdate,strdate,enddate,strtime,endtime,empid";
applyDbTableDef($dt);

//$dt=new dbTableDef("WSASINVMAP")
//$dt.desc="Assessment Sheet-Invoice Number mapping "
//$dt.field="asref,invnbr"
//$dt.keyfield="asref,invnbr";
//applyDbTableDef($dt);

$dt=new dbTableDef("WSASSPCHG")
$dt.desc="Assessment Sheet Specific Charges"
$dt.field="asref,ascgitm,ascgamt,aspaytyp,ascgquan,asspcaddtl"
$dt.keyfield="asref,ascgitm";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLCHRG")
$dt.desc="B/L Specific Charges"
$dt.field="bilref,bilcgitm,bilcgamt,bilcgcur,bilpaytyp,blcgquan,pvntblmnt,collatport,payertype,otherpayer,chgowner"
$dt.keyfield="bilref,bilcgitm";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLCON")
$dt.desc="B/L Container File"
$dt.field="refno,refcod,connum,efcod,conloc,concomm,demstart,detstart,rulnbrfdb,rulnbrfdc,rulnbrfdv,rulnbrrat"
$dt.keyfield="refno,connum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLDETL")
$dt.desc="Bill Of Lading Details"
$dt.field="bilref,dtlnbr,descr,pkgcde,weight,mesur,quan,quan1,marks,comcde,unitwgt,unitmsr,loctn,chgitm1,chgitm2,chgitm3,chgitm4,chgitm5,chgitm6,chgitm7,chgitm8,chgitm9,chgitm10,chgitm11,chgitm12,hscode"
$dt.keyfield="bilref,dtlnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLDTCNAS")
$dt.desc="Bill Of Lading Detail To Container Association"
$dt.field="bilref,dtlnbr,connum"
$dt.keyfield="bilref,dtlnbr,connum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLDTLPR")
$dt.desc="BL Details Group Profile"
$dt.field="bldtlfld,bldtlprf,bldtldsc"
$dt.keyfield="bldtlfld";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLHEAD")
$dt.desc="Bill of Lading Header"
$dt.field="ietype,dttype,voyref,bilno,itemno,porto,portld,portdc,portd,portdp,nportdc,cnsacc,cnsign,cnsadd,shpacc,shipper,shpadd,ntfyacc,notify,ntfyadd,ntfyacc2,notify2,ntfyadd2,ntfyacc3,notify3,ntfyadd3,bilref,bilrefm,bilgrppro,rtcde,wftxcd,reqaprvl,atuser,atdate,attime,atcode,vluser,vldate,vltime,vlcode,hruser,hrdate,hrtime,hrcode,gtpass,blcur,bilpsts,trandate,trantime,wharfcode,splittoref,splitfromref"; 
$dt.keyfield="bilno,itemno,voyref";
$dt.index[0]="wsblhdprf:bilgrppro";
$dt.index[1]="wsblhdref:bilref:unique";
$dt.index[2]="wsblhdrefm:bilrefm";
$dt.index[3]="wsblhdvoy:voyref";
$dt.index[4]="wsblhdcsn:cnsign,voyref";
$dt.index[5]="wsblhdcscde:cnsacc";
$dt.view[0]="wsblhdrqa:*:reqaprvl='Y' and atcode<>'A':";
applyDbTableDef($dt);

$dt=new dbTableDef("blheadextn");
$dt.desc="B/L Header Extension";
$dt.field="bilref,arrntsent,rcvracc,receiver,rcvradd,fwdracc,forwarder,fwdradd,tstbilref,tstvoyref,tsfbilref,tsfvoyref,contractno,proallcnt";
$dt.keyfield="bilref";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLVEH")
$dt.desc="B/L Motor Vehicle file"
$dt.field="refno,carsnum,cartype,caryear,carloc,cargpno,dtlnbr";
$dt.keyfield="refno,carsnum";
$dt.index[0]="wsblvehl:cargpno";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGBAS")
$dt.desc="Charge Basis"
$dt.field="basiscde,basis"
$dt.keyfield="basiscde";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGBASU")
$dt.desc="Charge Basis Units"
$dt.field="basiscde,unit"
$dt.keyfield="basiscde,unit";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGITM")
$dt.desc="Charge Item Master File"
$dt.field="chgitem,chgdesc,chgdbtac,chgcdtac,sysitm,longdesc,billinggrp,depchgitem,depitem"
$dt.keyfield="chgitem";
applyDbTableDef($dt);

$dt=new dbTableDef("BillingGroup")
$dt.desc="Billing Group"
$dt.field="billinggrp,billingtxt"
$dt.keyfield="billinggrp";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGITMR")
$dt.desc="Charge Item Rate"
$dt.field="chgitem,effdate,chgbasis,chgbasis1,chgbasis2,chgitmop,chgitmrte,chgprftyp,chgprfusg,chgprf,chgitmfac,chgitmper,chgdivsr,chgdivsr1,chgdivsr2,chground,chground1,chground2,chgunit,chgunit1,chgunit2,chgfixamt,chgminval,chgmaxval,chgitmcur,othchg1,othchg2,chgfunctn,prorate,decprecision,rangetype"
$dt.keyfield="chgitem,effdate";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGITMPU")
$dt.desc="Charge Item Profile Usage"
$dt.field="chgprfusg,codedesc"
$dt.keyfield="chgprfusg";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGPFLD")
$dt.desc="Charge Profile Level Detail File"
$dt.field="chgprfcde,chgitem,relchgitm"
$dt.keyfield="chgprfcde,chgitem,relchgitm";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGPRF")
$dt.desc="Charge Profile Master File"
$dt.field="chgprfcde,chgprfdsc,chgsysdfn,chgfixitm,chgasfunc,confeeitm"
$dt.keyfield="chgprfcde";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCHGPRFD")
$dt.desc="Charge Profile Detail File"
$dt.field="chgprfcde,chgitem,chgprfdl,chgprtabl,chgapprte,chgfdates,chgtdates,chgfdatad,chgtdatad,exchlydayf,exchlydayt,strdayvar,exclwkendf,exclwkendt,enddayvar,chgowner"
$dt.keyfield="chgprfcde,chgitem";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCOMM")
$dt.desc="Commodity Codes"
$dt.field="sitccd,sitcln,sitcsn"
$dt.keyfield="sitccd";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCON")
$dt.desc="Container File"
$dt.field="connum,size,type,cntowner"
$dt.keyfield="connum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCONSGN")
$dt.desc="Customer Master"
$dt.field="concde,connam,conadd,conadd2,conadd3,conadd4,conadd5,conemail,conemldoc,conphno,confax,concontac,concdtlm,concdtob,exmptint,custype,constatus,confname,conlname,intcycle,crdays,alwchqpay,trn"
$dt.keyfield="concde";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCONSTP")
$dt.desc="Container Size/Type Charge Profile"
$dt.field="prfsize,prftype,prfcode,prfusge,prfefdt,prfexdt"
$dt.keyfield="prfsize,prftype,prfcode";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCONSZ")
$dt.desc="Container Sizes"
$dt.field="cntsize,cntszdsc"
$dt.keyfield="cntsize";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCOUNTRY")
$dt.desc="Country File"
$dt.field="contcd,contname"
$dt.keyfield="contcd";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCUR")
$dt.desc="Currency Code"
$dt.field="currcode,curshrtnm,currdesc,bnkglac"
$dt.keyfield="currcode";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCURHIS")
$dt.desc="Currency History"
$dt.field="currcode,currate,cureffdt,curbuyrate"
$dt.keyfield="currcode,cureffdt";
applyDbTableDef($dt);

$dt=new dbTableDef("WSDISCNT")
$dt.desc="Discount File"
$dt.field="dscref,dsccgitm,dscnbr,dscamt,dscpercnt,dscreason,dscuser,dscapply"
$dt.keyfield="dscref,dsccgitm,dscnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("WSEDILINK")
$dt.desc="EDI Link File"
$dt.field="linkid,linkname,definpfil,defoutfil,prognam"
$dt.keyfield="linkid";
applyDbTableDef($dt);

$dt=new dbTableDef("WSEDIPROG")
$dt.desc="EDI Upload Programs"
$dt.field="ediprgfil,ediprgdsc,edidir"
$dt.keyfield="ediprgfil";
applyDbTableDef($dt);

$dt=new dbTableDef("WSEDITRANS")
$dt.desc="EDI Transaction File"
$dt.field="linkid,codetype,extcode,intcode"
$dt.keyfield="linkid,codetype,extcode,intcode";
applyDbTableDef($dt);

$dt=new dbTableDef("WSEMPLOYEE")
$dt.desc="Employee File"
$dt.field="empid,empname"
$dt.keyfield="empid";
applyDbTableDef($dt);

$dt=new dbTableDef("WSEXMASC")
$dt.desc="Exempt Customer Master"
$dt.field="exmpcsn"
$dt.keyfield="exmpcsn";
applyDbTableDef($dt);

$dt=new dbTableDef("WSEXMASI")
$dt.desc="Exempt Commodity Master"
$dt.field="exmpitm"
$dt.keyfield="exmpitm";
applyDbTableDef($dt);

$dt=new dbTableDef("WSGATE")
$dt.desc="Gate"
$dt.field="gateid,gatedesc"
$dt.keyfield="gateid";
applyDbTableDef($dt);

$dt=new dbTableDef("WSGPCAN")
$dt.desc="GatePass Cancelled"
$dt.field="gpno,gpcdate,gpctime,gpcusr,gpcrsn"
$dt.keyfield="gpno";
applyDbTableDef($dt);

$dt=new dbTableDef("WSGPDETL")
$dt.desc="GatePass Detail"
$dt.field="gpno,gpdtlnbr,invid,gpquanty"
$dt.keyfield="gpno,gpdtlnbr,invid";
applyDbTableDef($dt);

$dt=new dbTableDef("WSGPHEAD")
$dt.desc="GatePass Header"
$dt.field="gpno,gpref,gpuser,gpdate,gptime,gprundate,gpruntime,gpcustrl,gpplate,gphauler,gpdriver,gpdevclk,gpgateoff,gpexit,gpstatus,gptype,gpcmt,ordnbr,compcode"
$dt.keyfield="gpno";
$dt.index[0]="wsgpheadl:gpref";
$dt.index[1]="wsgpheadl2:gpdate";
applyDbTableDef($dt);

$dt=new dbTableDef("WSHAULER")
$dt.desc="Hauler File"
$dt.field="hauler,hauleradd1,hauleradd2,haulertel,haulercnt"
$dt.keyfield="hauler";
applyDbTableDef($dt);

$dt=new dbTableDef("WSHBRFEE")
$dt.desc="Harbour Fee Rates"
$dt.field="maxton,hbrfee,effdate"
$dt.keyfield="maxton,effdate";
applyDbTableDef($dt);

$dt=new dbTableDef("WSHOLIDAY")
$dt.desc="Holiday"
$dt.field="hlydate,hlydesc"
$dt.keyfield="hlydate";
applyDbTableDef($dt);


$dt=new dbTableDef("WSINTCYCLE")
$dt.desc="Interest on Invoice Cycle"
$dt.field="cycleid,cycledesc,cycledays"
$dt.keyfield="cycleid";
applyDbTableDef($dt);

$dt=new dbTableDef("WSINVCAN")
$dt.desc="Invoice Cancelled"
$dt.field="invnbr,invcdate,invctime,invcusr,invcrsn"
$dt.keyfield="invnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("WSINVDETL")
$dt.desc="Invoice Detail"
$dt.field="invnbr,invitm,invref,invcgamt,invcuramt,invdcamt,invcurdca,invpdto,invcon,invcgamtlcy,invcgaddtl,ordnbr,linenbr,chgitmcur"
$dt.keyfield="invnbr,invref,invitm,invcon";
$dt.index[0]="wsinvdtl1:invitm";
$dt.index[1]="wsinvdtl2:invref";
$dt.index[2]="wsinvdtl3:ordnbr";
$dt.view[0]="wsinvhddl:WSINVDETL.INVNBR, WSINVHEAD.INVDATE, WSINVHEAD.INVTIME, WSINVHEAD.INVAMT, WSINVHEAD.INVCUR, WSINVHEAD.INVSTS, WSINVDETL.INVITM, WSINVDETL.INVREF, WSINVHEAD.INVAMTPD, WSINVDETL.INVCGAMT, WSINVDETL.INVCURAMT, WSINVDETL.INVDCAMT, WSINVDETL.INVCURDCA, WSINVDETL.INVPDTO, WSINVDETL.INVCON, ordnbr:WSINVDETL.INVNBR=WSINVHEAD.INVNBR:WSINVHEAD:";
$dt.view[1]="wsinvhddl2:WSINVDETL.INVNBR, WSINVHEAD.INVDATE, WSINVHEAD.INVTIME, WSINVHEAD.INVAMT, WSINVHEAD.INVCUR, WSINVHEAD.INVSTS, WSINVDETL.INVITM, WSINVDETL.INVREF, WSINVHEAD.INVAMTPD, WSINVHEAD.INVAMTDC, WSINVDETL.INVCGAMT, WSINVDETL.INVCURAMT, WSINVDETL.INVDCAMT, WSINVDETL.INVCURDCA, WSINVDETL.INVPDTO, WSINVDETL.INVCON :WSINVDETL.INVNBR=WSINVHEAD.INVNBR:WSINVHEAD:";
applyDbTableDef($dt);

$dt=new dbTableDef("WSINVHEAD")
$dt.desc="Invoice Header"
$dt.field="invnbr,invsts,invdate,invtime,invamt,invamtpd,invamtdc,invcur,invcust,invusr,invtype,invamtlcy,remarks,compcode"
$dt.keyfield="invnbr";
$dt.index[0]="wsinvhdl1:invcust,invdate";
$dt.index[1]="wsinvhdl2:invdate,invcur";
applyDbTableDef($dt);

$dt=new dbTableDef("WSLINE")
$dt.desc="Line Master File"
$dt.field="linnum,linnam,agtnum,scac,hrcode,extline";
$dt.keyfield="linnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSLOC")
$dt.desc="Location File"
$dt.field="loccode,location"
$dt.keyfield="loccode";
applyDbTableDef($dt);

$dt=new dbTableDef("WSOTCAT")
$dt.desc="Overtime Categories"
$dt.field="category,description"
$dt.keyfield="category";
applyDbTableDef($dt);

$dt=new dbTableDef("WSOTRATE")
$dt.desc="Overtime Rates"
$dt.field="effdate,category,dblrate,tmhfrate"
$dt.keyfield="effdate,category";
applyDbTableDef($dt);

$dt=new dbTableDef("WSPACK")
$dt.desc="Packaging Master"
$dt.field="paccde,pacdes"
$dt.keyfield="paccde";
applyDbTableDef($dt);

$dt=new dbTableDef("WSPAYTYP")
$dt.desc="Payment Types"
$dt.field="paytyp,paydsc,sysdfn"
$dt.keyfield="paytyp";
applyDbTableDef($dt);

$dt=new dbTableDef("WSPLTFEE")
$dt.desc="Pilotage Fee Rates"
$dt.field="maxton,pltdpndnt,pltfee,effdate"
$dt.keyfield="maxton,pltdpndnt,effdate";
applyDbTableDef($dt);

$dt=new dbTableDef("WSPORT")
$dt.desc="Ports"
$dt.field="iprtcd,iprtnm,contcd,locidf"
$dt.keyfield="iprtcd";
applyDbTableDef($dt);

$dt=new dbTableDef("WSPRFGRP")
$dt.desc="Profile Group"
$dt.field="chgprfgrp,chgprfgrpd,sysitm"
$dt.keyfield="chgprfgrp";
applyDbTableDef($dt);

$dt=new dbTableDef("WSPRFGRPD")
$dt.desc="Profile Group Group Profile"
$dt.field="chgprfgrp,chgprfcde,dftdtlchgitm"
$dt.keyfield="chgprfgrp,chgprfcde";
applyDbTableDef($dt);

$dt=new dbTableDef("WSRCPCAN")
$dt.desc="Receipt Cancelled"
$dt.field="rcpnbr,rcpcdate,rcpctime,rcpcusr,rcpcrsn"
$dt.keyfield="rcpnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("WSRCPDETL")
$dt.desc="Receipt Detail"
$dt.field="rcpnbr,rcpitm,rcpref,rcpcgamt,rcpcuramt,rcpdcamt,rcpcurdca,rcpcon,rcppdto,rcpinvnbr,rcpcgamtlcy,rcpcgaddtl,ordnbr,linenbr,chgitmcur"
$dt.keyfield="rcpnbr,rcpref,rcpitm,rcpcon,rcpinvnbr";
$dt.index[0]="wsrcpdtl1:rcpitm";
$dt.index[1]="wsrcpdtl2:rcpinvnbr";
$dt.index[2]="wsrcpdtl3:rcpref";
$dt.index[3]="wsrcpdtl4:ordnbr";
$dt.index[4]="wsrcpdtl5:linenbr";
$dt.view[0]="wsrcphddl: WSRCPDETL.RCPNBR, WSRCPHEAD.RCPDATE, WSRCPHEAD.RCPTIME, WSRCPHEAD.RCPCUR, WSRCPHEAD.RCPSTS, WSRCPDETL.RCPITM, WSRCPDETL.RCPREF, WSRCPHEAD.RCPAMT, WSRCPDETL.RCPCGAMT, WSRCPDETL.RCPCURAMT, WSRCPDETL.RCPDCAMT, WSRCPDETL.RCPCURDCA, WSRCPDETL.RCPPDTO, WSRCPDETL.RCPCON, WSRCPDETL.RCPINVNBR, ordnbr :WSRCPDETL.RCPNBR=WSRCPHEAD.RCPNBR:WSRCPHEAD:";
$dt.view[1]="wsrcphddl2:WSRCPDETL.RCPNBR, WSRCPHEAD.RCPDATE, WSRCPHEAD.RCPTIME, WSRCPHEAD.RCPCUR, WSRCPHEAD.RCPSTS, WSRCPDETL.RCPITM, WSRCPDETL.RCPREF, WSRCPHEAD.RCPAMT, WSRCPDETL.RCPCGAMT, WSRCPDETL.RCPCURAMT, WSRCPDETL.RCPDCAMT, WSRCPDETL.RCPCURDCA, WSRCPDETL.RCPPDTO, WSRCPDETL.RCPCON, WSRCPDETL.RCPINVNBR :WSRCPDETL.RCPNBR=WSRCPHEAD.RCPNBR:WSRCPHEAD:";
applyDbTableDef($dt);

$dt=new dbTableDef("WSRCPHEAD")
$dt.desc="Receipt Header"
$dt.field="rcpnbr,rcpsts,rcpdate,rcptime,rcpamt,rcpamtdc,rcpcur,rcpusr,rcrcvby,rcpamtlcy,cnsadd,compcode";
$dt.keyfield="rcpnbr";
$dt.index[0]="wsrcphdl1:rcpusr,rcpdate";
$dt.index[1]="wsrcphdl2:rcpdate,rcpcur";
applyDbTableDef($dt);

$dt=new dbTableDef("WSRCPPYDL")
$dt.desc="Receipt Payment Detail"
$dt.field="rcpnbr,rcppytp,rcppyamt,rcppycmt,rcppycqbk,rcppycqno,rcppycqpr,rcppycctp,rcppyccno,rcppyccxd,rcppyccnm,rcppydctp,rcppydcno,rcppydcxd,rcppydcnm,rcppywird,rcppywirr,rcppylcsn,wsldgbal"
//$dt.keyfield="rcpnbr";
$dt.index[0]="wsrcppyd1:rcpnbr,rcppytp";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSHIP")
$dt.desc="Ship File"
$dt.field="shpnum,shpnam,shptype,maxgrt,maxnrt,length,drght,beam,vesopr,regist,confrc,stpcod,bowtrs,vesrgt,imocde,loadtype,callsign,portreg,nationality,shpemail";
$dt.keyfield="shpnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSHPRPT")
$dt.desc="Ship Report File"
$dt.field="ship,vgeno,arrdate,arrtime,depdate,deptim,strdate,strtim,stpdate,brth,duedate,duetim,portl,portn,portdc,stgdate,agtnum,water,passenger,pltpenper,crsdisper,pltname,linenbr,voyptr,iocode,dsempassr,styovpassr,nvispassr,compcode,princode,vslshare,tradelne,prevdepdate,prevdeptim"
$dt.keyfield="ship,arrdate,vgeno";
$dt.index[0]="wsshprptl:voyptr";
$dt.index[1]="wsshprptd:arrdate";
$dt.index[2]="wsshprptic:compcode";
$dt.index[3]="wsshprptip:princode";
applyDbTableDef($dt);

$dt=new dbTableDef("WSVSLSHARE")
$dt.desc="Voyage Vessel Sharing File"
$dt.field="voyref,linnum";
$dt.keyfield="voyref,linnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSYSPRM")
$dt.desc="System Parameters"
//$dt.field="cmpname,cmpaddr1,cmpaddr2,cmpaddr3,cmpaddr4,cmpaddr5,cmptele,cmpfax,cmpemail,cmpcontact,lrcpno,linvno,lgpno,rcpvarnce,datefmt,timefmt,lcdnno,blholddft,useblval,useblapv,invexrtdt,lldgno";
$dt.field="cmpname,cmpaddr1,cmpaddr2,cmpaddr3,cmpaddr4,cmpaddr5,cmptele,cmpfax,cmpemail,cmpcontact,datefmt,timefmt,blholddft,useblval,useblapv,invexrtdt,lldgno,lrfnno,lrateid,lfdysid,lcfdysid,lvfdysid";
$dt.keyfield="";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTMPBL")
$dt.desc="EDI Temporary BL File"
$dt.field="tranmisid,bilnum,itemno,masterbl,ietype,dttype,porto,portld,portdc,portd,portdp,cnsacc,cnsign,cnsadd,shpacc,shipper,shpadd,ntfyacc,notify,ntfyadd,bilgrppro,reqaprvl,transfer,trfuser,trfdate,trftime,ntfyacc2,notify2,ntfyadd2,ntfyacc3,notify3,ntfyadd3";
//$dt.field="tranmisid,bilnum,itemno,masterbl,ietype,dttype,porto,portld,portdc,portd,portdp,cnsacc,cnsign,cnsadd,shpacc,shipper,shpadd,ntfyacc,notify,ntfyadd,ntfyacc2,notify2,ntfyadd2,ntfyacc3,notify3,ntfyadd3,bilgrppro,reqaprvl,transfer,trfuser,trfdate,trftime";
$dt.keyfield="tranmisid,bilnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTMPBLEXT")
$dt.desc="EDI Temporary BL Extension File";
$dt.field="tranmisid,bilnum,rcvracc,receiver,rcvradd,fwdracc,forwarder,fwdradd,contractno";
$dt.keyfield="tranmisid,bilnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTMPBLC")
$dt.desc="EDI Temporary BL Container File"
$dt.field="tranmisid,bilnum,connum,consize,contype,conloc,concomm,efcod,seal1,seal2,seal3,seal4,seal5"
$dt.keyfield="tranmisid,bilnum,connum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTMPBLCHG")
$dt.desc="EDI Temporary BL Charges File"
$dt.field="tranmisid,bilnum,bilcgitm,bilcgamt,bilcgcur,bilpaytyp,blcgquan"
$dt.keyfield="tranmisid,bilnum,bilcgitm";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTMPBLD")
$dt.desc="EDI Temporary BL Detail File"
$dt.field="tranmisid,bilnum,dtlnbr,descr,pkgcde,weight,mesur,quan,marks,comcde,unitwgt,unitmsr,loctn,chgitm1,chgitm2,chgitm3,chgitm4,chgitm5,chgitm6,chgitm7,chgitm8,chgitm9,chgitm10,chgitm11,chgitm12";
$dt.keyfield="tranmisid,bilnum,dtlnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTMPBLDC")
$dt.desc="EDI Temporary BL Detail to Container Association File"
$dt.field="tranmisid,bilnum,dtlnbr,connum"
$dt.keyfield="tranmisid,bilnum,dtlnbr,connum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTMPBLV")
$dt.desc="EDI Temporary BL Vehicle File"
$dt.field="tranmisid,bilnum,carsnum,cartype,caryear,carloc,dtlnbr"
$dt.keyfield="tranmisid,bilnum,carsnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTRANMIS")
$dt.desc="EDI Transmission File"
$dt.field="tranmisid,linkid,dateadd,addedby,timeadded,voyref,bilgrppro,blcur"
$dt.keyfield="tranmisid";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTRDGRP")
$dt.desc="Trade lane grouping"
$dt.field="tradelne,contcde"
$dt.keyfield="tradelne,contcde";
applyDbTableDef($dt);

$dt=new dbTableDef("WSTRDLNE")
$dt.desc="Trade Lanes"
$dt.field="tradelne,tradedsc"
$dt.keyfield="tradelne";
applyDbTableDef($dt);

$dt=new dbTableDef("WSVOYCON")
$dt.desc="Voyage Container"
$dt.field="voyref,connum,gateout,gatepsno,gatein,gateintm,gateinby,demstart,detstart,dprtdate,dschgdate,tobeshpd,strduedat,seal1,seal2,seal3,seal4,seal5,driver,license,contsts,dttype,strpdate,strptime,strpby,strpat,stufdate,stuftime,stufby,stuford,tssaildate,cntowner,transferdate,loaddate"
//$dt.field="voyref,connum,gateout,gatepsno,gatein,gateintm,gateinby,demstart,detstart,dprtdate,dschgdate,tobeshpd,strduedat,driver,license,contsts,dttype,strpdate,strptime,strpby,strpat,stufdate,stuftime,stufby,stuford,tssaildate,cntowner"
$dt.keyfield="voyref,connum";
$dt.index[0]="wsvoyconl:gatepsno";
$dt.index[1]="wsvoyconl1:connum,voyref";
applyDbTableDef($dt);

$dt=new dbTableDef("WSVSLTYP")
$dt.desc="Vessel Type"
$dt.field="vsltyp,vsltypdes"
$dt.keyfield="vsltyp";
applyDbTableDef($dt);

//*************************************************************

$dt=new dbTableDef("WSCDNHEAD")
$dt.desc="Credit Note Header"
$dt.field="cdnnbr,cdnsts,cdninvnbr,cdndate,cdntime,cdnamt,cdncur,cdncust,cdnusr,cdnamtlcy,cdncmt,compcode";
$dt.keyfield="cdnnbr";
$dt.index[0]="wscdnhdl1:cdninvnbr";
$dt.index[1]="wscdnhdl2:cdnusr,cdndate";
$dt.index[2]="wscdnhdl3:cdndate,cdncur";
applyDbTableDef($dt);

$dt=new dbTableDef("WSCDNDETL")
$dt.desc="Credit Note Detail"
$dt.field="cdnnbr,cdnitm,cdnref,cdncgamt,cdncon,cdncgamtlcy,linenbr"
$dt.keyfield="cdnnbr,cdnref,cdnitm,cdncon";
$dt.index[0]="wscdndtl1:cdnitm";
$dt.view[0]="wscdnhddl: WSCDNDETL.CDNNBR, WSCDNHEAD.CDNDATE, WSCDNHEAD.CDNTIME, WSCDNHEAD.CDNCUR, WSCDNHEAD.CDNSTS, WSCDNDETL.CDNITM, WSCDNDETL.CDNREF, WSCDNHEAD.CDNAMT, WSCDNDETL.CDNCGAMT, WSCDNDETL.CDNCON, WSCDNHEAD.CDNINVNBR :WSCDNDETL.CDNNBR=WSCDNHEAD.CDNNBR:WSCDNHEAD:";
applyDbTableDef($dt);


$dt=new dbTableDef("WSCDNCAN")
$dt.desc="Credit Note Cancelled"
$dt.field="cdnnbr,cdncdate,cdnctime,cdncusr,cdncrsn"
$dt.keyfield="cdnnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("WSBLCMT");
$dt.desc="B/L Comments"
$dt.field="bilref,cmtnbr,blcmt,usrid,trantime,trandate"
$dt.keyfield="bilref,cmtnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("WSRFNHEAD")
$dt.desc="Refund Header"
$dt.field="rfnnbr,rfnsts,rfnrcpnbr,rfndate,rfntime,rfnamt,rfncur,rfnusr,rfnamtlcy,rfncmt,rcrcvby,rcppycqbk,rcppycqno,rcppycqpr,wsldgcsn,wsldgnbr";
$dt.keyfield="rfnnbr";
$dt.index[0]="wsrfnhdl1:rfnrcpnbr";
$dt.index[1]="wsrfnhdl2:rfnusr,rfndate";
$dt.index[2]="wsrfnhdl3:rfndate,rfncur";
applyDbTableDef($dt);

$dt=new dbTableDef("WSRFNDETL")
$dt.desc="Refund Detail"
$dt.field="rfnnbr,rfnitm,rfnref,rfncgamt,rfncon,rfncgamtlcy,linenbr,rfncgcura"
$dt.keyfield="rfnnbr,rfnref,rfnitm,rfncon";
$dt.index[0]="wsrfndtl1:rfnitm";
$dt.view[0]="wsrfnhddl: WSRFNDETL.RFNNBR, RFNDATE, RFNTIME, RFNCUR, RFNSTS, RFNITM, RFNREF, RFNAMT, RFNCGAMT, RFNCON :WSRFNDETL.RFNNBR=WSRFNHEAD.RFNNBR:WSRFNHEAD:";
applyDbTableDef($dt);


$dt=new dbTableDef("WSRFNCAN")
$dt.desc="Refund Cancelled"
$dt.field="rfnnbr,rfncdate,rfnctime,rfncusr,rfncrsn"
$dt.keyfield="rfnnbr";
applyDbTableDef($dt);


//Request for Approval Files
$dt=new dbTableDef("SYSPROCAPRV");
$dt.desc="Process Needing Approval";
$dt.field="proccode,procname,aprvtype,alwusrapv";
$dt.keyfield="proccode";
$dt.index[0]="sysautproc1:procname";
applyDbTableDef($dt);

$dt=new dbTableDef("SYSUSRAUT");
$dt.desc="Users Authorized to Approve Process";
$dt.field="proccode,usrid";
$dt.keyfield="proccode,usrid";
applyDbTableDef($dt);

$dt=new dbTableDef("SYSAPPROVALREQ");
$dt.desc="Processes Sent for Approval";
$dt.field="appvid,proccode,sendusrid,senddate,sendtime,requeststs,respusrid,respdate,resptime,aprvtype";
$dt.keyfield="appvid";
applyDbTableDef($dt);

$dt=new dbTableDef("SYSAPRREQDTL");
$dt.desc="Approval Request Details";
$dt.field="appvid,dtlnbr,reqdesc";
$dt.keyfield="appvid,dtlnbr";
applyDbTableDef($dt);


//Range Charge Setup Files
//$dt=new dbTableDef("RANGECHGHEAD");
//$dt.desc="Range Charge Header File";
//$dt.field="chgitm,rangeunit,decprecision";
//$dt.keyfield="chgitm";
//applyDbTableDef($dt);

$dt=new dbTableDef("RANGECHGRATE");
$dt.desc="Range Charge Tier Rate File";
$dt.field="chgitm,effdate,endlvl,chgrate";
$dt.keyfield="chgitm,effdate desc,endlvl";
applyDbTableDef($dt);

//Company File

$dt=new dbTableDef("COMPANY");
$dt.desc="Company File";
$dt.field="compcode,compname,compaddr,comptele,compfax,compemail,compcontact,complogo,lrcpno,linvno,lgpno,lcdnno,taxno,tccno,trnno,lrcpvariance,uprcpvariance";
$dt.keyfield="compcode";
applyDbTableDef($dt);

$dt=new dbTableDef("PRINCIPAL");
$dt.desc="Principal File";
$dt.field="princode,prinname,printype,concde";
$dt.keyfield="princode";
applyDbTableDef($dt);

$dt=new dbTableDef("PRINCIPALTYPE");
$dt.desc="Principal Type";
$dt.field="printype,codedesc";
$dt.keyfield="printype";
applyDbTableDef($dt);

$dt=new dbTableDef("PRINLOCATION");
$dt.desc="Principal Location File";
$dt.field="princode,prinloc,prinaddr,princity,princntry,prinemail,princontct,printele,prinfax";
$dt.keyfield="princode,prinloc";
applyDbTableDef($dt);

$dt=new dbTableDef("PRINLINE");
$dt.desc="Principal-Line Association";
$dt.field="princode,linnum";
$dt.keyfield="princode,linnum";
applyDbTableDef($dt);

$dt=new dbTableDef("VESSELMOVE");
$dt.desc="Vessel Movement";
$dt.field="voyref,movenbr,movetype,movedate,movetime,fromberth,toberth,fromport,toport,movecomment";
$dt.keyfield="voyref,movenbr";
applyDbTableDef($dt);

$dt=new dbTableDef("BrokerAssign");
$dt.desc="Broker Assignment";
$dt.field="tablekey,concde,broker,startdate,enddate,voyref,trandate,trantime,tranuser,bilref";
$dt.keyfield="tablekey";
$dt.index[0]="BrokerAssignI1:concde";
applyDbTableDef($dt);

$dt=new dbTableDef("BLValidation");
$dt.desc="B/L Validation File";
$dt.field="bilref,vltype,vlcustcode,vlname,vltele,vlemail,vluser,vldate,vltime";
$dt.keyfield="bilref";
applyDbTableDef($dt);

// SOF Related Tables

$dt=new dbTableDef("WSBERTH")
$dt.desc="Berth File"
$dt.field="brth,brthdsc,iprtcd"
$dt.keyfield="brth";
$dt.index[0]="wsberthI1:iprtcd";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFCOMNT");
$dt.desc="SOF Comment File";
$dt.field="sofnum,sfgrpcd,actdetno,adcomnt";
$dt.keyfield="sofnum,sfgrpcd,actdetno";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFCOMTM");
$dt.desc="SOF Comment File Temporary";
$dt.field="sofnum,sfgrpcd,actdetno,adcomnt";
$dt.keyfield="sofnum,sfgrpcd,actdetno";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFDELAY");
$dt.desc="SOF Delay File";
$dt.field="sofnum,sfgrpcd,actdetno,dlydnum,dlystrdat,dlystrtim,dlyenddat,dlyendtim,dlyreason";
$dt.keyfield="sofnum,sfgrpcd,actdetno,dlydnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFDELTM");
$dt.desc="SOF Delay File Temporary";
$dt.field="sofnum,sfgrpcd,actdetno,dlydnum,dlystrdat,dlystrtim,dlyenddat,dlyendtim,dlyreason";
$dt.keyfield="sofnum,sfgrpcd,actdetno,dlydnum";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFDEP");
$dt.desc="SOF Deposit";
$dt.field="sofnum,wsldgamt,wsldgdate";
$dt.keyfield="sofnum";
applyDbTableDef($dt);


$dt=new dbTableDef("WSSFEXCPT");
$dt.desc="SOF Exception Fields";
$dt.field="sofnum,sfgrpcd,actdetno,addescr,comcde,cnsacc,cnsign";
$dt.keyfield="sofnum,sfgrpcd,actdetno";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFACTCD");
$dt.desc="SOF Activity Code File";
$dt.field="evntcde,evntdsc,sysdfn";
$dt.keyfield="evntcde";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFACTDT");
$dt.desc="SOF Activity Detail";
$dt.field="sofnum,sfgrpcd,actdetno,evntcde,adstrdat,adstrtim,adenddat,adendtim,adval,donotprt";
$dt.keyfield="sofnum,sfgrpcd,actdetno";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFGENRM");
$dt.desc="SOF General Remark";
$dt.field="sofnum,rmkno,rmktyp,rmkdat,rmktim,sfremark";
$dt.keyfield="sofnum,rmkno";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFGRP");
$dt.desc="SOF Activity Group";
$dt.field="sfgrpcd,sfgrpdsc";
$dt.keyfield="sfgrpcd";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFGRPDT");
$dt.desc="SOF Activity Group Detail";
$dt.field="sfgrpcd,evntcde,entrytyp,denttyp,rcvalam,rcshrtds,entrord,shptype";
$dt.keyfield="sfgrpcd,evntcde";
$dt.index[0]="sfgrpdtv1:sfgrpcd,evntcde,entrytyp,entrord";
applyDbTableDef($dt);

$dt=new dbTableDef("WSSFHEAD");
$dt.desc="Statement of Fact Header";
$dt.field="sofnum,sofvoy,sofdesc,aaftdft,afwddft,arrfo,arrifo,arrlo,arrmdo,arrmgo,arrwatr,depfo,depifo,deplo,depmgo,depmdo,depwatr,daftdft,dfwddft,saftdft,sfwddft,totcgdsc,totcglod,untaadft,untafdft,untafo,untaifo,untalo,untamdo,untamgo,untawtr,untdadft,untdfdft,untdfo,untdifo,untdlo,untdmgo,untdmdo,untdwtr,untsadft,untsfdft,unttotcgd,unttotcgl,untwtlod,wtrload,pfinvno,vesshft";
$dt.keyfield="sofnum";
applyDbTableDef($dt);

// End SOF Tables

$dt=new dbTableDef("WSRFNRCPT")
$dt.desc="Refund Receipts"
$dt.field="rfnnbr,rcpnbr"
$dt.keyfield="rfnnbr,rcpnbr";
$dt.index[0]="wsrfnrcp1:rcpnbr";
applyDbTableDef($dt);

$dt=new dbTableDef("VOYCONCHARGE");
$dt.desc="Voyage Container Charges";
$dt.field="voyref,connum,chgitem,chgfixamt";
$dt.keyfield="voyref,connum,chgitem";
$dt.index[0]="voyconchg:chgitem";
applyDbTableDef($dt);

$dt=new dbTableDef("HSCODES");
$dt.desc="H.S. Code File";
$dt.field="hscode,hsdesc";
$dt.keyfield="hscode";
applyDbTableDef($dt);

//Demurrage/Detention Setup
$dt=new dbTableDef("freedaysbasic");
$dt.desc="Detention Demurrage Basic Free Days Rule";
$dt.field="fdysid,fdyslevel,contractno,linnum,tradelne,agtnum,cntsize,cnttype,shpacc,cnsacc,effdate,expdate,demfree,detfree,combine,demincwknd,detincwknd,deminchol,detinchol,rolovrdem,excldetwk,wrkdystart";
$dt.keyfield="fdysid";
$dt.index[0]="bfdindx:fdyslevel,contractno,linnum,tradelne,agtnum,cntsize,cnttype,shpacc,cnsacc,effdate:unique";
applyDbTableDef($dt);

$dt=new dbTableDef("freedaysvolume");
$dt.desc="Detention Demurrage Container Volume Free Days Rule";
$dt.field="vfdysid,contractno,linnum,cnsacc,effdate,expdate,demincwknd,detincwknd,deminchol,detinchol,accumfdy";
$dt.keyfield="vfdysid";
$dt.index[0]="vfdindx:contractno,linnum,cnsacc,effdate:unique";
applyDbTableDef($dt);

$dt=new dbTableDef("freedaysvolrange");
$dt.desc="Free Days Tier File";
$dt.field="vfdysid,endlevel,demfree,detfree"
$dt.keyfield="vfdysid,endlevel";
applyDbTableDef($dt);

$dt=new dbTableDef("freedayscommodity");
$dt.desc="Detention Demurrage Commodity Free Days Rule";
$dt.field="cfdysid,contractno,linnum,comcde,cnsacc,effdate,expdate,demfree,detfree,combine,demincwknd,detincwknd,deminchol,detinchol,accumfdy";
$dt.keyfield="cfdysid";
$dt.index[0]="cfdindx:contractno,linnum,comcde,cnsacc,effdate:unique";
applyDbTableDef($dt);

$dt=new dbTableDef("raterule");
$dt.desc="Detention Demurrage Rate Rule";
$dt.field="rateid,ratelevel,contractno,linnum,tradelne,agtnum,shpacc,cntsize,cnttype,cnsacc,effdate,expdate,currcode,secdep";
$dt.keyfield="rateid";
$dt.index[0]="rateindx:ratelevel,contractno,linnum,tradelne,agtnum,shpacc,cntsize,cnttype,cnsacc,effdate:unique";
applyDbTableDef($dt);
             
$dt=new dbTableDef("raterulerange");
$dt.desc="Rate Tier File";
$dt.field="rateid,chgitm,chgrate,daysto"
$dt.keyfield="rateid,chgitm,daysto";
applyDbTableDef($dt);

$dt=new dbTableDef("REFVOYCON")
$dt.desc="Reference Voyage Containers";
$dt.field="reftype,voyref,connum,size,type"
$dt.keyfield="reftype,voyref,connum";
$dt.index[0]="refvoyconl:voyref,connum";
$dt.index[1]="refvoyconl1:connum,voyref";
applyDbTableDef($dt);

$dt=new dbTableDef("CustomsOffice")
$dt.desc="Customs Office"
$dt.field="custmcode,custmoffice";
$dt.keyfield="custmcode";
applyDbTableDef($dt);

}
