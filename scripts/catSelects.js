let formData = new FormData();
formData.append("cat1", this.value);

let options = {method: 'GET'}


fetch("../actions/getCat.php", options)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            let opt = document.createElement('option');
            opt.value= element.id;
            opt.innerText = element.s_name;
            document.getElementById("cats").appendChild(opt);
        });
        cargarSegundoSelect()
    })
    .catch((error) => {});

    export function cargarSegundoSelect(val){
        document.getElementById("subcat").innerHTML = "";
        fetch(`../actions/getSubcat.php?id=${val}`, options)
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