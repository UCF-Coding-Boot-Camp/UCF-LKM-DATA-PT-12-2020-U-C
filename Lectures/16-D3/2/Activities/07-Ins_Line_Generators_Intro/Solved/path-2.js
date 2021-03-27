// Generating a Path with D3 and an Array

var coordinates = [
  [100, 120],
  [200, 250],
  [300, 160],
  [400, 200]
];

var lineGenerator = d3.line();

console.log("Drawing commands:", lineGenerator(coordinates));

var svg = d3.select("#path-2");

svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-width", 5)
  .attr("d", lineGenerator(coordinates));
