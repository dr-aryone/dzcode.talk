<!DOCTYPE html>
<html>
<head>
<title> solution exo8 </title>
    </head>
<body>
    
   <?php

// pour se connecter à la base de donnée en cas d'absence du pilote PDO
     /*$test=mysql_connect("localhost","root","") ;
     mysql_select_db("exo8") ;
     echo $test;*/ 
// il faut créer la base de données mysql "exo8" et la table "personne"
// utiliser le module mysql adminiration
     
$con = new PDO("mysql:host=localhost;dbname=exo8;","root","parrot2016@");

$n = $_POST['nom'];
$p = $_POST['prenom'];
$a = $_POST['adresse'];
$s = $_POST['service'];

$con->exec("INSERT INTO exo8 (nom,prenom,adresse,noms) VALUES ('$n','$p','$a','$s')");

$req = $con->query("select * from exo8");

$nb = $con->query("select count(*) from exo8");

$nb2=$req->rowCount();
  //$lir1 = mysql_fetch_array($res1) ;
     //$nb   = $lir1["count(*)"] ;


echo "
<table border='1' width='50%' bgcolor='blue'>
<thead>

<th> id </th>
<th> NOM </th>
<th> prenom </th>
<th> adresse </th>
<th> nomservice </th>

</thead>
</table>
";

//while($i=$req->fetch()){    

     foreach($req as $i){

echo "
<table border='1' width='50%' bgcolor='blue'>

<tbody>
<tr>

<td>".$i['idp']."</td>
<td>".$i['nom']."</td>
<td>".$i['prenom']."</td>
<td>".$i['adresse']."</td>
<td>".$i['noms']."</td>

</tr>

</tbody>
</table>

";
}
echo " <br> il y a $nb2 personnes en tout" ;

if($i=$nb->fetch()){

echo "<br> il y a $i[0] personnes en tout";

}

?>

</body>
</html>