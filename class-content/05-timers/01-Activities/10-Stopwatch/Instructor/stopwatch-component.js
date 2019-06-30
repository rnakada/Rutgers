// this function will return a flexible method for create new components
// private anonymous function (a private scope wrapper)
var stopwatchComponent = ( function (){

    //  Interval Exercise (follow the instructions below).
    var stopwatchTemplate = {

        wrapper: null,
        //  Variable that will hold our setInterval that runs the stopwatch
        intervalId: -1,

        // prevents the clock from being sped up unnecessarily
        clockRunning: false,
        time: 0,
        lap: 1,

        // used to create new stopwatches
        initialize: function(wrapperNode){
            this.wrapper = $(wrapperNode);
            this.wrapper.find(".start").on("click", this.start.bind(this));
            this.wrapper.find(".stop").on("click", this.stop.bind(this));
            this.wrapper.find(".reset").on("click", this.reset.bind(this));
            this.wrapper.find(".lap").on("click", this.recordLap.bind(this));
        },

        reset: function() {

            this.time = 0;
            this.lap = 1;

            //  TODO: Change the "display" div to "00:00."
            this.wrapper.find('.display').text("00:00");
        }, 

        start: function() {
            // console.log("start");
            //  TODO: Use setInterval to start the count here and set the clock to running.
            if (!this.clockRunning) {
                this.clockRunning = true;
                //use bind to keep context variable
                this.intervalId = setInterval(this.count.bind(this), 1000);
            }

        },
        stop: function() {
            console.log("stop function");
            //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
            clearInterval(this.intervalId);
            this.clockRunning = false;
        },

        recordLap: function() {
            console.log("record lap");
            //  TODO: Get the current time, pass that into the timeConverter function,
            //        and save the result in a variable.
            var currentLap = this.timeConverter(this.time);

            //  TODO: Add the current lap and time to the "laps" div.
            this.wrapper.find(".laps").append("<div>Lap " + this.lap + ":" + currentLap +" </div>");

            //  TODO: Increment lap by 1. Remember, we can't use "this" here.
            this.lap++;
        },
        count: function() {
            console.log("count sheep");
            //  TODO: increment time by 1, remember we cant use "this" here.
            this.time++;

            //  TODO: Get the current time, pass that into the timeConverter function,
            //        and save the result in a variable.
            var currentTime = this.timeConverter(this.time);

            //  TODO: Use the variable you just created to show the converted time in the "display" div.
            this.wrapper.find('.display').text(currentTime);
        },

        //  THIS FUNCTION IS DONE FOR US!
        //  We do not need to touch it.

        timeConverter: function(t) {

            //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }

            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }

    };


    // this factory creates and stores new watches
    // this factory cannot be accessed directly but it is stored in a private scope
    var stopwatchFactory = {
        stopwatchCollection: [],
        stopwatchTemplate: stopwatchTemplate,
        // factory method that uses the stopwatch template to create new stopwatches
        create: function(node){
            console.log("creating stopwatch");
            // copies the template
            var stopwatch = $.extend(true, {}, this.stopwatchTemplate);
            // stores the stopwatch
            this.stopwatchCollection.push(stopwatch);
            // initializes the stopwatch
            stopwatch.initialize(node);
            // returns the stopwatch (if needed)
            return stopwatch;
        }
    };
    
    // used as a more flexible way of adding stopwatches
    var addStopwatch = function(){
        // console.log({
        //     functionName: "addStopwatch",
        //     arguments: arguments,
        //     context: this
        // });
        
        //arguments is an object that automatically contains all the parameters or inputs given to a function
        // looping through it will allow you to create functions that have variable length argument lists
        for (var i=0; i < arguments.length; i++) {
            // if we have an object that is an instance of jquery
            if(arguments[i] instanceof jQuery){
                var jNodes = arguments[i];
                // go through all the possible nodes on the query object
                for (var j = 0; j < jNodes.length; j++){
                    // create a new stopwatch using factory
                    this.create(jNodes[j]);
                }
            }// if we have an object that is an instance of jquery
            else if(Array.isArray(arguments[i])){
                var aNodes = arguments[i];
                // go through all the possible nodes on the query object
                for (var j = 0; j < aNodes.length; j++){
                    // create a new stopwatch using factory
                    this.create(aNodes[j]);
                }
            }
            else{
                // console.log("node object");
                // create a new stopwatch using factory
                this.create(arguments[i]);
            }
        }
    }.bind(stopwatchFactory);
    
    $(document).ready(function(){
        // adds all stopwatches with the stopwatch-component class
        addStopwatch($('.stopwatch-component'));
    });
    console.log("test");
    return addStopwatch;
})();

// can use my new component widget
stopwatchComponent($('.stopwatch-custom'));
