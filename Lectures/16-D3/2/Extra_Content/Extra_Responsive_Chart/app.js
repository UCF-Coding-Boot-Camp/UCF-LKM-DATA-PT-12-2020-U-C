d3.select(window).on("resize", handleResize);

// When the browser loads, loadChart() is called
loadChart();

function handleResize() {
  var svgArea = d3.select("svg");

  // If there is already an svg container on the page, remove it and reload the chart
  if (!svgArea.empty()) {
    svgArea.remove();
    loadChart();
  }
}

function loadChart() {
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;

  var margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };
  var chartWidth = svgWidth - margin.left - margin.right;
  var chartHeight = svgHeight - margin.top - margin.bottom;


  var svg = d3.select("body").append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);

  var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

  d3.csv("hours-of-tv-watched.csv", function(error, tvData) {
    if (error) return console.warn(error);

    tvData.forEach(function(data) {
      data.hours = +data.hours;
    });

    var labels = tvData.map(d => d.name);
        // scale x to chart
    var xScale = d3.scaleBand()
            .domain(labels)
            .range([0, chartWidth]);

    var hours = tvData.map(d => d.hours);
        // scale y
    var yScale = d3.scaleLinear()
            .domain([0, d3.max(hours)])
            .range([chartHeight, 0]);

    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);

    chartGroup.append("g")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(xAxis);

    chartGroup.append("g")
            .call(yAxis);

    var barWidth = chartWidth / tvData.length;
    chartGroup.selectAll(".bar")
            .data(tvData)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", (d, i) => xScale(labels[i]))
            .attr("y", d => yScale(d.hours))
            .attr("width", xScale.bandwidth())
            .attr("height", d => chartHeight - yScale(d.hours));
  });

}
