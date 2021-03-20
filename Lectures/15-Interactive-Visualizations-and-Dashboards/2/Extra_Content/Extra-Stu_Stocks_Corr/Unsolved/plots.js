/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Calculate a rolling correlation for two arrays
function rollingCorrelation(arr1, arr2, windowPeriod = 10) {
  // @TODO: YOUR CODE HERE
}

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  Plotly.d3.event.preventDefault();

  // Select the input value from the form
  var stock1 = Plotly.d3.select("#stockInput1").node().value;
  var stock2 = Plotly.d3.select("#stockInput2").node().value;

  // clear the input value
  Plotly.d3.select("#stockInput1").node().value = "";
  Plotly.d3.select("#stockInput2").node().value = "";

  // Build the plot with the new stock
  buildPlot(stock1, stock2);
}

function buildPlot(stock1, stock2) {
  var apiKey = "YOUR KEY HERE";
  var url1 = `https://www.quandl.com/api/v3/datasets/WIKI/${stock1}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;
  var url2 = `https://www.quandl.com/api/v3/datasets/WIKI/${stock2}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  Plotly.d3.json(url1, function(err1, response1) {

    if (err1) return console.warn(err1);

    Plotly.d3.json(url2, function(err2, response2) {
      if (err2) return console.warn(err2);

      // Grab values from the response json object to build the plots
      var name1 = response1.dataset.name;
      var name2 = response2.dataset.name;
      var stock1 = response1.dataset.dataset_code;
      var stock2 = response2.dataset.dataset_code;
      var dates = unpack(response1.dataset.data, 0);
      var closingPrices1 = unpack(response1.dataset.data, 1);
      var closingPrices2 = unpack(response2.dataset.data, 1);

      var period = 10;
      var corrs = rollingCorrelation(closingPrices1, closingPrices2, period);
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: `${name1} vs ${name2}`,
        x: dates.slice(period),
        y: corrs,
        line: {
          color: "#17BECF"
        }
      };

      var data = [trace1];

      var layout = {
        title: `${stock1} ${stock2} Correlation Plot`,
        xaxis: {
          type: "date"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };

      Plotly.newPlot("plot", data, layout);

    });

  });
}

// Add event listener for submit button
Plotly.d3.select("#submit").on("click", handleSubmit);
