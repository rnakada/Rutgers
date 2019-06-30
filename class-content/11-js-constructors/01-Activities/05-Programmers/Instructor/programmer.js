/**
 * Programmer constructor
 * @param string name 
 * @param string job 
 * @param number age 
 * @param string (optional) language 
 */
var Programmer = function(name, job, age, language){
    //   * The programmer's name
    this.name = name;
    //   * Their position/job title
    this.job = job;
    //   * How old they are
    this.age = age;
    //   * Favorite programming language
    this.language = "Javascript";
    if(arguments.length > 3){
        this.language = language;
    }
    // print stats function
    /**
     * Does it matter???
     */
    this.print = function(){
        // console.log(this);
        var keys = Object.keys(this);
        // console.log(keys);
        for(var i=0; i<keys.length; i++){
            if(typeof this[keys[i]] !== 'function'){
                console.log(keys[i] + ": " + this[keys[i]]);
            }
        }
    }
};

var jason = new Programmer("Jason", "Yeah", "potato");
jason.print();


