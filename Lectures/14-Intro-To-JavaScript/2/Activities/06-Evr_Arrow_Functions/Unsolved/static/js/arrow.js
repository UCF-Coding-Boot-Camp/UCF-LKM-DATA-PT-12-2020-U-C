var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Refactor both code blocks below to use arrow functions
// Log the name of each princess, follow by a colon, followed by their age
princesses.forEach(function (princess) {
  console.log(`${princess.name}: ${princess.age}`)
});

// Create an array of just the names from the princesses array
var names = princesses.map(function(princess) {
  return princess.name;
});
console.log("names: ", names);
