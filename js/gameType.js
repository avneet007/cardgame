

function startNewGame(){


   var todayDate = getTodaysDate();
  
   loadGame(gameArray,greetintStr,3,todayDate,10,2,"w");
  // choisebtn

    document.getElementById("choisebtn").style.display="none";
    document.getElementById("gamewrapper").style.display="block";
    document.getElementById("mainwrapper").style.position="relative";

   

}


function viewOldGames(){

    document.getElementById("choisebtn").style.display="none";
    document.getElementById("oldGamelistId").style.display="block";
    
    console.log(savedgames);

	// alert("old game");


}