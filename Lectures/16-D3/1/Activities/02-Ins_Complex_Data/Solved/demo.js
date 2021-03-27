var complexData = [{
  title: "javascript",
  url: "https://media.giphy.com/media/10bdAP4IOmoN7G/giphy.gif"
},
{
  title: "python",
  url: "https://media.giphy.com/media/2yP1jNgjNAkvu/giphy.gif"
},
{
  title: "css",
  url: "https://media.giphy.com/media/TsxMkIKHpvFaU/giphy.gif"
}
];

d3.select(".img-gallery").selectAll("div")
  .data(complexData)
  .enter() // creates placeholder for new data
  .append("div") // appends a div to placeholder
  .classed("col-md-4 thumbnail", true) // sets the class of the new div
  .html(function(d) {
    return `<img src="${d.url}">`;
  }); // sets the html in the div to an image tag with the link
