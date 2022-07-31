
const readline = require("readline-sync")
let isAlive = true;

// let heroplayerhp = "100"
// let  heroplayeratk = "50"


let A1N = ""
let A1H = "100"
let A1A = "50"

// let E1N = ""
// let E1H = "50"
// let E1A = "10"


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

adventureHero1 = {
    name: A1N.name,
    hp:  A1H.hp,
    atk:  A1A.atk,
    inventory: ['Glave']
}
function randomNumber(num){
const result = Math.floor(Math.random()*num)
return result
}
const E2 = [
{
    'name' : 'Knight',
    'hp': 150,
    'atk': 10, 

},
{
    'name' : 'Wizard',
    'hp': 150,
    'atk': 10, 
},
{
    'name' : 'Rouge',
    'hp': 150,
    'atk': 10, 
},

]
function fight(enemy){
    
        
    engage = readline.keyIn(`You've encountered ` + enemy.name + `. ` + ` (a) Attack or (r) Run? `,{limit:["a","r"]})

    engage = engage.toLowerCase()
    if (engage === 'a'){
        // console.log("engage", engage)
        attack(enemy)
        
    }else if (engage === 'r') {
    
        console.log("engage", engage)
        
        runAway(engage)
    }
       }
       function attack(badguy){
        if(engage === 'a'){
                      
            // readline.keyIn (`attack the ` + Evilenemy + ` and dealt ` + heroplayeratk + ` points of damage. `)
            
            readline.keyIn (`attack the ` + badguy.name + ` and dealt ` + A1A + ` points of damage. hit a to continue `)
    
                        if(E2 < 0){
                            E2 = 0
                    
                         
                        if(A1H > 0) {
                            if(E2 > 0) {
                                // if (attackCounter > 1) {
                                //     //console.clear()
                                //     attackCounter = 0
                                // }
                        readline.keyIn( ` (a) Attack again or (r)Run? `,{limit:["a","r"]})
    
                        A1A
                //             readline.keyIn(`You dealt ` + heroplayeratk + ` to the `+ Evil + `.Your current HP is ` + heroplayerhp +  `. (f) Attack again or (r)Run? `,{limit:["f","r"]})
             //             attackCounter ++
                //         }else { 
             //              readline.keyIn(`You dealt ` + heroplayeratk + ` to the `+ Evilenemy1 + `.Your current HP is ` + heroplayerhp + `. (f) Attack again or (r)Run? `,{limit:["f", "r"]})
                //             console.log()
                // } if(enemyhp <= 0 ){
             //     readline.keyInPause(`You did ` + heroplayeratk + ` to ` + Evilenemy1 + enemyattack + `Your current HP is ` + heroplayerhp +  `. You have defeated the ` + Evilenemy)
                
                      
                                 readline.keyIn(`You dealt ` +  A1A + ` to the `+ E2 + `.Your current HP is ` + A1H +  `. (a) Attack again or (r)Run? `,{limit:["a","r"]})
                                // attackCounter ++
                            }else { 
                                 readline.keyIn(`You dealt ` +  A1A + ` to the `+ E2 + `.Your current HP is ` + A1H + `. (a) Attack again or (r)Run? `,{limit:["a", "r"]})
                                console.log()
                    } if(E2 <= 0 ){
                        readline.keyInPause(`You did ` +  A1A + ` to ` + E2 + enemyattack + `Your current HP is ` + A1H +  `. You have defeated the ` + Evilenemy)
                        
                    } 
                        }}}}

// Evilenemy1 = {

//     name: 'Knight',
//     hp: 100,
//     atk: 100,
// }
// class Adventurehero{
//     constructor(name, hp, atk){
//         this.name = name;
//         this.hp = hp;
//         this.atk = atk;
//         this.inventory = ['Glaive']
//     }
// }
// const heroplayerarr = []
// const player = new Adventurehero()

// const adventureHero1 = []
// let A1H = new adventureHero1(100)

// const heroplayeratk = [50]
// const playeratk = new Adventurehero()


// let herohp = Adventurehero.hp
// let he = Adventurehero.atk
        
// class Evilenemy {
//         constructor(name, hp, atk){
//                 this.name = name;
//                 this.hp = hp;
//                 this.atk = atk;
//             }
//         }

// const enemyArr = []
// const Knight = new Evilenemy("Knight")
// const Wizard = new Evilenemy("Wizard")
// const Rouge = new Evilenemy("Rouge")

// const enemyhp = []
// const Knighthp = new Evilenemy(100)
// const Wizardhp = new Evilenemy(100)
// const Rougehp = new Evilenemy(100)

// const enemyattack = []
// const Knightatk = new Evilenemy (50)
// const Wizardatk = new Evilenemy (50)
// const Rougeatk = new Evilenemy (50)


// enemyArr.push(Knight.name, Wizard.name, Rouge.name)

// enemyhp.push(Knight.atk, Wizard.name,)
// enemyattack.push(enemyattack.atk)
// function evilbad() {
//     var EvilName = ["Knight", "Wizard", "Rouge"];
//     var randomEvilName = randomNum(0, 3);
    
//     var namedEnemy = EvilName[randomEvilName];
//     return namedEnemy;




// let EvilName = Evilenemy.name
// let Evilhp = Evilenemy.hp
// let Evilatk = Evilenemy.atk

const welcome = readline.question("What is thou name? ")

function whatsName(){
    if(welcome === ""){
        Adventurehero = ""
    }else{
        Adventurehero = welcome
    }
}
 
if (welcome === null){
    unworthy()
}else{
    whatsName()
    startJourney()
}

function startJourney (){

while(isAlive){
    

 
    const action = readline.keyIn("Would you like to [w] Walk , [p] Print Inventory to see treasure, or [q] Quit? ", {limit: "wqp"})

    if(action === "w"){
        
        walk()
    }else if (action === "p"){
        printInventory()
    }else if(action === "q"){
       isAlive = false
       console.log("You quit your adventure") 
    //    console.log(name)
    }
   
}


    
     //added this curly bracket


function runAway(engage){

  if(engage === 'r'){

    let chance = Math.floor((Math.random()*2)+1)

    console.log("chance", chance)
    
        if (chance !== 4) {
            A1H.hp = A1H.hp - 50
            console.log("A1H.hp", A1H.hp)
            
            // if (engage === 'f') {  //commented this out b/c doesn't ever = "f"
            //     attack()
            // }
        }else {
            readline.keyInPause(`You managed to get away.`)
            engage = ''
        }
   
}} //added curly brace here



     function walk(){
        const random = Math.floor(Math.random()*4)
        if(random === 0){
            enemyEncounter()
        }else{
            console.log("You continue safely")}
        }
    
    function printInventory(){
        // console.log(player.inventory)
        console.log(adventureHero1.inventory)
    }
    
    function enemyEncounter(){
        // const random = Math.floor(Math.random() * Evilenemy.length)

        // const random = Math.floor(Math.random() * enemyArr.length)
        // const enemy = enemyArr[random]
        
        const random = Math.floor(Math.random() * E2.length)
        const enemy = E2[random]
        
        // const enemy = Evilenemy[random]

        // fight(Evilenemy)

        // function fight(Evilenemy){

          fight(enemy)

      
                
} 

const index = readline.keyInSelect('What would you like to do next?');
   
                    // }
                    
        

        
            
            // function parished() {
            //     console.clear()
            //     engage = ''
            //     readline.keyInPause( adventurehero + `died!`)
            //         process.exit()
            // }

    


        
}
