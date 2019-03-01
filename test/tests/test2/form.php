
<!DOCTYPE html>
<html>
<head>
	<title>formulaire</title>
</head>
<body>
	<center>
<h1>regestration information</h1>

<table cellpadding="10">

<form method="post" action="formphp.php">
 <tr>
	 <td><label><font size="30" face="courier">name</font></label></td>
	 <td><input type="text" name="name" placeholder="your name here"/><br><br></td>
	 </tr>
 <tr>

 <tr>
 	<td><label><font size="30" face="courier">Last Name</font></label></td>
 	<td><input type="text" name="lastname"  placeholder="your last name"/></td>


 </tr>	

	<td> <label><font size="30" face="courier">Email</font></label> </td>
	<td> <input type="email" name="email" placeholder="your email here" size="50" width="" /><br><br></td>
	</tr>


	<tr>
	 <td><label><font size="30" face="courier">date de naissance</font></label></td>
	<td><input type="date" name="date" /><br><br></td>
</tr>
<tr>
	 <td><label><font size="30" face="courier">Age</font></label></td>
	 <td><input type="text" name="Age"  placeholder="your Age here"/><br><br></td>
	 </tr>
 <tr>


<tr>
	<td><label><font size="30" face="courier">Gender</font></label></td>
	<td><input type="radio" name="Gender" size="80%" /> <label><font size="20">male</font></label></td>

	<td ><input type="radio" name="Gender"><label><font size="20">femal</font></label></td>


</tr>
<tr>
	<td></td>

</tr>
<tr> 

<td></td>
 </tr>
<tr>
	
	<td colspan="2" align="center"><input type="submit"  name="ok" value="ok"/></td>

</tr>


	</form>
	</table>

</center>
</body>
</html>
