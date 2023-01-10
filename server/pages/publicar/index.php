<?php
session_start();

require "../functions.php";

get_head();

get_header(); 
if(!isset( $_SESSION['user'])){
    $_SESSION["error"] = "Debes iniciar sesion para añadir una propiedad.";
    header("Location: ../login");
    exit();
}
$user = unserialize($_SESSION['user']);
if (!is_array($user)) {
    $_SESSION["error"] = "Debes iniciar sesion para añadir una propiedad.";
    header("Location: ../login");
    exit();
}
?>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="">
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
<script src="https://cdn.tiny.cloud/1/6amn7zix72mw7sdw8yn8a75q61tqx0wmmcldbis1pmqf02ti/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
<div class="formContainer">
    <form id="mainForm" class="mainForm" action="../../actions/create_property.php" method="POST" enctype="multipart/form-data">
        <!-- MENSAJE BIENVENIDA -->
        <div class="formCabecera formArea">
            <h2>Tu anuncio:</h2>
        </div>
        <!-- TITULO Y DESCRIPCION -->
        <div class="formArea">
            <p class="fieldTitle">Titulo</p>
            <input type="text" name="propTitle" id="propTitle" class="inputDefault" placeholder="Un titulo">
            <p class="fieldTitle">Descripcion</p>
            <textarea id="menubar" name="propDesc"></textarea>
        </div>
        
        <!-- TIPO VENTA Y PRECIO -->
        <div class="flexContainer formArea">
            <div class="thirdWidth">
                <p class="fieldTitle">Que quieres hacer con tu propiedad?</p>
                <div class="sellButonsContainer">
                    <button id="vender" class="but lBut">VENDER</button>
                    <button id="alquilar" class="but rBut">ALQUILAR</button>
                </div>
                <input type="hidden" name="propAccion" id="accion" value="Venta">
            </div>
            <div class="thirdWidth">
                <p class="fieldTitle">Precio</p>
                <input type="text" name="propPrice" class="inputDefault" id="descTMP" placeholder="400$">
            </div>
            <div class="thirdWidth"></div>
        </div>
        <!-- SELECTORS CATEGORIA -->
        <div class="flexContainer formArea">
            <div class="thirdWidth">
                <p class="fieldTitle">Tipo de propiedad (categoria)</p>
                <div>
                    <select name="selectCat" id="cats" class="select"></select>
                    <select name="selectSubcat" id="subcat" class="select"></select>
                </div>
            </div>
            <div class="imgContainer">
                <img src="https://cdn-icons-png.flaticon.com/512/916/916771.png" alt="pisos.png" height="70px" id="dLogo">
            </div>
            <div class="thirdWidth"></div>
        </div>
        
        <!--DRAG AND DROP -->
        <div class="flexContainer formArea dropsContainer">
            <div class="halfWidth">
                <p class="fieldTitle">Imagen de cabecera</p class="fieldTitle">
                <div class="drop-area" id="headArea">
                    <p id="headMsg">Arrastra aquí una foto</p>
                    <button id="headDropBut">Subir una foto</button>
                    <input type="file" name="propHeader" id="head-input-file" hidden/>
                </div>
                <div id="headPreview"></div>
            </div>
            <div class="halfWidth">
                <p class="fieldTitle">Fotos de tu anuncio</p>
                <div class="drop-area" id="dArea">
                    <p id="dropMsg">Deja aquí tus imagenes</p>
                    <button id="dropBut">Subir fotos</button>
                    <input type="file" name="propFiles[]" id="input-file" hidden multiple/>
                </div>
                <div id="preview"></div>
            </div>
        </div>
        <!-- MAPA -->
        <div class="formArea">
            <p class="fieldTitle">Clicka sobre la ubicación de tu propiedad.</p>
            <div class="leaflet-container">
                <div id="map"></div>
            </div>
            <input type="hidden" name="propPos" value="" id="savedPos">
        </div>
        
    </form>
</div>
<div class="formContainer">
    <button>Cancelar</button>
    <button id="send">Aceptar</button>
</div>

<script src="./map.js" ></script>
<script src="./addProperty.js"></script>
<?php get_footer(); ?>