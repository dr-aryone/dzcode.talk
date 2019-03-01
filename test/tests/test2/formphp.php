<?php

if (isset($_POST['ok'])){
  
  if ($_POST['Age']<=18){
  	echo "mineur";
  }
  else {
  	echo "majeur";
  }


}



?>