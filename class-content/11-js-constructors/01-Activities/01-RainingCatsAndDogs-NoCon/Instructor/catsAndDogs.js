var dogs = {
    raining: true,
    noise: 'Woof!',
    makeNoise: function(){
        console.log(this.noise);
    }
};

var dogs2 = {};
dogs2.raining = true;
dogs2.noise = 'Woof2!';
dogs2.makeNoise = function(){
    console.log(this.noise);
};
console.log(dogs);
console.log(dogs2);
dogs.makeNoise();
dogs2.makeNoise();

var cats = {
    raining: true,
    noise: 'Meow!',
    makeNoise: function(){
        console.log(this.noise);
    }
};

function Animal(noise){
    this.raining = true;
    this.noise = noise;
    this.makeNoise = function (){
        console.log(this.noise);
    }
};
var catAnimal = new Animal("Purr");
catAnimal.makeNoise();
console.log(catAnimal instanceof Animal);