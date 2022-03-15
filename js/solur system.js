
    function shoot(){
    var planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
    document.getElementById("greenplant1").src="green2.png";
    }
    function shootred(){
    var planet = document.getElementById("redplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
    document.getElementById("red").src="red2.png";
    }
    function shootblue(){
    var planet = document.getElementById("blueplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
    document.getElementById("blueplant1").src="blue2.png";
    }
    