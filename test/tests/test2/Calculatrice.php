<html><body>
                 <!-- avec listes déroulantes: -->
       <br />
          <form method="get" action="Calculatrice.php">
          <input name="a" size="5" />
          <select name="par">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input name="b" size="5" />
          <br />
          <input type="submit" value="envoyer" />
          </form><hr />
          <!-- avec boutons radios: -->
          <br />
          <form method="get" action="Calculatrice.php">
          <table><tr>
            <td>
              <input name="a" size="5" />
            </td><td>
              <input type="radio" name="par" value="+" checked="checked" />+<br />
              <input type="radio" name="par" value="-" />-<br />
              <input type="radio" name="par" value="*" />*<br />
              <input type="radio" name="par" value="/" />/
            </td><td>
              <input name="b" size="5">
            </td>
          </tr><tr>
            <td colspan="3" align="center">
              <input type="submit" value="envoyer" />
            </td>
          </table>
          </form><hr />
          <!--  -->
          <?php
           
           if (isset($_GET['par'])) {
           $par=$_GET['par'];
           $a=$_GET['a'];
           $b=$_GET['b'];
           echo "le résultat du calcul précédent est: $a$par$b=";
            if ($par=="+") {
                echo $a+$b;
            } elseif ($par=="-") {
                echo $a-$b;
            } elseif ($par=="*") {
                echo $a*$b;
            } else {
                echo $a/$b;
            }
          }
          ?>
          </body></html>
