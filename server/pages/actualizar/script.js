/*
MAPA
*/
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

var SateliteStyle = L.tileLayer('/assets/map/mapStyles/styleSatelite/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 8,noWrap: true,continuousWorld: false,attribution: 'San Andreas map',id: 'SateliteStyle map',}),
	AtlasStyle	= L.tileLayer('/assets/map/mapStyles/styleAtlas/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'San Andreas map',id: 'styleAtlas map',}),
	GridStyle	= L.tileLayer('/assets/map/mapStyles/styleGrid/{z}/{x}/{y}.png', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'San Andreas map',id: 'styleGrid map',});

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
		iconUrl: `/assets/map/blips/${icon}.png`,
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

function setMap(pos) {
    position = JSON.parse(pos)
    let popup = L.popup()
        .setLatLng(position)
        .setContent("<p class='popup'>Ubicación</p>")
        .openOn(mymap);
        document.getElementById("savedPos").value = pos;
}

/*---------------
    CARGA PRINCIPAL
 ----------------*/

 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const param = urlParams.get('id')
 document.getElementById("id").value = param;
 let title = document.getElementById("propTitle");
 let price = document.getElementById("descTMP");
 
 fetch(`http://localhost/actions/get_property.php?id=${param}`)
     .then((response) => response.json())
     .then((data) => {
         console.log(data);
 
         title.value = data.title;
         price.value = data.price;
         editor(data.description)
         cargarPrimerSelect()
         setType(data.action)
         setMap(data.pos)
     })

/*-----------------------------------------------
    BUTTONS FUNCITONS
  -----------------------------------------------*/
let inAccion = document.getElementById("accion");
let butVender = document.getElementById("vender");
let butAlquilar = document.getElementById("alquilar");
butVender.addEventListener("click", function (event) {
    event.preventDefault();
    vender();
});
butAlquilar.addEventListener("click", function (event) {
    event.preventDefault();
    alquilar();
});
function vender() {
    butVender.classList.add("selectedOption");
    butAlquilar.classList.remove("selectedOption");
    inAccion.value = "Venta";
}
function alquilar() {
    butVender.classList.remove("selectedOption");
    butAlquilar.classList.add("selectedOption");
    inAccion.value = "Alquiler";
}
function setType(action) {
    if (action == "Venta") {
        vender()
    }else{
        alquilar()
    }
}
/*
EDITOR DE TEXTO
*/

async function editor(content) {
    await tinymce.init({
        selector: 'textarea#menubar',
        menubar: 'file edit view'
    });
    tinymce.get("menubar").setContent(content);
}

/* ------------------------------------------------
    SELECT MULTIPLE
    -----------------------------------------------*/
let first = document.getElementById("cats");

first.addEventListener("change", function () {
    cargarSegundoSelect(first.value)
    if (first.value == 1) {
        document.getElementById("dLogo").src = "https://cdn-icons-png.flaticon.com/512/916/916771.png";
    } else {
        document.getElementById("dLogo").src = "https://cdn-icons-png.flaticon.com/512/263/263115.png";
    }
})

async function cargarPrimerSelect() {
    fetch("http://localhost/actions/get_cat.php")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                let opt = document.createElement('option');
                opt.value = element.id;
                opt.innerText = element.s_name;
                first.appendChild(opt);
            });
            cargarSegundoSelect(first.value)
        })
        .catch((error) => { });
}
let subcat = document.getElementById("subcat")
function cargarSegundoSelect(val) {
    subcat.innerHTML = "";
    fetch(`http://localhost/actions/get_subcat.php?id=${val}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("olaa segoon");
            data.forEach(element => {
                let opt = document.createElement('option');
                opt.value = element.id;
                opt.innerText = element.sName;
                subcat.appendChild(opt);
            });
        })
}

/* FOMR CONTROLS */
let sendForm = document.getElementById("send");
sendForm.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("mainForm").submit();
});
