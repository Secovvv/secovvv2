<?php
session_start();

// Logout logic
if (isset($_GET["logout"])) {
    // Unset all of the session variables
    $_SESSION = array();

    // Destroy the session.
    session_destroy();

    // Redirect to the login page (password_protect.php)
    header("Location: timelesssifre.php");
    exit;
}

// Check if the user is already authenticated
if (!isset($_SESSION["authenticated"]) || $_SESSION["authenticated"] !== true) {
    // If the password is correct, set the session variable
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $password = $_POST["password"];
        if ($password == "Asgte7808...") {
            $_SESSION["authenticated"] = true;
            header("Location: timelesssifre.html");
            exit;
        } else {
            $error_message = "Incorrect password. Please try again.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Protection</title>
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        form {
            text-align: center;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
        }

        label {
            display: block;
            margin-bottom: 10px;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            box-sizing: border-box;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <?php if (isset($error_message)) : ?>
        <p style="color: red;"><?php echo $error_message; ?></p>
    <?php endif; ?>

    <form method="post" action="">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Submit</button>
    </form>

    <!-- Logout link -->
    <a href="timelesssifre.php?logout=true">Logout</a>
</body>
</html>