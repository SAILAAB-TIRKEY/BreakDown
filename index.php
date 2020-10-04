<!DOCTYPE html>
<html>
    <head>
        <title>

        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" href="images/favicon.jpg" type="image/x-icon">
	 <script src="js/index.js"></script>
    </head>
    <body onload="myFunction()">
       <div class="head">
          <marquee  direction="left" scrollamount="12"><img src="images/ban991.png" alt="BreakDown"></marquee>
       </div>

       <div class="container">
        
        
            <div class="map" id="map">
             
            </div>
            <div class="form" >
                <form action="" method=""  id="form1">
                   <p> <label for="Name">Name:</label>
                       <input type="text" id="name" name="name" placeholder="Enter your Name" required>
                   </p>
                   <p>
                    <label for="vehicleNumber">Regestration No:</label>
                    <input type="text" id="Reg-Number" name="Reg-Number" placeholder="Ex: JH 00 AA 0000" required>
                  </p>
                   <p>
                    <label for="Phone">Phone No:</label>
                    <input type="text" id="phone" name="phone" placeholder="Ex: 9876543210" value="" required>
                  </p>
                  

                  <p>
                      <input type="text" id="positionlat" name="latitude" value="" style="display: none;">
                   </p>
                   <p>
                    <input type="text" id="positionlng" name="longitude" value="" style="display: none;">
                 </p>
                
                 <p>
                    <button  onclick="submitFunction()">Submit</button>
                </p>
                </form>
            </div>
        
    </div>


    <script src="js/index.js"></script>
      <script async defer 
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADoX68mJxIh69J7M1KhPsDfg78lxmbWfQ&callback=initMap">
      </script>
        
      <?php

           
            function getMarkers()
            {
                include("config.php");
                if (!$link)
				{
					die("Connection failed: " . mysqli_connect_error());
				}

                $query = "SELECT latitude, longitude FROM mechanic";

				$result = mysqli_query($link, $query);
                while($row = mysqli_fetch_array($result))
				{ 
                    //print_r($row);
                    echo' <script type="text/javascript">';
                    echo" getmech('$row[0]', '$row[1]');";
                    echo'</script>';
                    
                }
                mysqli_close($link);
            }
           

            getMarkers();
      ?>
    </body>
</html>