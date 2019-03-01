<html><body>
<?php
        if (isset($_GET['nom']))
        {
         $nom=$_GET['nom'];
         $prenom=$_GET['prenom'];
         $age=$_GET['age'];

         }
//else echo "hhhhhhhh";
if($age>=18)
$b="Adulte";
else $b="Mineur"; 

        echo "Bonjour $nom $prenom, vous etes $b .\n";
 ?>
          
</body></html>