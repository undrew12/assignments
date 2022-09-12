const readline = require("readline-sync");
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

console.log(input)

var shift = parseInt(readline.question('How many letters would you like it to shift? '));

console.log(shift)

function cipher (string, num){
    num = num % 26;
    var lowerCaseString = string.toLowerCase()
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newString = ''
    for (let i = 0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i]
        if (currentLetter === ' '){
            newString += currentLetter
            continue
        }
        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26
        if (newIndex < 0) newIndex = newIndex + 26
        if (string[i] === string[i].toUpperCase()){
            newString += alphabet[newIndex].toUpperCase()
        }
        else newString += alphabet[newIndex]
    }
    console.log(newString)
}
cipher(input, shift)