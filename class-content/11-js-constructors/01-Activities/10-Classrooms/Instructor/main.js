var Classroom = require("./models/classroom.js");
// var Student = require("./models/student.js");
// console.log(Classroom);

// console.log(new Classroom("Anthony", "506"));
// console.log(new Student("Anthony", "Coding Bootcamp", 4.0));

var class_506 = new Classroom("Mr. Blue Mushroom", 506);
class_506.addStudent("Uhm New Student", "Math", 4.0);
class_506.addStudent("Bobby", "Math", 3.9);
console.log(class_506);