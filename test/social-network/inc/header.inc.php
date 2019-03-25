<?php include('connect.php');
session_start();
if (isset($_SESSION['user_login'])) {
    $username = $_SESSION['user_login'];
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />

  <title>Find Friends</title>
</head>

<body>
  <header id="header-menu">
    <div class="logo">
      <h1>Find Friends</h1>
      <i class="fas fa-user-friends"></i>
    </div>

    <div class="search-box">
      <form action="search.php" method="GET" id="search" name="formx">
        <i class="fas fa-search"></i>
        <input type="search" name="q" size="50" placeholder="search..." />
      </form>
    </div>

    <div class="nav">
      <ul class="item-list">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#SignUp">Sign Up</a></li>
        <li><a href="#SignIn">Sign In</a></li>
      </ul>
    </div>
  </header>
