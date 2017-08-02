
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
 
 

 
 greetintStr = "Hello"+ '&nbsp;' + '<span>' + name + '</span>' +'&nbsp;' + day + " is a Beautiful day";

//console.log(greetintStr);


 }