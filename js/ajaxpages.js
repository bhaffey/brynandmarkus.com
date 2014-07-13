function OnMouseOverEntry(linkname,entryid) {
$("#"+linkname+entryid+"entry").addClass("onmouseoverentry");
}
function OnMouseOutEntry(linkname,entryid) {
$("#"+linkname+entryid+"entry").removeClass("onmouseoverentry");
}
function ContentorTheme (state) {
if (state=='C') {
$(".themesitecenterentry").removeClass("themesitecenterentry").addClass("sitecenterentry");
$(".themepointer").removeClass("themepointer").addClass("contentpointer");
}
else if (state=='T') {
$(".sitecenterentry").removeClass("sitecenterentry").addClass("themesitecenterentry");
$(".contentpointer").removeClass("contentpointer").addClass("themepointer");
}
}
function WebsiteLink (thelink) {
window.open(thelink,'_blank');
}
function WebsiteHash (thepage) {
window.location.hash =thepage;
}
function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
{
// code for IE7+, Firefox, Chrome, Opera, Safari
return new XMLHttpRequest();
}
if (window.ActiveXObject)
{
// code for IE6, IE5
return new ActiveXObject("Microsoft.XMLHTTP");
}
return null;
}
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function UpdateBackStretch (url) {
$.backstretch(url, {
'target': backstretch,
'speed': 1000,
'centeredX': false,
'positionType': 'absolute',
'zIndex': 0
});
}
function Page (nid,cid,v1,v2,v3,v4) {
thehash=v4;
thenid=nid;
$.backstretch("pause");
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="getpageinfo.cfm";
xmlhttp.onreadystatechange=PagestateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('nid='+nid+'&cid='+cid+'&v1='+v1+'&v2='+v2+'&v3='+v3+'&v4='+v4);
}
function PagestateChanged()
{
if (xmlhttp.readyState==4)
{
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thecontent=thelist[0];
thebackstretch=thelist[1];
document.getElementById('pageinfo').innerHTML=thecontent;
LoadPhotoAlbums();
$.backstretch(thebackstretch, {
'target': backstretch,
'speed': 1000,
'centeredX': false,
'positionType': 'absolute',
'zIndex': 0
});
FB.XFBML.parse();
$.backstretch("pause");
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
Montages();
Weather();
pageBGresize();
ie8imagefix();
if (thenid=='welcome') Countdown();
$("img.lazy").lazyload();
$("img.lazy").each(function() {
$(this).attr("src", $(this).attr("original"));
});
			document.getElementById("wrapper").style.overflow ="visible";
			window.scrollTo(0, 0);
if (thehash!='') window.location.hash =thehash;
else window.location.hash =thenid;
}
}



function MobilePage (nid,cid,v1,v2,v3,v4) {
thehash=v4;
thenid=nid;
$.backstretch("pause");
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="getpageinfo.cfm";
xmlhttp.onreadystatechange=MobilePagestateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('nid='+nid+'&cid='+cid+'&v1='+v1+'&v2='+v2+'&v3='+v3+'&v4='+v4);
}
function MobilePagestateChanged()
{
if (xmlhttp.readyState==4)
{
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thecontent=thelist[0];
thebackstretch=thelist[1];
document.getElementById('pageinfo').innerHTML=thecontent;
LoadPhotoAlbums();
$.backstretch(thebackstretch, {
'target': backstretch,
'speed': 1000,
'centeredX': false,
'positionType': 'absolute',
'zIndex': 0
});
FB.XFBML.parse();
$.backstretch("pause");
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
Montages();
Weather();
pageBGresize();
if (thenid=='welcome') Countdown();
$("img.lazy").lazyload();
$("img.lazy").each(function() {
$(this).attr("src", $(this).attr("original"));
});
			document.getElementById("wrapper").style.overflow ="visible";
			window.scrollTo(0, 0);
if (thehash!='') window.location.hash =thehash;
}
}




function ReloadIntro (cid) {
thecid=cid;
$.backstretch("pause");
xmlhttp2=GetXmlHttpObject();
if (xmlhttp2==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="getintro.cfm";
xmlhttp2.onreadystatechange=ReloadIntrostateChanged;
xmlhttp2.open("POST",url,true);
xmlhttp2.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp2.send('&cid='+cid);
}
function ReloadIntrostateChanged()
{
if (xmlhttp2.readyState==4)
{
thelist=xmlhttp2.responseText;
document.getElementById('pageinfo').innerHTML=thelist;
resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
window.scrollTo(0, 0);
}
}
function SubmitPollApp (entryid,customer) {
theentryid=entryid;
thecustomer=customer;
theanswer='';
if (document.getElementById('pollanswerA'+theentryid)!=null) theanswera=document.getElementById('pollanswerA'+theentryid).checked;
else theanswera=false;
if (document.getElementById('pollanswerB'+theentryid)!=null) theanswerb=document.getElementById('pollanswerB'+theentryid).checked;
else theanswerb=false;
if (document.getElementById('pollanswerC'+theentryid)!=null) theanswerc=document.getElementById('pollanswerC'+theentryid).checked;
else theanswerc=false;
if (document.getElementById('pollanswerD'+theentryid)!=null) theanswerd=document.getElementById('pollanswerD'+theentryid).checked;
else theanswerd=false;
if (document.getElementById('pollanswerE'+theentryid)!=null) theanswere=document.getElementById('pollanswerE'+theentryid).checked;
else theanswere=false;
if (document.getElementById('pollanswerF'+theentryid)!=null) theanswerf=document.getElementById('pollanswerF'+theentryid).checked;
else theanswerf=false;
if (document.getElementById('pollanswerG'+theentryid)!=null) theanswerg=document.getElementById('pollanswerG'+theentryid).checked;
else theanswerg=false;
if (document.getElementById('pollanswerH'+theentryid)!=null) theanswerh=document.getElementById('pollanswerH'+theentryid).checked;
else theanswerh=false;
if (document.getElementById('pollanswerI'+theentryid)!=null) theansweri=document.getElementById('pollanswerI'+theentryid).checked;
else theansweri=false;
if (document.getElementById('pollanswerJ'+theentryid)!=null) theanswerj=document.getElementById('pollanswerJ'+theentryid).checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollappresult.cfm";
xmlhttp.open("POST",url,true);
xmlhttp.onreadystatechange=SubmitPollAppstateChanged;
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('entryid='+theentryid+'&answer='+theanswer+'&customer='+thecustomer);
}
}
function SubmitPollAppstateChanged()
{
if (xmlhttp.readyState==4)
{
document.getElementById('pollappsubmit'+theentryid).style.display='none';
$('#pollapp'+theentryid).hide().html(xmlhttp.responseText).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}
function GuestbookForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thecomments=document.getElementById("comments").value;
theguestbookidentity=document.getElementById("guestbookidentity").value;
theguestbookapproval=document.getElementById("guestbookapproval").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thevalidemail=(validateEmail(theemail));
if (thename=='' && theguestbookidentity==1) document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if ((theemail=='' || thevalidemail==false) && theguestbookidentity==1) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
if (thecomments=='') document.getElementById("commentwarning").innerHTML='*';
else document.getElementById("commentwarning").innerHTML='';

xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thename=encodeURIComponent(thename);
thecomments=encodeURIComponent(thecomments);
var url="guestbookform.cfm";
xmlhttp.onreadystatechange=GuestbookFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&customer='+thecustomer+'&comments='+thecomments);
appleSubmitForm();
}
function GuestbookFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
 document.getElementById("guestbookwarnings").style.display='none';
 document.getElementById("guestbookfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("email").value='';
document.getElementById("comments").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
document.getElementById("commentwarning").innerHTML='';
if (theguestbookapproval==0) GuestbookComments();
}
else {
 document.getElementById("guestbookfinish").style.display='none';
 document.getElementById("guestbookwarnings").style.display='';
document.getElementById("entercaptcha").value='';
if (((theemail=='' || thename=='' || thecomments=='') && theguestbookidentity==1) || theentercaptcha=='' || thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='none';document.getElementById("guestbookwarnings").innerHTML='*';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';
}
}
}
function GuestbookEnterKey(myfield,e) { appleKeyboardFire();var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
GuestbookForm()
appleGoKey()
return false;
}
else
return true;
}

function GuestbookComments () {
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="guestbookcomments.cfm";
xmlhttp.onreadystatechange=GuestbookCommentsstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer);
appleSubmitForm();
}
function GuestbookCommentsstateChanged()
{
if (xmlhttp.readyState==4) {
 document.getElementById("guestbookcomments").innerHTML=xmlhttp.responseText;
 resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
}
}


function CustomGuestbookForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thenavid=document.getElementById("navid").value;
thecomments=document.getElementById("comments").value;
theguestbookidentity=document.getElementById("guestbookidentity").value;
theguestbookapproval=document.getElementById("guestbookapproval").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thevalidemail=(validateEmail(theemail));
if (thename=='' && theguestbookidentity==1) document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if ((theemail=='' || thevalidemail==false) && theguestbookidentity==1) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
if (thecomments=='') document.getElementById("commentwarning").innerHTML='*';
else document.getElementById("commentwarning").innerHTML='';
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thename=encodeURIComponent(thename);
thecomments=encodeURIComponent(thecomments);
var url="generalguestbookform.cfm";
xmlhttp.onreadystatechange=CustomGuestbookFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&navid='+thenavid+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&customer='+thecustomer+'&comments='+thecomments);
appleSubmitForm();
}
function CustomGuestbookFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
 document.getElementById("guestbookwarnings").style.display='none'
 document.getElementById("guestbookfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("email").value='';
document.getElementById("comments").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
document.getElementById("commentwarning").innerHTML='';
if (theguestbookapproval==0) CustomGuestbookComments(thenavid);
}
else {
 document.getElementById("guestbookfinish").style.display='none';
 document.getElementById("guestbookwarnings").style.display='';
document.getElementById("entercaptcha").value='';
if (((theemail=='' || thename=='' || thecomments=='') && theguestbookidentity==1) || theentercaptcha=='' || thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='none';document.getElementById("guestbookwarnings").innerHTML='*';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';
}
}
}
function CustomGuestbookEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
CustomGuestbookForm()
appleGoKey()
return false;
}
else
return true;
}


function CustomGuestbookComments (navigationid) {
thenavigationid=navigationid;
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}

var url="customguestbookcomments.cfm";
xmlhttp.onreadystatechange=CustomGuestbookCommentsstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&navigationid='+thenavigationid);
appleSubmitForm();
}
function CustomGuestbookCommentsstateChanged()
{
if (xmlhttp.readyState==4) {
 document.getElementById("guestbookcomments").innerHTML=xmlhttp.responseText;
 resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
}
}















function FAQForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thefaqrequest=document.getElementById("faqrequest").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thevalidemail=(validateEmail(theemail));
if (thename=='') document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if (theemail=='' || thevalidemail==false) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
if (thefaqrequest=='') document.getElementById("questionwarning").innerHTML='*';
else document.getElementById("questionwarning").innerHTML='';
if (theemail=='' || thename=='' || theentercaptcha=='') { document.getElementById("faqwarnings").style.display='';document.getElementById("faqwarnings").innerHTML='*=required';}
else if (thevalidemail==false) { document.getElementById("faqwarnings").style.display='';document.getElementById("faqwarnings").innerHTML='valid email address required';}
else { document.getElementById("faqwarnings").style.display='none';document.getElementById("faqwarnings").innerHTML='';}



xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="faqform.cfm";
xmlhttp.onreadystatechange=FAQFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&customer='+thecustomer+'&faqrequest='+thefaqrequest);
appleSubmitForm();
}
function FAQFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
 document.getElementById("faqwarnings").style.display='none';
 document.getElementById("faqfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("email").value='';
document.getElementById("faqrequest").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
}
else {
 document.getElementById("faqfinish").style.display='none';
 document.getElementById("faqwarnings").style.display='';
document.getElementById("entercaptcha").value='';
if ((theemail=='' || thename=='' || thefaqrequest=='') || theentercaptcha=='' || thecaptchasuccess=='no') { document.getElementById("faqwarnings").style.display='';document.getElementById("faqwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("faqwarnings").style.display='';document.getElementById("faqwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no') { document.getElementById("faqwarnings").style.display='none';document.getElementById("faqwarnings").innerHTML='*';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';
}



}
}
function FAQFormEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
FAQForm()
appleGoKey()
return false;
}
else
return true;
}































function NewsandUpdatesForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thecustomer=document.getElementById("customerid").value;
thevalidemail=(validateEmail(theemail));
if (thename=='') document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if (theemail=='' || thevalidemail==false) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theemail=='' || thename=='' ) { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
else if (thevalidemail==false) { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='valid email address required';}
else { document.getElementById("guestbookwarnings").style.display='none';document.getElementById("guestbookwarnings").innerHTML='';}
appleSubmitForm();
if (theemail!='' && thename!='' && thevalidemail==true) {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="newsandupdatesform.cfm";
xmlhttp.onreadystatechange=NewsandUpdatesFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&customer='+thecustomer);

}
}
function NewsandUpdatesFormstateChanged()
{
if (xmlhttp.readyState==4) {
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
if (thesuccess=='yes') {
 document.getElementById("guestbookwarnings").style.display='none'
  document.getElementById("guestbookstart").style.display='none';
 document.getElementById("guestbookfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("email").value='';
}
else  document.getElementById("guestbookfinish").style.display='none';
}
}
function NewsandUpdatesFormEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
NewsandUpdatesForm()
appleGoKey()
return false;
}
else
return true;
}




function BridesmaidsForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thecomments=document.getElementById("comments").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theapproval=document.getElementById("approval").value;
thebridesmaidsguestidentity=document.getElementById("bridesmaidsguestidentity").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thevalidemail=(validateEmail(theemail));
if (thename=='' && thebridesmaidsguestidentity==1) document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if ((theemail=='' || thevalidemail==false) && thebridesmaidsguestidentity==1) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
if (thecomments=='') document.getElementById("commentwarning").innerHTML='*';
else document.getElementById("commentwarning").innerHTML='';
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thename=encodeURIComponent(thename);
thecomments=encodeURIComponent(thecomments);
var url="forbridesmaidsform.cfm";
xmlhttp.onreadystatechange=BridesmaidsFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&customer='+thecustomer+'&comments='+thecomments);
}
function BridesmaidsFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
 document.getElementById("guestbookwarnings").style.display='none'
 document.getElementById("guestbookfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("email").value='';
document.getElementById("comments").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
document.getElementById("commentwarning").innerHTML='';
if (theapproval==0) BridesmaidsComments();
}
else {
 document.getElementById("guestbookfinish").style.display='none';
 document.getElementById("guestbookwarnings").style.display='';
document.getElementById("entercaptcha").value='';
if (((theemail=='' || thename=='' || thecomments=='') && thebridesmaidsguestidentity) || theentercaptcha=='' || thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='none';document.getElementById("guestbookwarnings").innerHTML='*';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';
}
appleSubmitForm();
}
}
function BridesmaidsFormEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
BridesmaidsForm()
appleGoKey()
return false;
}
else
return true;
}



