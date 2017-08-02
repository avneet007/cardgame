var name1=["Avneet","Deepak","Anil","Avneet","Deepak","Anil"]

var k=[]

var concat1='';

function callli(){
	
    var l= Math.floor (Math.random()*name1.length)
	k.push(name1[l])
	name1.splice(l,1)
//	console.log(name1)
	//console.log(k)
	if (name1.length>0)
	{
		callli();
	}
	 else {
		 
		
		 calling2();
		 }


}
	
	callli();
	

function calling2(){
	
	

for (var i=0;i<k.length;i++)

{
	
	concat1=concat1 + '<li  class="arraylist"  id=kcard'+i+' ><div class="click panel circle" onclick="callme1(\''+ i+'\')"> <div class="front"><img src="images/card.png" width="190" height="300" alt=""></div><div class="back"><h2>' + k[i] + '</h2></div></div></li>';

	
	if (i==2){
		
	
	concat1=concat1+"<br>"
	
	}

document.getElementById("gamecenter1").innerHTML="<ul class='cardlist ' id='cardlist'>"+concat1+"</ul>";
document.getElementById('cardlist').style.display = "none";

}

}

function callme1(a) {
alert(k[a])	

}


var store=false;
var firststore
var  secondstore
var attempt = 0;
var matched = 0;
function callme1 (a) {
	


if (store==false) {
	
	firststore=k[a];
	store=true;
}

else {
	
	secondstore=k[a]
	if (firststore==secondstore){
	alert("match")	
	 store=false;
	  matched++;

	 
	
	}else{
	 alert("not match")	
	 store=false;
	 attempt++;
	}

}
document.getElementById('matchedinner').innerHTML = matched;
document.getElementById('attemptinner').innerHTML=attempt;


}

