// Use Math.random() to return a random number between 0 and 1
 console.log("Math.random()", Math.random());


  // Use Math.round() to round a number to the nearest whole integer.
console.log("Math.round(5.95))", Math.round(5.95)); // returns 6

console.log("Math.round(5.15))", Math.round(5.15)); // returns 5


//  Use Math.floor() to round down a number to the nearest whole integer.
console.log("Math.floor(5.95))", Math.floor(5.95));


// What is the result of using Math.round() with Math.random()?
console.log("Math.round(Math.random())", Math.round(Math.random())); // returns 0 or 1.


// What is the result of using Math.floor() with Math.random()?
console.log("Math.floor(Math.random())", Math.floor(Math.random())); // returns 0.


//  Get a random number between 1 and 10 using Math.random()
//  and Math.floor().

console.log("Math.floor(Math.random() * 10)", Math.floor(Math.random() * 10) + 1);



// Iterate through an array of numbers and return a random number
//  multiplied by the number in the array.
var arr = [10, 100, 1000];

for (var i = 0; i < arr.length; i++) {
  console.log(Math.floor(Math.random() * arr[i]));
}

// Or

for (var i = 0; i < arr.length; i++) {
  console.log(Math.round(Math.random() * arr[i]));
}
