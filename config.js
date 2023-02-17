var config = {
	"requireArcGISLogin": false, // Does the user need to log in to ArcGIS Online or ArcGIS Server?
	"tokenUrl": 'https://www.arcgis.com/sharing/generateToken', // ArcGIS token generation URL

	"title": "Brisbane PMD Speed Map",
	"start": {
		// "maxZoom": 16,
		"center": [-27.4705409,153.0424805],
		"zoom": 12,
		"attributionControl": true,
		"zoomControl": false
	},
	"about": {
		"title": "Brisbane PMD Speed Map",
		"contents": "<p>This is an open-source version of the excellent <a href='https://github.com/bmcbride/bootleaf'>Bootleaf map </a>started by Bryan McBride.</p><p>It's designed for rapid web map development. See <a href='https://github.com/iag-geo/bootleaf'>https://github.com/iag-geo/bootleaf</a> for more information.</p><p>Chage this message in the config file</p>"
	},
	"controls": {
		"zoom": {
			"position": "topleft"
		},
		"leafletGeocoder": {
			//https://github.com/perliedman/leaflet-control-geocoder
			"collapsed": false,
			"position": "topleft",
			"placeholder": "Search for a location",
			"type": "OpenStreetMap", // OpenStreetMap, Google, ArcGIS
			"suffix": "Australia", // optional keyword to append to every search
			//"key": "AIzaS....sbW_E", // when using the Google geocoder, include your Google Maps API key (https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
		},
		"TOC": {
			//https://leafletjs.com/reference-1.0.2.html#control-layers-option
			"collapsed": false,
			"uncategorisedLabel": "Layers",
			"position": "topright",
			"toggleAll": true
		},
	},

	"activeTool": "queryWidget", // options are identify/coordinates/queryWidget
	"basemaps": ['OpenStreetMap', 'esriGray', 'esriDarkGray', 'esriStreets',"Aerial"],
	"bing_key": "enter your Bing Maps key",
	"mapboxKey": "enter your MapBox key",
	// "defaultIcon": {
	// 	"imagePath": "https://leafletjs.com/examples/custom-icons/",
	// 	"iconUrl": "leaf-green.png",
	// 	"shadowUrl": "leaf-shadow.png",
	// 	"iconSize":     [38, 95],
	// 		"shadowSize":   [50, 64],
	// 		"iconAnchor":   [22, 94],
	// 		"shadowAnchor": [4, 62],
	// 		"popupAnchor":  [-3, -76]
	// },
	"tocCategories": [
		{
			"name": "10kmh Zones",
			"layers": ["shared_path_10kmh", "shared_zone_10kmh"]
		},
		{
			"name": "12kmh Zones",
			"layers" : ["shared_pathway_12kmh", "shared_path_12kmh"]
		},
		{
			"name": "20kmh Zones",
			"layers" : ["separated_pathway_20kmh"]
		},
		{
			"name": "25kmh Zones",
			"layers" : ["separated_pathway_25kmh"]
		},

	],
	"highlightStyle": {
		"weight": 2,
		"opacity": 1,
		"color": 'white',
		"dashArray": '3',
		"fillOpacity": 0.5,
		"fillColor": '#E31A1C',
		"stroke": true
	},
	"layers": [
	{
    "id": "shared_path_10kmh",
    "name": "Shared Path",
    "type": "geoJSON",
    "cluster": false,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/geojson/10/SHARED_PATHWAY.geojson",
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 1,
    "weight": 5,
    "opacity": 0.5,
    "color": '#FFFF00',
    },
	  "visible": true,
	  // "label": {
	  // 	"name": "NAME",
	  // 	"minZoom": 14
	  // }
	},
	{
    "id": "shared_zone_10kmh",
    "name": "Shared Zone",
    "type": "geoJSON",
    "cluster": false,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/geojson/10/SHARED_ZONE.geojson",
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 1,
    "weight": 5,
    "opacity": 0.5,
    "color": '#FFFF00',
    },
	  "visible": true,
	  // "label": {
	  // 	"name": "NAME",
	  // 	"minZoom": 14
	  // }
	},	
	{
    "id": "shared_path_12kmh",
    "name": "Shared Path",
    "type": "geoJSON",
    "cluster": false,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/geojson/12/SHARED_PATH.geojson",
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 1,
    "weight": 5,
    "opacity": 0.5,
    "color": '#FFFF00',
    },
	  "visible": true,
	  // "label": {
	  // 	"name": "NAME",
	  // 	"minZoom": 14
	  // }
	},
	{
    "id": "shared_pathway_12kmh",
    "name": "Shared Pathway",
    "type": "geoJSON",
    "cluster": false,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/geojson/12/SHARED_PATHWAY.geojson",
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 1,
    "weight": 5,
    "opacity": 0.5,
    "color": '#FFFF00',
    },
	  "visible": true,
	  // "label": {
	  // 	"name": "NAME",
	  // 	"minZoom": 14
	  // }
	},	
	{		
    "id": "separated_pathway_20kmh",
    "name": "Separated Pathway",
    "type": "geoJSON",
    "cluster": false,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/geojson/20/SEPARATED_PATHWAY.geojson",
    "icon": {
        "iconUrl": "./img/theater.png",
        "iconSize": [24,28]
    },    
    "style": {
    "stroke": true,
    "fillColor": "#00FFFF",
    "fillOpacity": 0.5,
    "radius": 1,
    "weight": 5,
    "opacity": 0.5,
    "color": '#0000FF',
    },
	  "visible": true,
	  // "label": {
	  // 	"name": "NAME",
	  // 	"minZoom": 14
	  // }
	},
	{		
    "id": "separated_pathway_25kmh",
    "name": "Separated Pathway",
    "type": "geoJSON",
    "cluster": false,
    "showCoverageOnHover": false,
    "minZoom": 12,
    "url": "./data/geojson/25/SEPARATED_PATHWAY.geojson",
    "style": {
    "stroke": true,
    "fillColor": "#00FF00",
    "fillOpacity": 0.5,
    "radius": 1,
    "weight": 5,
    "opacity": 0.5,
    "color": '#00FF00',
    },
	  "visible": true,
	  // "label": {
	  // 	"name": "NAME",
	  // 	"minZoom": 14
	  // }
	},	
	]
}
