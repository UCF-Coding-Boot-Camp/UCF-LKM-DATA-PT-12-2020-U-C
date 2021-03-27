// @TODO: Complete the following sections to create a lottery number generator.

// Create an empty array to add the numbers.
var powerBallNumbers = [];

// Create a for loop to generate 5 random numbers between 1 and 59.
for (var i = 0; i < 5; i++) {
 //Add the numbers to the array
 powerBallNumbers.push(Math.floor(((Math.random() * 59) + 1)));
}
//  Check your numbers.
console.log(powerBallNumbers);

//Bonus: Add a 6th number to the array between 1 and 35.
powerBallNumbers.push(Math.floor(((Math.random() * 35) + 1)));

//  Check your numbers.
console.log(powerBallNumbers);
