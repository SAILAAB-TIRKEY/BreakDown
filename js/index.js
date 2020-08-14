       
        var map, infoWindow;
        function initMap() {
           map = new google.maps.Map(document.getElementById('map'), {
            //center: {lat: 23.357241, lng: 85.304941},
            zoom: 16
           });        
           
          
 
          // infoWindow = new google.maps.InfoWindow;
   
           // Try HTML5 geolocation.
           if (navigator.geolocation) 
           {
             navigator.geolocation.getCurrentPosition(function(position) {
               var myLatlng = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude,
               };
              
             
               
               map = new google.maps.Map(document.getElementById('map'), {
                 center: myLatlng,
                 zoom: 16  
                 });    
              // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
             
               var marker = new google.maps.Marker({
                 position: myLatlng,
                 title:"You are here!",
                 draggable: true,
                 
             });
            
             google.maps.event.addListener(marker, 'dragend', function (evt) {
             document.getElementById('positionlat').value = evt.latLng.lat();
             });
 
             google.maps.event.addListener(marker, 'dragstart', function (evt) {
                 document.getElementById('positionlng').value = evt.latLng.lng();
             });
 
             map.setCenter(marker.position);
                         // To add the marker to the map, call setMap();
                         marker.setMap(map);
                         
 
                           }, function() {
                           handleLocationError(true, infoWindow, map.getCenter());
                         });
                         
                      
           } 
           
           else {
             // Browser doesn't support Geolocation
             handleLocationError(false, infoWindow, map.getCenter());
           }
           
         }
 
         
         
         function handleLocationError(browserHasGeolocation, infoWindow, pos) {
           infoWindow.setPosition(pos);
           infoWindow.setContent(browserHasGeolocation ?
                                 'Error: The Geolocation service failed.' :
                                 'Error: Your browser doesn\'t support geolocation.');
           infoWindow.open(map);
         }
 
 
 
 
         function myFunction()
         {
           function initMap() 
               {
               map = new google.maps.Map(document.getElementById('map'));  
               } 
 
               if (navigator.geolocation) 
               {
                 navigator.geolocation.getCurrentPosition(function(position) 
                 {
                   var myLatlng = 
                   {
                     lat: position.coords.latitude,
                     lng: position.coords.longitude,
                   };
                   document.getElementById("positionlat").value = position.coords.latitude;
                   document.getElementById("positionlng").value = position.coords.longitude;
                 });
               }
                       
           var circle = new google.maps.Circle({
                   strokeColor: "#FF0000",
                   strokeOpacity: 0.8,
                   strokeWeight: 2,
                   fillColor: "#056dff",
                   fillOpacity: 0.20,
                   map,
                   center:  {lat: 23.357241, lng: 85.304941},
                   radius: 3000
                 });
             
                // setTimeout(myFunction, 500);
         }
 
 
 
 
 
         function distance() 
         {
             var lat1= 23.357241, lon1= 85.304941;
             var lat2= document.getElementById("positionlat").value;
             var lon2= document.getElementById("positionlng").value;
             var p = 0.017453292519943295;    // Math.PI / 180
             var c = Math.cos;
             var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                     c(lat1 * p) * c(lat2 * p) * 
                     (1 - c((lon2 - lon1) * p))/2;
 
             return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
         }
 
 
 
         function submitFunction()
         {
           var x= distance();
           if(x<=3)
           {
            
             document.getElementById("form1").action= "POST";
            
             document.getElementById("form1").submit();     
           }
           else if(x>3)
           {
                   document.getElementById("form1").data-netlify.value="false";
                    alert("Sorry! you are out of our service area.");
                  location.reload(true);
           }
 
             
         }
 
