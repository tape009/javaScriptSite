let view = {
    displayMessage: function(msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        let cell =  document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class","miss");
    }
    
   };
   var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [ { locations: ["06", "16","26" ], hits: ["", "", ""] },
    { locations: ["14", "24", "34"], hits: ["", "", ""] },
    { locations: ["45", "55", "65"], hits: ["", "", ""] } ],
   
    fire :function(guess){
        for (var i = 0; i < this.numShips; i ++){
            let ships = this.ships[i];
            let index = ships.locations.indexOf(guess);
            if (index >= 0) {
                ships.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ships)) {
                    view.displayMessage("you sank my battleship")
                    this.shipsSunk++;
                    }
                return true
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");

        return false

    }
   },

collision: function(locations) {
    for (let i = 0; i < this.numShips; i++) {
    let ship = model.ships[i];
    for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
        return true;
            }
        }
    }
    return false;
   },

   isSunk: function(ship)
   {
       for (let i = 0; i < this.shipLength; i++){
           if (ship.hits[i] !== "hit"){
               return false;
           }
       }
       return true; 
   }
}
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2)
    {
        alert("Oops, please enter a letter and a number on the board.");
    }
    else
    {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
   
    if (isNaN(row) || isNaN(column)) 
    {
        alert("Oops, that isn't on the board.");
    } 
    else if (row < 0 || row >= model.boardSize ||column < 0 || column >= model.boardSize) {
        alert("Oops, that's off the board!");
    }
    else
    {
        return row + column;
    }

    }
    return null;
   }

   let controller = {
    guesses: 0,
    processGuess: function(guess) {
    let location = parseGuess(guess);
    if (location) {
        this.guesses++;
        let hit = model.fire(location);
        if (hit && model.shipsSunk === model.numShips){
            view.displayMessage("You sank all my battleship in " + this.guesses + " guesses")
        }
    }

    }
    
   }
   function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
   
   }
   window.onload = init;

   function handleFireButton(){
       let guessInput = document.getElementById("guessInput");
       let guess = guessInput.value;
       controller.processGuess(guess);
       guessInput.value = "";
   }
   function handleKeyPress(e){
       let fireButton = document.getElementById("fireButton");
       if(e.keyCode === 13){
           fireButton.click();
           return false;
       }
   }
   


  
 

 
 
    
    
    
    
   