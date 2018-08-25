<?php
// ... => you could have a lot of parameters and we will put them in an array and shock them in $int array

// to do the poly and coer we use the type of parm before it and then it we be auto converted
function parse(int ...$int)
//function parse(int $int, string $str , bool $boolean)
{
  //print the content what is stored inside int
  echo '<pre>' . json_encode($int, JSON_PRETTY_PRINT) . '</pre>';
}
parse(20, "222", 22.12, true);

// we would have a problem if we do some math op of string and int etc...
// so the solution is -> polymorphism & coercion

//coercion => fit a certain data type => integer coercion

//for our example we will try to make all the 4 par to integer ( "222" => 222 , 22.22 => 22 , true => 1)

echo "<br>";
/* arrays and objects and no polymor*/
function parse2(array $kit)
{
  echo '<pre>' . json_encode($kit, JSON_PRETTY_PRINT)
    . '</pre>';
}

$arr = array("key" => "value", "color" => "red");
parse2($arr);

?>
