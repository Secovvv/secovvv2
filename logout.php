<?php
session_start();

// Unset all of the session variables
$_SESSION = array();

// Destroy the session.
session_destroy();

// Redirect to the login page (password_protect.php)
header("Location: timelesssifre.php");
exit;
?>