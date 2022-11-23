console.log(getCookie("error"));


function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}


let inUname = document.getElementById("inUname");
let user = false;
let pass = false;

//falta control errors amnb cookie error

inUname.addEventListener('focusout', (event) => {
    if (inUname.value.trimEnd().trimStart() == "") {//not white
        inUname.classList.add("brd-red")
        document.getElementById("inUnameAl").innerText = "Campo obligatorio."
        user = false;
    }else if(!validateEmail(inUname.value)){
        inUname.classList.add("brd-red")
        document.getElementById("inUnameAl").innerText = "Introduce tu email, no nombre de usuario."
        user = false;
    }else{//if ok reset style
        inUname.classList.remove("brd-red")
        document.getElementById("inUnameAl").innerText = "";
        user = true;
    }
});
let inPswd =document.getElementById("inPswd")
inPswd.addEventListener('focusout', (event) => {
    if (inPswd.value.trimEnd().trimStart() == "") {//not white
        inPswd.classList.add("brd-red");
        document.getElementById("inPswdAl").innerText = "Campo obligatorio.";
        pass = false;
    }else{//if ok reset style
        inPswd.classList.remove("brd-red");
        document.getElementById("inPswdAl").innerText = "";
        pass = true;
    }
});
let form = document.getElementById("logForm");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(user & pass){form.submit();}
});

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
       return true;
    }else{
       return false;
    }
}