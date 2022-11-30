const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;

CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
    projection: L.Projection.LonLat,
    scale: function(zoom) {

        return Math.pow(2, zoom);
    },
    zoom: function(sc) {

        return Math.log(sc) / 0.6931471805599453;
    },
	distance: function(pos1, pos2) {
        var x_difference = pos2.lng - pos1.lng;
        var y_difference = pos2.lat - pos1.lat;
        return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
    },
	transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
    infinite: true
});

var SateliteStyle = L.tileLayer('/tmp/mapStyles/styleSatelite/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 8,noWrap: true,continuousWorld: false,attribution: 'San Andreas map',id: 'SateliteStyle map',}),
	AtlasStyle	= L.tileLayer('/tmp/mapStyles/styleAtlas/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'San Andreas map',id: 'styleAtlas map',}),
	GridStyle	= L.tileLayer('/tmp/mapStyles/styleGrid/{z}/{x}/{y}.png', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'San Andreas map',id: 'styleGrid map',});

var ExampleGroup = L.layerGroup();

var mymap = L.map('map', {
    crs: CUSTOM_CRS,
    minZoom: 2,
    maxZoom: 5,
    Zoom: 5,
    maxNativeZoom: 5,
    preferCanvas: true,
    layers: [SateliteStyle],
    center: [0, 0],
    zoom: 3,
});

var layersControl = L.control.layers({ "Satelite": SateliteStyle,"Atlas": AtlasStyle,"Grid":GridStyle}).addTo(mymap);


function customIcon(icon){
	return L.icon({
		iconUrl: `blips/${icon}.png`,
		iconSize:     [20, 20],
		iconAnchor:   [20, 20], 
		popupAnchor:  [-10, -27]
	});
}

mymap.on('zoomend', function(e) {
    console.log("olaaaaaaaaaaaaaaaa");
    console.log(mymap.getZoom());
});
mymap.on('click', function(e) {
    console.log("clickaaaaaaa");
    console.log(e.latlng);
    document.getElementById("savedPos").value = JSON.stringify(e.latlng);
    let latt = e.latlng.lat;
    let long = e.latlng.lng;
    let popup = L.popup()
        .setLatLng([latt, long])
        .setContent("<p class='popup'>Tu casa.</p>")
        .openOn(mymap);
});