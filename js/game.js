function loadGame(gameArray,greeting,timer,date,iteration,score,mode){
 

document.getElementById("grettings").innerHTML = greeting;
document.getElementById("datedisplay").innerHTML = date;

  if(mode=="w"){
     iteration = 0;
     score=0;
     startTimer();
  }else{

   document.getElementById("timerId").innerHTML= "Time : "+timer;

  }
  document.getElementById("attemptinner").innerHTML = iteration;
  document.getElementById("matchedinner").innerHTML = score;

  showTime();

  document.getElementById("gamecenter1").style.display= "flex";

  createGame(gameArray,mode);

}



function createGame(gameArray,mode){


   var gameString="";

  for(var i=0;i<gameArray.length;i++){

       gameString += '<div><section class="container"  onClick="flipCard(\''+ i+'\')"><div class="card" id='+i+'><div class="front"></div><div class="back">'+gameArray[i]+'</div></div></section></div>'


        if(i==1){

          gameString +="<pre></pre>"
        }

      // if(i==gameArray.length-1){
           

      // }
   }

 document.getElementById("gamecenter1").innerHTML = gameString;

   
   



}








function flipCard(i) {

  //alert("callling");
 if(document.getElementById(i).className=="card"){
  document.getElementById(i).setAttribute("class","card flipped")
  }else{

    document.getElementById(i).setAttribute("class","card")
  }
   // $('.card').toggleClass('flipped');
}
