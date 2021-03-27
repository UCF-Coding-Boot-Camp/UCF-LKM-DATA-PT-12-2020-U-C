// Scaling and Using Accessor Functions

var dataArray = [
  {x: 10, y: 12},
  {x: 20, y: 25},
  {x: 30, y: 16},
  {x: 40, y: 20}
];

var xScale = d3.scaleLinear()
  .domain([0, d3.max(dataArray, d => d.x)])
  .range([0, 400]);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataArray, d => d.y)])
  .range([0, 250]);

var lineGenerator = d3.line()
  .x(d => xScale(d.x))
  .y(d => yScale(d.y));

console.log("Drawing commands:", lineGenerator(dataArray));

var svg = d3.select("#path-3");

svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "orange")
  .attr("stroke-width", 5)
  .attr("d", lineGenerator(dataArray));
