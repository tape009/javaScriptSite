

var randomLocation = Math.floor(Math.random()* 5);
var location1 = randomLocation;
var location2 = randomLocation +1;
var location3 = location2 + 1 ;

var guess;
var hits = 0;
var guesses = 0;
var Name;
var FinalText=" "

var isSunk = false;
function myFunction()
{
    

Name = prompt("What your name or sir name ?")

while(isSunk == false)
{
    guess = prompt("Take aim captain "+ Name +" (enter a number 0 - 6)");
    if (guess < 0 || guess >6 || null)
    {
        alert("captain " + Name +" shell can't go that far please pick a diffent place ")
    }
    else
    {
        guesses ++

        if (guess == location1 || guess == location2 || guess == location3)
        {
            alert("HIT")
            FinalText += "HIT at "+ guess+"<br>";
            hits ++
            if(hits == 3){
                isSunk = true
                alert("You sank my battleship!") 
            }
        }
        else
        {
            alert("MISS")
            FinalText +="MISS at "+ guess+"<br>";
        }
    }
}


    var stats = "captain "+ Name + " you took " + guesses +" shot to sink the battleship, "
    +"which mean your shot accuracy was "+ (3/guesses);
    FinalText +=stats+"<br>"
    if(guesses == 3 )
    {
        FinalText += "Your shot is amzaing."
    }
    if(guesses == 4 || guesses == 5 || guesses ==6)
    {
        FinalText += "your okay shot "
    }
    if (guesses >= 10)
    {
        FinalText += " HOW "
    }
    document.getElementById("battlelog").innerHTML = FinalText
}
