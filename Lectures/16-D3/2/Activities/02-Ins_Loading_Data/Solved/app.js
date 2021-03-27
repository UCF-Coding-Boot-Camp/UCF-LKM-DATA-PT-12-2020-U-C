// Load data from hours-of-tv-watched.csv
d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {

  console.log(tvData);

  // log a list of names
  var names = tvData.map(data => data.name);
  console.log("names", names);

  // Cast each hours value in tvData as a number using the unary + operator
  tvData.forEach(function(data) {
    data.hours = +data.hours;
    console.log("Name:", data.name);
    console.log("Hours:", data.hours);
  });
}).catch(function(error) {
  console.log(error);
});
