
const readline = require("readline-sync")
let isAlive = true;
let heroplayerhp = "100"
let  heroplayeratk = "50"




// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

class Adventurehero{
    constructor(name, hp, atk){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.inventory = ['Glave']
    }
}
// const heroplayerarr = []
// const player = new Adventurehero()

// const heroplayerhp = []
// const playerhp = new Adventurehero(100)

// const heroplayeratk = [50]
// const playeratk = new Adventurehero()

let hero = Adventurehero.name
// let herohp = Adventurehero.hp
// let he = Adventurehero.atk
        
class Evilenemy {
        constructor(name, hp, atk){
                this.name = name;
                this.hp = hp;
                this.atk = atk;
            }
        }
const enemyArr = []
const Knight = new Evilenemy("Knight")
const Wizard = new Evilenemy("Wizard")
const Rouge = new Evilenemy("Rouge")

const enemyhp = []
const Knighthp = new Evilenemy(100)
const Wizardhp = new Evilenemy(100)
const Rougehp = new Evilenemy(100)

const enemyattack = []
const Knightatk = new Evilenemy (50)
const Wizardatk = new Evilenemy (50)
const Rougeatk = new Evilenemy (50)


enemyArr.push(Knight.name, Wizard.name, Rouge.name)
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
    }
   
}

     function walk(){
        const random = Math.floor(Math.random()*4)
        if(random === 0){
            enemyEncounter()
        }else{
            console.log("You continue safely")}
        }
    
    function printInventory(){
        console.log(player.inventory)
    }
    
    function enemyEncounter(){
        // const random = Math.floor(Math.random() * Evilenemy.length)
        const random = Math.floor(Math.random() * enemyArr.length)
        const enemy = enemyArr[random]
        
        // const enemy = Evilenemy[random]
        
    fight(enemy)

}

    function fight(Evilenemy){
        
    
        
        engage = readline.keyIn(`You've encountered ` + Evilenemy + `. ` + ` (a) Attack or (r) Run? `,{limit:["a","r"]})

        engage = engage.toLowerCase()
        
    if (engage === 'a'){
        
        attack(engage)
        function attack(engage){
            if(engage === 'a'){
             
                
                
                readline.keyIn (`attack the ` + Evilenemy + ` and dealt ` + heroplayeratk + ` points of damage. `)
    
                            if(enemyhp < 0){
                                enemyhp = 0
                            }
                        
                             
                            if(heroplayerhp > 0) {
                                if(enemyhp > 0) {
                                    if (attackCounter > 1) {
                                        //console.clear()
                                        attackCounter = 0
                                    }
                            readline.keyIn( ` (f) Attack again or (r)Run? `,{limit:["f","r"]})
    
                            
                          
                                     readline.keyIn(`You dealt ` + heroplayeratk + ` to the `+ Evil + `.Your current HP is ` + heroplayerhp +  `. (f) Attack again or (r)Run? `,{limit:["f","r"]})
                                    attackCounter ++
                                }else { 
                                     readline.keyIn(`You dealt ` + heroplayeratk + ` to the `+ Evilenemy + `.Your current HP is ` + heroplayerhp + `. (f) Attack again or (r)Run? `,{limit:["f", "r"]})
                                    console.log()
                        } if(enemyhp <= 0 ){
                            readline.keyInPause(`You did ` + heroplayeratk + ` to ` + Evilenemy + enemyattack + `Your current HP is ` + heroplayerhp +  `. You have defeated the ` + Evilenemy)
                            
                        }    

    }else if (engage === 'r') {
        
        runAway(engage)
        
        function runAway(engage){
        if(engage === 'r'){
    
        let chance = Math.floor((Math.random()*2)+1)
        
            if (chance !== 4) {
                heroplayerhp = heroplayerhp - 50
                
                
                if (engage === 'f') {
                    attack()
                }
            }else {
                
                readline.keyInPause(`You managed to get away.`)
                engage = ''
            }
       
    }

    function attack(engage){
        if(engage === 'a'){
         
            
            
            readline.keyIn (`attack the ` + Evilenemy + ` and dealt ` + heroplayeratk + ` points of damage. `)
            
                        if(enemyhp < 0){
                            enemyhp = 0
                        }
                    
                         
                        if(heroplayerhp > 0) {
                            if(enemyhp > 0) {
                                if (attackCounter > 1) {
                                    //console.clear()
                                    attackCounter = 0
                                }
                        readline.keyIn( ` (f) Attack again or (r)Run? `,{limit:["f","r"]})
                                if(engage === 'f'){
                        
                      
                                 readline.keyIn(`You dealt` + heroplayerhp + `to the `+ Evil +`and it dealt`+ enemyattack + `.Your current HP is ` + heroplayerhp +  `. (f) Attack again or (r)Run? `,{limit:["f","r"]})
                                attackCounter ++
                            }else { 
                                 readline.keyIn(`You dealt` + heroplayeratk + `to the `+ Evilenemy +`and it dealt`+ enemyattack + `.Your current HP is ` + heroplayerhp + `. (f) Attack again or (r)Run? `,{limit:["f", "r"]})
                                console.log()
                    } if(enemyhp <= 0 ){
                        readline.keyInPause(`You ` + heroplayeratk + Evilenemy + enemyattack + `Your current HP is ` + Evilenemy +  `. You have defeated the ` + Evilenemy)
                        

                
} 

const index = readline.keyInSelect('What would you like to do next?');
   
                    // }
                    
        

        
            
            // function parished() {
            //     console.clear()
            //     engage = ''
            //     readline.keyInPause( adventurehero + `died!`)
            //         process.exit()
            // }

    


        
    }}}}}}}}}}}
