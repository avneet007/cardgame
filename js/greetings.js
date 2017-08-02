
// To show Date of that purticula of that day 

/*var d=new Date()
var date=d.getDate()
var month=d.getMonth()
var year=d.getFullYear()

document.getElementById('datedisplay').innerHTML='Date:'+ '&nbsp;'+ date + '/' + month +'/'+ year;*/


// To show Time of that System

/*var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timedisplay").innerHTML = 'Time:'+ '&nbsp;'+ t;
}*/


// To show Greetings
var greetintStr="";


 function showgreeting(name) {
 
 var d= new Date();
 d.getDay()
 var day="";
 
 if ( d.getDay()==1)
 { 
 day="Monday"
 }
 
 else if ( d.getDay()==2){
	day="Tuesday"
 }
 
  else if ( d.getDay()==3) {
	day="Wednesday"
 }
 
  else if ( d.getDay()==4){
	day="Thursday"
 }
 
  else if ( d.getDay()==5) {
	day="Friday"
 }
 
  else if ( d.getDay()==6){
	day="Saturday"
 }
 
  else  {
	day="Sunday"
 }
 
 

 //document.getElementById("grettings").innerHTML="Hello"+ '&nbsp;' + '<span>' + userName + '</span>' +'&nbsp;' + day + " is a Beautiful day";


 greetintStr = "Hello"+ '&nbsp;' + '<span>' + name + '</span>' +'&nbsp;' + day + " is a Beautiful day";

//console.log(greetintStr);


 }