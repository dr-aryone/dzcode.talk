 <html>
<head><title> solution exercice 8</title></head> 
<body> 
    
  
   <?php
// pour se connecter à la base de donnée en cas d'absence du pilote PDO
     /*$test=mysql_connect("localhost","root","") ;
     mysql_select_db("exo8") ;
     echo $test;*/ 
// il faut créer la base de données mysql "exo8" et la table "personne"
// utiliser le module mysql adminiration

     $con=new PDO("mysql:host=localhost;dbname=exo8","root","parrot2016@");

     $nom=$_POST['nom'];
     $prenom=$_POST['prenom'];
     $adresse=$_POST['adresse'];
     $service=$_POST['service'];

     $reqin= "INSERT INTO exo8 (nom, prenom, adresse, noms) VALUES ('$nom', '$prenom', '$adresse','$service')";
     $con->exec($reqin);

     
    
     $req1 = "select * from exo8" ;
     $res1 = $con->query($req1) ;
     //$lir1 = mysql_fetch_array($res1) ;
     //$nb   = $lir1["count(*)"] ;
     $nb=$res1->rowCount();

?>
<table border="1">
<tr><td> NOM </td> <td> PRENOM </td><td> ADRESSE </td> <td> SERVICE </td></tr>
<?php
     foreach($res1 as $val)
     {
?>
<tr><td>
<?php
       echo $val["nom"];
?>
</td>
<td>
<?php
       echo $val["prenom"];
?>
</td>
<td>
<?php
       echo $val["adresse"];
?>
</td>
<td>
<?php
       echo $val["noms"];
?>
</td>
</tr>
<?php
     }
?>
</table>
<?php
     echo " il y a $nb personnes en tout" ;

     //$req1 = "select * from Personne" ;
     //$res1 = $con->query($req1) ;

     ?>
</body>
</html>