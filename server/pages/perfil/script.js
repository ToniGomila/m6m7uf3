let uid = document.getElementById("uid").value;
let propertys = [];
let div = document.getElementById("propsList")
console.log(`../../actions/get_user_propertys.php?uid=${uid}`);
fetch(`../../actions/get_user_propertys.php?uid=${uid}`)
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
                        <a href="../propierty/index.php?id=${prop.id}" class="cardLink">Modificar</a>
                        <a href="../propierty/index.php?id=${prop.id}" class="cardLink">Eliminar</a>
                    </div>
                </div>
            </div>`
 }  