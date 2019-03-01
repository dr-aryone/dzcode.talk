<!DOCTYPE html>
<html>
<head>

	<title> calculatrice </title>
	<meta charset="utf-8"/>

</head>
<body>


<form method="post" action="cal.php">

<table>
	<tr>

<td> <input name="1" size="5" /> </td>
<td>
<select name="grp">

<option value="+">+</option>
<option value="*">*</option>
<option value="-">-</option>
<option value="/">/</option>

</select>
</td>

<td> <input name="2" size="5" /> </td> 

<td> <input type="submit" name="envoyer" value="envoyer" /> </td>

 </tr>
</table>
</form>

 <br />
 <hr /> 
 <br />


<form method="post" action="cal.php">
	<table>
		<tr>
<td> <input name="1" size="5" /> </td>

<td>
		<input type="radio" name="grp" value="+">+<br />
		<input type="radio" name="grp" value="-">-<br />
		<input type="radio" name="grp" value="/">/<br />
		<input type="radio" name="grp" value="*">*<br /><br />

</td>

<td> <input name="2" size="5" /> </td>

</tr>

<tr>

<td> <input type="submit" name="envoyer" value="envoyer" /> </td>

</tr>

</table>
</form>
<hr /> <br />

	</body>
	</html>

<?php

$a = $_POST['1']; $b = $_POST['2']; $btn = $_POST['envoyer'];
$c=$_POST['grp'];

if(isset($c)){

if ($c=="*") { echo $a*$b;
} elseif($c=="+"){ echo $a+$b;
}elseif($c=="-") { echo $a-$b;
}else { echo $a/$b; }

}


?>











