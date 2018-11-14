<?php

class constr
{
    public function __construct($arg1)
    {
        $this -> createPop = $arg1;
    }

    public static function method()
    {
        echo "method run!";
    }
}
//php7 u need to say construct for the constructor function

constr::method();

$test = new constr("new style constructor");
echo $test->createPop;
echo "<br>";
echo $x = password_hash(
    'password',
    PASSWORD_DEFAULT,
array(
  'cost' => 12
)
);

// $ 2 chars for the type of encrypting by default is crypt() the second $ param of 2 or 3 chars is the cost of the encryption the higher the better but the payload will make the page slower and then a $ 10 chars for the random salt and the last $ is the password


//password_verify();


$fp = fopen('http://www.exxample.com', 'r');
$meta = stream_get_meta_data($fp); // now its only a one param in php7 it will fetch the file http or https and will give back so nice informations about  the http request and much more usefull informations
echo '<pre>'. json_encode($meta, JSON_PRETTY_PRINT) .'</pre>';
fclose($fp);


function test()
{
    return array(124);
}
echo test()[0]; //echo out the first element of the returned item of the array
