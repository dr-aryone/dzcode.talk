<!DOCTYPE html>
<html>
<head> <title> test </title>
	<meta charset="utf-8"/>
</head>
<body>

<table border='1' width="100%">
	

<?php


for($i = 1; $i < 9; $i++){
echo '<td> '.$i.'</td>';
}

for($j = 1; $j < 9; $j++){

echo'<tr>'.$j.'</tr>';

for($k = 1; $k < 9; $k++){

$x = $j + $k;

echo '<td>'.$x.'</td>';
}
}

?>


</table>
</body>
</html>
