// Data which we will be using to build our chart
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("height", "600")
  .attr("width", "400");

// Append a rectangle and set its height in relation to the booksReadThisYear value
svg.append("rect")
  .classed("bar", true) // for bonus
  .data(booksReadThisYear)
  .attr("width", 100)
  .attr("height", function(d) {
    return d * 10;
  })
  .attr("x", 0)
  .attr("y", 0);
