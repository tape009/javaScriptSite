var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,46, 31, 57, 52, 44, 18,41, 53, 55, 61, 51, 44];

var  finalText = " "
var mostCostEffective= " "
var costs= 0 
function myFunction()
{

    function printAndGetHighScore(scores) {
        var highScore = 0;

        var output;

        for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];

        console.log(output);

        if (scores[i] > highScore) {
        highScore = scores[i];

        }
    }
    return highScore;
    }
    
     

    function getBestResults(scores, highScore) {

        var bestSolutions = [];

        for (var i = 0; i < scores.length; i++) {

        if (scores[i] == highScore) {

        bestSolutions.push(i);
        }
        }
        return bestSolutions;
    }

    function mostEfftive(scores,costs,highScore){
    costs = 100; 
    var index; 

    for( i = 0; i < scores.length; i++)
    {
       if(scores[i] == highScore)
           if (cost > costs[i]){
               index = i ;
               cost = costs[i]
           }
       }
     
      

     
   
    return index
    
   
    }
    var mostCostEffective = mostEfftive(scores, costs, highScore);
   

   
  
  var highScore = printAndGetHighScore(scores)
  finalText = " "

 finalText += " Bubbles tests: " + scores.length +"<br>"

 finalText += " Highest bubble score: " + highScore +"<br>"

 var bestSolutions = getBestResults(scores, highScore)

 finalText += " Solutions with the highest score: " + bestSolutions +"<br>"
 finalText += "Bubble Solution #" + mostCostEffective + " is the most cost effective";



 


 document.getElementById("bubleReport").innerHTML = finalText

}