function BridesmaidsComments () {
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="forbridesmaidcomments.cfm";
xmlhttp.onreadystatechange=BridesmaidsCommentsstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer);
appleSubmitForm();
}
function BridesmaidsCommentsstateChanged()
{
if (xmlhttp.readyState==4) {
 document.getElementById("commentsbox").innerHTML=xmlhttp.responseText;
 resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
}
}















function GroomsmenForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thecomments=document.getElementById("comments").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theapproval=document.getElementById("approval").value;
thegroomsmenguestidentity=document.getElementById("groomsmenguestidentity").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thevalidemail=(validateEmail(theemail));
if (thename=='' && thegroomsmenguestidentity==1) document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if ((theemail=='' || thevalidemail==false) && thegroomsmenguestidentity==1) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
if (thecomments=='') document.getElementById("commentwarning").innerHTML='*';
else document.getElementById("commentwarning").innerHTML='';

xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thename=encodeURIComponent(thename);
thecomments=encodeURIComponent(thecomments);
var url="forgroomsmenform.cfm";
xmlhttp.onreadystatechange=GroomsmenFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&customer='+thecustomer+'&comments='+thecomments);
appleSubmitForm();
}
function GroomsmenFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
 document.getElementById("guestbookwarnings").style.display='none'
 document.getElementById("guestbookfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("email").value='';
document.getElementById("comments").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
document.getElementById("commentwarning").innerHTML='';
if (theapproval==0) GroomsmenComments();
}
else {
 document.getElementById("guestbookfinish").style.display='none';
 document.getElementById("guestbookwarnings").style.display='';
document.getElementById("entercaptcha").value='';
if (((theemail=='' || thename=='' || thecomments=='') && thegroomsmenguestidentity==1) || theentercaptcha=='' || thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='none';document.getElementById("guestbookwarnings").innerHTML='*';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';
}
}
}
function GroomsmenFormEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
GroomsmenForm()
appleGoKey()
return false;
}
else
return true;
}



function GroomsmenComments () {
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="forgroomsmencomments.cfm";
xmlhttp.onreadystatechange=GroomsmenCommentsstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer);
appleSubmitForm();
}
function GroomsmenCommentsstateChanged()
{
if (xmlhttp.readyState==4) {
 document.getElementById("commentsbox").innerHTML=xmlhttp.responseText;
 resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
}
}




function NewHouseholdSearch () {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thecustomer=document.getElementById("customerid").value;
var url="rsvphouseholdsearch.cfm";
xmlhttp.onreadystatechange=NewHouseholdSearchstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer);
}
function NewHouseholdSearchstateChanged()
{
if (xmlhttp.readyState==4) {
document.getElementById('rsvppageinfo').innerHTML=xmlhttp.responseText;
resizeMobile();
}
}


function NewPasswordSearch () {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thecustomer=document.getElementById("customerid").value;
var url="rsvppasswordsearch.cfm";
xmlhttp.onreadystatechange=NewPasswordSearchstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer);
}
function NewPasswordSearchstateChanged()
{
if (xmlhttp.readyState==4) {
document.getElementById('rsvppageinfo').innerHTML=xmlhttp.responseText;
resizeMobile();
}
}





function HouseholdPassword () {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thecustomer=document.getElementById("customerid").value;
thersvppassword=document.getElementById("rsvppassword").value;
var url="rsvphouseholdpasswordresults.cfm";
xmlhttp.onreadystatechange=HouseholdPasswordstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&rsvppassword='+thersvppassword);
}
function HouseholdPasswordstateChanged()
{
if (xmlhttp.readyState==4) {
document.getElementById("rsvppasswordwarning").style.display='none';
document.getElementById("rsvppasswordwarning").innerHTML='';
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
theresult=thelist[1];
thepartyid=thelist[2];
theredirect=thelist[3];

if (theresult=='MATCH') {
if (theredirect!='NoEvent') {
$.cookie("rsvpparty", thepartyid);
$.cookie("rsvppartypassword", thersvppassword);

if (theredirect=='Page')  {Page('rsvp',thecustomer,'','','','') }
else if (theredirect!='Page' && theredirect!='NoEvent') { RSVPforHousehold(thepartyid,'99999',theredirect) }
}
else if (theredirect=='NoEvent') {
document.getElementById("rsvppasswordwarning").style.display='';
document.getElementById("rsvppasswordwarning").innerHTML='There are currently no events associated with this household.';
}
}
else if (theresult=='NO') {
document.getElementById("rsvppasswordwarning").style.display='';
document.getElementById("rsvppasswordwarning").innerHTML='Invalid Password.';
document.getElementById("rsvppassword").value='';
}
resizeMobile();
appleSubmitForm();
}
}

function HouseholdPasswordEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
HouseholdPassword()
appleGoKey()
return false;
}
else
return true;
}













function HouseholdSearchResults () {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thecustomer=document.getElementById("customerid").value;
thelastname=document.getElementById("lastname").value;
thefirstname=document.getElementById("namefirst").value;
var url="rsvphouseholdsearchresults.cfm";
xmlhttp.onreadystatechange=HouseholdSearchResultsstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&firstname='+thefirstname+'&lastname='+thelastname);
}
function HouseholdSearchResultsstateChanged()
{
if (xmlhttp.readyState==4) {
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
theresults=thelist[0];
thesearchcount=thelist[1];
document.getElementById('rsvppageinfo').innerHTML=theresults;
if (thelastname=='') {
document.getElementById("nomatch").style.display='none';
document.getElementById("atleasttwo").style.display='none';
document.getElementById("nolastname").style.display='';
}
else if (thelastname.length < 2) {
document.getElementById("nomatch").style.display='none';
document.getElementById("nolastname").style.display='none';
document.getElementById("atleasttwo").style.display='';
}
else if (thesearchcount==0) {
document.getElementById("nolastname").style.display='none';
document.getElementById("atleasttwo").style.display='none';
document.getElementById("nomatch").style.display='';
document.getElementById("searchresults").style.display='none';
window.location.href='#results';
}
else {
document.getElementById("nomatch").style.display='none';
document.getElementById("nolastname").style.display='none';
document.getElementById("atleasttwo").style.display='none';
document.getElementById("searchresults").style.display='';
window.location.href='#results';
}
resizeMobile();
appleSubmitForm();
}
}

function HouseholdSearchResultsEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
HouseholdSearchResults()
appleGoKey()
return false;
}
else
return true;
}




function RSVPforHousehold(partyid,password,eventid) {
thecustomer=document.getElementById("customerid").value;
thepartyid=partyid;
theeventid=eventid;
thepassword=password;
$.cookie("rsvpparty", thepartyid);
$.cookie("rsvppartypassword", thepassword);
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rsvpforhousehold.cfm";
xmlhttp.onreadystatechange=RSVPforHouseholdstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('partyid='+thepartyid+'&customer='+thecustomer+'&eventid='+theeventid);
}
function RSVPforHouseholdstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
theresults=thelist[0];
document.getElementById('rsvppageinfo').innerHTML=theresults;
window.scrollTo(0, 0);
resizeMobile();
}
}





function RSVPforHouseholdEvents(partyid,password) {
thecustomer=document.getElementById("customerid").value;
thepartyid=partyid;
thepassword=password;
$.cookie("rsvpparty", thepartyid);
$.cookie("rsvppartypassword", thepassword);
Page('rsvp',thecustomer,'','','','')

}



















function RSVPSimpleEvent (eventid) {

theeventid=eventid
thecustomer=document.getElementById("customerid").value;

xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rsvpsimpleform.cfm";
xmlhttp.onreadystatechange=RSVPSimpleEventstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('eventid='+theeventid+'&customer='+thecustomer);
}
function RSVPSimpleEventstateChanged()
{
if (xmlhttp.readyState==4) {
document.getElementById('rsvppageinfo').innerHTML=xmlhttp.responseText;
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
window.scrollTo(0, 0);
resizeMobile();
document.getElementById("wrapper").style.overflow ="visible";
}
}



function RSVPSimpleFormSubmit () {
 document.getElementById("rsvpfinish").style.display='none';
thersvpid=document.getElementById("rsvpid").value;
thename=encodeURIComponent(document.getElementById("name").value);
theemail=document.getElementById("email").value;
thecomments=encodeURIComponent(document.getElementById("comments").value);
thespecial=encodeURIComponent(document.getElementById("special").value);
thecustomer=document.getElementById("customerid").value;
theaskguests=document.getElementById("askguests").value;
theaskmeal=document.getElementById("askmeal").value;
themealone=document.getElementById("mealone").value;
themealtwo=document.getElementById("mealtwo").value;
themealthree=document.getElementById("mealthree").value;
themealfour=document.getElementById("mealfour").value;
themealfive=document.getElementById("mealfive").value;
themealsix=document.getElementById("mealsix").value;
themealseven=document.getElementById("mealseven").value;
themealeight=document.getElementById("mealeight").value;
themealnine=document.getElementById("mealnine").value;
themealten=document.getElementById("mealten").value;
theyesno1=document.getElementById("yesno1").checked;
theyesno0=document.getElementById("yesno0").checked;
thersvpextraquestioncount=document.getElementById("rsvpextraquestioncount").value;
if (thersvpextraquestioncount> 0) {
therequired1=document.getElementById("required1").value;
theanswertype1=document.getElementById("answertype1").value;
if (theanswertype1!=3) {
theanswer1=encodeURIComponent(document.getElementById("extraanswer1").value);
}
else {
if (document.getElementById("extraanswer1A")!=null) theanswera=document.getElementById("extraanswer1A").checked;
else theanswera=false;
if (document.getElementById("extraanswer1B")!=null) theanswerb=document.getElementById("extraanswer1B").checked;
else theanswerb=false;
if (document.getElementById("extraanswer1C")!=null) theanswerc=document.getElementById("extraanswer1C").checked;
else theanswerc=false;
if (document.getElementById("extraanswer1D")!=null) theanswerd=document.getElementById("extraanswer1D").checked;
else theanswerd=false;
if (document.getElementById("extraanswer1E")!=null) theanswere=document.getElementById("extraanswer1E").checked;
else theanswere=false;
if (theanswera==true) theanswer1='A';
if (theanswerb==true) theanswer1='B';
if (theanswerc==true) theanswer1='C';
if (theanswerd==true) theanswer1='D';
if (theanswere==true) theanswer1='E';
if (theanswera==false && theanswerb==false && theanswerc==false && theanswerd==false & theanswere==false)  theanswer1='';
}
}
else {
therequired1=0;
theanswer1='';
}



if (thersvpextraquestioncount> 1) {
therequired2=document.getElementById("required2").value;
theanswertype2=document.getElementById("answertype2").value;
if (theanswertype2!=3) {
theanswer2=encodeURIComponent(document.getElementById("extraanswer2").value);
}
else {
if (document.getElementById("extraanswer2A")!=null) theanswera=document.getElementById("extraanswer2A").checked;
else theanswera=false;
if (document.getElementById("extraanswer2B")!=null) theanswerb=document.getElementById("extraanswer2B").checked;
else theanswerb=false;
if (document.getElementById("extraanswer2C")!=null) theanswerc=document.getElementById("extraanswer2C").checked;
else theanswerc=false;
if (document.getElementById("extraanswer2D")!=null) theanswerd=document.getElementById("extraanswer2D").checked;
else theanswerd=false;
if (document.getElementById("extraanswer2E")!=null) theanswere=document.getElementById("extraanswer2E").checked;
else theanswere=false;
if (theanswera==true) theanswer2='A';
if (theanswerb==true) theanswer2='B';
if (theanswerc==true) theanswer2='C';
if (theanswerd==true) theanswer2='D';
if (theanswere==true) theanswer2='E';
if (theanswera==false && theanswerb==false && theanswerc==false && theanswerd==false & theanswere==false)  theanswer2='';
}
}
else {
therequired2=0;
theanswer2='';
}


if (thersvpextraquestioncount> 2) {
therequired3=document.getElementById("required3").value;
theanswertype3=document.getElementById("answertype3").value;
if (theanswertype3!=3) {
theanswer3=encodeURIComponent(document.getElementById("extraanswer3").value);
}
else {

if (document.getElementById("extraanswer3A")!=null) theanswera=document.getElementById("extraanswer3A").checked;
else theanswera=false;
if (document.getElementById("extraanswer3B")!=null) theanswerb=document.getElementById("extraanswer3B").checked;
else theanswerb=false;
if (document.getElementById("extraanswer3C")!=null) theanswerc=document.getElementById("extraanswer3C").checked;
else theanswerc=false;
if (document.getElementById("extraanswer3D")!=null) theanswerd=document.getElementById("extraanswer3D").checked;
else theanswerd=false;
if (document.getElementById("extraanswer3E")!=null) theanswere=document.getElementById("extraanswer3E").checked;
else theanswere=false;
if (theanswera==true) theanswer3='A';
if (theanswerb==true) theanswer3='B';
if (theanswerc==true) theanswer3='C';
if (theanswerd==true) theanswer3='D';
if (theanswere==true) theanswer3='E';
if (theanswera==false && theanswerb==false && theanswerc==false && theanswerd==false & theanswere==false)  theanswer3='';
}
}
else {
therequired3=0;
theanswer3='';
}






if (theyesno1==true) {
theattending=1;
theattendees=document.getElementById("attendees").value;
}
else if (theyesno0==true) { 
theattending=0;
theattendees=1;
}
else if (theyesno1==false && theyesno0==false) {
theattending='';
theattendees=0;
}
themealtotal=parseFloat(themealone)+parseFloat(themealtwo)+parseFloat(themealthree)+parseFloat(themealfour)+parseFloat(themealfive)+parseFloat(themealsix)+parseFloat(themealseven)+parseFloat(themealeight)+parseFloat(themealnine)+parseFloat(themealten);
thevalidemail=(validateEmail(theemail));
if (document.getElementById("extrawarning1")!=null) {
if (therequired1==1 && theanswer1=='') document.getElementById("extrawarning1").innerHTML='*';
else document.getElementById("extrawarning1").innerHTML='';
}
if (document.getElementById("extrawarning2")!=null) {
if (therequired2==1 && theanswer2=='') document.getElementById("extrawarning2").innerHTML='*';
else document.getElementById("extrawarning2").innerHTML='';
}
if (document.getElementById("extrawarning3")!=null) {
if (therequired3==1 && theanswer3=='') document.getElementById("extrawarning3").innerHTML='*';
else document.getElementById("extrawarning3").innerHTML='';
}
if (thename=='') document.getElementById("namewarning").innerHTML='*';
else document.getElementById("namewarning").innerHTML='';
if (theattending=='' && theattending!='0' && theattending!='1') document.getElementById("attendingwarning").innerHTML='*';
else document.getElementById("attendingwarning").innerHTML='';
if (themealtotal!=theattendees && theattending==1 && theaskmeal==1 && theaskguests==1) { document.getElementById("mealwarning").style.display=''; document.getElementById("mealwarning").innerHTML="Meal total doesn't equal attendees.";  }
else if (theaskmeal==1) document.getElementById("mealwarning").innerHTML='';
if (theemail=='' || thevalidemail==false) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theemail=='' || thename=='' || (theattending=='' && theattending!='0' && theattending!='1') || (therequired1==1 && theanswer1=='') || (therequired2==1 && theanswer2=='') || (therequired3==1 && theanswer3=='')) { document.getElementById("rsvpwarnings").style.display='';document.getElementById("rsvpwarnings").innerHTML='Please complete the required ( * ) items below.';} 
else if (thevalidemail==false) { document.getElementById("rsvpwarnings").style.display='';document.getElementById("rsvpwarnings").innerHTML='valid email address required';}
else { document.getElementById("rsvpwarnings").style.display='none';document.getElementById("rsvpwarnings").innerHTML='';}
if (thename!='' && theemail!=''&& (theattending=='1' || theattending=='0') && ((theattending==1 && theattendees>0) || theattending==0) && thevalidemail==true && ((themealtotal==theattendees && theattending==1 && theaskmeal==1 && theaskguests==1) || theattending==0 || (theattending==1 && (theaskmeal==0 || theaskguests==0))) && (therequired1==0 || (therequired1==1 && theanswer1!='')) && (therequired2==0 || (therequired2==1 && theanswer2!='')) && (therequired3==0 || (therequired3==1 && theanswer3!='')))  {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rsvpsimpleformsubmit.cfm";
xmlhttp.onreadystatechange=RSVPSimpleFormSubmitstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('name='+thename+'&rsvpid='+thersvpid+'&email='+theemail+'&special='+thespecial+'&customer='+thecustomer+'&comments='+thecomments+'&askmeal='+theaskmeal+'&askguests='+theaskguests+'&attending='+theattending+'&attendees='+theattendees+'&mealone='+themealone+'&mealtwo='+themealtwo+'&mealthree='+themealthree+'&mealfour='+themealfour+'&mealfive='+themealfive+'&mealsix='+themealsix+'&mealseven='+themealseven+'&mealeight='+themealeight+'&mealnine='+themealnine+'&mealten='+themealten+'&extraanswer1='+theanswer1+'&extraanswer2='+theanswer2+'&extraanswer3='+theanswer3);
}
else {
window.location.href='#w';
}
}

