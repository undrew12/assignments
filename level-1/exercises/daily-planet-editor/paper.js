/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

// Written by Kent, Clark

let enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"]

function who_Wins(enemyName) {
    for (let i = 0; i < enemies.length; i++) {
        let is_there_kryptonite
        
        if (i % 2 === 0) {
            is_there_kryptonite = true
        } else {
            is_there_kryptonite = false
        }

        if (is_there_kryptonite) {
            console.log( "Superman beats " + enemyName + ", of course")
        } else {
            console.log( "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.")
        }
    }
}

who_Wins(enemies)

// function howAttractedIsLoisLaneToMe() {
//     // 1 is not at all attracted, 10 is "super" attracted...
//     return Math.floor((Math.random() * 10)+1);
// }

// console.log(howAttractedIsLoisLaneToMe());

// var clarkKent = true;
// var superman = false;

// while (clarkKent) {
//     console.log("I'm just a nerdy columnist");
//     var phoneBoothQuickChange = Math.random();

//         if (phoneBoothQuickChange >= 0.5) {
//             clarkKent = false;
//             superman = true;
//         console.log("Now I'm Superman!");}
// }
