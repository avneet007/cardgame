
function startTimer(){

var timeCounter=0;

var intervalId = setInterval(function(){

  timeCounter= timeCounter+10;

  if(timeCounter>59){

     var min = Math.floor(timeCounter/60);
     var second = timeCounter%60;
     document.getElementById("timerId").innerHTML= min+":"+second;


  }else{

     document.getElementById("timerId").innerHTML= timeCounter;
   } 
   
},1000)

}


 
 