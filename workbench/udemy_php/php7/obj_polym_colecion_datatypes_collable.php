<?php
/* to show errors manually in php */
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*
primitive type declarations only in php7
 */

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


/*
object type declarations php5 and up */

//arrays and objects and no polymorphism
function parse2(array $kit)
{
  echo '<pre>' . json_encode($kit, JSON_PRETTY_PRINT)
    . '</pre>';
}

$arr = array("key" => "value", "color" => "red");
parse2($arr);


//function are first class citizens so we consider them as an object so we can put functions inside of functions and inside a variable <etc class=""></etc>

//callable calls only a function cause function are like we said objects
function parse3(callable $callback)
{
  echo "this string came from the parse3 function <br>";
  $callback();
}
// parse3(function (){echo "callable function : this string comes from callback function";});

$fcc = function () {
  echo "callable function : this string comes from callback function";
};
parse3($fcc);
echo '<br>';

interface checker
{
}
class cake
{
}
class salad implements checker
{
}
function rest(checker $food)
// function rest(cake $food)
{
  echo var_dump($food);
}
$box = new salad;
rest($box);

echo '<br>';

class potato
{
  //self refers to her class mother which is potato and it can only be used in classes !
  function icing(self $thisPotato)
  {
    echo 'potato to ice <br>';
    echo var_dump($thisPotato);
  }
}

class podding
{
}
$potato1 = new potato;
$potato2 = new potato;
$potato3 = new podding;
$potato2->icing($potato1);
echo '<br>';
// $potato2->icing($potato3);

echo '<br>';

/*
return type declarations php7
which means we can control what data type the return function is
 */
// function dataReturn():int
function dataReturn() : array
{
 // return "20"; // it also apply on it the polymorphism from a string to an integer
  return array("key" => "value");
}

echo var_export(dataReturn()) . "<br>";

class obj implements checker
{
}
function dataReturnObj() : checker
{
  return new obj;
}
echo var_export(dataReturnObj()) . "<br>";


function dataCall() : callable
{
  echo "do something and then callback a function <br>";

  return function () {
    echo " a callable function <br>";
  };
}
echo var_export(dataCall()) . "<br>";



class selfObj
{
  function dataSelfObj($object) : self
  {
    return $object;
  }
}
$a = new selfObj;

echo var_export($a->dataSelfObj(new selfObj)) . " <br>";


?>
