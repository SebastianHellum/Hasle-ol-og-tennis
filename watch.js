window.onload = startTime(); dayFunction();

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = checkHour(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h+":"+m+" "+" "+"\u00A0"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkHour(i) {
  if (i<10) {i = "\u00A0" + i};
  return i;
}
function dayFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Det er jo søndag";
    weekday[1] = "Det er jo mandag";
    weekday[2] = "Det er jo tirsdag";
    weekday[3] = "Det er jo onsdag";
    weekday[4] = "Det er jo torsdag";
    weekday[5] = "Det er jo fredag";
    weekday[6] = "Det er jo lørdag";

    var n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = n;
}

var mousedownID = -1;  //Global ID of mouse down interval
function mousedown(event) {
  if(mousedownID==-1)  //Prevent multimple loops!
     mousedownID = setInterval(whilemousedown, 2 /*execute every 1ms*/);


}
function mouseup(event) {
   if(mousedownID!=-1) {  //Only stop if exists
     clearInterval(mousedownID);
     mousedownID=-1;
   }

}
function whilemousedown() {
  var d = new Date();
  var y = d.getFullYear();
  y = y.toString().substr(2,2);
  var m = d.getMonth();
  var day = d.getUTCDate();
  document.getElementById("time").innerHTML = y+" "+"\u00A0"+"\u00A0"+ (m+1)+"-"+ day;
  /*document.getElementById("time").style.wordSpacing = "5px";*/
}
//Assign events
document.getElementById("div").addEventListener("mousedown", mousedown);
document.addEventListener("mouseup", mouseup);
//Also clear the interval when user leaves the window with mouse
document.addEventListener("mouseout", mouseup);
