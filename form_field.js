// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}



// Validate for gender selection from address field @@@this code is valied if i will remove jquery part for this@@@

// function checkforGender1() {
//   var checkboxs = document.getElementsByName("gender");
//   var gendercheck = false;
//   for (var i = 0, l = checkboxs.length; i < l; i++) {
//     if (checkboxs[i].checked) {
//       gendercheck = true;
//       break;
//     }
//   } if (gendercheck == false) {
//     alert("Please select above field/gender");
//   }
//   return gendercheck
// }


// Validate for gender selection from age field  @@@this code is valied if i will remove jquery part for this@@@

// function checkforGender2() {
//   var checkboxs = document.getElementsByName("gender");
//   var gendercheck = false;
//   for (var i = 0, l = checkboxs.length; i < l; i++) {
//     if (checkboxs[i].checked) {
//       gendercheck = true;
//       break;
//     }
//   } if (gendercheck == false) {
//     alert("Please select your gender");
//   }
//   return gendercheck
// }



// Validate for course selection
function courseSelected() {
  var checkboxs = document.getElementsByName("chkCourse");
  var courseCheck = false;
  for (var i = 0, l = checkboxs.length; i < l; i++) {
    if (checkboxs[i].checked) {
      courseCheck = true;
      break;
    }
  }
  if (courseCheck == false) {
    alert("Please select atleast one course");
  }
  return courseCheck

}
