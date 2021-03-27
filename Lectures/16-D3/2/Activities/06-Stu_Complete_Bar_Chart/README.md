# Complete Bar Chart

## Instructions

* From the command line, start a Python server to serve the csv and web files: `python -m http.server`

* Load the data from the `hours-of-tv-watched.csv` using `d3.csv`.

Within the `d3.csv` method callback, do the following:

* Cast the hours as numbers.

* Create scale functions for your x and y values.

* Create functions to generate your x and y axes.

* Render your axes to the page.

* Render rectangles to the page to create your bar chart and give them hover effects.

## Hints

* Use prior activities for reference.

* Checkout this reference material on [D3 Scales](http://d3indepth.com/scales/).

* See this example of create [D3 Band Scales & Bottom Axes](https://bl.ocks.org/biovisualize/9c0d30d0539914ecdb15). Remember that the domain and range must both be arrays.

* For assistance with axis creation with D3, see the [d3-axis documentation](https://github.com/d3/d3-axis).
