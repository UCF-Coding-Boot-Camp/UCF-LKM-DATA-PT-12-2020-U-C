# Complete Bar Chart

In this activity, we will utilize the data retrieved from `hours-of-tv-watched.csv` in order to create a bar chart.

## Instructions

* First, take a few minutes to review the code and discuss what you need to do with a partner.

* Organize the provided files in a folder, open the folder, and start the server. All code which you will write will be inside of the callback method passed into `d3.csv`.

* Using `chartGroup`, select all of the elements inside with a class of `bar` and bind the `tvData` data to the selection.

* Still chaining to the code written in the previous step, run the `.enter()` method and append a `rect` with a class of `bar` for each element in the array.

* Set the `width` property of each rectangle to `barWidth`.

* Set the `height` property of each rectangle using a callback function, which is passed the data bound to the rectangle.  Scale the height of the rectangle by the value of `Yscale`.

* Set the `x` attribute of each rectangle using a callback function which is passed the data bound to the rectangle.  Space the rectangles by the value of 'barSpacing\`.

* Set the `y` attribute of each rectangle using a callback function which is passed the data bound to the rectangle.  Remember to invert your y values using the chartHeight so that the bar chart is right-side-up.

## Hints

* For assistance understanding data joins with D3, see [this article](https://bost.ocks.org/mike/join/) written by Mike Bostock, the creator of D3.

* For more information on transformations with SVG files, see this [Tutorial on Basic Transformations](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations).
