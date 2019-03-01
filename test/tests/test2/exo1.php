<?php 

$s = ""; $i = 1;

do {

$x = rand(0,9); $y = rand(0,9); $z = rand(0,9);

echo " le ".$i." tirage ".$x." ".$y." ".$z."<br>";

$i++;

$s = (($x.$y).$z); 

}while($x%2==1 OR $y%2==0 OR $z%2==0);

echo " le ".$i." tirage est le gagnant ".$s;

 ?>