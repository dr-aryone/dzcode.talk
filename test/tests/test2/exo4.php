<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>http</title>
</head>
<body>
	

<form action="exo5.php" method="post">
	
<input type="text" name="lien" autofocus placeholder="taper votre site ici">
<input type="submit" name="check" value="check">

<?php 
if(isset($_POST["check"])) {
if (preg_match("/^www\.[a-z0-9]+(\.|-)?\d*?[a-z]+\.[a-z]{2,4}$/",$_POST["lien"]) ){echo "address valide";}
else { echo "addresse iiinnnnvalide resseyer!";  }
}
?>
<br><br>

</form>


<?php

function valid($lien) {

$regex="/^www\.[a-z0-9]+(\.|-)?\d*?[a-z]+\.[a-z]{2,4}$/";

if (preg_match($regex,$lien)) { echo "$lien est valide congrats <br>";  return true;  }

else{  echo "$lien est invalide sorry !!<br>"; return false; }
}

$url="www.githu24.tech";  $url2="www.amine-hammou-txt.dzalg";  $url3="www.steive-jobs.com";

$url4="www.machin.com"; $url5="www.machin.4d.com";

valid($url); valid($url2);  valid($url3);
valid($url4); valid($url5); 

?>




</body>
</html>

