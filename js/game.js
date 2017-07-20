
var gameArray=[];

function loadGame(){

var array = ["Avneet","Anil","Nilesh","Deepak","Avneet","Anil","Nilesh","Deepak"];

radomMyArray(array);

}



function radomMyArray(arr){
  
    if(arr.length>0){
    var index = Math.floor(Math.random()*arr.length);
   
    gameArray.push(arr[index])
    console.log(gameArray);
    arr.splice(index,1);


    radomMyArray(arr);
    }else{

    	//console.log("all done")

    	LoadCards(gameArray);
    }
   

}


function LoadCards(gameArray){

      
       var htmlString="";
      for(var i=0;i<gameArray.length;i++){

      	  htmlString += '<li onClick="boxValue(\''+ i+'\')">'+gameArray[i]+'</li>'

      	  if(i==3){
      	  	htmlString  +="<br>";
      	  }
   
     }
   
    document.getElementById("gameContainer").innerHTML=htmlString;
     

}


function boxValue(a){


	alert(gameArray[a])
}