<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<form action="tp3.php" method="post">
	
<input type="number" name="num1"> <br>
<input type="number" name="num2"> <br> 

<input type="radio" name="add" value="add"> <label>add</label>
input <br>
<input type="radio" name="sous" value="sous"> <label>sous</label> <br>
<input type="radio" name="div" value="div"> <label>div</label> <br>
<input type="radio" name="mult" value="mult"> <label>mult</label> <br>
<input type="submit" name="affich" value="affich">
</form>

<?php 

if(isset($_POST['add'])){

$s = $_POST['num1'] + $_POST['num2'];
echo "$s";

}
if(isset($_POST['sous'])){

$s = $_POST['num1'] - $_POST['num2'];
echo "$s";

}
if(isset($_POST['div'])){

$s = $_POST['num1'] / $_POST['num2'];
echo "$s";

}
if(isset($_POST['mult'])){

$s = $_POST['num1'] * $_POST['num2'];
echo "$s";

}

 ?>

</body>
</html>