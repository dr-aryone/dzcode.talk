<?php 

echo chr(52) . "<br>"; // Decimal value
echo chr(052) . "<br>"; // Octal value
echo chr(0x52) ."<br>"; //hex value

//codeasci de chr(65) a chr(90) sont les alphabets

$i = 11;  $c = 0;
while ( $i <= 36) {
$t[$i] = chr(65+$c);    $i++;  $c++;
}

//for($i=11;$i<=36;$i++) {  $tab[$i]=chr(54+$i); }

for($i=11;$i<=36;$i++){  echo "lind est ".$i." la val est ".$t[$i]."<br>";   }

echo "-------------- for each -------------- <br>";

foreach($t as $key => $key_value)
{  echo " ind  ".$key." value ".$key_value."<br>";  }

 ?>
