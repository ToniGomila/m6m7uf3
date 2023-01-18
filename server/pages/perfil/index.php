<?php
session_start();

require "../functions.php";

get_head();

get_header(); 

if(!isset( $_SESSION['user'])){
    $_SESSION["error"] = "Debes iniciar sesion para ver tu perfil.";
    header("Location: ../login/");
    exit();
}
$user = unserialize($_SESSION['user']);
if (!is_array($user)) {
    $_SESSION["error"] = "Debes iniciar sesion para ver tu perfil.";
    header("Location: ../login/");
    exit();
}
?>
<!-- SAVE USER ID -->
<input type="hidden" value="<?php echo $user[0]; ?>" name="uid" id="uid">
<!-- USER INFO -->
<div class="page">
    <div>
        <h2>(<?php echo $user[0]; ?>)<?php echo $user[1]; ?> | <?php echo $user[2]; ?></h2>
    </div>
    <div>
        <button class="cSesion"><a href="../../actions/close_sesion.php">Cerrar sesion.</a></button>
    </div><br>
    <h1>Tus propiedades</h1>
</div>
<!-- PROPS LIST -->
<div class="cardsContainer" id="propsList">
    
   
</div>

<div id="alerta" class="hidden">
 
</div>
<script src="./script.js"></script>
<?php get_footer(); ?>