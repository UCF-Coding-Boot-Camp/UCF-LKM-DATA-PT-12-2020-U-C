// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {

  // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

  // clear svg is not empty
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width and
  // height of the browser window.
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;

  var margin = {
    top: 50,
    bottom: 50,
    right: 50,
    left: 50
  };

  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

  // Append SVG element
  var svg = d3
    .select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

  // Append group element
  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Read CSV
  d3.csv("norway_medals.csv").then(function(medalData) {

      // create date parser
      var dateParser = d3.timeParse("%d-%b");

      // parse data
      medalData.forEach(function(data) {
        data.date = dateParser(data.date);
        data.medals = +data.medals;
      });

      // create scales
      var xTimeScale = d3.scaleTime()
        .domain(d3.extent(medalData, d => d.date))
        .range([0, width]);

      var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(medalData, d => d.medals)])
        .range([height, 0]);

      // create axes
      var xAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
      var yAxis = d3.axisLeft(yLinearScale).ticks(6);

      // append axes
      chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      chartGroup.append("g")
        .call(yAxis);

      // line generator
      var line = d3.line()
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.medals));

      // append line
      chartGroup.append("path")
        .data([medalData])
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "red");

      // append circles
      var circlesGroup = chartGroup.selectAll("circle")
        .data(medalData)
        .enter()
        .append("circle")
        .attr("cx", d => xTimeScale(d.date))
        .attr("cy", d => yLinearScale(d.medals))
        .attr("r", "10")
        .attr("fill", "gold")
        .attr("stroke-width", "1")
        .attr("stroke", "black");

      // Date formatter to display dates nicely
      var dateFormatter = d3.timeFormat("%d-%b");

      // Step 1: Initialize Tooltip

      // Step 2: Create the tooltip in chartGroup.

      // Step 3: Create "mouseover" event listener to display tooltip

      // Step 4: Create "mouseout" event listener to hide tooltip


    }).catch(function(error) {
      console.log(error);
    });
};

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);
