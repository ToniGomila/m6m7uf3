<?php
session_start();
require "../functions.php";

get_head();

get_header();

?>

<h1>asdf</h1>
<a href="../registro/">Registre</a><br>
<a href="../login/">login</a><br>
<a href="../publicar/">add prop</a>

<div class="propCard">
    <div class="wFull halfCard upCard">
        <img class="wFull" src="https://static.wikia.nocookie.net/gtawiki/images/f/f1/DeSantaResidence-GTAV.png" alt="">
    </div>
    <div class="half halfCard bottomCard">
        <h2>Un título llamativo</h2>
        <p>Una descripcion super larga para probar cosas randoms en la tarjeta, nose si va a funcionar o que, vemaos que carajos</p>
    </div>
</div>


<?php
get_footer();
?>