
let filesGallery = [];
let headFile;
let dropArea = document.getElementById("dArea");
let dragDropText = document.getElementById("dropMsg");
let dragDropBut = document.getElementById("dropBut");
let input = document.getElementById("input-file");
let preview = document.getElementById("preview");

let headDropArea = document.getElementById("headArea");
let headDragDropText = document.getElementById("headMsg");
let headDragDropBut = document.getElementById("headDropBut");
let headInput = document.getElementById("head-input-file");
let headPreview = document.getElementById("headPreview");

let str = "";

//prevents default
const prevDefault = function prevDefault(e) {
    e.preventDefault();
}
let arr = ["dragover", "dragleave", "drop"];
arr.forEach(element => dropArea.addEventListener(element, prevDefault));
arr.forEach(element => headDropArea.addEventListener(element, prevDefault));
//al arrosegar fitxer canvi estat
dropArea.addEventListener("dragover", function () {
    dragDropText.innerText = "Drop to upload";
    dropArea.classList.add("active");
});
headDropArea.addEventListener("dragover", function () {
    headDragDropText.innerText = "Drop to upload";
    headDropArea.classList.add("active");
});
//torna estat al sortir
dropArea.addEventListener("dragleave", function () {
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove("active");
});
headDropArea.addEventListener("dragleave", function () {
    headDragDropText.innerText = "Drag & Drop files";
    headDropArea.classList.remove("active");
});
//si fitxer entra
dropArea.addEventListener("drop", (event) => {
    //recull fitxers, proces i afegeix a l'array
    filesGallery = filesGallery.concat(checkInput(Array.from(event.dataTransfer.files)));
    //mostra fitxers
    //preview = document.getElementById("preview");
    showFiles();
    //torna estat original div
    dragDropText.innerText = "Drag & Drop files";
    dropArea.classList.remove("active");
});
headDropArea.addEventListener("drop", (event) => {
    //recull fitxers, proces i afegeix a l'array
    if (Array.from(event.dataTransfer.files).length ==1) {
        headFile = processFile(Array.from(event.dataTransfer.files)[0]);
    }else{
        alert("Solo puedes introducir una imagen de cabecera.")
    }
    
    //mostra fitxers
    showHeadImg();
    //torna estat original div
    headDragDropText.innerText = "Drag & Drop files";
    headDropArea.classList.remove("active");
});
//retorna array amb fitxers valids
function checkInput(inputFiles) {
    for (let index = 0; index < inputFiles.length; index++) {
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
        return file;
    }
    alert("Eliminado " + file.name + "\nSolo se aceptan imagenes.");
    return null;
}

function showFiles() {
    console.table(filesGallery)
    preview.innerHTML = "";

    for (let index = 0; index < filesGallery.length; index++) {
        insertPreview(filesGallery[index], index);
    }
}
function insertPreview(filer, index) {
    let name = filer.name;
    let reader = new FileReader();
    reader.addEventListener("load", function () {
        let img = reader.result;
        let strs = `<div class="previewImage">
                    <img src="${reader.result}"/>
                    <span>${name}</span>
                    <span onclick="remove(${index})" class="material-symbols-outlined removeBtn">X</span>
                </div>`;
        preview.innerHTML += strs;
    });
    reader.readAsDataURL(filer);
}
function showHeadImg() {
    let name = headFile.name;
    let reader = new FileReader();
    reader.addEventListener("load", function () {
        let img = reader.result;
        let strs = `<div class="previewImage">
                    <img src="${reader.result}"/>
                    <span>${name}</span>
                    <span onclick="removeFile()" class="material-symbols-outlined removeBtn">X</span>
                </div>`;
        headPreview.innerHTML = strs;
    });
    reader.readAsDataURL(headFile);
}
function removeFile(){
    headFile = "";
    headPreview.innerHTML = "";
}

function remove(i) {
    filesGallery.splice(i, 1);
    showFiles();
}
dragDropBut.addEventListener("click", (e) => {
    e.preventDefault();
    input.click();
});

input.addEventListener("change", function (e) {
    //recull fitxers, proces i afegeix a l'array
    filesGallery = filesGallery.concat(checkInput(Array.from(input.files)));
    //mostra fitxers
    showFiles();

});


let sendForm = document.getElementById("send");
sendForm.addEventListener("click", function(event){
    event.preventDefault();
    enviar();
});
function enviar(){
    console.log("click");
    const dataTransfer = new DataTransfer();
    
    filesGallery.forEach(file=>{
        dataTransfer.items.add(file);
    })
            
    input.files = dataTransfer.files;
    if (true) {
        document.getElementById("mainForm").submit();
    }
}
