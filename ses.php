<?php


require "./functions.php";

get_head("sesion");

get_header("sesion"); 

?>
    

  <div class="w-80 border-4 border-black rounded-xl mx-auto p-5">
      <form action="" method="post" class="">
        
        <input type="text" name="uName" id="uName" placeholder="User Name" class="text-black border-b-2 border-black"><br>
        <br>
        
        <input type="password" name="pswd" id="pswd" placeholder="Password" class="text-black border-b-2 border-black"><br>
        <br>
        <input type="submit" value="GO!"  class="border-2">
      </form>
  </div>
   


<?php get_footer(); ?>