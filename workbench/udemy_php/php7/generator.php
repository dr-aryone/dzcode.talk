<?php

// a generator helps to make stops in a function so that if we say we have 3 functions that do the same thing we can just put them in one function and then use generator with yeild to make stops in the function like a debugger and just make it run is we want it to

function setNav()
{
    $distance = 0;
    echo 'start from driveway';
    yield "<br> first stop";
    echo "<br> take a left";
    yield "<br> second stop sign";
    echo "<br> distination reached";
    echo "<br> your journey was $distance miles ";
}
//if we run directly the function it wont work because when we use yeild it will make the func an object

$control = setNav();
echo $control -> current();
// we stop at the first yeild and then to print the yeild param out we need an echo on the current cause it will take it as a string and then echo it out

$control -> next();
// to the next yeild stop

$val = $control -> current();
//We cant echo next cause it is a void function so we just echo out current again
echo $val . ' concat 123 ';
echo '<br> <br>';


$control -> next();


// generators helps in analytics
