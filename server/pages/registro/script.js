//FALTA CHECK ERROR AMB COOKIE error

//patterns for password checks
let lowerCaseLetters = /[a-z]/;
let upperCaseLetters = /[A-Z]/;
let numbers = /[0-9]/;
let specialChars =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//event listener for check email in form
let inEmail = document.getElementById("inEmail");
inEmail.addEventListener('focusout', () => {checkEmail();});
//event listener for check user name in form
let inUname = document.getElementById("inUname");
inUname.addEventListener('focusout', () => {checkUname()});
//event listener for check pswd in form
let inPswd =document.getElementById("inPswd")
inPswd.addEventListener('focusout', () => {checkPass()});
//event listenner for check pswd confirm in pswd
let inPswdC = document.getElementById("inPswdC")
inPswdC.addEventListener('focusout', (event) => {checkPassC()});
//event listener for send email
let sendEmail = document.getElementById("send");
sendEmail.addEventListener('click', () => {
    console.log("click");
    if (checkEmail() && checkUname() && checkPass() && checkPassC()) {
        document.getElementById("myForm").submit();
    }
});


function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
       return true;
    }else{
       return false;
    }
}


function checkEmail() {
    if (inEmail.value.trimEnd().trimStart() == "") {//not white
        inEmail.classList.add("brd-red");
        document.getElementById("inEmailAl").innerText = "Campo obligatorio.";
        return false;
    }else if (!validateEmail(inEmail.value)) {
        inEmail.classList.add("brd-red");
        document.getElementById("inEmailAl").innerText = "Formato de correo incorrecto.";
        return false;
    }
    else{//if ok reset style
        inEmail.classList.remove("brd-red");
        document.getElementById("inEmailAl").innerText = "";
        return true;
    }
}
function checkUname() {
    if (inUname.value.trimEnd().trimStart() == "") {//not white
        inUname.classList.add("brd-red")
        document.getElementById("inUnameAl").innerText = "Campo obligatorio."
        return false;
    }else{//if ok reset style
        inUname.classList.remove("brd-red")
        document.getElementById("inUnameAl").innerText = "";
        return true;
    }
}
function checkPass() {
    if (inPswd.value.trimEnd().trimStart() == "") {//not white
        inPswd.classList.add("brd-red");
        document.getElementById("inPswdAl").innerText = "Campo obligatorio.";
        return false;
    }else if (!lowerCaseLetters.test(inPswd.value)) {
        inPswd.classList.add("brd-red");
        document.getElementById("inPswdAl").innerText = "La contraseña debe contener almenos una minúscula.";
        return false;
    }else if (!upperCaseLetters.test(inPswd.value)) {
        inPswd.classList.add("brd-red");
        document.getElementById("inPswdAl").innerText = "La contraseña debe contener almenos una mayúscula.";
        return false;
    }else if (!numbers.test(inPswd.value)) {
        inPswd.classList.add("brd-red");
        document.getElementById("inPswdAl").innerText = "La contraseña debe contener almenos un número.";
        return false;
    }else if (!specialChars.test(inPswd.value)) {
        inPswd.classList.add("brd-red");
        document.getElementById("inPswdAl").innerText = "La contraseña debe contener almenos un carácter especial.";
        return false;
    }else{//if ok reset style
        inPswd.classList.remove("brd-red");
        document.getElementById("inPswdAl").innerText = "";
        return true;
    }
}
function checkPassC() {
    if (inPswdC.value != inPswd.value) {
        inPswdC.classList.add("brd-red");
        document.getElementById("inPswdAlC").innerText = "Las contraseñas no coinciden.";
        return false;
    }else{//if ok reset style
        inPswdC.classList.remove("brd-red");
        document.getElementById("inPswdAlC").innerText = "";
        return true;
    }
}
function name(params) {
    
}