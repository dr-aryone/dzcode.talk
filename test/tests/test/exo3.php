<?php 

$x = rand(0,999);

echo "le nbr a acceder est ".$x.'<br>';

$y = rand(0,999);
$i=1;


for($i = 1; $y!=$x; $i++)
{
$y = rand(0,999);  echo $y.'<br>';
}

echo "le voila ".$y.'<br>';
echo "le nbr de tir est ".$i;

 ?>