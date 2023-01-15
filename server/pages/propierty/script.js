

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const param = urlParams.get('id')

let div = document.getElementById("formatContainer")
fetch(`http://localhost/actions/get_property.php?id=${param}`)
    .then((response) => response.json())
    .then((data) => {
        console.log("h");
        console.log(data);
        div.innerHTML += formatProp(data)

        let swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true
        });
        mapInit(data.pos)
    })

reinitSwiper(swiper)


function formatProp(prop) {
    let type = "house";
    if (prop.cat == 1) { type = "flat" }
    let format = `
    <div class="mySwiper imgContainer">
        <div class="swiper-wrapper">`;
    for (let index = 0; index < prop.imgs.length; index++) {
        format += `
        <div class="swiper-slide"><img src="http://localhost/assets/uploads/${prop.imgs[index]}" class="swiper-slide"></div>
        `;
    }

    format +=
        `</div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
        <div class="rCard">
            <div class="w-full flex">
                <div class="w-half  defaultContainer fieldsContainer">
                    <div>
                        <h2>${prop.price}$</h2>
                        <h3>${prop.title}</h3>
                    </div>
                    <p class="action">${prop.action}</p>
                </div>
                <div class="w-half smallImgContainer defaultContainer">
                    <img class="typeImg" src="http://localhost/assets/img/${type}.png" alt="">
                </div>
            </div>
            <div class="defaultContainer">${prop.description} </div>
        </div>`;
    return format;
}
function mapInit(pos) {
    position = JSON.parse(pos)
    console.log(position);
    const center_x = 117.3;
    const center_y = 172.8;
    const scale_x = 0.02072;
    const scale_y = 0.0205;

    CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
        projection: L.Projection.LonLat,
        scale: function (zoom) {

            return Math.pow(2, zoom);
        },
        zoom: function (sc) {

            return Math.log(sc) / 0.6931471805599453;
        },
        distance: function (pos1, pos2) {
            var x_difference = pos2.lng - pos1.lng;
            var y_difference = pos2.lat - pos1.lat;
            return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
        },
        transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
        infinite: true
    });

    var SateliteStyle = L.tileLayer('/assets/map/mapStyles/styleSatelite/{z}/{x}/{y}.jpg', { minZoom: 0, maxZoom: 8, noWrap: true, continuousWorld: false, attribution: 'San Andreas map', id: 'SateliteStyle map', }),
        AtlasStyle = L.tileLayer('/assets/map/mapStyles/styleAtlas/{z}/{x}/{y}.jpg', { minZoom: 0, maxZoom: 5, noWrap: true, continuousWorld: false, attribution: 'San Andreas map', id: 'styleAtlas map', }),
        GridStyle = L.tileLayer('/assets/map/mapStyles/styleGrid/{z}/{x}/{y}.png', { minZoom: 0, maxZoom: 5, noWrap: true, continuousWorld: false, attribution: 'San Andreas map', id: 'styleGrid map', });

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

    var layersControl = L.control.layers({ "Satelite": SateliteStyle, "Atlas": AtlasStyle, "Grid": GridStyle }).addTo(mymap);

    let popup = L.popup()
        .setLatLng(position)
        .setContent("<p class='popup'>Ubicacion</p>")
        .openOn(mymap);
}
