const readline = require("readline-sync")
let isAlive = true;
const tname = readline.question("What is your name? ")

while(isAlive){
    const action = readline.keyIn("Please choose your starting pokemon between [c] Charmander, [s] squirtle, or [b] Bulbasuar. ", {limit: "csb"})
    
    if(action === "c"){
        choosecharmander()
        console.log("You have choosen Charmander!")
    }else if (action === "s"){
        choosesquirtle()
        console.log("You have choosen squirtle!")
    }else if (action === "b"){
        choosebulbasaur()
        console.log("You have choosen Bulbasuar!")
    }
}

function choosecharmander(){
    const pname = readline.question("What is your pokemons name? ")
    class Trainerspokemon {
        constructor(pname, hp, ap, level, moves){
            this.pname = pname;
            this.hp = hp;
            this.fullhp = hp;
            this.ap = ap;
            this.level = level
            this.moves = moves;
        }

        cmovelist.constructor(move, type, power) {
            this.move = move
            this.type = type
            this.power = power
            ["ember", "fire", 30]
            ["scratch", "normal", 25]
            ["tackle", "normal", 35]
            ["flamethrower", "fire", 50]
        }
    }
    const charmander = new Trainerspokemon("Charmander", 40, 60, 5, cmovelist)
}

function choosesquirtle(){
    const pname = readline.question("What is your pokemons name? ")
    class Trainerspokemon {
        constructor(pname, hp, ap, level, moves){
            this.pname = pname;
            this.hp = hp;
            this.fullhp = hp;
            this.ap = ap;
            this.level = level
            this.moves = moves;
        }

        smovelist.constructor(move, type, power) {
            this.move = move
            this.type = type
            this.power = power
            ["bubble", "water", 20]
            ["headbutt", "normal", 25]
            ["tackle", "normal", 35]
            ["water-gun", "water", 40]
        }
    }
    const squirtle = new Trainerspokemon("Squirtle", 50, 50, 5, smovelist)
}

function choosebulbasaur(){
    const pname = readline.question("What is your pokemons name? ")
    class Trainerspokemon {
        constructor(pname, hp, ap, level, moves){
            this.pname = pname;
            this.hp = hp;
            this.fullhp = hp;
            this.ap = ap;
            this.level = level
            this.moves = moves;
        }

        bmovelist.constructor(move, type, power) {
            this.move = move
            this.type = type
            this.power = power
        }
        ["absorb", "grass", 20]
        ["bite", "normal", 30]
        ["scratch", "normal", 25]
        ["vine-wip", "grass", 45]
    }
    const bulbasaur = new Trainerspokemon("Bulbasaur", 60, 40, 5, bmovelist)
}

const pname = readline.question("What is your pokemons name? ")

class Trainer{
    constructor(tname){
        this.tname = tname
        this.inventory = ["oran berry"]
    }
}

const player = new Trainer(tname)

class Wildpokemon {
    constructor(wname, hp, ap){
        this.wname = wname;
        this.hp = hp;
        this.ap = ap;
        this.level = level
        this.moves = moves;
    }
}

const pidgey = new Wildpokemon("Pidgey", 50, 50)
const pikachu = new Wildpokemon("Pikachu", 75, 50)
const rattata = new Wildpokemon("Rattata", 50, 25)
const enemies = [pidgey, pikachu, rattata]

while(isAlive){
    const action = readline.keyIn("Would you like to [w] Walk into the grass, [p] Print Inventory to see pokemon and items, or [q] Quit?", {limit: "wqp"})
    
    if(action === "w"){
        walk()
    }else if (action === "p"){
        printInventory()
    }else if(action === "q"){
       isAlive = false
       console.log("You quit your adventure") 
    }
}

function walk(){
    const random = Math.floor(Math.random()*4)
    if(random === 0){
        enemyEncounter()
    }else{
        console.log("You walk safely")
    }
}

function printInventory(){
    console.log(player.inventory)
}

function enemyEncounter(){
    const random = Math.floor(Math.random() * enemies.length)
    const enemy = enemies[random]
    const shinyEnemy = Math.floor(Math.random() * 12)
}