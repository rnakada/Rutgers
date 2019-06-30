var Digipet = function(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if(this.hungry){
            this.hungry = false;
            this.sleepy = true;
            console.log("That was yummy!");
        }
        else{
            console.log("No Thanks I'm full");
        }
    }
    this.sleep = function(){
        if(this.sleepy){
            console.log("Zzzzzzzzzzzzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else{
            console.log("No way! I'm not tired. I had superman's coffee.");
        }
    }

    this.play = function(){
        if(this.bored){
            this.bored = false;
            this.hungry = true;
            console.log("Yay! Let's play!");
        }
        else{
            console.log("Not right now. Maybe Later?");
        }
    }

    this.increaseAge = function(){
        this.age++;
        console.log("Happy Birthday to me! I am "+this.age+" years old!")
    }
};

var dog = new Digipet();
dog.outside = false;
dog.bark = function(){
    console.log("Woof woof!");
};
dog.bark();

// If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs bark(). If outside is true, prints "We're already outside though..."
dog.goOutside = function(){
    if(!this.outside){ // if not outside
        this.outside = true;
        console.log("Yay! I love the outdoors!");
        this.bark();
    }
    else{
        console.log("We're already outside though... silly human");
    }

};
//   * goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside...
dog.goInside = function(){
    if(this.outside){ // if outside
        this.outside = false;
        console.log("Do we have to? Fine...");
    }
    else{
        console.log("I'm already inside... silly human");
    }
};
dog.goOutside();
dog.goInside();


var cat = new Digipet();
// * houseCondition - Initially set to 100... But not for long...
cat.houseCondition = 100;

// * meow() - prints out "Meow! Meow!" when run
cat.meow = function () {
    console.log('Meow');
}

// * destroyFurniture() - Decreases houseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. Also sets bored to false and sleepy to true. If houseCondition is equal to 0, then this should not run anymore.
cat.destroyFurniture = function(){
    if(this.houseCondition <= 0){
        return;
    }
    this.houseCondition -= 10; // cat.houseCondition = cat.houseCondition - 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.bored = false;
};

cat.destroyFurniture();
// * buyNewFurniture() - Increases houseCondition by 50 and prints "Are you sure about that?" to the screen.

cat.buyNewFurniture = function(){
    
}