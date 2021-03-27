// Define the dataset
var booksIReadThisYear = [12, 8, 7, 16, 2, 4, 11];

var namesArray = [
  "Abbott",
  "Barney",
  "Costello",
  "Daisy",
  "Edward",
  "Fred",
  "Georgia"
];

// Store the dimensions of the SVG container
var svgWidth = 800;
var svgHeight = 600;

// Create an object to represent the chart's margins within the SVG container
var margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};

var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Create and size the SVG container. Then append, size, and position an SVG group inside within margins defined earlier
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Create a bandScale which will be used to position the charts bars along the x-axis.  Include a padding of 10% of the bar's width.
var xBandScale = d3.scaleBand()
  .domain(namesArray)
  .range([0, chartWidth])
  .padding(0.1);

// Create a linearScale which will be used to position the charts bars along the y-axis and set their height in relation to the data
var yLinearScale = d3.scaleLinear()
  .domain([0, 20])
  .range([chartHeight, 0]);

// Use bottomAxis and leftAxis to create the chart's axes using the passed in scales.
var bottomAxis = d3.axisBottom(xBandScale);
var leftAxis = d3.axisLeft(yLinearScale);

// Append a new SVG group to the bottom of the chart, call the bottomAxis function on the new SVG group to insert an axis
chartGroup.append("g")
  .attr("transform", `translate(${margin.left}, ${chartHeight})`)
  .call(bottomAxis);

// Append a new SVG group to the left (default) of the SVG group, call the leftAxis function inside to create the left-axis
chartGroup.append("g")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(leftAxis);
