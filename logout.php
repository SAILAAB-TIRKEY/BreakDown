<?php
    session_start();
    $values=$_POST['extract'];
    if($values==1)
    {
            //clear all session variables
            session_unset();

            //destroy session
        session_destroy();
        header("Location:login.php");
    }
?>