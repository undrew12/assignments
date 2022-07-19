/*
Array Methods Exercise
Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
Remove the last item from the vegetable array.
Remove the first item from the fruit array.
Find the index of "orange."
Add that number to the end of the fruit array.
Use the length property to find the length of the vegetable array.
Add that number to the end of the vegetable array.
Put the two arrays together into one array. Fruit first. Call the new Array "food".
Remove 2 elements from your new array starting at index 4 with one method.
Reverse your array.
Turn the array into a string and return it.
If you've done everything correctly, the last step should print the following string to the console:
3,pepper,1,watermelon,orange,apple
*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.push(fruit.indexOf("orange"));
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.push(vegetables.length);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4,2);
console.log(food);

food.reverse();
console.log(food);

var foodString = food.join(",");
console.log(foodString);