<?php 

$tab=array("php5@free.com","jean556@fiscali.fr","machine@waladoo.fr","webmestre@waladoo.fr","pauldeux@fiscali.fr","macafi@fiscali.fr");

/*
explode("@",$tab[$i]);  : splits the array you give it into 2 parts ; before what you give it and after what you give it and it is put in an tab [0] [1] : 0 before and 1 after
*/

//recup domaine only
for ($i=0; $i <count($tab); $i++) {	$email=explode("@",$tab[$i]);  $domaine[]=$email[1]; }
//foreach($tab as $i => $value) { $email=explode("@",$value);  $domaine[]=$email[1];}

//Compte du nombre d'occurences de chaque domaine
$stat=array_count_values($domaine);  //print_r($stat);

//Nombre total d'adresses
$total=count($tab);  //$total=array_sum($stat);

//Calcul des pourcentages
foreach($stat as $fourn => $nb)  { 

$pourcent[$fourn]=$nb/$total*100;
echo "Fournisseur d'accès : $fourn =",round($pourcent[$fourn],2)," % <br>";

}

?>