var austinTemps = [76, 59, 59, 73, 71];

/** *********************************************************
 * 1. Basic Data Bind
 ********************************************************** */

// Basic Bind - Updates current elements
var austinTemps = [76, 59, 59, 73, 71];
d3.selectAll("#content").selectAll(".temps")
    .data(austinTemps)
    .style("height", function(d) {
      return d + "px";
    });


/** *********************************************************
 * 2. Updates only the new elements
 ********************************************************** */
// Enter - Updates New Elements
var austinTemps = [76, 59, 59, 73, 71];
d3.select("#content").selectAll(".temps")
    .data(austinTemps)
    .enter()
    .append("div")
    .classed("temps", true)
    .style("height", function(d) {
      return d + "px";
    });


/** *********************************************************
 * 3. Enter - Updates Only Old Elements
 ********************************************************** */
var austinTemps = [76, 59, 59, 73, 71];
var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps);

selection.enter()
    .append("div")
    .classed("temps", true);

selection.style("height", function(d) {
  return d + "px";
});


/** *********************************************************
 * 4. Enter - Updates All Elements
 ********************************************************** */
var austinTemps = [76, 59, 59, 73, 71];
var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps);

selection.enter()
    .append("div")
    .classed("temps", true)
    .merge(selection)
    .style("height", function(d) {
      return d + "px";
    });


/** *********************************************************
// 5. Exit Pattern
********************************************************** */
var austinTemps = [76];

var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps);

selection.enter()
    .append("div")
    .classed("temps", true)
    .merge(selection)
    .style("height", function(d) {
      return d + "px";
    });

selection.exit().remove();

/** *********************************************************
 * 6. Enter - Update - Exit Pattern Function
 * https://bl.ocks.org/mbostock/3808218
 ********************************************************** */

function update(data) {

  var selection = d3.select("#content").selectAll(".temps")
        .data(data);

  selection.enter()
        .append("div")
        .classed("temps", true)
        .merge(selection)
        .style("height", function(d) {
          return d + "px";
        });

  selection.exit().remove();
}

/* Test 1 */
var austinTemps = [100, 103, 105, 110, 100, 98];
update(austinTemps);

/* Test 2 */
austinTemps = [80];
update(austinTemps);
