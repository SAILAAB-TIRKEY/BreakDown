<?php


include("config.php");
// Check connection
if (!$link)
{
    die("Connection failed: " . mysqli_connect_error());
}
else
{
	echo"Connection Successfull ";
}


$name = mysqli_real_escape_string($link, $_POST['Name']);
echo($name);
$phone = mysqli_real_escape_string($link, $_POST['Phone']);echo($phone);
$email = mysqli_real_escape_string($link, $_POST['Email']);echo($email);
$latitude = mysqli_real_escape_string($link, $_POST['Latitude']);echo($latitude);
$longitude = mysqli_real_escape_string($link, $_POST['Longitude']);echo($longitude);
$range = mysqli_real_escape_string($link, $_POST['Range']);echo($range);
 // require_once("config.php");

 	
	$query = "INSERT INTO mechanic (name,phone,email,latitude,longitude,rangeofservice) VALUES ('$name','$phone','$email','$latitude','$longitude','$range')";
            
     //$sql = "INSERT INTO persons (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";       
                
               

               
	   if(mysqli_query($link, $query))
	   {
    
		   header("Location:admin.php");
		   echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $query. " . mysqli_error($link);
}




?>
