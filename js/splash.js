// To Show Timer

function startTimer(){

var timeCounter=0;

var intervalId = setInterval(function(){

  timeCounter= timeCounter+1;

  if(timeCounter>59){

     var min = Math.floor(timeCounter/60);
     var second = timeCounter%60;
     document.getElementById("timerId").innerHTML= min+":"+second;


  }else{

     document.getElementById("timerId").innerHTML= timeCounter;
   } 
   
},1000)

}




document.getElementById("welcomename").innerHTML="Welcome to Game"
document.getElementById("question").innerHTML="What do you want?"


var userName=""

/*function splashout() { 

document.getElementById('weclometext').style.display= "none";
}*/
	
	
function completesplashout(){
document.getElementById('mainwrapper').style.display= "none";
document.getElementById('cardlist').style.display = "block";
userName=document.getElementById("splashinput").value;
showgreeting()
startTimer()



}
	
