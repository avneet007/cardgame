var dataArray=["Deepak","Anil","Deepak","Anil"]
var gameArray  =[];
var todayDate="";



function splashout() { 


document.getElementById('weclometext').style.display= "none";

   var userName = document.getElementById("splashinput").value;
   
    localStorage.setItem("myUserName",userName);
    showgreeting(userName);

}

randMyArray(dataArray,gameArray);
getTodaysDate(todayDate);