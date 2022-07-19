const readline = require("readline-sync")

const num1 = readline.question("Please enter your first number: ");
const num2 = readline.question("Please enter your second number: ");
const operations = ["add", "sub", "mul", "div"];
let userInput = readline.keyInSelect(operations, "Please enter the operation to perform: add, sub, mul, or div." );
console.log("The result is", num1,userInput,num2)