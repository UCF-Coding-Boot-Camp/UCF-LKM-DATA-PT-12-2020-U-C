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

// create variables for chart height and width


// Create and size the SVG container. Then append, size, and position an SVG group inside within margins defined earlier


// Create a bandScale which will be used to position the charts bars along the x-axis.  Include a padding of 10% of the bar's width.


// Create a linearScale which will be used to position the charts bars along the y-axis and set their height in relation to the data


// Use bottomAxis and leftAxis to create the chart's axes using the passed in scales


// Append a new SVG group to the bottom of the chart, call the bottomAxis function on the new SVG group to insert an axis


// Append a new SVG group to the left (default) of the SVG group, call the leftAxis function inside to create the left-axis
