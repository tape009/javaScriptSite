function makePharses()
{
var words1 = ["among","cholate","death"];
var words2 = ["insanity","us","milk"];
var words3 = ["heaven","god","real"];

var rand1 = Math.floor(Math.random()* words1.length);
var rand2 = Math.floor(Math.random()* words2.length);
var rand3 = Math.floor(Math.random()* words3.length);

var pharses = words1[rand1]+" "+ words2[rand2]+" "+ words3 [rand3];

finalText =pharses 
document.getElementById("PharsesLog").innerHTML = finalText
}

