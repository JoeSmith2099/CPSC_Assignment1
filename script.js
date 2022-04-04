/* Modified code from https://www.w3schools.com/js/tryit.asp?filename=tryjs_validation_js. This is a
   function called in the tag for the form on page 3. the first line pulls the value at fullname
   in the form bestform and checks whether it's an empty string. If it is, it raises an alert that
   tells the user that name is a required field and breaks from the script (the return).
*/

/*Nest these functions and then make an overall validation check form that executes both values
/*green and fuscia are good contrasting colors*/

function validateForm() {
  let x = document.forms["myForm"]["fullname"].value;
  let num = document.forms["myForm"]["number"].value;
  if (x == "") {
    alert("Name must be filled out");
    fail();
  }
  if (isNaN(num)){
  	alert("Invalid input");
  	fail();
  }
  if(num.length != 10){
  	alert("Number is incorrect length.");
  	fail();
  }
}

function fail(){
    return false;
}
