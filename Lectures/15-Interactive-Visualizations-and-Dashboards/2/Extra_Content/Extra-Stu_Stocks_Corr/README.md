# Stock Time Series Rolling Correlation Plot

In this activity, we create a correlation plot between two stocks using a 10 day rolling correlation.

## Instructions

* Use the starter code provided and complete the function `rollingCorrelation`.

* The two arrays passed to this function will arrays of closing prices for both stocks.

* Inside the function, loop through both stock closing price arrays and calculate the correlation between the two for a sliding window of 10 days. This means that you first calculate the correlation for index positions 0-9 and push that into the `corrs` array. Then you loop and calculate the correlation for index positions 1-10 and push that value into the array. Continue until you have reached the end of your closing prices arrays.

* Use the simplestats correlation function to perform the correlation calculation. Push the result into a correlation array.

* Plot the correlation array.

- - -

### Copyright

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