function RSVPSimpleFormSubmitstateChanged()
{
if (xmlhttp.readyState==4) {
document.getElementById("yesquestions").style.display='none';
 document.getElementById("rsvpwarnings").style.display='none';
 document.getElementById("rsvpfinish").style.display='';
 document.getElementById("name").value='';
document.getElementById("email").value='';
document.getElementById("comments").value='';
document.getElementById("special").value='';
document.getElementById("yesno1").checked=false;
document.getElementById("yesno0").checked=false;
document.getElementById("attendees").value=1;
document.getElementById("mealone").value=0;
document.getElementById("mealtwo").value=0;
document.getElementById("mealthree").value=0;
document.getElementById("mealfour").value=0;
document.getElementById("mealfive").value=0;
document.getElementById("mealsix").value=0;
document.getElementById("mealseven").value=0;
document.getElementById("mealeight").value=0;
document.getElementById("mealnine").value=0;
document.getElementById("mealten").value=0;
if (document.getElementById("extraanswer1")!=null) document.getElementById("extraanswer1").value='';
if (document.getElementById("extraanswer2")!=null) document.getElementById("extraanswer2").value='';
if (document.getElementById("extraanswer3")!=null) document.getElementById("extraanswer3").value='';
if (document.getElementById("extraanswer1A")!=null) document.getElementById("extraanswer1A").checked=false;
if (document.getElementById("extraanswer1B")!=null) document.getElementById("extraanswer1B").checked=false;
if (document.getElementById("extraanswer1C")!=null) document.getElementById("extraanswer1C").checked=false;
if (document.getElementById("extraanswer1D")!=null) document.getElementById("extraanswer1D").checked=false;
if (document.getElementById("extraanswer1E")!=null) document.getElementById("extraanswer1E").checked=false;
if (document.getElementById("extraanswer2A")!=null) document.getElementById("extraanswer2A").checked=false;
if (document.getElementById("extraanswer2B")!=null) document.getElementById("extraanswer2B").checked=false;
if (document.getElementById("extraanswer2C")!=null) document.getElementById("extraanswer2C").checked=false;
if (document.getElementById("extraanswer2D")!=null) document.getElementById("extraanswer2D").checked=false;
if (document.getElementById("extraanswer2E")!=null) document.getElementById("extraanswer2E").checked=false;
if (document.getElementById("extraanswer3A")!=null) document.getElementById("extraanswer3A").checked=false;
if (document.getElementById("extraanswer3B")!=null) document.getElementById("extraanswer3B").checked=false;
if (document.getElementById("extraanswer3C")!=null) document.getElementById("extraanswer3C").checked=false;
if (document.getElementById("extraanswer3D")!=null) document.getElementById("extraanswer3D").checked=false;
if (document.getElementById("extraanswer3E")!=null) document.getElementById("extraanswer3E").checked=false;
document.getElementById('attending-check-Y').style.display='none';
document.getElementById('attending-check-N').style.display='none';
if (document.getElementById("answer1-check-A")!=null) document.getElementById('answer1-check-A').style.display='none';
if (document.getElementById("answer1-check-B")!=null) document.getElementById('answer1-check-B').style.display='none';
if (document.getElementById("answer1-check-C")!=null) document.getElementById('answer1-check-C').style.display='none';
if (document.getElementById("answer1-check-D")!=null) document.getElementById('answer1-check-D').style.display='none';
if (document.getElementById("answer1-check-E")!=null) document.getElementById('answer1-check-E').style.display='none';
if (document.getElementById("answer2-check-A")!=null) document.getElementById('answer2-check-A').style.display='none';
if (document.getElementById("answer2-check-B")!=null) document.getElementById('answer2-check-B').style.display='none';
if (document.getElementById("answer2-check-C")!=null) document.getElementById('answer2-check-C').style.display='none';
if (document.getElementById("answer2-check-D")!=null) document.getElementById('answer2-check-D').style.display='none';
if (document.getElementById("answer2-check-E")!=null) document.getElementById('answer2-check-E').style.display='none';
if (document.getElementById("answer3-check-A")!=null) document.getElementById('answer3-check-A').style.display='none';
if (document.getElementById("answer3-check-B")!=null) document.getElementById('answer3-check-B').style.display='none';
if (document.getElementById("answer3-check-C")!=null) document.getElementById('answer3-check-C').style.display='none';
if (document.getElementById("answer3-check-D")!=null) document.getElementById('answer3-check-D').style.display='none';
if (document.getElementById("answer3-check-E")!=null) document.getElementById('answer3-check-E').style.display='none';
window.location.href='#s';
resizeMobile();
appleSubmitForm();
}
}

function RSVPSimpleFormSubmitEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
RSVPSimpleFormSubmit()
appleGoKey()
return false;
}
else
return true;
}


function SubmitGuestListRSVP() {

theeventid=document.getElementById("eventid").value;
themainevent=document.getElementById("mainevent").value;
thetrackmeals=document.getElementById("trackmeals").value;
thecourseonemeals=document.getElementById("courseonemeals").value;
thecoursetwomeals=document.getElementById("coursetwomeals").value;
thecoursethreemeals=document.getElementById("coursethreemeals").value;
thecoursefourmeals=document.getElementById("coursefourmeals").value;
thecoursefivemeals=document.getElementById("coursefivemeals").value;
list = document.getElementById('members');
members = list.getElementsByTagName("input");
firstnamestring ="";
lastnamestring="";
attendingstring="";
attending2string="";
courseonestring="";
coursetwostring="";
coursethreestring="";
coursefourstring="";
coursefivestring="";
questionidstring="";
requiredstring="";
answerstring="";
memberstring="";
for (i = 0; i < members.length; i++) {
if (members[i].getAttribute("id")!=null) { 
if (members[i].getAttribute("id").indexOf("firstname") > -1) {
if (firstnamestring.length > 0) firstnamestring += ",";
theid=members[i].getAttribute("id");
firstnamestring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("memberid")>-1) {
if (memberstring.length > 0) memberstring += ",";
theid=members[i].getAttribute("id");
memberstring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("lastname")>-1) {
if (lastnamestring.length > 0) lastnamestring += ",";
theid=members[i].getAttribute("id");
lastnamestring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("attending-")>-1) {
if (attendingstring.length > 0) attendingstring += ",";
theid=members[i].getAttribute("id");
attendingstring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("attending2-")>-1 && members[i].getAttribute("id")!='attending2-Y' && members[i].getAttribute("id")!='attending2-N') {
if (attending2string.length > 0) attending2string += ",";
theid=members[i].getAttribute("id");
attending2string += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("courseone-")>-1) {
if (courseonestring.length > 0) courseonestring += ",";
theid=members[i].getAttribute("id");
courseonestring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("coursetwo-")>-1) {
if (coursetwostring.length > 0) coursetwostring += ",";
theid=members[i].getAttribute("id");
coursetwostring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("coursethree-")>-1) {
if (coursethreestring.length > 0) coursethreestring += ",";
theid=members[i].getAttribute("id");
coursethreestring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("coursefour-")>-1) {
if (coursefourstring.length > 0) coursefourstring += ",";
theid=members[i].getAttribute("id");
coursefourstring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("coursefive-")>-1) {
if (coursefivestring.length > 0) coursefivestring += ",";
theid=members[i].getAttribute("id");
coursefivestring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("questionid")>-1) {
if (questionidstring.length > 0) questionidstring += ",";
theid=members[i].getAttribute("id");
questionidstring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("required")>-1) {
if (requiredstring.length > 0) requiredstring += ",";
theid=members[i].getAttribute("id");
requiredstring += document.getElementById(theid).value;
}
if (members[i].getAttribute("id").indexOf("answerquestion")>-1) {
if (answerstring.length > 0) answerstring += ",";
theid=members[i].getAttribute("id");
answerstring += document.getElementById(theid).value;
}
}
}
thememberstring=memberstring.split(",");
theattendingstring=attendingstring.split(",");
theattending2string=attending2string.split(",");
thecourseonestring=courseonestring.split(",");
thecoursetwostring=coursetwostring.split(",");
thecoursethreestring=coursethreestring.split(",");
thecoursefourstring=coursefourstring.split(",");
thecoursefivestring=coursefivestring.split(",");
thefirstnamestring=firstnamestring.replace(",","");
thefirstnamestring=thefirstnamestring.split("||||||");
thelastnamestring=lastnamestring.replace(",","");
thelastnamestring=thelastnamestring.split("||||||");
for (var i = 0; i < thememberstring.length; i++) {
thememberid=thememberstring[i];
theattending=theattendingstring[i];
theattending2=theattending2string[i];
thefirstname=thefirstnamestring[i];
thecourseone=thecourseonestring[i];
thecoursetwo=thecoursetwostring[i];
thecoursethree=thecoursethreestring[i];
thecoursefour=thecoursefourstring[i];
thecoursefive=thecoursefivestring[i];
thefirstname=thefirstname.replace(",","");
thefirstname=thefirstname.replace(",","");
thefirstname=thefirstname.replace(",","");
thelastname=thelastnamestring[i];
thelastname=thelastname.replace(",","");
thelastname=thelastname.replace(",","");
thelastname=thelastname.replace(",","");
if ((themainevent==0 && theattending=='E') || (thefirstname=='' || thelastname=='')) {
 document.getElementById('memberwarning'+thememberid).style.display='';
}
else
{
 document.getElementById('memberwarning'+thememberid).style.display='none';
}
if (themainevent==1 && theattending=='E') {
 document.getElementById('member1warning'+thememberid).style.display='';
}
else if (themainevent==1 && theattending!='E') {
 document.getElementById('member1warning'+thememberid).style.display='none';
}
if (themainevent==1 && theattending2=='E') {
 document.getElementById('member2warning'+thememberid).style.display='';
}
else if (themainevent==1 && theattending2!='E') {
 document.getElementById('member2warning'+thememberid).style.display='none';
}
if (thetrackmeals==1) {
if (thecourseone==0 && thecourseonemeals >0) {
 document.getElementById('warningcourseone'+thememberid).style.display='';
}
else if (thecourseone!=0 && thecourseonemeals >0) {
 document.getElementById('warningcourseone'+thememberid).style.display='none';
}

if (thecoursetwo==0 && thecoursetwomeals >0) {
 document.getElementById('warningcoursetwo'+thememberid).style.display='';
}
else if (thecoursetwo!=0 && thecoursetwomeals >0) {
 document.getElementById('warningcoursetwo'+thememberid).style.display='none';
}

if (thecoursethree==0 && thecoursethreemeals >0) {
 document.getElementById('warningcoursethree'+thememberid).style.display='';
}
else if (thecoursethree!=0 && thecoursethreemeals >0) {
 document.getElementById('warningcoursethree'+thememberid).style.display='none';
}
if (thecoursefour==0 && thecoursefourmeals >0) {
 document.getElementById('warningcoursefour'+thememberid).style.display='';
}
else if (thecoursefour!=0 && thecoursefourmeals >0) {
 document.getElementById('warningcoursefour'+thememberid).style.display='none';
}
if (thecoursefive==0 && thecoursefivemeals >0) {
 document.getElementById('warningcoursefive'+thememberid).style.display='';
}
else if (thecoursefive!=0 && thecoursefivemeals >0) {
 document.getElementById('warningcoursefive'+thememberid).style.display='none';
}
}
} 
thequestionidstring=questionidstring.split(",");
therequiredstring=requiredstring.split(",");
theanswerstring=answerstring.replace(",","");
theanswerstring=theanswerstring.split("||||||");
if (thequestionidstring!='') {
for (var i = 0; i < thequestionidstring.length; i++) {
thequestionid=thequestionidstring[i];
therequired=therequiredstring[i];
theanswer=theanswerstring[i];
theanswer=theanswer.replace(",","");
theanswer=theanswer.replace(",","");
theanswer=theanswer.replace(",","");
if (therequired==1 && theanswer=='') {
 document.getElementById('questionwarning'+thequestionid).style.display='';
}
else  {
 document.getElementById('questionwarning'+thequestionid).style.display='none';
}
}
}
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rsvpguestlistformsubmit.cfm";
xmlhttp.onreadystatechange=SubmitGuestListRSVPstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('eventid='+theeventid+'&trackmeals='+thetrackmeals+'&mainevent='+themainevent+'&firstname='+firstnamestring+'&customer='+thecustomer+'&lastname='+lastnamestring+'&attending='+attendingstring+'&attending2='+attending2string+'&courseone='+courseonestring+'&coursetwo='+coursetwostring+'&coursethree='+coursethreestring+'&coursefour='+coursefourstring+'&coursefive='+coursefivestring+'&questionid='+questionidstring+'&required='+requiredstring+'&answer='+answerstring+'&memberid='+memberstring);
}
function SubmitGuestListRSVPstateChanged()
{
if (xmlhttp.readyState==4) {
theresponse=xmlhttp.responseText;
if (theresponse.indexOf("Success")>0) {
 document.getElementById("rsvpnotsuccessful").style.display='none';
 document.getElementById("rsvpsuccessful").style.display='';
}
else
{ 
document.getElementById("rsvpsuccessful").style.display='none';
 document.getElementById("rsvpnotsuccessful").style.display='';

}
resizeMobile();
appleSubmitForm();
window.location.href='#s'
}
}
function SubmitGuestListRSVPEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
SubmitGuestListRSVP()
appleGoKey()
return false;
}
else
return true;
}




function ContactForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thecomments=document.getElementById("comments").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thevalidemail=(validateEmail(theemail));
if (thename=='') document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if (theemail=='' || thevalidemail==false) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
if (thecomments=='') document.getElementById("commentwarning").innerHTML='*';
else document.getElementById("commentwarning").innerHTML='';
appleSubmitForm();

xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="contactform.cfm";
xmlhttp.onreadystatechange=ContactFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&customer='+thecustomer+'&comments='+thecomments);
}
function ContactFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
 document.getElementById("guestbookwarnings").style.display='none';
 document.getElementById("guestbookfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("email").value='';
document.getElementById("comments").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
document.getElementById("commentwarning").innerHTML='';
}
else {
 document.getElementById("guestbookfinish").style.display='none';
 document.getElementById("guestbookwarnings").style.display='';
document.getElementById("entercaptcha").value='';
if ((theemail=='' || thename=='' || thecomments=='') || theentercaptcha=='' || thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='none';document.getElementById("guestbookwarnings").innerHTML='*';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';
}
}
}
function ContactFormRSVPEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
ContactForm()
appleGoKey()
return false;
}
else
return true;
}



function BlogPostForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thecomments=document.getElementById("comments").value;
theblogapproval=document.getElementById("blogapproval").value;
theblogid=document.getElementById("blogid").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thevalidemail=(validateEmail(theemail));
if (thename=='') document.getElementById("guestwarning").innerHTML='*';
else document.getElementById("guestwarning").innerHTML='';
if (thecomments=='') document.getElementById("commentwarning").innerHTML='*';
else document.getElementById("commentwarning").innerHTML='';
if (theemail=='' || thevalidemail==false) document.getElementById("emailwarning").innerHTML='*';
else document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
resizecontent();
if (theemail!='' && thename!='' && theentercaptcha!='' && thevalidemail==true) 

xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thename=encodeURIComponent(thename);
thecomments=encodeURIComponent(thecomments);
var url="blogpostform.cfm";
xmlhttp.onreadystatechange=BlogPostFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&blogid='+theblogid+'&customer='+thecustomer+'&comments='+thecomments);
}
function BlogPostFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
 document.getElementById("guestbookwarnings").style.display='none'
 document.getElementById("guestbookfinish").style.display='';
 document.getElementById("guest").value='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
document.getElementById("commentwarning").innerHTML='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("email").value='';
document.getElementById("comments").value='';
document.getElementById("entercaptcha").value='';
if (theblogapproval==0) BlogComments(theblogid);
}
else {
document.getElementById("entercaptcha").value='';
 document.getElementById("guestbookfinish").style.display='none';
 document.getElementById("guestbookwarnings").style.display='';
if (theemail=='' || thename=='' || theentercaptcha=='' || thecaptchasuccess=='no') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no')  {document.getElementById("guestbookwarnings").style.display='';document.getElementById("guestbookwarnings").innerHTML='*=required';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';
}
appleSubmitForm();
}
}

function BlogPostFormEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
BlogPostForm()
appleGoKey()
return false;
}
else
return true;
}


function BlogComments (blogid) {
theblogid=blogid;
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="blogcomments.cfm";
xmlhttp.onreadystatechange=BlogCommentsstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&blogid='+theblogid);
appleSubmitForm();
}
function BlogCommentsstateChanged()
{
if (xmlhttp.readyState==4) {
 document.getElementById("commentsbox").innerHTML=xmlhttp.responseText;
 resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
}
}


function SeatingChart (eventid,editorsection) {
theeventid=eventid;
theeditorsection=editorsection;
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="seatingcharttables.cfm";
xmlhttp.onreadystatechange=SeatingChartstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('eventid='+theeventid+'&customer='+thecustomer+'&editorsection='+theeditorsection);
}


function SeatingChartstateChanged()
{
if (xmlhttp.readyState==4) {
document.getElementById('seatingchartpageinfo').innerHTML=xmlhttp.responseText;
thelist=xmlhttp.responseText;
resizecontent();
switchMode();
anchorMonogram();
window.scrollTo(0, 0);
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}









function PhotoAlbum (albumid) {
thealbumid=albumid;
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="photoalbum.cfm";
xmlhttp.onreadystatechange=PhotoAlbumstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('albumid='+thealbumid+'&customer='+thecustomer);
}


function PhotoAlbumstateChanged()
{
if (xmlhttp.readyState==4) {
document.getElementById('photoalbumpageinfo').innerHTML=xmlhttp.responseText;
thelist=xmlhttp.responseText;
$("img.lazy").lazyload();
$("img.lazy").each(function() {
$(this).attr("src", $(this).attr("original"));
$('#photoalbumpageinfo').addClass("album");
resizecontent();
switchMode();
anchorMonogram();
responsiveAlbum();
window.scrollTo(0, 0);
});
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
responsiveAlbum();
}
}

function OnScroll() {
resizecontent();
switchMode();
anchorMonogram();
}

function BridalPartyGroup (cid,v1,v2) {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="bridalpartygroup.cfm";
xmlhttp.onreadystatechange=BridalPartyGroupstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('cid='+cid+'&v1='+v1+'&v2='+v2);
}
function BridalPartyGroupstateChanged()
{
if (xmlhttp.readyState==4)
{

$('#bridalpartygroupinfo').fadeOut(500,function() {
$(this).html(xmlhttp.responseText).fadeIn(500, function() {
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
Montages();
window.scrollTo(0, 0);
document.getElementById("wrapper").style.overflow ="visible";
})
})

}
}



function LocalGroup (cid,v1,v2) {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="localgroup.cfm";
xmlhttp.onreadystatechange=LocalGroupstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('cid='+cid+'&v1='+v1+'&v2='+v2);
}
function LocalGroupstateChanged()
{
if (xmlhttp.readyState==4)
{

$('#localgroupinfo').fadeOut(500,function() {
$(this).html(xmlhttp.responseText).fadeIn(500, function() {
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile()
Montages();
Weather();
window.scrollTo(0, 0);
document.getElementById("wrapper").style.overflow ="visible";
})
})

}
}



function ForgotPassword () {
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rsvpforgotpassword.cfm";
xmlhttp.onreadystatechange=ForgotPasswordstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer);
}
function ForgotPasswordstateChanged()
{
if (xmlhttp.readyState==4)
{
document.getElementById('rsvppageinfo').innerHTML=xmlhttp.responseText;
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
window.scrollTo(0, 0);
resizeMobile();
appleSubmitForm();
document.getElementById("wrapper").style.overflow ="visible";

}
}






function ForgotPasswordValidation() {
thecustomer=document.getElementById("customerid").value;
thersvpemailaddress=document.getElementById("rsvpemailaddress").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rsvpforgotpasswordvalidate.cfm";
xmlhttp.onreadystatechange=ForgotPasswordValidationstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&rsvpemailaddress='+thersvpemailaddress);

}
function ForgotPasswordValidationstateChanged()
{
if (xmlhttp.readyState==4)
{
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];

if (thesuccess=='NOMATCH') {
document.getElementById("rsvppasswordwarning").style.display='';
document.getElementById("rsvppasswordfinish").style.display='none';
}
else if (thesuccess=='SENT BOTH') {
document.getElementById("rsvppasswordwarning").style.display='none';
document.getElementById("rsvppasswordfinish").style.display='';
document.getElementById("rsvppasswordfinish").innerHTML="Your Household RSVP Password has been sent to your email address and the household primary contact's email address";
document.getElementById("rsvpemailaddress").value='';
}
else if (thesuccess=='SENT') {
document.getElementById("rsvppasswordwarning").style.display='none';
document.getElementById("rsvppasswordfinish").style.display='';
document.getElementById("rsvppasswordfinish").innerHTML='Your Household RSVP Password has been sent to your email address.';
document.getElementById("rsvpemailaddress").value='';
}
appleSubmitForm();
}
}
function ForgotPasswordValidationEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
ForgotPasswordValidation()
appleGoKey()
return false;
}
else
return true;
}




function SimplePasswordValidate() {
thecustomer=document.getElementById("customerid").value;
thersvpid=document.getElementById("rsvpid").value;
thersvppassword=document.getElementById("rsvppassword").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rsvpsimplepasswordvalidate.cfm";
xmlhttp.onreadystatechange=SimplePasswordValidatestateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&rsvppassword='+thersvppassword+'&rsvpid='+thersvpid);
}
function SimplePasswordValidatestateChanged()
{
if (xmlhttp.readyState==4)
{
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
if (thesuccess=='NO') {
document.getElementById("rsvppasswordwarning").style.display='';
document.getElementById("rsvppasswordfinish").style.display='none';
}
else if (thesuccess=='YES') {
$.cookie("rsvppassword", thersvpid);
document.getElementById("rsvppasswordwarning").style.display='none';
RSVPSimpleEvent(thersvpid);
}
appleSubmitForm();
}
}
function SimplePasswordValidateEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
SimplePasswordValidate()
appleGoKey()
return false;
}
else
return true;
}


function FamilyFriendsGroup (cid,v1,v2) {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="familyfriendgroup.cfm";
xmlhttp.onreadystatechange=FamilyFriendsGroupstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('cid='+cid+'&v1='+v1+'&v2='+v2);
}
function FamilyFriendsGroupstateChanged()
{
if (xmlhttp.readyState==4)
{

$('#familyfriendsgroupinfo').fadeOut(500,function() {
$(this).html(xmlhttp.responseText).fadeIn(500, function() {
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
Montages();
window.scrollTo(0, 0);
document.getElementById("wrapper").style.overflow ="visible";
})
})

}
}
function BlogPost (cid,v1) {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="blogpost.cfm";
xmlhttp.onreadystatechange=BlogPoststateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('cid='+cid+'&v1='+v1);
}
function BlogPoststateChanged()
{
if (xmlhttp.readyState==4)
{

document.getElementById('blogpageinfo').innerHTML=xmlhttp.responseText;
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
ie8imagefix();
window.scrollTo(0, 0);
document.getElementById("wrapper").style.overflow ="visible";
}
}


function MusicRequestEvent (cid,v1) {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="musicrequestevent.cfm";
xmlhttp.onreadystatechange=MusicRequestEventstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('cid='+cid+'&v1='+v1);
}
function MusicRequestEventstateChanged()
{
if (xmlhttp.readyState==4)
{

document.getElementById('musicrequestpageinfo').innerHTML=xmlhttp.responseText;
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
pageBGresize();
window.scrollTo(0, 0);
document.getElementById("wrapper").style.overflow ="visible";
}
}









function MusicRequestPostForm () {
thename=document.getElementById("guest").value;
theemail=document.getElementById("email").value;
thecomments=document.getElementById("comments").value;
theeventid=document.getElementById("eventid").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
thedisplayname=document.getElementById("displayname").value;
thedisplayemail=document.getElementById("displayemail").value;
theentercaptcha=document.getElementById("entercaptcha").value;
theapproval=document.getElementById("approval").value;
thesong1=document.getElementById("song1").value;
thesong2=document.getElementById("song2").value;
thesong3=document.getElementById("song3").value;
thesong4=document.getElementById("song4").value;
thesong5=document.getElementById("song5").value;
thesong6=document.getElementById("song6").value;
thesong7=document.getElementById("song7").value;
thesong8=document.getElementById("song8").value;
thesong9=document.getElementById("song9").value;
thesong10=document.getElementById("song10").value;
thevalidemail=(validateEmail(theemail));
if (thename=='' && thedisplayname==1) document.getElementById("guestwarning").innerHTML='*';
else if (thedisplayname==1) document.getElementById("guestwarning").innerHTML='';
if ((theemail=='' || thevalidemail==false) && thedisplayemail==1) document.getElementById("emailwarning").innerHTML='*';
else if(thedisplayemail==1) document.getElementById("emailwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
thename=encodeURIComponent(thename);
thecomments=encodeURIComponent(thecomments);
thesong1=encodeURIComponent(thesong1);
thesong2=encodeURIComponent(thesong2);
thesong3=encodeURIComponent(thesong3);
thesong4=encodeURIComponent(thesong4);
thesong5=encodeURIComponent(thesong5);
thesong6=encodeURIComponent(thesong6);
thesong7=encodeURIComponent(thesong7);
thesong8=encodeURIComponent(thesong8);
thesong9=encodeURIComponent(thesong9);
thesong10=encodeURIComponent(thesong10);
var url="musicrequestpostform.cfm";
xmlhttp.onreadystatechange=MusicRequestPostFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('guest='+thename+'&email='+theemail+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&eventid='+theeventid+'&customer='+thecustomer+'&comments='+thecomments+'&song1='+thesong1+'&song2='+thesong2+'&song3='+thesong3+'&song4='+thesong4+'&song5='+thesong5+'&song6='+thesong6+'&song7='+thesong7+'&song8='+thesong8+'&song9='+thesong9+'&song10='+thesong10);
appleSubmitForm();
}
function MusicRequestPostFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
thecaptchasuccess=thelist[4];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
document.getElementById("musicrequestwarnings").style.display='none'
document.getElementById("musicrequestfinish").style.display='';
document.getElementById("guest").value='';
document.getElementById("email").value='';
document.getElementById("song1").value='';
document.getElementById("song2").value='';
document.getElementById("song3").value='';
document.getElementById("song4").value='';
document.getElementById("song5").value='';
document.getElementById("song6").value='';
document.getElementById("song7").value='';
document.getElementById("song8").value='';
document.getElementById("song9").value='';
document.getElementById("song10").value='';
document.getElementById("comments").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("guestwarning").innerHTML='';
document.getElementById("emailwarning").innerHTML='';
document.getElementById("captchawarning").innerHTML='';
if (theapproval==0) MusicRequestComments(theeventid);
}
else {
 document.getElementById("musicrequestfinish").style.display='none';
 document.getElementById("musicrequestwarnings").style.display='';
document.getElementById("musicrequestwarnings").innerHTML='*=required';
document.getElementById("entercaptcha").value='';

if ((theemail=='' && thedisplayemail==1) || (thename=='' && thedisplayname==1) || theentercaptcha=='' || thecaptchasuccess=='no') {  document.getElementById("musicrequestwarnings").style.display='';document.getElementById("musicrequestwarnings").innerHTML='*=required';}
else if (thevalidemail==false && thecaptchasuccess=='yes') { document.getElementById("musicrequestwarnings").style.display='';document.getElementById("musicrequestwarnings").innerHTML='valid email address required';}
else if (thevalidemail==true && thecaptchasuccess=='no') {  document.getElementById("musicrequestwarnings").style.display='';document.getElementById("musicrequestwarnings").innerHTML='*=required';}
if (thecaptchasuccess=='no') document.getElementById("captchawarning").innerHTML='*';


}
}
}

function MusicRequestPostFormEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
MusicRequestPostForm()
appleGoKey()
return false;
}
else
return true;
}




function MusicRequestComments (eventid) {
theeventid=eventid;
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}

