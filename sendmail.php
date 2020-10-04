<?php
$to_email = "sailaab.tirkey18@gmail.com";
$subject = "BreakDown Emergency";
$body = "Name: ".$_POST['name'].' | Reg-No:'.$_POST['Reg-Number'].' | Phone:'.$_POST['phone'].' | Latitude:'.$_POST['latitude'].' | Longitude:'.$_POST['longitude'];
$headers = "From: BreakDown";

if (mail($to_email, $subject, $body, $headers)) {
  // echo "alert('Email successfully sent to $to_email...')";
    header("Location:index.php");
} else {
    echo "Email sending failed...";
    header("Location:index.php");
}
?>