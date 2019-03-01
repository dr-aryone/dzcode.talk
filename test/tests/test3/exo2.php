<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<table width="100%">

<form method="post" action="exo2.php">

<tr>
<td> <label> civilité </label> </td>

<td> <input type="radio" name="group" /><label> Mademoiselle </label> </td>
<td> <input type="radio" name="group" checked="checked"/><label> Mademoiselle </label> </td>
<td> <input type="radio" name="group" /><label> Mademoiselle </label> </td>

</tr>

<tr>
	<td> <label>Nom / Prenom</label> </td>
	<td> <input type="text" /> </td>
</tr>

<tr>
		<td> <label> Adresse </label> </td>
	<td> <input type="textarea" placeholder="Rue No Boite postal" /> </td>

</tr>

<tr>
	
	<td> <label>No Postal / Localité </label> </td>
	<td> <input type="text" placeholder="Lausane" /> </td>

</tr>

<tr>
		<td> <label> Pays </label> </td>
	<td> 
<select name="s1">
	
	<option>suisse</option>
	<option>polande</option>

</select>

	 </td>

</tr>

<tr>
	
<td> <label> Platforme(s) </label> </td>
	<td> <input type="checkbox" checked="checked" name="1"/><label>windows</label> </td>
	<td> <input type="checkbox" checked="checked" name="2"/><label>macintosh</label> </td>
	<td> <input type="checkbox" name="3"/><label>Unix</label> </td>

</tr>

<tr>
	
<td>
	<label>Application</label>
	
</td>
<td>
	<select name="s2" multiple>
		<option>bureatique</option>
		<option>internet</option>
		<option>dao</option>
		<option>sgbd</option>
		<option>mysql</option>
		
	</select>

</td>

</tr>



</table>

<center>

<tr>
<td>

<input type="submit" value="Soumettre le formulaire"/> &nbsp &nbsp &nbsp  <input type="reset" value="effacer"/>

</td>
</tr>

</center>

</form>

</body>
</html>