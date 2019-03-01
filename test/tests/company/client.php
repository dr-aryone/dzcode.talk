<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>

<h2>

<form action="client.php" method="post">

	<label>email</label>
<input type="email" name="mail">  <br><br>
<label>mot de passe</label>
<input type="password" name="pass"> <br><br>

<label>confirmation du mot de passe</label>
<input type="password" name="pass2"> <br><br>

<label>nom complet</label>
<input type="text" name="nom"> <br><br>

<label>date de naissance</label>
<input type="date" name="dt"> <br><br>

<label>sexe :</label> <br>
<input type="radio" name="sexe2" value="homme">
<label>homme</label>
<input type="radio" name="sexe2" value="femme">
<label>femme</label>

<br><br>
<input type="submit" name="btn" value="inscrire">

</form>

<?php

$bd = new PDO('mysql:host=localhost;dbname=company;charset=utf8','root','amine2016@');

if(isset($_POST['btn'])){

$q=$_POST['mail'];
$s=$_POST['pass'];
$d=$_POST['nom'];
$f=$_POST['dt'];
$w=$_POST['sexe2'];

$bd->exec("INSERT INTO client(Email,Password,nomcp,datens,sexe,etatcp) VALUES('$q','$s','$d','$f','$w','inactif') ");

header("location:exo1.php");

}


?>

</h2>

</body>
</html>