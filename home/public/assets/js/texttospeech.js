if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    //alert("Supported");
}else{
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
}
var myVar;
var range1 = 0;
var range2 = 10;
function start(){
    //alert("Supported");
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    range1=parseInt(x.elements[0].value);
    range2=parseInt(x.elements[1].value);
    var mytime=parseInt(x.elements[2].value)*1000;
    myVar=setInterval(myTimer, mytime);
}

function stop(){
    //alert("Supported");
    clearInterval(myVar);
}

function myTimer(){
    var prev = getRndInteger(range1, range2);
    var cur = getRndInteger(range1, range2);
    while(prev==cur){
        cur=getRndInteger(range1, range2);
    }
    console.log(prev+" "+cur);
    prev=cur;
    //console.log(prev+" "+cur);
    var msg = new SpeechSynthesisUtterance();
    msg.text = cur+"";
    window.speechSynthesis.speak(msg);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}