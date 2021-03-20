// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/data.json").then((incomingData) => {
  function filterMovieRatings(movie) {
    return movie.imdbRating > 8.9;
  }

  // Use filter() to pass the function as its argument
  var filteredMovies = incomingData.filter(filterMovieRatings);

  //  Check to make sure your are filtering your movies.
  console.log(filteredMovies);

  // Use the map method with the arrow function to return all the filtered movie titles.
  var titles = filteredMovies.map(movies =>  movies.title);

  // Use the map method with the arrow function to return all the filtered movie metascores.
  var ratings = filteredMovies.map(movies => movies.metascore);

  // Check your filtered metascores.
  console.log(ratings);

  // Create your trace.
  var trace = {
    x: titles,
    y: ratings,
    type: "bar"
  };

  // Create the data array for our plot
  var data = [trace];

  // Define the plot layout
  var layout = {
    title: "The highest critically acclaimed movies.",
    xaxis: { title: "Title" },
    yaxis: { title: "Metascore (Critic) Rating"}
  };

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data, layout);
});
