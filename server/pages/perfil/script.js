let uid = document.getElementById("uid").value;
let propertys = [];
let div = document.getElementById("propsList")
let container = document.getElementById("alerta")
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
                        <button class="cardLink" onclick="confirmMesage(${prop.id})">Eliminar</button>
                    </div>
                </div>
            </div>`
}
function deleteProp(id) {
    fetch(`http://localhost/actions/delete_prop.php?id=${id}`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    window.location.reload();
}
function confirmMesage(id) {
    window.dialog.show({
        content: 'Seguro que quieres eliminar la publicación?',
        okText: 'Si',
        cancelText: 'No',
        onOk: () => { deleteProp(id) },
        onCancel: () => { return; }
      })
}  