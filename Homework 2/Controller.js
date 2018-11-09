"use strict"
//Function used to search the list of available students.
function lastNameSearch() {
  var list_empty = true;
  var ln = document.getElementById('search');
  var button = document.getElementById('search_button');
  var list_objs = '';
  //Uses value of search form to compare to students in list.
  //Creates li objects if last name matches.
  for (var i = 0; i < studentArray.length; i++) {
    if (ln.value.toUpperCase() == studentArray[i].last_name.toUpperCase()) {
      list_objs += '<li>' + studentArray[i].first_name + ' ' + studentArray[i].last_name + '</li>';
      list_empty = false;
    }
  }
  //Sets a message if the list is empty.
  if (list_empty) {
    list_objs += '<li>No Students Found</li>';
  }
  buildStudentList(list_objs);
}
//Same function as above, only for an enter key press while the form is selected.
$(document).ready(function() {
  $("#search").keypress(function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      var list_empty = true;
      var ln = document.getElementById('search');
      var button = document.getElementById('search_button');
      var list_objs = '';
      for (var i = 0; i < studentArray.length; i++) {
        if (ln.value.toUpperCase() == studentArray[i].last_name.toUpperCase()) {
          list_objs += '<li>' + studentArray[i].first_name + ' ' + studentArray[i].last_name + '</li>';
          list_empty = false;
        }
      }
      if (list_empty) {
        list_objs += '<li>No Students Found</li>';
      }
      lastNameSearch(list_objs);
    }
  });
});
//Function for building the grades tables when a student in the list is clicked.
$(document).ready(function() {
  $(function() {
    $('#found_list').on('click', 'li', function() {
      var index = 0;
      var courses = '<li>Courses</li>';
      var gpa = '<li>GPA</li>';
      var grade_title = document.getElementById('Grades_Found');
      var course_list = document.getElementById('Courses');
      var gpa_list = document.getElementById('GPA');
      //Sets the P item for the table title.
      grade_title.innerHTML = "<b>Grades for: " + $(this).html() + "</b>";
      //Searches the found list, sets the index if fouond.
      for (var i = 0; i < studentArray.length; i++) {
        if ($(this).html() == studentArray[i].first_name + ' ' + studentArray[i].last_name) {

          index = i;
        }
      }
      //Searches the grade list and grabs the grades based on the index found earlier.
      for (var j = 0; j < gradeArray.length; j++) {
        if (j == index) {
          for (var k = 0; k < gradeArray[j].subjects.length; k++) {
            courses += '<li>' + gradeArray[j].subjects[k] + '</li>';
            gpa += '<li>' + gradeArray[j].grades[k] + '</li>';
          }
        }
      }
      displayGrades(courses, gpa);
    });
  });
});
