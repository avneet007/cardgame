function getTodaysDate(){

    var date = new Date();

    var dateStr = date.getDate();
    var monthStr = date.getMonth()+1;
    var yearStr = date.getFullYear();

      //var monthStr = 

    var str = dateStr+'/'+monthStr+"/"+yearStr;

    return str;
}