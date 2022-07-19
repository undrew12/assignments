const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"

let forceptionArr = forception(people, alphabet)

function forception(people, alphabet) {
    let forceptionArr= []
    for (let i = 0; i < people.length; i++){
        forceptionArr.push(people[i])
        for (let j = 0; j < alphabet.length; j++){
            forceptionArr.push(alphabet[j])
        }
    }
    return forceptionArr
}

forceptionArr.forEach(element => {
    console.log(element)
});