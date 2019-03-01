<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>

<h2>
<form action="exo1.php" method="post">

	<label>type dutilis : </label>

<input type="checkbox" name="compani" value="

<?php

$bd = new PDO('mysql:host=localhost;dbname=company;charset=utf8','root','amine2016@');

$q=$bd->query(" SELECT * FROM admin ");


if (isset($_POST['compani'])) {

While($d=$q->fetch()) {

if(($_POST['ml']==$d['email'] ) AND ($_POST['ps']==$d['password'])  ) {

    header("location:administrateur.php");       }


}
}

?>
">

	<label>admin</label>

<input type="checkbox" name="company2" value="

<?php

$bd = new PDO('mysql:host=localhost;dbname=company;charset=utf8','root','amine2016@');

$u=$bd->query(" SELECT * FROM client ");

if (isset($_POST['company2'])) {

While($d=$u->fetch()) {

if(($_POST['ml']==$d['Email'] ) AND ($_POST['ps']==$d['Password'])) {

if($d['etatcp']=='actif') {    header("location:article.php");	  }

elseif($d['etatcp']=='inactif'){  header("location:script.php");   }

}

else{   header("location:script2.php");  }

}
}


?>
">


	<label>client</label>

<br><br>
<label>email</label>
<input type="email" name="ml">
<label>mot d pass</label>
<input type="password" name="ps">



<input type="submit" name="btn" value="login">
</form>

<br><br>

<h1> <a href="client.php">page dinscription</a> </h1>


</h2>


</body>
</html>