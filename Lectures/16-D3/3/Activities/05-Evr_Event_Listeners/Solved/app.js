// data
var dataArray = [1, 2, 3];
var dataCategories = ["one", "two", "three"];

function makeResponsive() {

    // if the SVG area isn't empty when the browser loads,
    // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

  if (!svgArea.empty()) {
    svgArea.remove();
  }

    // svg params
  var svgHeight = window.innerHeight;
  var svgWidth = window.innerWidth;

    // margins
  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };

    // chart area minus margins
  var chartHeight = svgHeight - margin.top - margin.bottom;
  var chartWidth = svgWidth - margin.left - margin.right;

    // create svg container
  var svg = d3.select("body").append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);

    // shift everything over by the margins
  var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // scale y to chart height
  var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataArray)])
        .range([chartHeight, 0]);

    // scale x to chart width
  var xScale = d3.scaleBand()
        .domain(dataCategories)
        .range([0, chartWidth])
        .padding(0.1);

    // create axes
  var yAxis = d3.axisLeft(yScale);
  var xAxis = d3.axisBottom(xScale);

    // set x to the bottom of the chart
  chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(xAxis);

    // set y to the y axis
  chartGroup.append("g")
        .call(yAxis);


  chartGroup.selectAll("rect")
        .data(dataArray)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(dataCategories[i]))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "green")
        // event listener for onclick event
        .on("click", function(d, i) {
          alert(`Hey! You clicked bar ${dataCategories[i]}!`);
        })
        // event listener for mouseover
        .on("mouseover", function() {
          d3.select(this)
                .attr("fill", "red");
        })
        // event listener for mouseout
        .on("mouseout", function() {
          d3.select(this)
                .attr("fill", "green");
        });
}

makeResponsive();

// Event listener for window resize.
// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);
