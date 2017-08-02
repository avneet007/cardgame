var dataArray=["Deepak","Anil","Deepak","Anil"]
var gameArray  =[];
var todayDate="";

var savedgames=[];


function splashout() { 


document.getElementById('weclometext').style.display= "none";

   var userName = document.getElementById("splashinput").value;
   
    localStorage.setItem("myUserName",userName);
    showgreeting(userName);
    if(localStorage.getItem("savedGameArry")){

    	savedgames =JSON.parse(localStorage.getItem('savedGameArry'))
    }


}

randMyArray(dataArray,gameArray);
getTodaysDate(todayDate);