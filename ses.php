<?php


require "./functions.php";

get_head("sesion");

get_header("sesion"); 

?>
    

  <div class="p-6 sm:p-8 w-full mx-auto">
      <form action="" method="post" class="bg-gray-50 dark:bg-gray-900 px-6 py-8 w-1/3">
        <label for="uName">Nombre de usuario</label><br>
        <input type="text" name="uName" id=""><br>
        <br>
        <label for="psswd">Contraseña</label><br>
        <input type="password" name="" id=""><br>
        <br>
        <input type="submit" value="GO"  class="w-1/3 text-white bg-primary-600 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
      </form>
  </div>
   


<?php get_footer(); ?>