var url="musicrequestcomments.cfm";
xmlhttp.onreadystatechange=MusicRequestCommentsstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&eventid='+theeventid);
appleSubmitForm();
}
function MusicRequestCommentsstateChanged()
{
if (xmlhttp.readyState==4) {
 document.getElementById("guestbookcomments").innerHTML=xmlhttp.responseText;
 resizecontent();
switchMode();
anchorMonogram();
pageBGresize();
}
}











function Puzzle (puzzleid) {
thepuzzleid=puzzleid;
thecustomer=document.getElementById("customerid").value;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="puzzleentry.cfm";
xmlhttp.onreadystatechange=PuzzlestateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('puzzleid='+thepuzzleid+'&customer='+thecustomer);
}
function PuzzlestateChanged()
{
if (xmlhttp.readyState==4)
{
document.getElementById('puzzleinfo').innerHTML=xmlhttp.responseText;
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });

resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
window.scrollTo(0, 0);
document.getElementById("wrapper").style.overflow ="visible";
 var allTags = document.getElementsByTagName('*');
 for(i=0; i<allTags.length; i++){
	      if(allTags[i].className == 'slides') allTags[i].style.visibility = 'visible';
  }
}
}




function ChangePuzzle (puzzletype,puzzleid,difficulty) {
thepuzzleid=puzzleid;
thepuzzletype=puzzletype;
thedifficulty=difficulty;
thecustomer=document.getElementById("customerid").value;
if (thepuzzletype!='' && thedifficulty!='') {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="changepuzzleentry.cfm";
xmlhttp.onreadystatechange=PuzzlestateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('puzzleid='+thepuzzleid+'&customer='+thecustomer+'&puzzletype='+thepuzzletype+'&difficulty='+thedifficulty);
}
}
function PuzzlestateChanged()
{
if (xmlhttp.readyState==4)
{
document.getElementById('puzzleinfo').innerHTML=xmlhttp.responseText;
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });

resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
window.scrollTo(0, 0);
document.getElementById("wrapper").style.overflow ="visible";
 var allTags = document.getElementsByTagName('*');
 for(i=0; i<allTags.length; i++){
	      if(allTags[i].className == 'slides') allTags[i].style.visibility = 'visible';
  }
}
}















function ChangePageUp() {
thepage=document.getElementById('currentpage').value;
thetotalpages=document.getElementById('totalpages').value;
thenewpage=parseInt(thepage)+1;
window.location.hash='gbook'+thenewpage; 
 document.getElementById('page'+thepage).style.display='none';
  document.getElementById('page'+thenewpage).style.display='';
document.getElementById('currentpage').value=thenewpage;
document.getElementById('pageback').style.display='';
if (thetotalpages==thenewpage) document.getElementById('pagenext').style.display='none';
resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
}
function ChangePageDown() {
thepage=document.getElementById('currentpage').value;
thetotalpages=document.getElementById('totalpages').value;
thenewpage=parseInt(thepage)-1;
 document.getElementById('page'+thepage).style.display='none';
  document.getElementById('page'+thenewpage).style.display='';
document.getElementById('currentpage').value=thenewpage;
document.getElementById('pagenext').style.display='';
window.location.hash='gbook'+thenewpage; 
if (thenewpage==1) document.getElementById('pageback').style.display='none';
resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
}
function CheckAttendingDisplaySimple(attending) {
if (attending=='Y') {
document.getElementById('yesquestions').style.display='';
document.getElementById('attending-check-N').style.display='none';
document.getElementById('attending-check-Y').style.display='';
}
else if (attending=='N') {
document.getElementById('yesquestions').style.display='none';
document.getElementById('attending-check-Y').style.display='none';
document.getElementById('attending-check-N').style.display='';
}
}
function CheckAttendingDisplay(memberid,attending){
thememberid=memberid;
theattending=attending;
themainevent=document.getElementById('mainevent').value;
thetrackmeals=document.getElementById('trackmeals').value;
theattending2=document.getElementById('attending2-'+thememberid).value;
document.getElementById('attending-'+thememberid).value=theattending;
if (theattending=='Y' && themainevent==0 && thetrackmeals==1) document.getElementById('meals'+thememberid).style.display='';
else if (theattending=='N' && themainevent==0 && thetrackmeals==1)  document.getElementById('meals'+thememberid).style.display='none';
document.getElementById('attending-'+thememberid+'check-N').style.display='none';
document.getElementById('attending-'+thememberid+'check-Y').style.display='none';
document.getElementById('attending-'+thememberid+'check-'+theattending).style.display='';
}
function CheckAttending2Display(memberid,attending2){
thememberid=memberid;
theattending2=attending2;
themainevent=document.getElementById('mainevent').value;
thetrackmeals=document.getElementById('trackmeals').value;
theattending=document.getElementById('attending-'+thememberid).value;
document.getElementById('attending2-'+thememberid).value=theattending2;
if (theattending2=='Y' && themainevent==1 && thetrackmeals==1) document.getElementById('meals'+thememberid).style.display='';
else if (theattending2=='N' && themainevent==1 && thetrackmeals==1) document.getElementById('meals'+thememberid).style.display='none';
document.getElementById('attending2-'+thememberid+'check-N').style.display='none';
document.getElementById('attending2-'+thememberid+'check-Y').style.display='none';
document.getElementById('attending2-'+thememberid+'check-'+theattending2).style.display='';
}
function UpdateCourseOne(memberid,mealid){
thememberid=memberid;
themealid=mealid;
document.getElementById('courseone-'+thememberid).value=themealid;
}
function UpdateCourseTwo(memberid,mealid){
thememberid=memberid;
themealid=mealid;
document.getElementById('coursetwo-'+thememberid).value=themealid;
}
function UpdateCourseThree(memberid,mealid){
thememberid=memberid;
themealid=mealid;
document.getElementById('coursethree-'+thememberid).value=themealid;
}
function UpdateCourseFour(memberid,mealid){
thememberid=memberid;
themealid=mealid;
document.getElementById('coursefour-'+thememberid).value=themealid;
}
function UpdateCourseFive(memberid,mealid){
thememberid=memberid;
themealid=mealid;
document.getElementById('coursefive-'+thememberid).value=themealid;
}
function RSVPRadioUpdate(questionid,answer){
thequestionid=questionid;
theanswer=answer;
document.getElementById('answerquestion'+thequestionid).value=theanswer;
if (document.getElementById('answer'+thequestionid+'-check-A')!=null) document.getElementById('answer'+thequestionid+'-check-A').style.display='none';
if (document.getElementById('answer'+thequestionid+'-check-B')!=null) document.getElementById('answer'+thequestionid+'-check-B').style.display='none';
if (document.getElementById('answer'+thequestionid+'-check-C')!=null) document.getElementById('answer'+thequestionid+'-check-C').style.display='none';
if (document.getElementById('answer'+thequestionid+'-check-D')!=null) document.getElementById('answer'+thequestionid+'-check-D').style.display='none';
if (document.getElementById('answer'+thequestionid+'-check-E')!=null) document.getElementById('answer'+thequestionid+'-check-E').style.display='none';
document.getElementById('answer'+thequestionid+'-check-'+theanswer).style.display='';
}

function RSVPSimpleRadioUpdate(question,answer){
thequestion=question;
theanswer=answer;
if (document.getElementById('answer'+thequestion+'-check-A')!=null) document.getElementById('answer'+thequestion+'-check-A').style.display='none';
if (document.getElementById('answer'+thequestion+'-check-B')!=null) document.getElementById('answer'+thequestion+'-check-B').style.display='none';
if (document.getElementById('answer'+thequestion+'-check-C')!=null) document.getElementById('answer'+thequestion+'-check-C').style.display='none';
if (document.getElementById('answer'+thequestion+'-check-D')!=null) document.getElementById('answer'+thequestion+'-check-D').style.display='none';
if (document.getElementById('answer'+thequestion+'-check-E')!=null) document.getElementById('answer'+thequestion+'-check-E').style.display='none';
document.getElementById('answer'+thequestion+'-check-'+theanswer).style.display='';
}


function RSVPSelectUpdate(answer,questionid){
thequestionid=questionid;
theanswer=answer;
document.getElementById('answerquestion'+thequestionid).value=theanswer;
}
function AddMember () {
thememberreveal=parseFloat(document.getElementById('memberreveal').value)+1;
document.getElementById('memberreveal').value=thememberreveal;
if (thememberreveal < 16) {
document.getElementById('member'+thememberreveal).style.display='';
document.getElementById('member'+thememberreveal+'rule').style.display='';
}
if (thememberreveal==15) {
document.getElementById('addamember').style.display='none';
}
resizecontent();
switchMode();
anchorMonogram();
appleSubmitForm();
}
function AddressBookForm () {
thehousehold=document.getElementById("household").value;
thememberreveal=document.getElementById("memberreveal").value;
thecaptcha=document.getElementById("captcha").value;
thecustomer=document.getElementById("customerid").value;
theentercaptcha=document.getElementById("entercaptcha").value;
thestreet=document.getElementById("street").value;
thestreet2=document.getElementById("street2").value;
thecity=document.getElementById("city").value;
thestate=document.getElementById("state").value;
thezip=document.getElementById("zip").value;
thecountry=document.getElementById("country").value;
thefirstname1=document.getElementById("firstname1").value;
thelastname1=document.getElementById("lastname1").value;
theemail1=document.getElementById("email1").value;
thefirstphone1=document.getElementById("firstphone1").value;
thesecondphone1=document.getElementById("secondphone1").value;
thethirdphone1=document.getElementById("thirdphone1").value;
thefirstname2=document.getElementById("firstname2").value;
thelastname2=document.getElementById("lastname2").value;
theemail2=document.getElementById("email2").value;
thefirstphone2=document.getElementById("firstphone2").value;
thesecondphone2=document.getElementById("secondphone2").value;
thethirdphone2=document.getElementById("thirdphone2").value;
thefirstname3=document.getElementById("firstname3").value;
thelastname3=document.getElementById("lastname3").value;
theemail3=document.getElementById("email3").value;
thefirstphone3=document.getElementById("firstphone3").value;
thesecondphone3=document.getElementById("secondphone3").value;
thethirdphone3=document.getElementById("thirdphone3").value;
thefirstname4=document.getElementById("firstname4").value;
thelastname4=document.getElementById("lastname4").value;
theemail4=document.getElementById("email4").value;
thefirstphone4=document.getElementById("firstphone4").value;
thesecondphone4=document.getElementById("secondphone4").value;
thethirdphone4=document.getElementById("thirdphone4").value;
thefirstname5=document.getElementById("firstname5").value;
thelastname5=document.getElementById("lastname5").value;
theemail5=document.getElementById("email5").value;
thefirstphone5=document.getElementById("firstphone5").value;
thesecondphone5=document.getElementById("secondphone5").value;
thethirdphone5=document.getElementById("thirdphone5").value;
thefirstname6=document.getElementById("firstname6").value;
thelastname6=document.getElementById("lastname6").value;
theemail6=document.getElementById("email6").value;
thefirstphone6=document.getElementById("firstphone6").value;
thesecondphone6=document.getElementById("secondphone6").value;
thethirdphone6=document.getElementById("thirdphone6").value;
thefirstname7=document.getElementById("firstname7").value;
thelastname7=document.getElementById("lastname7").value;
theemail7=document.getElementById("email7").value;
thefirstphone7=document.getElementById("firstphone7").value;
thesecondphone7=document.getElementById("secondphone7").value;
thethirdphone7=document.getElementById("thirdphone7").value;
thefirstname8=document.getElementById("firstname8").value;
thelastname8=document.getElementById("lastname8").value;
theemail8=document.getElementById("email8").value;
thefirstphone8=document.getElementById("firstphone8").value;
thesecondphone8=document.getElementById("secondphone8").value;
thethirdphone8=document.getElementById("thirdphone8").value;
thefirstname9=document.getElementById("firstname9").value;
thelastname9=document.getElementById("lastname9").value;
theemail9=document.getElementById("email9").value;
thefirstphone9=document.getElementById("firstphone9").value;
thesecondphone9=document.getElementById("secondphone9").value;
thethirdphone9=document.getElementById("thirdphone9").value;
thefirstname10=document.getElementById("firstname10").value;
thelastname10=document.getElementById("lastname10").value;
theemail10=document.getElementById("email10").value;
thefirstphone10=document.getElementById("firstphone10").value;
thesecondphone10=document.getElementById("secondphone10").value;
thethirdphone10=document.getElementById("thirdphone10").value;
thefirstname11=document.getElementById("firstname11").value;
thelastname11=document.getElementById("lastname11").value;
theemail11=document.getElementById("email11").value;
thefirstphone11=document.getElementById("firstphone11").value;
thesecondphone11=document.getElementById("secondphone11").value;
thethirdphone11=document.getElementById("thirdphone11").value;
thefirstname12=document.getElementById("firstname12").value;
thelastname12=document.getElementById("lastname12").value;
theemail12=document.getElementById("email12").value;
thefirstphone12=document.getElementById("firstphone12").value;
thesecondphone12=document.getElementById("secondphone12").value;
thethirdphone12=document.getElementById("thirdphone12").value;
thefirstname13=document.getElementById("firstname13").value;
thelastname13=document.getElementById("lastname13").vlue;
theemail13=document.getElementById("email13").value;
thefirstphone13=document.getElementById("firstphone13").value;
thesecondphone13=document.getElementById("secondphone13").value;
thethirdphone13=document.getElementById("thirdphone13").value;
thefirstname14=document.getElementById("firstname14").value;
thelastname14=document.getElementById("lastname14").value;
theemail14=document.getElementById("email14").value;
thefirstphone14=document.getElementById("firstphone14").value;
thesecondphone14=document.getElementById("secondphone14").value;
thethirdphone14=document.getElementById("thirdphone14").value;
thefirstname15=document.getElementById("firstname15").value;
thelastname15=document.getElementById("lastname15").value;
theemail15=document.getElementById("email15").value;
thefirstphone15=document.getElementById("firstphone15").value;
thesecondphone15=document.getElementById("secondphone15").value;
thethirdphone15=document.getElementById("thirdphone15").value;
if (thehousehold=='') document.getElementById("householdwarning").innerHTML='*';
else document.getElementById("householdwarning").innerHTML='';
if (theentercaptcha=='') document.getElementById("captchawarning").innerHTML='*';
else document.getElementById("captchawarning").innerHTML='';
if (thehousehold=='' || theentercaptcha=='') { document.getElementById("addressbookwarnings").style.display='';document.getElementById("addressbookwarnings").innerHTML='*=required';}
else { document.getElementById("addressbookwarnings").style.display='none';document.getElementById("addressbookwarnings").innerHTML='';}
appleSubmitForm();
if (thehousehold!='' && theentercaptcha!='') {
window.scrollTo(0, 0);
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="addressbookform.cfm";
xmlhttp.onreadystatechange=AddressBookFormstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('household='+thehousehold+'&memberreveal='+thememberreveal+'&entercaptcha='+theentercaptcha+'&captcha='+thecaptcha+'&customer='+thecustomer+'&street='+thestreet+'&street2='+thestreet2+'&city='+thecity+'&state='+thestate+'&zip='+thezip+'&country='+thecountry+'&firstname1='+thefirstname1+'&lastname1='+thelastname1+'&email1='+theemail1+'&firstphone1='+thefirstphone1+'&secondphone1='+thesecondphone1+'&thirdphone1='+thethirdphone1+'&firstname2='+thefirstname2+'&lastname2='+thelastname2+'&email2='+theemail2+'&firstphone2='+thefirstphone2+'&secondphone2='+thesecondphone2+'&thirdphone2='+thethirdphone2+'&firstname3='+thefirstname3+'&lastname3='+thelastname3+'&email3='+theemail3+'&firstphone3='+thefirstphone3+'&secondphone3='+thesecondphone3+'&thirdphone3='+thethirdphone3+'&firstname4='+thefirstname4+'&lastname4='+thelastname4+'&email4='+theemail4+'&firstphone4='+thefirstphone4+'&secondphone4='+thesecondphone4+'&thirdphone4='+thethirdphone4+'&firstname5='+thefirstname5+'&lastname5='+thelastname5+'&email5='+theemail5+'&firstphone5='+thefirstphone5+'&secondphone5='+thesecondphone5+'&thirdphone5='+thethirdphone5+'&firstname6='+thefirstname6+'&lastname6='+thelastname6+'&email6='+theemail6+'&firstphone6='+thefirstphone6+'&secondphone6='+thesecondphone6+'&thirdphone6='+thethirdphone6+'&firstname7='+thefirstname7+'&lastname7='+thelastname7+'&email7='+theemail7+'&firstphone7='+thefirstphone7+'&secondphone7='+thesecondphone7+'&thirdphone7='+thethirdphone7+'&firstname8='+thefirstname8+'&lastname8='+thelastname8+'&email8='+theemail8+'&firstphone8='+thefirstphone8+'&secondphone8='+thesecondphone8+'&thirdphone8='+thethirdphone8+'&firstname9='+thefirstname9+'&lastname9='+thelastname9+'&email9='+theemail9+'&firstphone9='+thefirstphone9+'&secondphone9='+thesecondphone9+'&thirdphone9='+thethirdphone9+'&firstname10='+thefirstname10+'&lastname10='+thelastname10+'&email10='+theemail10+'&firstphone10='+thefirstphone10+'&secondphone10='+thesecondphone10+'&thirdphone10='+thethirdphone10+'&firstname11='+thefirstname11+'&lastname11='+thelastname11+'&email11='+theemail11+'&firstphone11='+thefirstphone11+'&secondphone11='+thesecondphone11+'&thirdphone11='+thethirdphone11+'&firstname12='+thefirstname12+'&lastname12='+thelastname12+'&email12='+theemail12+'&firstphone12='+thefirstphone12+'&secondphone12='+thesecondphone12+'&thirdphone12='+thethirdphone12+'&firstname13='+thefirstname13+'&lastname13='+thelastname13+'&email13='+theemail13+'&firstphone13='+thefirstphone13+'&secondphone13='+thesecondphone13+'&thirdphone13='+thethirdphone13+'&firstname14='+thefirstname14+'&lastname14='+thelastname14+'&email14='+theemail14+'&firstphone14='+thefirstphone14+'&secondphone14='+thesecondphone14+'&thirdphone14='+thethirdphone14+'&firstname15='+thefirstname15+'&lastname15='+thelastname15+'&email15='+theemail15+'&firstphone15='+thefirstphone15+'&secondphone15='+thesecondphone15+'&thirdphone15='+thethirdphone15);
}
else {
window.location.href='#w';
}
}

