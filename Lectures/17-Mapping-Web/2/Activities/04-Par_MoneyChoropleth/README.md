# LA Income Choropleth

## Instructions

* Over the course of this activity, you and your partner will be creating a choropleth map which will visualize the median household incomes of LA and surrounding counties.

  * A choropleth map is one in which areas are shaded or patterned in proportion to the statistical variable being represented.

  * The choropleth map provides an easy way to visualize how a measurement varies across a geographic area, showing the level of variability within a region.

* You and your partner will be using a new plugin called Leaflet-Choropleth to create this map which you can find [HERE](https://github.com/timwis/Leaflet-choropleth) in the "dist" folder of the repository.

* You will be working your way through this activity step-by-step with your partner and the class will reconvene after each step has been accomplished in order to review.

### Individual Steps

* **Step 1:** Grab all of the data with d3 and plot it on the map.

* **Step 2:** Download the Leaflet-Choropleth repository,`choropleth.js`, place it in your **js** folder, and uncomment the `<script type="text/javascript" src="static/js/choropleth.js"></script>` in your `index.html` file.

* **Step 3:** Using the Leaflet-Choropleth [documentation](https://github.com/timwis/leaflet-choropleth), create a new choropleth layer.

  * Make sure to change the `valueProperty` to the property that we wish our map to be based on.

  * Define an `onEachFeature` method that binds a popup containing the value of the feature to the layer.

* **Step 4:** Consult the examples and [Leaflet documentation](https://github.com/timwis/leaflet-choropleth/blob/gh-pages/examples/legend/) on how to add a legend.

  * Use `L.control` to add a control (and choose its position).

  * Use `L.DomUtil.create('div', 'info legend')` to create a `div` with the classes `info` & `legend`

  * Loop through the colors and values of your choropleth data and add them with `div.innerHTML`

  * Return div when done

### Hint

* As you examine the GeoJSON data, look for MHI2016 or Median Household Income 2016.

* The [colorbrewer2](http://colorbrewer2.org/) website provides color schemes (in hex values) that you can use to customize a choropleth map.
