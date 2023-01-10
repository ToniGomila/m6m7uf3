<?php
session_start();
require "../functions.php";

get_head();

get_header();

?>
<link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
    />
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="">
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>

    
<div class="mainContainer" id="formatContainer">


</div>
<div class="mapContainer">
  <div class="leaflet-container">
      <div id="map"></div>
  </div>
</div>





<script src="./script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<!--<script src="./staticMap.js"></script>-->
<?php
get_footer();
?>