function AddressBookFormstateChanged()
{
if (xmlhttp.readyState==4) {

thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");
thesuccess=thelist[1];
thecaptchaimage=thelist[2];
thenewcaptcha=thelist[3];
document.getElementById("captcha").value=thenewcaptcha;
document.getElementById("captchaimage").innerHTML=thecaptchaimage;
if (thesuccess=='yes') {
document.getElementById("addressbookwarnings").style.display='none'
document.getElementById("addressbookfinish").style.display='';
document.getElementById("household").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("household").value='';
document.getElementById("memberreveal").value='1';
document.getElementById("captcha").value='';
document.getElementById("customerid").value='';
document.getElementById("entercaptcha").value='';
document.getElementById("street").value='';
document.getElementById("street2").value='';
document.getElementById("city").value='';
document.getElementById("state").value='';
document.getElementById("zip").value='';
document.getElementById("country").value='';
document.getElementById("firstname1").value='';
document.getElementById("lastname1").value='';
document.getElementById("email1").value='';
document.getElementById("firstphone1").value='';
document.getElementById("secondphone1").value='';
document.getElementById("thirdphone1").value='';
document.getElementById("firstname2").value='';
document.getElementById("lastname2").value='';
document.getElementById("email2").value='';
document.getElementById("firstphone2").value='';
document.getElementById("secondphone2").value='';
document.getElementById("thirdphone2").value='';
document.getElementById("firstname3").value='';
document.getElementById("lastname3").value='';
document.getElementById("email3").value='';
document.getElementById("firstphone3").value='';
document.getElementById("secondphone3").value='';
document.getElementById("thirdphone3").value='';
document.getElementById("firstname4").value='';
document.getElementById("lastname4").value='';
document.getElementById("email4").value='';
document.getElementById("firstphone4").value='';
document.getElementById("secondphone4").value='';
document.getElementById("thirdphone4").value='';
document.getElementById("firstname5").value='';
document.getElementById("lastname5").value='';
document.getElementById("email5").value='';
document.getElementById("firstphone5").value='';
document.getElementById("secondphone5").value='';
document.getElementById("thirdphone5").value='';
document.getElementById("firstname6").value='';
document.getElementById("lastname6").value='';
document.getElementById("email6").value='';
document.getElementById("firstphone6").value='';
document.getElementById("secondphone6").value='';
document.getElementById("thirdphone6").value='';
document.getElementById("firstname7").value='';
document.getElementById("lastname7").value='';
document.getElementById("email7").value='';
document.getElementById("firstphone7").value='';
document.getElementById("secondphone7").value='';
document.getElementById("thirdphone7").value='';
document.getElementById("firstname8").value='';
document.getElementById("lastname8").value='';
document.getElementById("email8").value='';
document.getElementById("firstphone8").value='';
document.getElementById("secondphone8").value='';
document.getElementById("thirdphone8").value='';
document.getElementById("firstname9").value='';
document.getElementById("lastname9").value='';
document.getElementById("email9").value='';
document.getElementById("firstphone9").value='';
document.getElementById("secondphone9").value='';
document.getElementById("thirdphone9").value='';
document.getElementById("firstname10").value='';
document.getElementById("lastname10").value='';
document.getElementById("email10").value='';
document.getElementById("firstphone10").value='';
document.getElementById("secondphone10").value='';
document.getElementById("thirdphone10").value='';
document.getElementById("firstname11").value='';
document.getElementById("lastname11").value='';
document.getElementById("email11").value='';
document.getElementById("firstphone11").value='';
document.getElementById("secondphone11").value='';
document.getElementById("thirdphone11").value='';
document.getElementById("firstname12").value='';
document.getElementById("lastname12").value='';
document.getElementById("email12").value='';
document.getElementById("firstphone12").value='';
document.getElementById("secondphone12").value='';
document.getElementById("thirdphone12").value='';
document.getElementById("firstname13").value='';
document.getElementById("lastname13").vlue='';
document.getElementById("email13").value='';
document.getElementById("firstphone13").value='';
document.getElementById("secondphone13").value='';
document.getElementById("thirdphone13").value='';
document.getElementById("firstname14").value='';
document.getElementById("lastname14").value='';
document.getElementById("email14").value='';
document.getElementById("firstphone14").value='';
document.getElementById("secondphone14").value='';
document.getElementById("thirdphone14").value='';
document.getElementById("firstname15").value='';
document.getElementById("lastname15").value='';
document.getElementById("email15").value='';
document.getElementById("firstphone15").value='';
document.getElementById("secondphone15").value='';
document.getElementById("thirdphone15").value='';
document.getElementById("member2rule").style.display='none';
document.getElementById("member3rule").style.display='none';
document.getElementById("member4rule").style.display='none';
document.getElementById("member5rule").style.display='none';
document.getElementById("member6rule").style.display='none';
document.getElementById("member7rule").style.display='none';
document.getElementById("member8rule").style.display='none';
document.getElementById("member9rule").style.display='none';
document.getElementById("member10rule").style.display='none';
document.getElementById("member11rule").style.display='none';
document.getElementById("member12rule").style.display='none';
document.getElementById("member13rule").style.display='none';
document.getElementById("member14rule").style.display='none';
document.getElementById("member15rule").style.display='none';
document.getElementById("member2").style.display='none';
document.getElementById("member3").style.display='none';
document.getElementById("member4").style.display='none';
document.getElementById("member5").style.display='none';
document.getElementById("member6").style.display='none';
document.getElementById("member7").style.display='none';
document.getElementById("member8").style.display='none';
document.getElementById("member9").style.display='none';
document.getElementById("member10").style.display='none';
document.getElementById("member11").style.display='none';
document.getElementById("member12").style.display='none';
document.getElementById("member13").style.display='none';
document.getElementById("member14").style.display='none';
document.getElementById("member15").style.display='none';
resizecontent();
switchMode();
anchorMonogram();
}
else if (thesuccess=='no' && theentercaptcha!='' && thehousehold!='') {
document.getElementById("captchawarning").innerHTML='*';
document.getElementById("addressbookwarnings").style.display='';
document.getElementById("addressbookwarnings").innerHTML='*=required';
}
}
}
function AddressBookFormEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
AddressBookForm()
appleGoKey()
return false;
}
else
return true;
}




function Password () {
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}

thecustomer=document.getElementById("customerid").value;
theidentity=document.getElementById("identity").value;
thepassone=document.getElementById("passone").value;
theaskone=document.getElementById("askone").value;
thefa=document.getElementById("fa").value;
thepasstwo=document.getElementById("passtwo").value;
theasktwo=document.getElementById("asktwo").value;
thepassgroomsmen=document.getElementById("passgroomsmen").value;
theaskgroomsmen=document.getElementById("askgroomsmen").value;
theaskidentity=document.getElementById("askidentity").value;
theaskbridesmaids=document.getElementById("askbridesmaids").value;
thepassbridesmaids=document.getElementById("passbridesmaids").value;
var url="passwordresults.cfm";
xmlhttp.onreadystatechange=PasswordstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('customer='+thecustomer+'&identity='+theidentity+'&passone='+thepassone+'&passtwo='+thepasstwo+'&passgroomsmen='+thepassgroomsmen+'&passbridesmaids='+thepassbridesmaids);
appleSubmitForm();
}
function PasswordstateChanged()
{
if (xmlhttp.readyState==4) {
thelist=xmlhttp.responseText;
thelist=thelist.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepassoneresult=thelist[1];
thepasstworesult=thelist[2];
theidentityresult=thelist[3];
thepassbridesmaidsresult=thelist[4];
thepassgroomsmenresult=thelist[5];
if (thepassoneresult=='YES') {
$.cookie("levelone", thepassone);
}
if (thepasstworesult=='YES') {
$.cookie("leveltwo", thepasstwo); 
}
if (theidentityresult=='YES') {
$.cookie("identity", thecustomer); 
}
if (thepassgroomsmenresult=='YES') {
$.cookie("groomsmen", thepassgroomsmen); 
}
if (thepassbridesmaidsresult=='YES') {
$.cookie("bridesmaids", thepassbridesmaids); 
}
if ((thepassoneresult=='YES' || theaskone==0) && (thepasstworesult=='YES' || theasktwo==0) && (thepassgroomsmenresult=='YES' || theaskgroomsmen==0) && (thepassbridesmaidsresult=='YES' || theaskbridesmaids==0) && (theidentityresult=='YES' || theaskidentity==0)) {
Page(thefa,thecustomer,'','','','');
resizeMobile(); 
}
else {
if (thepassoneresult=='YES') {
document.getElementById('onequestion').style.display='none';
document.getElementById('oneform').style.display='none';
}
else {
 document.getElementById("passone").value='';
document.getElementById("passwordwarning").innerHTML='No Match.';
}
if (thepasstworesult=='YES') {
document.getElementById('twoquestion').style.display='none';
document.getElementById('twoform').style.display='none';
}
else {
document.getElementById("passtwo").value='';
document.getElementById("passwordwarning").innerHTML='No Match.';
}
if (theidentityresult=='YES') {
document.getElementById('logquestion').style.display='none';
document.getElementById('logform').style.display='none';
}
else document.getElementById("identity").value='';
if (thepassgroomsmenresult=='YES') {
document.getElementById('groomsmenquestion').style.display='none';
document.getElementById('groomsmenform').style.display='none';
}
else {
document.getElementById("passgroomsmen").value='';
document.getElementById("passwordwarning").innerHTML='No Match.';
}
if (thepassbridesmaidsresult=='YES') {
document.getElementById('bridesmaidsquestion').style.display='none';
document.getElementById('bridesmaidsform').style.display='none';
}
else {
document.getElementById("passbridesmaids").value='';
document.getElementById("passwordwarning").innerHTML='No Match.';
}
}
}
}
function PasswordEnterKey(myfield,e) { var keycode; if (window.event) keycode = window.event.keyCode; else if (e) keycode = e.which; else return true; if (keycode == 13)
{
Password()
appleGoKey()
return false;
}
else
return true;
}





function PollQuiz () {

thecustomer=document.getElementById("customerid").value;


polls = document.getElementsByTagName("input");
pollstring="";
for (i = 0; i < polls.length; i++) {
if (polls[i].getAttribute("id")!=null) { 
if (polls[i].getAttribute("id").indexOf("pollid") > -1) {
theid=polls[i].getAttribute("id");
thepollattemptid= document.getElementById(theid).value;
thepollcount=document.getElementById("pollcount"+thepollattemptid).value;
if (thepollcount==1) SubmitPoll1(thepollattemptid);
if (thepollcount==2) SubmitPoll2(thepollattemptid);
if (thepollcount==3) SubmitPoll3(thepollattemptid);
if (thepollcount==4) SubmitPoll4(thepollattemptid);
if (thepollcount==5) SubmitPoll5(thepollattemptid);
if (thepollcount==6) SubmitPoll6(thepollattemptid);
if (thepollcount==7) SubmitPoll7(thepollattemptid);
if (thepollcount==8) SubmitPoll8(thepollattemptid);
if (thepollcount==9) SubmitPoll9(thepollattemptid);
if (thepollcount==10) SubmitPoll10(thepollattemptid);
if (thepollcount==11) SubmitPoll11(thepollattemptid);
if (thepollcount==12) SubmitPoll12(thepollattemptid);
if (thepollcount==13) SubmitPoll13(thepollattemptid);
if (thepollcount==14) SubmitPoll14(thepollattemptid);
if (thepollcount==15) SubmitPoll15(thepollattemptid);
if (thepollcount==16) SubmitPoll16(thepollattemptid);
if (thepollcount==17) SubmitPoll17(thepollattemptid);
if (thepollcount==18) SubmitPoll18(thepollattemptid);
if (thepollcount==19) SubmitPoll19(thepollattemptid);
if (thepollcount==20) SubmitPoll20(thepollattemptid);
}
}
}
QuizCalculation();
window.scrollTo(0, 0);
}

