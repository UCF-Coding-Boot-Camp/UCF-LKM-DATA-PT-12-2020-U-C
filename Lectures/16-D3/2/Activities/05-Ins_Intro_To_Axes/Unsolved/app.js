// data
var dataArray = [1, 2, 3];
var dataCategories = ["one", "two", "three"];

// svg container
var svgHeight = 400;
var svgWidth = 1000;

// margins
var margin = { top: 50, right: 50, bottom: 50, left: 50 };

// chart area minus margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

// create svg container
var svg = d3.select("#svg-area").append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// scale y to chart height


// scale x to chart width


// create axes


// set the x axis to the bottom of the chart


// set the y axis


// Append Data to chartGroup
