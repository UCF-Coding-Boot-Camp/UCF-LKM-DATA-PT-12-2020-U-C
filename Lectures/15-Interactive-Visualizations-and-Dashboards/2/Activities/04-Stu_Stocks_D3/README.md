# Stock Prices Time Series

In this activity, we will use a [Quandl API](https://www.quandl.com/) to fetch stock data and then build a time-series financial plot for the closing stock prices.

## Instructions

* Use the starter code provided and complete the function `buildPlots`.

* Use `Plotly.d3.json` to fetch data from the Quandl API. **Note:** If you haven't obtained a free API key yet, you'll need to register for a new account and add your API key to the URL.

```javascript
var api_key = YOUR_API_KEY
var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${api_key}`
```

* Use the `unpack` helper function to select the data that you need from the JSON response object. See comments in the starter code for additional documentation. See this [Plotly example](https://plot.ly/javascript/multiple-transforms/) as well for another example of its use.

* Use the code examples from the Plotly.js documentation to build your basic time series plot.

## Bonus

Add a [range slider](https://plotly.com/javascript/range-slider/) to the time series plot to dynamically select the view range.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
