const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log("Welcome " + name + ", let's play a game.")
console.log("You are locked you in a room and you have limited time to escape, there is a hidden key somewhere that you must find to open the door.")
let userInput = ["Put hand in hole", "Search for the key", "Open the door"];
let userSelect = readline.keyInSelect(userInput, "Choose wisely");
let hasKey = false;

while(hasKey === false){
    if(userSelect === 0){
        console.log("You put your hand in the hole and died.")
        break;
    }
    else if(userSelect === 1){
        hasKey = true;
        console.log("You have found the key!")
    }
    else if(userSelect === 2){
        console.log("You have not found the key")
        userSelect = readline.keyInSelect(userInput, "Choose wisely")
    }
    else{
        console.log("You have given up and the room starts to fill with some weird gas...")
        break;
    }
}

while(hasKey === true){
    userSelect = readline.keyInSelect(userInput, "you now have the key so what will you do?");
    if(hasKey === true, userSelect === 1){
        console.log("you already have the key and took too long so you died.>.>")
        break;
    }else if(userSelect === 0){
        console.log("you DIED...you had the key though.");
        break;
    }else {
        console.log("you have survived and escaped....until next time");
    } 
    break;
}


