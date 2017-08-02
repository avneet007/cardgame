function randMyArray(arrData,arrGame){
	
    var l= Math.floor (Math.random()*arrData.length)
	arrGame.push(arrData[l])
	arrData.splice(l,1)
//	console.log(name1)
	//console.log(k)
	if (arrData.length>0)
	{
		randMyArray(arrData,arrGame);
	}
	 else {
		 
		
		// calling2();

		  console.log(arrGame);
		 }


}
	