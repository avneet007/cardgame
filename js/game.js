
var statusCheckFlag=false;
var storeFirstValue;
var storeSecondValue;
var attempt=0;
var totalMatch=0;
var firstCard;
var secondCard;
var cardFlipFlag=true;



function loadGame(gameArray,greeting,timer,date,iteration,score,gameTime,mode){
 

document.getElementById("grettings").innerHTML = greeting;
document.getElementById("datedisplay").innerHTML = date;

  if(mode=="w"){
     iteration = 0;
     score=0;
     startTimer();
     showTime();
  }else{

   document.getElementById("timerId").innerHTML= timer;
    document.getElementById("timedisplay").innerHTML= gameTime;


  }
  document.getElementById("attemptinner").innerHTML = iteration;
  document.getElementById("matchedinner").innerHTML = score;

  

  document.getElementById("gamecenter1").style.display= "flex";

  createGame(gameArray,mode);

}



function createGame(gameArray,mode){


   var gameString="";

  for(var i=0;i<gameArray.length;i++){

      if(mode=="w"){
      gameString += '<div><section class="container" id="container'+i+'"  onClick="flipCard(\''+ i+'\')"><div class="card" id='+i+'><div class="front"></div><div class="back">'+gameArray[i]+'</div></div></section></div>' 
      }else{
      gameString += '<div><section class="container"><div class="card flipped" id='+i+'><div class="front"></div><div class="back">'+gameArray[i]+'</div></div></section></div>' 
   

      }


        if(i==1){

          gameString +="<pre></pre>"
        }

      // if(i==gameArray.length-1){
           

      // }
   }

 document.getElementById("gamecenter1").innerHTML = gameString;

   
}



var firstCardIndex;

function flipCard(index) {

attempt =attempt+1; 

document.getElementById("attemptinner").innerHTML = attempt;
 

if (statusCheckFlag==false) {
  
  firstCardIndex = index;
  firstCard = document.getElementById(index);
  storeFirstValue=gameArray[index];
  statusCheckFlag=true;
  rotateCard(index)
}

else {


 if(index==firstCardIndex){

   console.log("its same card");
 }else{
  rotateCard(index)
  
  storeSecondValue=gameArray[index]

   secondCard = document.getElementById(index);
  if (storeFirstValue==storeSecondValue){

    
    totalMatch = totalMatch+1;
    statusCheckFlag=false;

    if(totalMatch==gameArray.length/2){

        document.getElementById("saveButtonId").style.display = "block";

         stopTimer();
    }

    document.getElementById("matchedinner").innerHTML = totalMatch;
     removeClick("container"+firstCardIndex);
     removeClick("container"+index);

    
  }else{

   statusCheckFlag=false;
  
   
   var interval =  setInterval(function(){  

         rotateCard(firstCardIndex);
         rotateCard(index);
         clearInterval(interval);


   },1000)



  }

  }

}




   // $('.card').toggleClass('flipped');
}




function rotateCard(index){


  if(document.getElementById(index).className=="card"){
  document.getElementById(index).setAttribute("class","card flipped")
  }else{

    document.getElementById(index).setAttribute("class","card")
  }

}




function removeClick(id){

document.getElementById(id).removeAttribute("onClick")

}







function saveGame(){

    clearInterval(timeId);

    var object = new Object();
    object.userName = localStorage.getItem("myUserName")
    object.greeting = document.getElementById("grettings").innerHTML;
    object.date= document.getElementById("datedisplay").innerHTML;
    object.gameArray = gameArray;
    object.timer= document.getElementById("timerId").innerHTML;
    object.gameTimer = document.getElementById("timedisplay").innerHTML;
    object.attmpt = document.getElementById("attemptinner").innerHTML;
    object.matched =document.getElementById("matchedinner").innerHTML; 

    console.log(object);


    savedgames.push(object);

    localStorage.setItem("savedGameArry",JSON.stringify(savedgames));

}