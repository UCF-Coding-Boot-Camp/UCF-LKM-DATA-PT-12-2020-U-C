var svgWidth = 1000;
var svgHeight = 500;

// create an SVG element
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Load csv data
d3.csv("NCHS_life_expectancy_at_birth.csv").then(function(lifeData) {

  console.log(lifeData);

  // cast the data from the csv as numbers
  lifeData.forEach(function(data) {
    data.year = +data.year;
    data.lifeExpectancy = +data.lifeExpectancy;
  });

  // Create a scale for your independent (x) coordinates


  // Create a scale for your dependent (y) coordinates


  // create a line generator function and store as a variable
  // use the scale functions for x and y data


  // Append a path element to the svg, make sure to set the stroke, stroke-width, and fill attributes.


}).catch(function(error) {
  console.log(error);
});
