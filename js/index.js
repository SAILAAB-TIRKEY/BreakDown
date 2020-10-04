var map, infoWindow;

function initMap() 
{
    map = new google.maps.Map(document.getElementById('map'), {

        zoom: 16
    });



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var myLatlng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };



            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatlng,
                zoom: 16
            });


            var marker = new google.maps.Marker({
                position: myLatlng,
                title: "You are here!",
                draggable: true,

            });

            google.maps.event.addListener(marker, 'dragend', function(evt) {
                document.getElementById('positionlat').value = evt.latLng.lat();
            });

            google.maps.event.addListener(marker, 'dragstart', function(evt) {
                document.getElementById('positionlng').value = evt.latLng.lng();
            });

            map.setCenter(marker.position);
            // To add the marker to the map, call setMap();
            marker.setMap(map);


        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });


    } else {
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


var d=[];

function myFunction()
 {
    
    initMap();
   
    if (navigator.geolocation) 
    {
        
        navigator.geolocation.getCurrentPosition(function(position) {
            var myLatlng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            document.getElementById("positionlat").value = position.coords.latitude;
            document.getElementById("positionlng").value = position.coords.longitude;
        });
    }

    
       // console.log(typeof arguments[0]);
       // console.log(typeof arguments[1]);
        //var lt={lat: parseInt(arguments[0]), lng: parseInt(arguments[1])};
        //var lat=Number(argument[0]);
        //var lng=Number(argument[1]);
        //console.log(arguments[0],arguments[1],"this is the test");

        //console.log(typeof arguments[0]);

       /* var lat = Number(arguments[0]);
        var lng = Number(arguments[1]);

        if(typeof arguments[0] == 'undefined')
        {
            lat = 23.323556; 
        }
        if(typeof arguments[1] == 'undefined')
        {
            lng = 85.307593;
        }

        var new_cnet = {lat,lng};
        console.log(new_cnet);

        
        var d = [];
        d.push([value1, vaule2]);
        var d = [[lat,lon],[3,4],[5,6]];

        d[0] = [lat,lon];*/


       /* d.forEach(element => {
            var lat = element[0],lng = element[1];
            var new_cnet = {lat,lng};
            var circle = new google.maps.Circle({
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#056dff",
                fillOpacity: 0.20,
                map,
                center: new_cnet,
                radius: 3000
            });

        });

        */


        

     /* var circle = new google.maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#056dff",
          fillOpacity: 0.20,
          map,
          center: new_cnet,
          radius: 3000
      });*/
      
    //setTimeout(myFunction, 100);
}


/*/iifes
(function () {
    statements
})();*/

function getmech()
{
   
   // console.log(typeof arguments[0]);

    var lat = Number(arguments[0]);
    var lng = Number(arguments[1]);

    if(typeof arguments[0] == 'undefined')
    {
        lat = 23.323556; 
    }
    if(typeof arguments[1] == 'undefined')
    {
        lng = 85.307593;
    }

    console.log(arguments[0],arguments[1],"this is the test");


    d.push([lat, lng]);
}

//myFunction(23.356133,85.301494);
function drawcircle()
{
    d.forEach(element => {
        var lat = element[0],lng = element[1];
        var new_cnet = {lat,lng};
        var circle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#056dff",
            fillOpacity: 0.20,
            map,
            center: new_cnet,
            radius: 3000
        });

    });
}
setTimeout(drawcircle,3000);

function getdistance()
{
    d.forEach(element =>{
        var a=distance(element[0],element[1]);
          console.log(a);
          console.log("hello");
          return a;
      
    });
}

function distance() 
{
    //console.log(arguments[0],arguments[1]);
    
    var lat1 = arguments[0];
    var lon1 = arguments[1];
    var lat2 = document.getElementById("positionlat").value;
    var lon2 = document.getElementById("positionlng").value;
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}



function submitFunction() 
{
    var x=getdistance();
    console.log("hello");
    console.log(typeof x);
    if (x<=3) {
        console.log("hello");
        document.getElementById("form1").action = "sendmail.php";
        document.getElementById("form1").method = "POST";
        document.getElementById("form1").submit();
        alert("We will reach there soon!");
    } else if (x>3) {
        alert("Sorry! you are out of our service area.");
    }


}