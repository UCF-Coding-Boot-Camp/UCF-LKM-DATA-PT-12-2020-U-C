# Other Markers

In this activity we will explore various types of vector shapes that can be used as markers in Leaflet.

## Instructions

1. Open [index.html](Solved/index.html) in your browser and notice the 4 custom markers:

   1. A line

   2. A circle

   3. A triangle

   4. A rectangle

2. Now open the [logic.js](Solved/logic.js) file and notice how we create a circle vector layer using the `L.circle` method.

   Similar to how we created regular markers with the `L.marker` method, we pass in two arguments into `L.circle`:

   1. The coordinates for where to place the circle layer.

   2. Some initial options for the circle vector layer. In this example, the following are being used:

      1. `color`

      2. `fillColor`

      3. `fillOpacity`

      4. `radius`

3. We repeat this process for the triangle using `L.polygon`, which takes in a two-dimensional array of coordinates to represent each of the triangle's points, and again for the line using the `L.polyline` method, and the rectangle using `L.rectangle`.

## Hint

* See Leaflet's docs for [Path Options](http://leafletjs.com/reference.html#path)