function QuizCalculation() {
theanswered=0;
thetotalquestions=document.getElementById("totalquestions").value;
quiz = document.getElementsByTagName("input");
quizstring="";
for (i = 0; i < polls.length; i++) {
if (quiz[i].getAttribute("id")!=null) { 
if (quiz[i].getAttribute("id").indexOf("quizid") > -1) {
theid=quiz[i].getAttribute("id");
if (quizstring.length > 0) quizstring += ",";
quizstring += document.getElementById(theid).value;
}
}
}
thequizstring=quizstring;
quizstring=quizstring.split(",");
for (var i = 0; i < quizstring.length; i++) {

thequizid=quizstring[i];
theanswer='';
if (document.getElementById('quizanswer'+thequizid+'A')!=null) theanswera=document.getElementById('quizanswer'+thequizid+'A').checked;
else theanswera=false;
if (document.getElementById('quizanswer'+thequizid+'B')!=null) theanswerb=document.getElementById('quizanswer'+thequizid+'B').checked;
else theanswerb=false;
if (document.getElementById('quizanswer'+thequizid+'C')!=null) theanswerc=document.getElementById('quizanswer'+thequizid+'C').checked;
else theanswerc=false;
if (document.getElementById('quizanswer'+thequizid+'D')!=null) theanswerd=document.getElementById('quizanswer'+thequizid+'D').checked;
else theanswerd=false;
if (document.getElementById('quizanswer'+thequizid+'E')!=null) theanswere=document.getElementById('quizanswer'+thequizid+'E').checked;
else theanswere=false;
if (document.getElementById('quizanswer'+thequizid+'F')!=null) theanswerf=document.getElementById('quizanswer'+thequizid+'F').checked;
else theanswerf=false;
if (document.getElementById('quizanswer'+thequizid+'G')!=null) theanswerg=document.getElementById('quizanswer'+thequizid+'G').checked;
else theanswerg=false;
if (document.getElementById('quizanswer'+thequizid+'H')!=null) theanswerh=document.getElementById('quizanswer'+thequizid+'H').checked;
else theanswerh=false;
if (document.getElementById('quizanswer'+thequizid+'I')!=null) theansweri=document.getElementById('quizanswer'+thequizid+'I').checked;
else theansweri=false;
if (document.getElementById('quizanswer'+thequizid+'J')!=null) theanswerj=document.getElementById('quizanswer'+thequizid+'J').checked;
else theanswerj=false;
if (theanswera==true) theanswer='A';
else if (theanswerb==true) theanswer='B';
else if (theanswerc==true) theanswer='C';
else if (theanswerd==true) theanswer='D';
else if (theanswere==true) theanswer='E';
else if (theanswerf==true) theanswer='F';
else if (theanswerg==true) theanswer='G';
else if (theanswerh==true) theanswer='H';
else if (theansweri==true) theanswer='I';
else if (theanswerj==true) theanswer='J';

if (theanswer!='') theanswered=theanswered+1;
}
if (thetotalquestions==theanswered) {



quizstring=thequizstring.split(",");
thecorrectcount=0;
for (var i = 0; i < quizstring.length; i++) {

thequizid=quizstring[i];

thecorrect=document.getElementById("correct"+thequizid).value;
theanswer='';
if (document.getElementById('quizanswer'+thequizid+'A')!=null) theanswera=document.getElementById('quizanswer'+thequizid+'A').checked;
else theanswera=false;
if (document.getElementById('quizanswer'+thequizid+'B')!=null) theanswerb=document.getElementById('quizanswer'+thequizid+'B').checked;
else theanswerb=false;
if (document.getElementById('quizanswer'+thequizid+'C')!=null) theanswerc=document.getElementById('quizanswer'+thequizid+'C').checked;
else theanswerc=false;
if (document.getElementById('quizanswer'+thequizid+'D')!=null) theanswerd=document.getElementById('quizanswer'+thequizid+'D').checked;
else theanswerd=false;
if (document.getElementById('quizanswer'+thequizid+'E')!=null) theanswere=document.getElementById('quizanswer'+thequizid+'E').checked;
else theanswere=false;
if (document.getElementById('quizanswer'+thequizid+'F')!=null) theanswerf=document.getElementById('quizanswer'+thequizid+'F').checked;
else theanswerf=false;
if (document.getElementById('quizanswer'+thequizid+'G')!=null) theanswerg=document.getElementById('quizanswer'+thequizid+'G').checked;
else theanswerg=false;
if (document.getElementById('quizanswer'+thequizid+'H')!=null) theanswerh=document.getElementById('quizanswer'+thequizid+'H').checked;
else theanswerh=false;
if (document.getElementById('quizanswer'+thequizid+'I')!=null) theansweri=document.getElementById('quizanswer'+thequizid+'I').checked;
else theansweri=false;
if (document.getElementById('quizanswer'+thequizid+'J')!=null) theanswerj=document.getElementById('quizanswer'+thequizid+'J').checked;
else theanswerj=false;
if (theanswera==true) theanswer='A';
else if (theanswerb==true) theanswer='B';
else if (theanswerc==true) theanswer='C';
else if (theanswerd==true) theanswer='D';
else if (theanswere==true) theanswer='E';
else if (theanswerf==true) theanswer='F';
else if (theanswerg==true) theanswer='G';
else if (theanswerh==true) theanswer='H';
else if (theansweri==true) theanswer='I';
else if (theanswerj==true) theanswer='J';

if (theanswer==thecorrect) {
thecorrectcount=thecorrectcount+1;
document.getElementById("correct"+thequizid+theanswer).style.display='';
document.getElementById("wrong"+thequizid+theanswer).style.display='none';
}
else {
document.getElementById("correct"+thequizid+theanswer).style.display='none';
document.getElementById("wrong"+thequizid+theanswer).style.display='';
}


if (document.getElementById('quizanswer'+thequizid+'A')!=null) document.getElementById('quizanswer'+thequizid+'A').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'B')!=null) theanswerb=document.getElementById('quizanswer'+thequizid+'B').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'C')!=null) theanswerc=document.getElementById('quizanswer'+thequizid+'C').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'D')!=null) theanswerd=document.getElementById('quizanswer'+thequizid+'D').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'E')!=null) theanswere=document.getElementById('quizanswer'+thequizid+'E').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'F')!=null) theanswerf=document.getElementById('quizanswer'+thequizid+'F').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'G')!=null) theanswerg=document.getElementById('quizanswer'+thequizid+'G').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'H')!=null) theanswerh=document.getElementById('quizanswer'+thequizid+'H').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'I')!=null) theansweri=document.getElementById('quizanswer'+thequizid+'I').style.display='none';
if (document.getElementById('quizanswer'+thequizid+'J')!=null) theanswerj=document.getElementById('quizanswer'+thequizid+'J').style.display='none';
$('#quizwording'+thequizid+thecorrect).addClass("warning");
$('#quizwording'+thequizid+thecorrect).removeClass("body");
thepercent=(thecorrectcount/thetotalquestions)*100;
thepercent=Math.round( thepercent * 10 ) / 10;
}






document.getElementById("quizcorrect").style.display='';
document.getElementById("quizcorrect").innerHTML='You got '+thecorrectcount+' out of '+thetotalquestions+' correct. ('+thepercent+'%)';
if (document.getElementById('thresholdlow1')!=null) {
if (document.getElementById('thresholdlow1')!=null) thelow1=document.getElementById('thresholdlow1').value;
if (document.getElementById('thresholdhigh1')!=null) thehigh1=document.getElementById('thresholdhigh1').value;
if (thecorrectcount>=thelow1 && thecorrectcount <= thehigh1) {
document.getElementById("threshold1").style.display='';
}
}
if (document.getElementById('thresholdlow2')!=null) {
if (document.getElementById('thresholdlow2')!=null) thelow2=document.getElementById('thresholdlow2').value;
if (document.getElementById('thresholdhigh2')!=null) thehigh2=document.getElementById('thresholdhigh2').value;
if (thecorrectcount>=thelow2 && thecorrectcount <= thehigh2) {
document.getElementById("threshold2").style.display='';
}
}
if (document.getElementById('thresholdlow3')!=null) {
if (document.getElementById('thresholdlow3')!=null) thelow3=document.getElementById('thresholdlow3').value;
if (document.getElementById('thresholdhigh3')!=null) thehigh3=document.getElementById('thresholdhigh3').value;
if (thecorrectcount>=thelow3 && thecorrectcount <= thehigh3) {
document.getElementById("threshold3").style.display='';
}
}
if (document.getElementById('thresholdlow4')!=null) {
if (document.getElementById('thresholdlow4')!=null) thelow4=document.getElementById('thresholdlow4').value;
if (document.getElementById('thresholdhigh4')!=null) thehigh4=document.getElementById('thresholdhigh4').value;
if (thecorrectcount>=thelow4 && thecorrectcount <= thehigh4) {
document.getElementById("threshold4").style.display='';
}
}
if (document.getElementById('thresholdlow5')!=null) {
if (document.getElementById('thresholdlow5')!=null) thelow5=document.getElementById('thresholdlow5').value;
if (document.getElementById('thresholdhigh5')!=null) thehigh5=document.getElementById('thresholdhigh5').value;
if (thecorrectcount>=thelow5 && thecorrectcount <= thehigh5) {
document.getElementById("threshold5").style.display='';
}
}






