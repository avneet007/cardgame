
var timerId;
var timeId;

function startTimer() {

   var secondcounter=0;


    timerId = setInterval(
        function () {

            secondcounter = secondcounter + 1;



            if (secondcounter > 59) {

                var minutecounter = Math.floor(secondcounter / 60);
                var seccounter = secondcounter % 60;


				
                document.getElementById("timerId").innerHTML = "Time : "+minutecounter + ":" + seccounter;

            } else {

                
				document.getElementById("timerId").innerHTML= "Time : "+secondcounter;

            }
            

        }, 1000);

}


function showTime(){

        timeId = setInterval(
        function () {

            var today = new Date();

            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            

            document.getElementById("timedisplay").innerHTML=  h + ":" + m + ":" + s;;
            

        }, 500);

}


function stopTimer(){

 clearInterval(timerId);

}