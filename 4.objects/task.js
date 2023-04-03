"use strict"

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

    let student1 = new Student("Василиса", "женский", 19);
    let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;  
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
        return undefined;
    } 
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0) {
        return 0;
    } else {
        const average = this.marks.reduce((acc, marc) => acc + marc, 0) / this.marks.length;
        return average;
    }
}


Student.prototype.exclude = function (reason) {

delete this.marks;
delete this.subject;
this.excluded = reason;

}
