<?php
session_start();

require "../functions.php";

get_head("account");

get_header("account"); 

if(!isset( $_SESSION['user'])){
    setcookie("error", "Debes iniciar sesion para entrar en esta pagina.");
    header("Location: ./ses.php");
    exit();
}
$user = unserialize($_SESSION['user']);
if (!is_array($user)) {
    setcookie("error", "Debes iniciar sesion para entrar en esta pagina.");
    header("Location: ./ses.php");
    exit();
}
?>
<div class="page">
    <p>Pendiente, debe incluir datos de usuario y listado de propiedades añadidas</p>
    <button><a href="../actions/close_sesion.php">Cerrar sesion.</a></button>
</div>
<?php get_footer(); ?>