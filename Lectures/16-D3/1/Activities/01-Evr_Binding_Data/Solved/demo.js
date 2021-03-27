// 1-.each()
d3.select("ul").selectAll("li");

d3.select("ul").selectAll("li")
    .each(function(d, i) {
      console.log("element", this);
      console.log("data", d);
      console.log("index", i);
    });


// 2-.data()
// Access elements' data
// returns an array of undefined items
d3.select("ul").selectAll("li").data();

// Assign data to elements in the selector object
// not enough
var arr = [50, 55];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();

// just right
var arr = [50, 55, 53];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();

// too many
var arr = [50, 55, 53, 56, 68];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();

// trying to reassign with not enough
var arr = [1, 2];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();


// 3-Multiple Methods
var arr = [50, 55, 53];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
      return d;
    });

// Modify the returned data
d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
      return d + 1000;
    });


// 4-.enter()
// New data points are ignored here
var arr = [50, 55, 53, 56, 68];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
      return d;
    });

// append affects existing elements = FAIL!
var arr = [50, 55, 53, 56, 68];
d3.select("ul").selectAll("li")
    .data(arr)
    .append("li")
    .text(function(d) {
      return d;
    });

// Use `enter` to create new elements
var arr = [50, 55, 53, 56, 68];
// First, update existing elements
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .text(function(d) {
      return d;
    });

// Second, create new elements for extra data points
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .enter()
    .append("li")
    .text(function(d) {
      return d;
    });


// 5-.exit()
// Finally, what if we remove an item?
var arr = [50, 55];
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .exit()
    .remove();
