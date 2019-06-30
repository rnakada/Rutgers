var Student = require("./student.js");

var Classroom = function(prof, room){
//     * An array of students within the class
    this.students = [];
//   * Number of students in the class
    this.size = 0;
//   * Name of the professor
    this.prof = prof;
//   * Room number
    this.room = room;

    this.addStudent = function(name, subject, gpa){
        this.students.push(new Student(name,subject,gpa));
        this.size = this.students.length;
    }
};

module.exports = Classroom;