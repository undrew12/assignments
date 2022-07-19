const readline = require("readline-sync")
const name = readline.question("What is your name? ");

var keyFound = false;
var winCondition = false;
var endGame = false

while (!endGame){

    var options = ["Put your hand in the hole", "look for the key", "Open the door"];
    var index = readline.keyInSelect(options, "What will you do next?");

    switch (index) {
        case 0:
            endGame = true;
            break;
        case 1:
            if (!keyFound){
                keyFound = true;
                
                console.log("You found an old rusty key!\n")
            } else {
                console.log("There's only newspapers everywhere, a locked door, and a hole in the wall.\n")
            }
            break;
        case 2:
            if (!keyFound){
                console.log("The door seems to be locked...\n")
            } else {
                console.log("You used the old rusty key to unlock the door!\n")
                winCondition = true;
                endGame = true;
            }
            break;
        default:
            console.log("Oops, seems some force is stoping you from going this way.")
    }
}

winCondition ? console.log(`You escaped ${name}!!!` ) : console.log(`You have died ${name}...`)