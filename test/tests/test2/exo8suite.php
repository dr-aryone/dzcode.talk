<!doctype html>
<html>
<head>
	<meta charset="ISO-8859-1"/>
	<title>remplissage table personne</title>
</head>
<body>
	<form method="post" action="bd.php">
		<legend> <font color="blue"> remplissage table personne </font></legend>
			<!-- La balise Table pour formater l'affichage du formulaire -->
			<table>
				<tr>
					<td><label>Nom</label></td>
					<td><input type="text" name="nom" placeholder="saisir votre nom"/> </td>
				</tr>
				<tr>
					<td><label>Prenom</label></td>
					<td><input type="text" name="prenom" placeholder="saisir votre prenom"/></td>
				</tr>
                                <tr>
					<td><label>adresse</label></td>
                                        <td><input type="text" name="adresse" placeholder="saisir votre adresse"></td>
				<tr>
					<td><label>nom de service</label></td>
					<td><input type="text" name="service" placeholder="saisir votre service"/></td>
				</tr>
				<tr>
					<td colspan="2"><input type="submit" name="envoyer" value="Envoyer"/>  <input type="reset" value="Annuler"/></td>
				</tr>
			</table>
                        </form>
	
</body>
</html>

