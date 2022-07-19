const greeting = "Hello"
const secondGreeting = "Hello World"

let newGreeting = greeting.toUpperCase + greeting.toLowerCase
console.log(newGreeting)

let middleIndex1 = Math.floor(greeting.indexOf("hello"))
console.log(middleIndex1)
let middleIndex2 = Math.floor(secondGreeting.indexOf("hello world"))
console.log(middleIndex2)

let firstHalf1 = Math.floor(greeting.slice(0,2))
console.log(firstHalf1)
let firstHalf2 = Math.floor(secondGreeting.slice(0,5))
console.log(firstHalf2)

let upperAndLower1 = Math.floor(greeting.toUpperCase + greeting.toLowerCase)
console.log(upperAndLower1)
let upperAndLower2 = Math.floor(secondGreeting.toUpperCase + secondGreeting.toLowerCase)
console.log(upperAndLower2)