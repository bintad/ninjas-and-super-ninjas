class Sensei {
    constructor(name, health, speed, strength){
        this.name= name;
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;

    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.health)

    }
    drinkSake(){
        this.health +=10
        console.log(this.health)
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}("Master Splinter");

let ninjas = new Sensei("")
new Sensei().sayName();
new Sensei().showStats();
new Sensei().drinkSake();
new Sensei().speakWisdom();