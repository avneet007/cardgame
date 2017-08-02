

function startNewGame(){


   var todayDate = getTodaysDate();
  
   loadGame(gameArray,greetintStr,3,todayDate,10,2,0,"w");
  // choisebtn

    document.getElementById("choisebtn").style.display="none";
    document.getElementById("gamewrapper").style.display="block";
    document.getElementById("mainwrapper").style.position="relative";

   

}


function viewOldGames(){

    document.getElementById("choisebtn").style.display="none";
     document.getElementById("gamewrapper").style.display="none";
    document.getElementById("oldGamelistId").style.display="block";
    
    showOldGamelist(savedgames)

	// alert("old game");


}


function showOldGamelist(savedgames){


	 var itemStr="";

	for(var i=0;i<savedgames.length;i++){

           itemStr = itemStr+'<li onClick="showOldGame(\''+ i+'\')"><span>'+savedgames[i].userName+" -- "+'</span><span>'+savedgames[i].date+'</span></li>'

    
	}

	 document.getElementById("listId").innerHTML = itemStr;



}


function showOldGame(index){

    
    // console.log(savedgames[index])
     document.getElementById("oldGamelistId").style.display="none";
     loadGame(savedgames[index].gameArray, savedgames[index].greeting,savedgames[index].timer,savedgames[index].date,savedgames[index].attmpt,savedgames[index].matched,savedgames[index].gameTimer,"r");
     document.getElementById("gamewrapper").style.display="block";
    

}