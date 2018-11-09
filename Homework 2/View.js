"use strict"
//Function used to display list of found students
function buildStudentList(list_objs) {
  var list = document.getElementById('found_list');
  list.innerHTML = list_objs;
}
//Function used to display a student's grades when clicked on
function displayGrades(courses, gpa) {
  var course_list = document.getElementById('Courses');
  var gpa_list = document.getElementById('GPA');
  course_list.innerHTML = courses;
  gpa_list.innerHTML = gpa;
}
