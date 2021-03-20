// Array of student names
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

// This function will be called for each element in the array
function printName(name) {
  console.log(name);
}

// Loop through each student name and call the printName function
for (var i = 0; i < students.length; i++) {
  printName(students[i]);
}

// `forEach` automatically iterates (loops) through each item and
// calls the supplied function for that item.
// This is equivalent to the for loop above.
students.forEach(printName);

// You can also define an anonymous function inline
students.forEach(function(name) {
  console.log(name);
});
