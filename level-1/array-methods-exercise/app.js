const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);

let orangeIndex = fruit.indexOf("orange");
console.log("fruit: ", fruit);

fruit.push(2);
console.log("fruit: ", fruit);

let length = vegetables.length;
console.log("vegetables: ", vegetables);

vegetables.push(3);
console.log("vegetables: ", vegetables);

let food = fruit.concat(vegetables);
console.log("food: ", food);

food.slice(4,6);
console.log("food: ", food);

food.reverse();
console.log("food: ", food);

food.join("");
console.log("food: ", food);

return[food]