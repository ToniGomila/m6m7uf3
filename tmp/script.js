let formData = new FormData();
formData.append("cat1", this.value);
let atento = document.getElementById("cats");

let options = {method: 'GET'}


fetch("../actions/getCat.php", options)
    .then((response) => response.json())
    .then((data) => {
        console.table(data);
        data.forEach(element => {
            let opt = document.createElement('option');
            opt.value= element.id;
            opt.innerText = element.s_name;
            document.getElementById("cats").appendChild(opt);
        });
        cargarSegundoSelect()
    })
    .catch((error) => {});

function cargarSegundoSelect(){
    document.getElementById("subcat").innerHTML = "";
    fetch(`../actions/getSubcat.php?id=${atento.value}`, options)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            let opt = document.createElement('option');
            opt.value= element.id;
            opt.innerText = element.sName;
            document.getElementById("subcat").appendChild(opt);
        });
    })
}
atento.addEventListener("change", function(){
    cargarSegundoSelect()})

