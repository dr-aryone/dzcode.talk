<?php 

if(isset($_POST['btn'])){

if($_POST['age'] > 10){

	echo ' votre age lannée proch est '.$_POST['age'];
}
}

if(isset($_POST['btn2'])){

if(isset($_POST['add'])){
	$x = $_POST['numb1'] + $_POST['numb2'];
	echo $x;
}

if(isset($_POST['sub'])){
$x = $_POST['numb1']-$_POST['numb2'];
echo $x;
}
}

 ?>