document.getElementById("missingquestions").style.display='none';
document.getElementById("missingquestions").innerHTML='';
}
else if (thetotalquestions>theanswered) {
themissing=thetotalquestions-theanswered;
document.getElementById("missingquestions").style.display='';
if (themissing==1) document.getElementById("missingquestions").innerHTML='You did not answer 1 question.  Please answer the questions below.';
else document.getElementById("missingquestions").innerHTML='You did not answer '+themissing+' questions.  Please answer the questions below.';


}
}
function SubmitPoll1 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp1=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp1.open("POST",url,true);
xmlhttp1.onreadystatechange=SubmitPoll1stateChanged;
xmlhttp1.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp1.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll1stateChanged()
{
if (xmlhttp1.readyState==4) {

thelist1=xmlhttp1.responseText;
thelist1=thelist1.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult1=thelist1[0];
thesubmittedpollid1=thelist1[1];

$('#pollquestion'+thesubmittedpollid1).hide().html(thepollresult1).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}



function SubmitPoll2 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp2=GetXmlHttpObject();
if (xmlhttp2==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp2.open("POST",url,true);
xmlhttp2.onreadystatechange=SubmitPoll2stateChanged;
xmlhttp2.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp2.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll2stateChanged()
{
if (xmlhttp2.readyState==4) {

thelist2=xmlhttp2.responseText;
thelist2=thelist2.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult2=thelist2[0];
thesubmittedpollid2=thelist2[1];

$('#pollquestion'+thesubmittedpollid2).hide().html(thepollresult2).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}



function SubmitPoll3 (pollid) {
thepollid=pollid;
thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp3=GetXmlHttpObject();
if (xmlhttp3==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp3.open("POST",url,true);
xmlhttp3.onreadystatechange=SubmitPoll3stateChanged;
xmlhttp3.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp3.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll3stateChanged()
{
if (xmlhttp3.readyState==4) {

thelist3=xmlhttp3.responseText;
thelist3=thelist3.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult3=thelist3[0];
thesubmittedpollid3=thelist3[1];

$('#pollquestion'+thesubmittedpollid3).hide().html(thepollresult3).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}



function SubmitPoll4 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp4=GetXmlHttpObject();
if (xmlhttp4==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp4.open("POST",url,true);
xmlhttp4.onreadystatechange=SubmitPoll4stateChanged;
xmlhttp4.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp4.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll4stateChanged()
{
if (xmlhttp4.readyState==4) {

thelist4=xmlhttp4.responseText;
thelist4=thelist4.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult4=thelist4[0];
thesubmittedpollid4=thelist4[1];

$('#pollquestion'+thesubmittedpollid4).hide().html(thepollresult4).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}

function SubmitPoll5 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp5=GetXmlHttpObject();
if (xmlhttp5==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp5.open("POST",url,true);
xmlhttp5.onreadystatechange=SubmitPoll5stateChanged;
xmlhttp5.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp5.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll5stateChanged()
{
if (xmlhttp5.readyState==4) {

thelist5=xmlhttp5.responseText;
thelist5=thelist5.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult5=thelist5[0];
thesubmittedpollid5=thelist5[1];

$('#pollquestion'+thesubmittedpollid5).hide().html(thepollresult5).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}

function SubmitPoll6 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp6=GetXmlHttpObject();
if (xmlhttp6==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp6.open("POST",url,true);
xmlhttp6.onreadystatechange=SubmitPoll6stateChanged;
xmlhttp6.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp6.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll6stateChanged()
{
if (xmlhttp6.readyState==4) {

thelist6=xmlhttp6.responseText;
thelist6=thelist6.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult6=thelist6[0];
thesubmittedpollid6=thelist6[1];

$('#pollquestion'+thesubmittedpollid6).hide().html(thepollresult6).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}


function SubmitPoll7 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp7=GetXmlHttpObject();
if (xmlhttp7==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp7.open("POST",url,true);
xmlhttp7.onreadystatechange=SubmitPoll7stateChanged;
xmlhttp7.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp7.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll7stateChanged()
{
if (xmlhttp7.readyState==4) {

thelist7=xmlhttp7.responseText;
thelist7=thelist7.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult7=thelist7[0];
thesubmittedpollid7=thelist7[1];

$('#pollquestion'+thesubmittedpollid7).hide().html(thepollresult7).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}

function SubmitPoll8 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp8=GetXmlHttpObject();
if (xmlhttp8==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp8.open("POST",url,true);
xmlhttp8.onreadystatechange=SubmitPoll8stateChanged;
xmlhttp8.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp8.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll8stateChanged()
{
if (xmlhttp8.readyState==4) {

thelist8=xmlhttp8.responseText;
thelist8=thelist8.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult8=thelist8[0];
thesubmittedpollid8=thelist8[1];

$('#pollquestion'+thesubmittedpollid8).hide().html(thepollresult8).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}



function RSS (rssid,code) {
therssid=rssid;
thecode=code;
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="rssoptions.cfm";
xmlhttp.onreadystatechange=RSSstateChanged;
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp.send('rssid='+therssid+'&code='+thecode);
}
function RSSstateChanged()
{
if (xmlhttp.readyState==4)
{

document.getElementById('blogpageinfo').innerHTML=xmlhttp.responseText;
resizecontent();
switchMode();
anchorMonogram();
getContentHeight();
resizeMobile();
document.getElementById("wrapper").style.overflow ="visible";
}
}


function SubmitPoll9 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp9=GetXmlHttpObject();
if (xmlhttp9==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp9.open("POST",url,true);
xmlhttp9.onreadystatechange=SubmitPoll9stateChanged;
xmlhttp9.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-9");
xmlhttp9.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll9stateChanged()
{
if (xmlhttp9.readyState==4) {

thelist9=xmlhttp9.responseText;
thelist9=thelist9.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult9=thelist9[0];
thesubmittedpollid9=thelist9[1];

$('#pollquestion'+thesubmittedpollid9).hide().html(thepollresult9).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}


function SubmitPoll10 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
theanswer='';
if (document.getElementById('poll'+thepollid+'answerA')!=null) theanswera=document.getElementById('poll'+thepollid+'answerA').checked;
else theanswera=false;
if (document.getElementById('poll'+thepollid+'answerB')!=null) theanswerb=document.getElementById('poll'+thepollid+'answerB').checked;
else theanswerb=false;
if (document.getElementById('poll'+thepollid+'answerC')!=null) theanswerc=document.getElementById('poll'+thepollid+'answerC').checked;
else theanswerc=false;
if (document.getElementById('poll'+thepollid+'answerD')!=null) theanswerd=document.getElementById('poll'+thepollid+'answerD').checked;
else theanswerd=false;
if (document.getElementById('poll'+thepollid+'answerE')!=null) theanswere=document.getElementById('poll'+thepollid+'answerE').checked;
else theanswere=false;
if (document.getElementById('poll'+thepollid+'answerF')!=null) theanswerf=document.getElementById('poll'+thepollid+'answerF').checked;
else theanswerf=false;
if (document.getElementById('poll'+thepollid+'answerG')!=null) theanswerg=document.getElementById('poll'+thepollid+'answerG').checked;
else theanswerg=false;
if (document.getElementById('poll'+thepollid+'answerH')!=null) theanswerh=document.getElementById('poll'+thepollid+'answerH').checked;
else theanswerh=false;
if (document.getElementById('poll'+thepollid+'answerI')!=null) theansweri=document.getElementById('poll'+thepollid+'answerI').checked;
else theansweri=false;
if (document.getElementById('poll'+thepollid+'answerJ')!=null) theanswerj=document.getElementById('poll'+thepollid+'answerJ').checked;
else theanswerj=false;
if (theanswera==true) theanswer=1;
else if (theanswerb==true) theanswer=2;
else if (theanswerc==true) theanswer=3;
else if (theanswerd==true) theanswer=4;
else if (theanswere==true) theanswer=5;
else if (theanswerf==true) theanswer=6;
else if (theanswerg==true) theanswer=7;
else if (theanswerh==true) theanswer=8;
else if (theansweri==true) theanswer=9;
else if (theanswerj==true) theanswer=10;
if (theanswer!='') {
xmlhttp10=GetXmlHttpObject();
if (xmlhttp10==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp10.open("POST",url,true);
xmlhttp10.onreadystatechange=SubmitPoll10stateChanged;
xmlhttp10.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-10");
xmlhttp10.send('pollid='+thepollid+'&answer='+theanswer+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
}
function SubmitPoll10stateChanged()
{
if (xmlhttp10.readyState==4) {

thelist10=xmlhttp10.responseText;
thelist10=thelist10.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult10=thelist10[0];
thesubmittedpollid10=thelist10[1];

$('#pollquestion'+thesubmittedpollid10).hide().html(thepollresult10).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}
function ViewPoll1 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp1=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp1.open("POST",url,true);
xmlhttp1.onreadystatechange=ViewPoll1stateChanged;
xmlhttp1.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp1.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll1stateChanged()
{
if (xmlhttp1.readyState==4) {

thelist1=xmlhttp1.responseText;
thelist1=thelist1.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult1=thelist1[0];
thesubmittedpollid1=thelist1[1];

$('#pollquestion'+thesubmittedpollid1).hide().html(thepollresult1).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}
function ViewPoll2 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp2=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp2.open("POST",url,true);
xmlhttp2.onreadystatechange=ViewPoll2stateChanged;
xmlhttp2.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp2.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll2stateChanged()
{
if (xmlhttp2.readyState==4) {

thelist2=xmlhttp2.responseText;
thelist2=thelist2.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult2=thelist2[0];
thesubmittedpollid2=thelist2[1];

$('#pollquestion'+thesubmittedpollid2).hide().html(thepollresult2).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}
function ViewPoll3 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp3=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp3.open("POST",url,true);
xmlhttp3.onreadystatechange=ViewPoll3stateChanged;
xmlhttp3.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp3.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll3stateChanged()
{
if (xmlhttp3.readyState==4) {

thelist3=xmlhttp3.responseText;
thelist3=thelist3.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult3=thelist3[0];
thesubmittedpollid3=thelist3[1];

$('#pollquestion'+thesubmittedpollid3).hide().html(thepollresult3).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}
function ViewPoll4 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp4=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp4.open("POST",url,true);
xmlhttp4.onreadystatechange=ViewPoll4stateChanged;
xmlhttp4.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp4.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll4stateChanged()
{
if (xmlhttp4.readyState==4) {

thelist4=xmlhttp4.responseText;
thelist4=thelist4.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult4=thelist4[0];
thesubmittedpollid4=thelist4[1];

$('#pollquestion'+thesubmittedpollid4).hide().html(thepollresult4).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}



function ViewPoll5 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp5=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp5.open("POST",url,true);
xmlhttp5.onreadystatechange=ViewPoll5stateChanged;
xmlhttp5.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp5.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll5stateChanged()
{
if (xmlhttp5.readyState==4) {

thelist5=xmlhttp5.responseText;
thelist5=thelist5.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult5=thelist5[0];
thesubmittedpollid5=thelist5[1];

$('#pollquestion'+thesubmittedpollid5).hide().html(thepollresult5).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}

function ViewPoll6 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp6=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp6.open("POST",url,true);
xmlhttp6.onreadystatechange=ViewPoll6stateChanged;
xmlhttp6.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp6.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll6stateChanged()
{
if (xmlhttp6.readyState==4) {

thelist6=xmlhttp6.responseText;
thelist6=thelist6.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult6=thelist6[0];
thesubmittedpollid6=thelist6[1];

$('#pollquestion'+thesubmittedpollid6).hide().html(thepollresult6).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}

function ViewPoll7 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp7=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp7.open("POST",url,true);
xmlhttp7.onreadystatechange=ViewPoll7stateChanged;
xmlhttp7.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp7.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll7stateChanged()
{
if (xmlhttp7.readyState==4) {

thelist7=xmlhttp7.responseText;
thelist7=thelist7.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult7=thelist7[0];
thesubmittedpollid7=thelist7[1];

$('#pollquestion'+thesubmittedpollid7).hide().html(thepollresult7).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}

function ViewPoll8 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp8=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp8.open("POST",url,true);
xmlhttp8.onreadystatechange=ViewPoll8stateChanged;
xmlhttp8.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp8.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll8stateChanged()
{
if (xmlhttp8.readyState==4) {

thelist8=xmlhttp8.responseText;
thelist8=thelist8.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult8=thelist8[0];
thesubmittedpollid8=thelist8[1];

$('#pollquestion'+thesubmittedpollid8).hide().html(thepollresult8).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}

function ViewPoll9 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp9=GetXmlHttpObject();
if (xmlhttp1==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp9.open("POST",url,true);
xmlhttp9.onreadystatechange=ViewPoll9stateChanged;
xmlhttp9.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp9.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll9stateChanged()
{
if (xmlhttp9.readyState==4) {

thelist9=xmlhttp9.responseText;
thelist9=thelist9.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult9=thelist9[0];
thesubmittedpollid9=thelist9[1];

$('#pollquestion'+thesubmittedpollid9).hide().html(thepollresult9).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}
function ViewPoll10 (pollid) {
thepollid=pollid;

thepollcount=document.getElementById("pollcount"+thepollid).value;
xmlhttp10=GetXmlHttpObject();
if (xmlhttp10==null)
{
alert ("Your browser does not support AJAX!");
return;
}
var url="updatepollresult.cfm";
xmlhttp10.open("POST",url,true);
xmlhttp10.onreadystatechange=ViewPoll10stateChanged;
xmlhttp10.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
xmlhttp10.send('pollid='+thepollid+'&answer=0'+'&customer='+thecustomer+'&pollcount='+thepollcount);
}
function ViewPoll10stateChanged()
{
if (xmlhttp1.readyState==4) {

thelist10=xmlhttp10.responseText;
thelist10=thelist10.split("|~{}|~{}|~{}|~{}|~{}|~{}");

thepollresult10=thelist10[0];
thesubmittedpollid10=thelist10[1];

$('#pollquestion'+thesubmittedpollid10).hide().html(thepollresult10).fadeIn('slow');
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });
}
}



function ViewPollResults () {
thecustomer=document.getElementById("customerid").value;


polls = document.getElementsByTagName("input");
pollstring="";
for (i = 0; i < polls.length; i++) {
if (polls[i].getAttribute("id")!=null) { 
if (polls[i].getAttribute("id").indexOf("pollid") > -1) {
theid=polls[i].getAttribute("id");
thepollattemptid= document.getElementById(theid).value;
thepollcount=document.getElementById("pollcount"+thepollattemptid).value;
if (thepollcount==1) ViewPoll1(thepollattemptid);
if (thepollcount==2) ViewPoll2(thepollattemptid);
if (thepollcount==3) ViewPoll3(thepollattemptid);
if (thepollcount==4) ViewPoll4(thepollattemptid);
if (thepollcount==5) ViewPoll5(thepollattemptid);
if (thepollcount==6) ViewPoll6(thepollattemptid);
if (thepollcount==7) ViewPoll7(thepollattemptid);
if (thepollcount==8) ViewPoll8(thepollattemptid);
if (thepollcount==9) ViewPoll9(thepollattemptid);
if (thepollcount==10) ViewPoll10(thepollattemptid);
if (thepollcount==11) ViewPoll11(thepollattemptid);
if (thepollcount==12) ViewPoll12(thepollattemptid);
if (thepollcount==13) ViewPoll13(thepollattemptid);
if (thepollcount==14) ViewPoll14(thepollattemptid);
if (thepollcount==15) ViewPoll15(thepollattemptid);
if (thepollcount==16) ViewPoll16(thepollattemptid);
if (thepollcount==17) ViewPoll17(thepollattemptid);
if (thepollcount==18) ViewPoll18(thepollattemptid);
if (thepollcount==19) ViewPoll19(thepollattemptid);
if (thepollcount==20) ViewPoll20(thepollattemptid);
}
}
}


document.getElementById('viewpollresults').style.display='none';
}







function SetSearchParam()
{
            document.searchbox.url.value = 'http://travel.travelocity.com/flights/InitialSearch.do?Service=CJUS&dateLeavingTime=Anytime&dateReturningTime=Anytime&seniors=0&children=0&flightType=roundtrip&dateReturningMonth=' + document.searchbox.dateReturningMonth.options[document.searchbox.dateReturningMonth.selectedIndex].value + '&dateReturningDay=' + document.searchbox.dateReturningDay.options[document.searchbox.dateReturningDay.selectedIndex].value + '&adults=' + document.searchbox.adults.options[document.searchbox.adults.selectedIndex].value + '&leavingFrom=' + document.searchbox.leavingFrom.value + '&dateLeavingMonth=' + document.searchbox.dateLeavingMonth.options[document.searchbox.dateLeavingMonth.selectedIndex].value + '&goingTo=' + document.searchbox.goingTo.value + '&dateLeavingDay=' + document.searchbox.dateLeavingDay.options[document.searchbox.dateLeavingDay.selectedIndex].value;
}
function SetSearchParam2 ()
{
            document.searchbox.url.value = 'http://travel.travelocity.com/car/PostFrontDoor.do?rdoLocPickup=pu_air&pickupTime=' + document.searchbox.pickupTime.options[document.searchbox.pickupTime.selectedIndex].value + '&pickupMonth=' + document.searchbox.pickupMonth.options[document.searchbox.pickupMonth.selectedIndex].value + '&pickupDayOfMonth=' + document.searchbox.pickupDayOfMonth.options[document.searchbox.pickupDayOfMonth.selectedIndex].value + '&dropoffTime=' + document.searchbox.dropoffTime.options[document.searchbox.dropoffTime.selectedIndex].value + '&dropoffMonth=' + document.searchbox.dropoffMonth.options[document.searchbox.dropoffMonth.selectedIndex].value + '&dropoffDayOfMonth=' + document.searchbox.dropoffDayOfMonth.options[document.searchbox.dropoffDayOfMonth.selectedIndex].value + '&carTypes=' + document.searchbox.carTypes.options[document.searchbox.carTypes.selectedIndex].value + '&pickupCity=' + document.searchbox.pickupCity.value;
}
function SetSearchParam3()
{
            document.searchbox.url.value = 'http://travel.travelocity.com/hotel/HotelCobrand.do?searchMode=city&expr_path=Y&dateReturningMonth=' + document.searchbox.dateReturningMonth.options[document.searchbox.dateReturningMonth.selectedIndex].value + '&dateReturningDay=' + document.searchbox.dateReturningDay.options[document.searchbox.dateReturningDay.selectedIndex].value + '&dateLeavingMonth=' + document.searchbox.dateLeavingMonth.options[document.searchbox.dateLeavingMonth.selectedIndex].value + '&dateLeavingDay=' + document.searchbox.dateLeavingDay.options[document.searchbox.dateLeavingDay.selectedIndex].value + '&adults=' + document.searchbox.adults.options[document.searchbox.adults.selectedIndex].value + '&children=' + document.searchbox.children.options[document.searchbox.children.selectedIndex].value + '&cityCountryCode=' + document.searchbox.cityCountryCode.options[document.searchbox.cityCountryCode.selectedIndex].value + '&city=' + document.searchbox.city.value + '&state=' + document.searchbox.state.options[document.searchbox.state.selectedIndex].value;
}




function DynamicGuestbook() {
if (document.getElementById("guestbookcount")!= null) {
therowcount=document.getElementById("totalpages").value;
var bottom_of_window = $(window).scrollTop() + $(window).height();
bottom_of_object=-400;
for ( i = 2; i < therowcount; i++) { 
         var bottom_of_object = bottom_of_object+$("#page"+i).height();

if ( bottom_of_window > bottom_of_object) { 
document.getElementById("page"+i).style.display='block';         
}  
} 
}
}


$(document).ready(function() {
$(".printdirections").fancybox({'centerOnScroll': false, 'width': 500, 'height': 500, 'overlayShow': true,
'overlayOpacity': 0.6,'overlayColor': '#3C3C3C'  });
$(".maplink").fancybox({'centerOnScroll': false, 'width': 500, 'height': 500, 'overlayShow': true,
'overlayOpacity': 0.6,'overlayColor': '#3C3C3C'  });
$("img.lazy").lazyload();
$("img.lazy").each(function() {
$(this).attr("src", $(this).attr("original"));
});
$('.slides').fancybox({ openEffect  : 'fade', closeEffect : 'fade', padding:0, prevEffect : 'fade', nextEffect : 'fade', autoPlay:false, closeBtn  : true, openSpeed: "slow", closeSpeed: "normal", nextSpeed: "slow", prevSpeed: "slow",mouseWheel :false });

});
var timer = null;
is_clicked = false;
function ticks() {
$.fancybox.next();
}