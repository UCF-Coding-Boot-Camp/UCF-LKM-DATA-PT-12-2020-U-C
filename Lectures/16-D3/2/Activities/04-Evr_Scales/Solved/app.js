// Part 1: Max, Min, Extent
var dataArr = [10, 20, 2000];

console.log("min value ", d3.min(dataArr));
console.log("max value ", d3.max(dataArr));
console.log("min and max values ", d3.extent(dataArr));

// Part 2: scaleLinear
// Imagine you have test scores with possible scores from 0 to 100,
// and you want to graph them in an SVG that is 1000 pixels high.

var testScores = [50, 90, 95, 75, 85];

// a. hard-coded

var yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1000]);

console.log(`50 returns ${yScale(50)}`);
console.log(`75 returns ${yScale(75)}`);
console.log(`100 returns ${yScale(100)}`);

// b. max and min
var svgHeight = 1000;

var yScale = d3.scaleLinear()
  .domain([0, d3.max(testScores)])
  .range([0, svgHeight]);


console.log(`50 returns ${yScale(50)}`);
console.log(`75 returns ${yScale(75)}`);
console.log(`95 returns ${yScale(95)}`);


// c. extent
var yScale = d3.scaleLinear()
  .domain(d3.extent(testScores))
  .range([0, svgHeight]);


console.log(`50 returns ${yScale(50)}`);
console.log(`75 returns ${yScale(75)}`);
console.log(`95 returns ${yScale(95)}`);

// Part 3: scaleBand
// Imagine you want to visualize student grade information on a bar chart.
svgHeight = 600;
var svgWidth = 1000;

testScores = [90, 85, 75, 90];
var students = ["Han", "Sarah", "Matt", "Ruchi"];

var xScale = d3.scaleBand()
  .domain(students)
  .range([0, svgWidth]);

console.log(`Han's x-coordinate: ${xScale("Han")}`);
console.log(`Sarah's x-coordinate: ${xScale(students[1])}`);
console.log(`Matt's x-coordinate: ${xScale("Matt")}`);
console.log(`Ruchi's x-coordinate: ${xScale(students[3])}`);

console.log(`Each band is ${xScale.bandwidth()} pixels wide.`);

// The y values are scaled separately.

var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, svgHeight]);

console.log(`The height of Han's bar: ${yScale(testScores[0])}`);
