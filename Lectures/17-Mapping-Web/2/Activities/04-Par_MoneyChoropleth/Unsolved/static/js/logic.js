// Creating map object
var myMap = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 8
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Load in GeoJson data
var geoData = "static/data/Median_Household_Income_2016.geojson";

var geojson;

// TODO:

// Grab data with d3

  // Create a new choropleth layer

    // Define what  property in the features to use

    // Set color scale

    // Number of breaks in step range

    // q for quartile, e for equidistant, k for k-means

    // Binding a pop-up to each layer

  // Set up the legend

    // Add min & max

  // Adding legend to the map
