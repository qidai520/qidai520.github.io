var ieOk=false;
var flashOk=false;
var timeOk=false;
function clearRadio(rdoName){
    document.getElementById(rdoName).style.display="none";
    var rdos=document.getElementsByName(rdoName);
    for(var i=0;i<rdos.length;i++){
        rdos[i].checked=false;
    }
}
function Browser() {
    var ua, s, i;
    this.isIE = false;//Internet Explorer
    this.isNS = false;//Netscape
    this.version = null;
    ua = navigator.userAgent;
    s = "MSIE";
    if ((i = ua.indexOf(s)) >= 0) {
        this.isIE = true;
        this.version = parseFloat(ua.substr(i + s.length));
        return;
    }
    s = "Netscape6/";
    if ((i = ua.indexOf(s)) >= 0) {
        this.isNS = true;
        this.version = parseFloat(ua.substr(i + s.length));
        return;
   }
    // Treat any other "Gecko" browser as NS 6.1.
    s = "Gecko";
   if ((i = ua.indexOf(s)) >= 0) {
        this.isNS = true;
        this.version = 6.1;
       return;
   }
}
function checkDate(){
    var now=new Date();
    if(now.getFullYear()<2011||(now.getFullYear()==2011&&now.getMonth()<11)){
        return false;
    }
    return true;
}