// Create map object and set default layers
var myMap = L.map("map", {
    center: [15, 20],
    zoom: 3
  });


// Define variables for our tile layers
var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(myMap);

// Store our API endpoint as queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
    var features = data.features;
    
    // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
    features.forEach(record =>{
      if(record.geometry){
          console.log([record.geometry.coordinates[1], record.geometry.coordinates[1]])
          L.circle([record.geometry.coordinates[1], record.geometry.coordinates[1]], {
            color: "green",
            fillColor: "green",
            fillOpacity: 0.5,
            radius: 100000
          })
          .addTo(myMap);
        }

      });
})
