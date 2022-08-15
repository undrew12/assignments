const collectAnimals = (...animals) => animals;
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    };
}

console.log(combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"]));

function parseSentence({ location, duration }) {
    console.log(`We're going to have a good time in ${location} for ${duration}`);
}

parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
});

function returnFirst(items) {
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem;
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav, secondFav, thirdFav]) {
    /*your code here*/
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities));

function combineAnimals(arr1, arr2, arr3) {
    console.log(...arr1, ...arr2, ...arr3);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];

    return numbers.reduce((acc, number) => acc * number, 1);
}


function unshift(array, ...rest) {
    let resultArr = [...array, ...rest];
    return resultArr;
}
const myArr = ["a", "b", "c"];
console.log(unshift(myArr, 1, 2, 3, 4, 5));


function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        // your code
        const [firstName, lastName] = name;
        return {
            firstName,
            lastName
        };
    });
}
const people = ["Frank Peterson", "Suzy Degual", "Liza Jones"];
console.log(populatePeople(people));

function print(name, age, ...likes){
const string = likes.join(", and ")
console.log("My name is " + name + " and I'm " + age + " and I like " + string)
}

print("Joe", 22, "animals", "cake", "coding")
// "My name is Joe and I'm 22 and I like animals, and cake, and coding"