<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>

<h2>

<table>
<thead>

	<th>nom</th>
	<th>prix</th>
	<th>garantis</th>

</thead>
<tbody>


<?php

$bd = new PDO('mysql:host=localhost;dbname=company;charset=utf8','root','amine2016@');

$rs=$bd->query(" SELECT nomar,prix,garantis FROM article ");

while ($d=$rs->fetch()){

echo "<tr>

<td>".$d['nomar']."</td>
<td>".$d['prix']."</td>
<td>".$d['garantis']."</td>

</tr>";

}


?>


</tbody>
</table>

</h2>



</body>
</html>