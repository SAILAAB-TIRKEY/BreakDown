<?php
    session_start();
    if($_SESSION['loggedin']=="")
    {
        header("Location:login.php");
    }
?>
<html>
    <head>
        <title>
            Admin
        </title>
        <link rel="stylesheet" href="css/adminstyle.css">
    </head>
    <body>
        <header>
            <b>Welcome! admin</b>
            <form action="logout.php" method="post">
                <input type="number" name="extract" value=1 hidden>
                <input type="submit" value="logout">
            </form>
        </header>
        <div class="add">
            <h2>Add New</h2>
            <hr>
            <form action="add.php" method="post">
                <p>
                    <label for="Name">Name:<sup>*</sup></label>
                    <input type="text" id="Name" name="Name" required>
                </p>
               
               <p>
                <label for="Name">Phone:<sup>*</sup></label>
                <input type="text" id="Phone" name="Phone" required>
               </p>

               <p>
                <label for="Name">email:<sup>*</sup></label>
                <input type="text" id="Email" name="Email" required>
               </p>

                <p><label for="Name">Latitude:<sup>*</sup></label>
                    <input type="text" id="Latitude" name="Latitude" required>
                </p>
                <p>
                    <label for="Name">Longitude:<sup>*</sup></label>
                <input type="text" id="Longitude" name="Longitude" required>
                </p>

                <p><label for="Name">Range of service(in Km):<sup>*</sup></label>
                    <input type="number" id="Range" name="Range" required>
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
        <div class="modify">
            <h2>Delete</h2>
            <hr>
			<table>
				<tr>
			    <th>Name</th>
				<th>Phone</th>
				<th>Email</th>
				<th>Latitude</th>
				<th>Longitude</th>
				<th>Range of service</th>
				<th>Delete</th>
			</tr>
			<?php
                include("config.php");

				// Check connection
				if (!$link)
				{
					die("Connection failed: " . mysqli_connect_error());
				}
				
				$query = "SELECT * FROM mechanic";
				$result = mysqli_query($link, $query);
				while($row = mysqli_fetch_array($result))
				{   //Creates a loop to loop through results
					echo "<tr><td>" . $row['name'] . "</td><td>" . $row['phone'] . "</td><td>".$row['email']."</td><td>".$row['latitude']."</td><td>".$row['longitude']."</td><td>".$row['rangeofservice']."</td>"; 
					echo "<td><a href='/BreakDown/delete.php?id=".$row['phone']."'>Delete</a></td>"; //if you want to delete based on phone
                    echo "</tr>";
				}
				mysqli_close($link);
			?>
			
			</table>
        </div>
    </body>
</html>