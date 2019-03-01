<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Tableau</title>
</head>
<body>
	
<form action="test1.php" method="post" accept-charset="utf-8">

<input type="text" name="text" placeholder="taper votre chaine a verifier"> 
<input type="submit" name="check" value="verifier">
<br><br>

<?php 


if (isset($_POST["check"])) {
if (preg_match("/^([1-9])(\d{4})([a-zA-Z]{1,3})(0\d|[1-9]\d|2a|2b)$/",$_POST["text"])) echo " imatriculation valide ";
else echo " imatriculation non valide ";
}
echo "<br><br>";

function verif($matricule){
if (preg_match("/^([1-9])(\d{4})([a-zA-Z]{1,3})(0\d|[1-9]\d|2a|2b)$/",$matricule)) { echo "le ".$matricule." est valide"; return true;
} else { echo "le ".$matricule." nest pas valide"; return false; }
}

$x = "51234AbDa"; verif($x);

1
?>

</form>

<br><br>


<center>

<table border="1px solid black" width="100%">
	
<thead>
	<tr align="center" bgcolor="yellow">
<th>Titre 1</th>
<th>Titre 2</th>
<th>Titre 3</th>
<th>Titre 4</th>
   </tr>
</thead>

<tbody>
	
<tr>
	<td rowspan=2 colspan=2 align="center">Cellule 1</td>
	<td align="left" colspan=2>Cellule 2</td>
</tr>

<tr> 
<td align="right" colspan=2>Cellule 3</td>
</tr>

</tbody>

<thead>

<tr>

<th bgcolor="yellow" colspan=4> <b>Titre5</b> </th>

</tr>

</thead>

<tbody>

<tr>
	
	<td align="left">Cellule 4</td>
	<td align="center" rowspan=2 colspan=2>Cellule 6</td>
	<td align="left">Cellule 7</td>

</tr>


<tr>
	<td align="right">Cellule 5</td>
	<td align="right">Cellule 8</td>
	
</tr>



</tbody>

</table>
</center>















</body>
</html>