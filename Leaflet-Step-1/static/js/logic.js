// Create map object and set default layers
var myMap = L.map("map", {
    center: [15, 20],
    zoom: 2
  });


// Define variables for our tile layers
var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(myMap);

function getColor(d) {
  return d < 1 ? '#a6d96a' :
         d < 2 ? '#d9ef8b' :
         d < 3 ? '#fed98e' :
         d < 4 ? '#fe9929' :
         d < 5 ? '#fb6a4a' :
                 '#ce1256';
}

// Store our API endpoint as queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
    var features = data.features;
    
    // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
    features.forEach(record =>{
      console.log("meg : "+record.properties.mag);
      if(record.geometry){
          // console.log([record.geometry.coordinates[1], record.geometry.coordinates[0]])
          var circle_layer = L.circle([record.geometry.coordinates[1], record.geometry.coordinates[0]], {
            color: getColor(record.properties.mag),
            fillColor: getColor(record.properties.mag),
            fillOpacity: 1,
            radius: record.properties.mag *20000
          }).addTo(myMap);
          // Binding a pop-up to each layer
          circle_layer.bindPopup(`${record.properties.title} <br>Time: ${new Date(record.properties.time).toLocaleString()}`)
          .addTo(myMap);
        }
      });


    // Set up the legend
    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function(myMap) {
      var div = L.DomUtil.create("div", "info legend");
      grades = [0,1,2,3,4,5],
      labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background-color:'
             + getColor(grades[i]) + 
             '"></i> ' +
            grades[i] + (grades[i+1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
  };


    // Adding legend to the map
    legend.addTo(myMap);

    })






