
var randomLocation = Math.floor(Math.random()* 5);
var location1 = randomLocation;
var location2 = randomLocation +1;
var location3 = location2 + 1 ;

var guess;
var hits = 0;
var guesses = 0;
var Name;

var isSunk = false;

Name = prompt("What your name or sir name ?")

while(isSunk == false)
{
    guess = prompt("Take aim captin "+ Name +" (enter a number 0 - 6)");
    if (guess < 0 || guess >6)
    {
        alert("captin " + Name +" shell can't go that far plese chose a diffent place ")
    }
    else
    {
        guesses ++

        if (guess == location1 || guess == location2 || guess == location3)
        {
            alert("HIT")
            document.write("HIT at "+ guess+"<br>");
            hits ++
            if(hits == 3){
                isSunk = true
                alert("You sank my BattleShip!") 
            }
        }
        else
        {
            alert("MISS")
            document.write("MISS at "+ guess+"<br>")
        }
    }
}
var stats = "captin "+ Name + " you took " + guesses +" shot  to sink the battleship, "
+"whic mean your shot accuracy was "+ (3/guesses);
document.write(stats+"<br>")