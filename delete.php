<?php
  $id = $_GET['id'];
//Connect DB

// on success delete : redirect the page to original page using header() method
$dbname = "sailaab";
$conn = mysqli_connect("localhost", "root", "", $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// sql to delete a record
$sql = "DELETE FROM mechanic WHERE phone = $id"; 

if (mysqli_query($conn, $sql)) {
    mysqli_close($conn);
    header('Location: admin.php'); 
    exit;
} else {
    echo "Error deleting record";
}
?>