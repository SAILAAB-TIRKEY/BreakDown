<?php
	// Initialize the session
session_start();

?>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" href="css/loginstyle.css">
    </head>
    <body>
        <div class="box">
            <form action="log.php" method="post">                
            <label for="UserName">Username:</label>
            <input type="text" id="UserName" name="UserName" placeholder="Enter your UserName" required>
            <label for="Password">Password:</label>
            <input type="password" id="Password" name="Password" placeholder="Enter your Password" required>
            <button type="submit">Login</button>
            </form>
        </div>
    </body>
</html>