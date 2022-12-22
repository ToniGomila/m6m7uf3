/*
<div class="rCard">
        <div class="wFull flex">
            <div class="wHalf">
                <h2>3000$</h2>
                <h3>Un título llamativo</h3>
            </div>
            <div class="wHalf smallImgContainer">
                <img src="../../assets/img/house.png" alt="">
            </div>
        </div>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum est eu mauris posuere, et feugiat ligula auctor. Aliquam sed pulvinar urna, ut vulputate mauris. Suspendisse potenti. Nulla facilisi. Phasellus eget luctus nisl. Proin magna lorem, tempor eu convallis non, lacinia in nibh. Vestibulum congue nulla elementum nisl cursus sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum est eu mauris posuere, et feugiat ligula auctor. Aliquam sed pulvinar urna, ut vulputate mauris. Suspendisse potenti. Nulla facilisi. Phasellus eget luctus nisl. Proin magna lorem, tempor eu convallis non, lacinia in nibh. Vestibulum congue nulla elementum nisl cursus sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum est eu mauris posuere, et feugiat ligula auctor. Aliquam sed pulvinar urna, ut vulputate mauris. Suspendisse potenti. Nulla facilisi. Phasellus eget luctus nisl. Proin magna lorem, tempor eu convallis non, lacinia in nibh. Vestibulum congue nulla elementum nisl cursus sagittis. </p>
        <div class="bMessage">
            <a href="" class="cardLink">Mas información</a>
        </div>
    </div>
</div>


*/
let propertys = [];
let div = document.getElementById("propsList")
fetch('../../actions/get_propertys.php')
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                div.innerHTML += mostraProp(element)
            });
        })
 function mostraProp(prop) {
    let type = "house";
    if(prop.cat == 1){type = "flat"}
    return `<div class="propCard">
                <div class="lCard">
                    <img class="cardImg" src="../../assets/uploads/${prop.img}" alt="">
                </div>
                <div class="rCard">
                    <div class="wFull flex">
                        <div class="wHalf">
                            <h2>${prop.price}$</h2>
                            <h3>${prop.title}</h3>
                            <p class="action">${prop.action}</p>
                        </div>
                        <div class="wHalf smallImgContainer">
                            <img src="../../assets/img/${type}.png" alt="">
                        </div>
                    </div>
                    <div class="text">${prop.description} </div>
                    <div class="bMessage">
                        <a href="../propierty/index.php?id=${prop.id}" class="cardLink">Mas información</a>
                    </div>
                </div>
            </div>`
 }       