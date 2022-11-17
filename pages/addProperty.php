<?php


require "../functions.php";

get_head("addProperty");

get_header("addProperty"); 

?>
<h5>Gracias por confiar en nosotros!</h5>
<div class="formContainer">
    <form action="">
        <h4>Tu oferta</h4>
        <label>Una buena portada</label><br>
        <input type="file" name="propHeadImg" id="propHeadImg">
        <br><br>
        <label>Un mensaje llamativo?</label><br>
        <input type="text" name="propTitle" id="propTitle">
        <br><br>
        <label>Descripcion</label><br>
        <input type="text" name="descTMP" id="descTMP">
        <br><br>
        <p>Que quieres hacer con tu propiedad?</p>
        <fieldset>
            <input type="radio" name="propertySell" id="propertySell" value="sell">
            <label for="propertySell">VENDER</label>
            <input type="radio" name="propertySell" id="propertyRent" value="rent">
            <label for="propertyRent">ALQUILAR</label>
        </fieldset>
        <br><br>
        <!--ABAJO NADA -->
        <div class="drop-area" id="dArea">
            <h2 id="dropMsg">Drag & Drop files</h2>
            <button id="dropBut">Upload files</button>
            <input type="file" name="inputFiles[]" id="input-file" hidden multiple />
        </div>
   
        <div id="preview"></div>
</div>

<script src="../scripts/addProperty.js"></script>
<?php get_footer(); ?>