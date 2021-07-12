
# Visualizing Data with Leaflet
![Satellite View](images/SatelliteView.png)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Intro](#Project-Intro)
- [Structure](#Project-Structure)
- [Setup](#Setup)
- [Instructions](#instructions)
- [Datasets](#Datasets)
- [Analysis](#Analysis)

# Project Intro
This Project ais about providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change.
This tool can allow scientists visualize their earthquake data. They collect a massive amount of data from all over the world each day and this data will be dispalyed using this tool.
The USGS provides earthquake data in a number of different formats, updated every 5 minutes. For more information about USGS, visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) The data set used for this project is 'All Earthquakes from the Past 7 Days'. It comes in a JSON representation of that data. The URL of this JSON is used to pull in the data for the visualization.


   ![JSON](Images/JSON.png)


The map on the page use Leaflet that plots all of the earthquakes from the USGS data set based on their longitude and latitude. The magnitude of the earthquake has impact in the size and color of the circles representing the earthquakes on the map. Earthquakes with higher magnitudes will appear larger and darker in color. Besides that, there are popups that provide additional information about the earthquake when a circle marker is clicked. The map also consist of a a legend that provides context for the map data. Three map styles are available for the user to switch between. Both the earthquake and fault lines layers can additionally be toggled on and off.

![Grayscale View](images/GrayScaleView.png)

![Outdoor View](images/OutdoorView.png)


# Structure
```
 
leaflet-challenge   
|  
|    
|__ index.html                          # landing html page
|__ README.md                           # read me file
|
|__ static/                              
|   |__css/                             # Directory for css stylesheets
|   |  |__ style.css                              
|   |
|   |__data/                            # Directory for the data files
|   |  |__ PB2002_boundaries.json       # Tectonic plate geojson
|   | 
|   |__js/                              # Directory for javscript code
|      |__ logic.js                     # Primary javascript code for site
|      |__ config.js                    # Mapbox API key needs to be inserted here
|      
|__ Images/                             # Directory for the Image files
    |__GrayScaleView.png
    |__ Json.png
    |__ OutdoorView.png
    |__ SatelliteView.png                        

```

# Setup
This requires a Mapbox API key, which should be located in the config.js file. Only after this step,the index.html can show the map in it.



# Datasets
| # | Source | Link |
|-|-|-|
| 1 | USGS GeoJSON Summary | [https://github.com/fraxen/tectonicplates](https://github.com/fraxen/tectonicplates) |
| 2 | Tectonic Plates GeoJson | [https://github.com/fraxen/tectonicplates](https://github.com/fraxen/tectonicplates)|


# Contributors
- [Helen Amin](https://github.com/helenamin)