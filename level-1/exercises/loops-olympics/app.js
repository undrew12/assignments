const firstArray = [
    [0,1,2,3,4,5,6,7,8,9]
]

for(var i = 0; i < firstArray.length; i++){
    for(var j = 0; j < firstArray[j].length; j++){
        console.log(firstArray[i][j])
    }
}

const secondArray = [
    [9,8,7,6,5,4,3,2,1,0]
]
for(var i = 0; i < secondArray.length; i++){
    for(var j = 0; j < secondArray[j].length; j++){
        console.log(secondArray[i][j])
    }
}

var temporaryArray = []
    for (var i = 0; i < array.length; i++){
        temporaryArray.push([0,1,2,3,4,5,6,7,8,9])
    }
    return temporaryArray.join(", ")

const fruitArray = [
    ["banana", "orange", "apple", "kiwi"]
]

for(var i = 0; i < fruitArray.length; i++){
    for(var j = 0; j < fruitArray[j].length; j++){
        console.log(fruitArray[i][j])
    }
}

for (var i = 0; i <= 100; x++){
    if (i % 2 === 0){
        console.log(i)
    }
}

const fruit = [
    ["banana", "orange", "apple", "kiwi", "pear", "peach"]
]
function every_other(array){
    var tempArray = []
    for (var i = 0; i < array.length; i += 2){
        tempArray.push(array[i])
    }
    return tempArray.join(", ")
}