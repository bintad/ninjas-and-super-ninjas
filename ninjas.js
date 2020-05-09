class Ninjas {
    constructor(name, health, speed, strength){
        this.name= 'Binta';
        this.health= 4;
        this.speed=3;
        this.strength=3;

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
}
let ninjas = new Ninjas("")
new Ninjas().sayName();
new Ninjas().showStats();
new Ninjas().drinkSake();