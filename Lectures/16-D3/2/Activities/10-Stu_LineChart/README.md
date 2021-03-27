# Line Chart

Create a line chart to demonstrate the number of miles per month the user of a fitness application has walked since they started using the app.

## Instructions

1. Take a moment to study the new data set `miles-walked-this-month.csv`.

2. Define the dimensions for chartWidth and chartHeight.

3. Append an SVG to the body, and then append a group element to it and translate it to adhere to the margins.

4. Load the data from the CSV.  Remember that you will need to run a server to check your page.

5. Use the `d3.timeParse` method in order to create a new function to parse the month from the CSV data and save the function to a variable.  You will need to pass the `%B` token as an argument into the `d3.timeParse` method in order to properly configure the new function to create a `Date` object from a string month.

6. Run a `forEach` loop on the `milesData`. Cast the `miles` property of each element in the `milesData` array to a number. Use the time parser function created in the last step to convert the `month` for each element into a `Date` object.

7. Configure your x and y scales as `xTimeScale` and `yLinearScale`.

8. Create your axes generator functions.

9. Run the `d3.line` method to create and save a new line generator function. Configure this function to plot the x-axis using `xTimeScale` function, passing in the `date` value for each element in the data set. Then, configure this function to plot the y-axis using the `yLinearScale` function, passing in the `miles` property for each element in the data set.

10. Append an SVG `path` to the SVG group element. Set the `d` attribute of the new SVG `path` using the line generator function created in the last step. Pass `milesData` into the line generator as an argument.  Give this element a class of "line".

11. Append two `<g>` elements and use the axes generator functions you created in step 7 to append an axis to each.  Make sure to place these elements to correctly display your axes.

## Hints

* See D3 documentation for [local.parse](https://github.com/d3/d3-time-format/blob/master/README.md#locale_parse) to better understand the `d3.timeParse` method.

* See D3 documentation for [local.format](https://github.com/d3/d3-time-format/blob/master/README.md#locale_format) to better understand the tokens used with the `d3.timeParse` method.

* See D3 documentation for [d3.line](https://github.com/d3/d3-shape#line) to better understand the steps for creating a line generator function.

* Check out a [basic line chart example](https://bl.ocks.org/mbostock/3883245) made by D3 creator, Mike Bostock.

* Check the browser often, print any values you're unsure about to the console.
