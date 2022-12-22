var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const param = urlParams.get('id')

let div = document.getElementById("formatContainer")
fetch(`http://localhost/actions/get_property.php?id=${param}`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            div.innerHTML += formatProp(element)
        });
    })



function formatProp(prop) {
    let type = "house";
    if (prop.cat == 1) { type = "flat" }
    let format = `
    <div class="imgContainer mySwiper">
            <div class="swiper-wrapper">`;

    format += `<img src="http://localhost/assets/uploads/${prop.headImg}" class="swiper-slide">`;

    for (let index = 0; index < prop.imgs.length; index++) {
        format += `
        <img src="http://localhost/assets/uploads/${prop.imgs[index]}" class="swiper-slide">`;
    }

    format +=
        `<div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div class="rCard">
            <div class="w-full flex">
                <div class="w-half  defaultContainer fieldsContainer">
                    <div>
                        <h2>${prop.price}</h2>
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