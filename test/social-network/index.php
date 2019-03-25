<?php
include_once('./inc/connect.php');
include('./inc/header.inc.php');

$submit = strip_tags(@$_POST['submit']);
$fname = strip_tags(@$_POST['fname']);
$lname = strip_tags(@$_POST['lname']);
$email = strip_tags(@$_POST['email']);
$verifemail = strip_tags(@$_POST['verifemail']);
$password = strip_tags(@$_POST['password']);
$verifpwd = strip_tags(@$_POST['verifpwd']);
$username = strip_tags(@$_POST['username']);
$verifuser = '';
$verified = '';
$date = date("Y-m-d");

if ($submit) {
    if ($fname && $lname && $email && $verifemail && $password && $verifpwd && $username) {
        if ($email == $verifemail) {
            if ($verifuser = mysqli_query($db, "SELECT username FROM utilisateur WHERE username='$username'")) {
                $verified = mysqli_num_rows($verifuser);
            } else {
                echo "result error in the query";
            }
            if ($verified == 0) {
                if ($password == $verifpwd) {
                    if (strlen($username) > 25 || strlen($fname) > 25 || strlen($lname) > 25 || strlen($password) > 30 || strlen($password) < 5) {
                        echo "username lastname and firstname must be under 25 chars & pwd must be between 5 & 30 chars";
                    } else {
                        $password = md5($password);
                        $active = '0';
                        // $query = $db->prepare("INSERT INTO findfriends VALUES('',?,?,?,?,?,?,'0')");
                        // $query->bind_param("sssssd", $email, $password, $username, $fname, $lname, $date, $active);
                        // $query->execute();
                        $query = mysqli_query($db, "INSERT INTO utilisateur VALUES('', '$email', '$password' ,'$username', '$fname', '$lname', '$date', '$active')");

                        die("<h2>welcome to find friends</h2>");
                    }
                } else {
                    echo "pwd error";
                }
            } else {
                echo "username exists";
            }
        } else {
            echo "error in your email";
        }
    } else {
        echo " <br> please fill all the inputs <br> ";
    }
}
if (isset($_POST['user_login']) && isset($_POST['pass_login'])) {
    $user_login = preg_replace('#[^A-Za-z0-9]#i', '', $_POST['user_login']);
    $pass_login = preg_replace('#[^A-Za-z0-9]#i', '', $_POST['pass_login']);
    $pass_login = md5($pass_login);
    $sql = mysqli_query($db, "SELECT id FROM utilisateur WHERE username='$user_login' AND password='$pass_login' LIMIT 1");
    $usercount = mysqli_num_rows($sql);
    if ($usercount == 1) {
        // while ($row = mysqli_fetch_array($sql)) {
        //     $id = $row[$id];
        // }
        $_SESSION['user_login'] = $user_login;
        header("location: home.php");
        exit();
    } else {
        echo "the information is incorrect, try again";
        exit();
    }
}

?>
<section>
  <table>
    <tr>
      <td width="60%" valign="top" class="container-sign-in">
        <h2>Sign in</h2>
        <form action="index.php" method="POST">
          <input type="text" name="user_login" size="25" placeholder="username" />
          <br>
          <input type="password" name="pass_login" size="25" placeholder="type your password" />
          <br>
          <input type="submit" name="login" value="Sign in" />
        </form>
      </td>

      <td width="60%" valign="top" class="container-sign-up">
        <h2>Sign Up bellow</h2>
        <form action="index.php" method="POST">
          <input type="text" name="fname" size="25" placeholder="first name" />
          <br />
          <input type="text" name="lname" size="25" placeholder="last name" />
          <br />
          <input type="text" name="username" size="25" placeholder="username" />
          <br />
          <input type="email" name="email" size="25" placeholder="email" />
          <br />
          <input type="email" name="verifemail" size="25" placeholder="type your email again" />
          <br />
          <input type="password" name="password" size="25" placeholder="type your password" />
          <br />
          <input type="password" name="verifpwd" size="25" placeholder="verify your password" />
          <br />
          <input type="submit" name="submit" value="Sign Up!" />
        </form>
      </td>
    </tr>
  </table>
</section>
<?php include('./inc/footer.inc.php') ?>
</body>

</html>