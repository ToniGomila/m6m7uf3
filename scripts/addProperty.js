let files = [];
let dropArea = document.getElementById("dArea");
let dragDropText = document.getElementById("dropMsg");
let dragDropBut = document.getElementById("dropBut");
let input = document.getElementById("input-file");
let preview = document.getElementById("preview");
let str = "";

//prevents default
const prevDefault = function prevDefault(e) {
    e.preventDefault();
}
let arr = ["dragover", "dragleave", "drop"];
arr.forEach(element => dropArea.addEventListener(element, prevDefault));
//al arrosegar fitxer canvi estat
dropArea.addEventListener("dragover", function () {
    dragDropText.innerText = "Drop to upload";
    dropArea.classList.add("active");
});
//torna estat al sortir
dropArea.addEventListener("dragleave", function () {
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove("active");
});
//si fitxer entra
dropArea.addEventListener("drop", (event) => {
    //recull fitxers, proces i afegeix a l'array
    files = files.concat(checkInput(Array.from(event.dataTransfer.files)));
    //mostra fitxers
    showFiles();
    //torna estat original div
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove("active");
});
//retorna array amb fitxers valids
function checkInput(inputFiles) {
    for (let index = 0; index < inputFiles.length; index++) {
        console.log("\t entra a procesa");
        inputFiles[index] = processFile(inputFiles[index]);
    }
    return inputFiles.filter(element => {
        return element !== null;
    });
}

//comprova un fitxer
function processFile(file) {
    const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"]
    const docType = file.type;
    if (validExtensions.includes(docType)) {
        console.log("Añadido " + file.name);
        return file;
    }
    alert("Eliminado " + file.name + "\nSolo se aceptan imagenes.");
    return null;
}

function showFiles() {
    console.table(files)
    preview.innerHTML = "";
    console.log(files);

    for (let index = 0; index < files.length; index++) {
        insertPreview(files[index], index);   
    }
}
function insertPreview(file, index) {
    console.log("--- " + file.name)
    let name = file.name;
    let reader = new FileReader();
    reader.addEventListener("load", function () {
        let img = reader.result;
        //console.log(img);
        let strs = `<div class="previewImage">
                    <img src="${reader.result}"/>
                    <span>${name}</span>
                    <span onclick="remove(${index})" class="material-symbols-outlined removeBtn">X</span>
                </div>`;
        console.log(strs);
        preview.innerHTML += strs;
    });
    reader.readAsDataURL(file);
}
function remove(i) {
    files.splice(i, 1);
    showFiles();
}
dragDropBut.addEventListener("click", (e) => {
    e.preventDefault();
    input.click();
});

input.addEventListener("change", function(e){
    //recull fitxers, proces i afegeix a l'array
    console.log("asdf");
    files = files.concat(checkInput(Array.from(input.files)));
    //mostra fitxers
    showFiles();

});
/*
Quan acceptem la selecció d’arxius s’executarà un canvi en l’element. 
Per tant hem de definir la funció que detecti aquest moment per mostrar els nous fitxers

Per recollir els arxius afegits a l’input farem input.files
Tingues en compte que has de fer els mateixos passos que al punt 6, és a dir, concatenar els resultats i 
cridar a la funció showFiles()
!!!Ves amb compte amb el div preview


document.getElementById("input-file").addEventListener("change", function(e){
    
});*/