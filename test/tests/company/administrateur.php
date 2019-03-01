<?php

$bd = new PDO('mysql:host=localhost;dbname=company;charset=utf8','root','amine2016@');

$r=$bd->query(" SELECT * FROM admin ");


if(isset($_POST['btn2'])){
//supprime client

$a=$_POST['nom'];
$b=$_POST['id'];

$bd->exec("DELETE FROM client WHERE nomcp='$a' OR ID=$b ");

}

if(isset($_POST['btn4'])){
//approver client

$b=$_POST['nom'];
$i=$_POST['id'];

$bd->exec("UPDATE client SET etatcp='actif' WHERE nomcp='$b' OR ID=$i ");

}

if(isset($_POST['btn6'])){
//désapprover client

$b=$_POST['nom'];
$i=$_POST['id'];

$bd->exec("UPDATE client SET etatcp='inactif' WHERE nomcp='$b' OR ID=$i ");

}


if(isset($_POST['btn3'])){
//ajouter article

$q=$_POST['nom'];
$s=$_POST['prix2'];
$d=$_POST['garantis2'];
$h=$_POST['description'];

$bd->exec("INSERT INTO article(nomar,prix,garantis,des) VALUES('$q',$s,'$d','$h') ");

}


 ?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>


<form action="administrateur.php" method="post">
<input type="number" name="id" placeholder=" id du client "><br><br>
<input type="text" name="nom" placeholder=" nom du client ou d'article"><br><br>
<input type="number" name="prix2" placeholder=" prix darticle "><br><br>
<input type="number" name="qua" placeholder=" quantité darticle "><br><br>
<textarea name="description" placeholder="description"></textarea> <br><br>

<label>garantis : </label> <br>
<input type="radio" name="garantis2" value="12mois">
<label>12 mois</label>
<input type="radio" name="garantis2" value="24mois">
<label>24 mois</label>
<input type="radio" name="garantis2" value="36mois">
<label>36 mois</label>

<br><br>

<input type="submit" name="btn" value="acceuil">
<input type="submit" name="btn4" value="approuver client">
<input type="submit" name="btn2" value="supprimer client">
<input type="submit" name="btn6" value="désaprover le client">
<input type="submit" name="btn3" value="ajouter un article ">
<input type="submit" name="btn5" value="consulter les articles">


</form>


<table>
<thead>

	<th>id</th>
	<th>nom</th>
	<th>prix</th>
	<th>garantis</th>
	<th>Description</th>

</thead>
<tbody>

	<?php


if(isset($_POST['btn5'])){

$rs=$bd->query(" SELECT typeid,nomar,prix,garantis,des FROM article ");

while ($d=$rs->fetch()){

echo "<tr>

<td>".$d['typeid']."</td>
<td>".$d['nomar']."</td>
<td>".$d['prix']."</td>
<td>".$d['garantis']."</td>
<td>".$d['des']."</td>
</tr>";

}}
?>

</tbody>
</table>

</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>

<br><br>
<h2>
	<?php
if(isset($_POST['btn'])){
	//Acceuil
$d=$r->fetch();

	echo ' BONJOUR '.$d['nom'].'<br>';

}

?>
 </h2>

</body>
</html>

