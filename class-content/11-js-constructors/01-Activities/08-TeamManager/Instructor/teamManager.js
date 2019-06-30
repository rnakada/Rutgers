var inquirer = require("inquirer");


// // hoisting - move to the top of the context..
// function Player(name, position, offense, defense){
// no hoisting
var Player = function(name, position, offense, defense){
    //   * `name`: Property which contains the player's name
    this.name = name;
    //   * `position`: Property which holds the player's position
    this.position = position;
    //   * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
    this.offense = offense;
    //   * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
    this.defense = defense;
    //   * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
    //   * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
    //   * `printStats`: Method which prints all of the player's properties to the screen
    this.printStats = function(){
        // console.log(this);
        var keys = Object.keys(this);
        console.log("---------");
        for(var i = 0; i < keys.length; i++){
            if(typeof this[keys[i]] !== 'function'){
                console.log(keys[i] + ": " + this[keys[i]]);
            }
        }
        console.log("---------");
    }
}
var players = [];
    // new Player("Random", "Somewhere", 1, 1).printStats();
var createPlayer = function(){
    if(players.length < 4){
        inquirer.prompt([
            {
                name: "name",
                message: "What is the Player's name? "
            },
            {
                name: "position",
                message: "What is the Player's position? "
            },
            {
                name: "offense",
                message: "What is the Player's offense (1-10)? "
            },
            {
                name: "defense",
                message: "What is the Player's defense (1-10)? "
            }
        ]).then(function(a){
            // console.log(a);
            players.push(new Player(a.name, a.position, a.offense, a.defense));
            

            createPlayer();
        });
    }
    else{
        for(var i = 0; i < players.length; i++){
            players[i].printStats();
        }
        // other logic could be here to play the game
    }
};

createPlayer();