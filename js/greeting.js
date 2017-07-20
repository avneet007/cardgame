
function showGreeting(){

var d = new Date();

if(d.getDay()==1){

	document.getElementById("greetingId").innerHTML= "Monday is a beautiful day to play card game.";
}else if(d.getDay()==2){

	document.getElementById("greetingId").innerHTML= "Tuesday is a beautiful day to play card game.";
}else if(d.getDay()==3){

	document.getElementById("greetingId").innerHTML= "Wednesday is a beautiful day to play card game.";
}else if(d.getDay()==4){

	document.getElementById("greetingId").innerHTML= "Tursday is a beautiful day to play card game.";
}else if(d.getDay()==5){

	document.getElementById("greetingId").innerHTML= "Friday is a beautiful day to play card game.";
}else if(d.getDay()==6){

	document.getElementById("greetingId").innerHTML= "Saturday is a beautiful day to play card game.";
}else if(d.getDay()==0){

	document.getElementById("greetingId").innerHTML= "Sunday is a beautiful day to play card game.";


}

}