// another way to define a function Constructor
var Character = function(name, profession, gender, age, strength, hitpoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.printStats = function(){
        // console.log(this);
        // console.log("Name: " + this.name);
        // console.log("Gender: " + this.gender);
        // console.log(typeof this.name);
        // console.log(typeof this.age);
        var keys = Object.keys(this);
        for (var i = 0; i < keys.length; i++){
            // console.log(this[keys[i]]);
            if(typeof this[keys[i]] === 'string' || typeof this[keys[i]] === 'number'){
                console.log(keys[i] + ": " + this[keys[i]]);
            }
        }
    }
    this.isAlive = function(){
        if(this.hitpoints <= 0){
            console.log(this.name + " is dead");
        }
        else{
            console.log(this.name + " is alive");
        }
    }
    this.attack = function(otherCharacter){
        otherCharacter.hitpoints = otherCharacter.hitpoints - this.strength;
        console.log(this.name + " attacked " + otherCharacter.name);
    }
    this.levelUp = function(){
        this.age++;
        this.strength += 5;
        this.hitpoints += 25;
        console.log(this.name + " leveled up");
    }
    this.nikkiFunc = function(){
        console.log("dumb question answer");
    }
}

var superman = new Character(
    "Superman",
    "Journalist",
    "Alien",
    33,
    100,
    50
);

var spiderman = new Character(
    "Spiderman",
    "Photographer",
    "Male",
    18,
    70,
    75
);

console.log("Superman and spiderman walk into a room");
superman.printStats();
spiderman.printStats();
console.log("Spiderman spills superman's coffee");
superman.attack(spiderman);
spiderman.isAlive();
superman.levelUp();
superman.printStats();
spiderman.printStats();
console.log("Superman buys a new cup of coffee");