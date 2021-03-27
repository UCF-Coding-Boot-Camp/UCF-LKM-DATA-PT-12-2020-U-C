var trace1 = {
  y: temps.newyork,
  name: "New York",
  type: "box",
  boxpoints: "all"
};

var trace2 = {
  y: temps.houston,
  name: "Houston",
  type: "box",
  boxpoints: "all"
};

var data = [trace1, trace2];

var layout = {
  title: "Temperature in New York and Houston, 2014-2015",
  yaxis: { title: "Degrees (F)"}
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
