<?php
    session_start();
    include("config.php");

	// Check connection
    if (!$link)
    {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $username=mysqli_real_escape_string($link, $_POST['UserName']);
    $userpassword=mysqli_real_escape_string($link, $_POST['Password']);
    $query = "SELECT * FROM users WHERE userid = '".$username."'";

    if($result = mysqli_query($link, $query))
    {
        $row=mysqli_fetch_array($result);
        echo "\n";
        if($row['password']==$userpassword)
        {
            $_SESSION['loggedin']=$username;
            header("Location:admin.php");
        }
        else{
            header("Location:login.php");
        }
    }    
      
?>