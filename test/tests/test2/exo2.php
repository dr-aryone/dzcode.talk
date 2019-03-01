<?php 

$x = 123;

$d = rand(0,999);

$c = 0; $c2=0;

while( $d != $x ) 
{ 

echo " le " .$c. " tirage est ".$d."<br>";
$c++;
$d = rand(0,999);

}
echo " il fallait faire ".$c." tirages pour trouver ".$d."<br><br><br>"; 

for (;;) {   //for($c=1;$d!=$x;$c++) sans faire le if

if ($d != $x){ 
echo " le " .$c2. " tirage est ".$d."<br>";
$c2++;
$d = rand(0,999);
}
else {
echo "et avec le for  il fallait faire ".$c2." tirages pour trouver ".$d." <br> ici la on as utiliser les meme variables donc il as entrer dans le else directement haha "; 
exit();
}

}



 ?>