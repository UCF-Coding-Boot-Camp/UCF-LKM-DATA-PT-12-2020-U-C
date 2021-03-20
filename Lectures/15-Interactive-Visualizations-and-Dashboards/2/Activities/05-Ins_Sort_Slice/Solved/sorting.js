// Sort the array in descending order
var numArray = [1, 2, 3];
numArray.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (3, 2, 1)
  return secondNum - firstNum;
});

// Returns [3, 2, 1]
console.log(numArray);

// Sort the array in ascending order
var numArray2 = [3, 2, 1];
numArray2.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (1, 2, 3)
  return firstNum - secondNum;
});

// Returns [1, 2, 3]
console.log(numArray2);

// Sort the array in ascending order, using an arrow function
var numArray3 = [3, 2, 1];
numArray3.sort((firstNum, secondNum) => firstNum - secondNum);
console.log(numArray3);

// Reverse the array
var numArray4 = [1, 2, 3];
var reversedArray = numArray4.reverse()
console.log(reversedArray);
