"use strict"

function Student(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;
}

function Grades() {
  this.subjects = [];
  this.grades = [];
}

var studentArray = [];
var gradeArray = [];
studentArray.push(new Student("John", "Smith"));
studentArray.push(new Student("Jim", "Henderson"));
studentArray.push(new Student("Jane", "Doe"));
studentArray.push(new Student("John", "Doe"));
studentArray.push(new Student("Jared", "Fipps"));
studentArray.push(new Student("Sean", "Fipps"));
studentArray.push(new Student("Sally", "Henderson"));

var grade1 = new Grades();
grade1.subjects.push("History");
grade1.subjects.push("Math");
grade1.subjects.push("Science");
grade1.subjects.push("English");
grade1.grades.push(87);
grade1.grades.push(68);
grade1.grades.push(94);
grade1.grades.push(84);

var grade2 = new Grades();
grade2.subjects.push("Psychology");
grade2.subjects.push("Programming I");
grade2.subjects.push("Philosophy");
grade2.subjects.push("English");
grade2.grades.push(48);
grade2.grades.push(75);
grade2.grades.push(88);
grade2.grades.push(79);

var grade3 = new Grades();
grade3.subjects.push("Music");
grade3.subjects.push("Math");
grade3.subjects.push("Photography");
grade3.subjects.push("English");
grade3.grades.push(83);
grade3.grades.push(62);
grade3.grades.push(97);
grade3.grades.push(73);

var grade4 = new Grades();
grade4.subjects.push("History");
grade4.subjects.push("PE");
grade4.subjects.push("Biology");
grade4.subjects.push("Theater");
grade4.grades.push(34);
grade4.grades.push(77);
grade4.grades.push(99);
grade4.grades.push(86);

var grade5 = new Grades();
grade5.subjects.push("Spanish");
grade5.subjects.push("Chemistry");
grade5.subjects.push("English");
grade5.grades.push(58);
grade5.grades.push(92);
grade5.grades.push(84);

var grade6 = new Grades();
grade6.subjects.push("Political Science");
grade6.subjects.push("Statistics");
grade6.subjects.push("Physics");
grade6.subjects.push("French");
grade6.grades.push(85);
grade6.grades.push(73);
grade6.grades.push(92);
grade6.grades.push(81);

var grade7 = new Grades();
grade7.subjects.push("Biology");
grade7.subjects.push("Chemistry");
grade7.subjects.push("Spanish");
grade7.grades.push(80);
grade7.grades.push(97);
grade7.grades.push(89);

gradeArray.push(grade1);
gradeArray.push(grade2);
gradeArray.push(grade3);
gradeArray.push(grade4);
gradeArray.push(grade5);
gradeArray.push(grade6);
gradeArray.push(grade7);
