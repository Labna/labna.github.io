<!DOCTYPE html>

<html>

	<head>
		<meta charset="utf-8" />
		<title>Exia Store</title>
		<link rel="stylesheet" type="text/css" href="View/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="View/css/commun.css">
		<?php
			if (isset($_GET['user'])) {
				if ($_GET['user']=="labna") {
					?><link rel="stylesheet" type="text/css" href="View/css/basic.css"><?php
				}
			}
		?>
		<script type="text/javascript" src="View/js/jquery.min.js"></script>
		<script type="text/javascript" src="View/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="View/js/actions.js"></script>
	</head>
	<body>
		<header><?php include("View/banner.php"); ?></header>
		<nav><?php include("View/nav.php") ?></nav>
        
    <form id="formLog" method="post" action="Model/login.php?log=login">
      <p>
        <label for="email">Your e-mail :</label>
        <input type="email" name="email" id="email"/>
        <label for="password">Your password :</label>
        <input type="password" name="password" id="password"/>
        <button type="submit" value="Valide">OK</button>
        <a href="?page=register">Not yet register</a>
      </p>
    </form>