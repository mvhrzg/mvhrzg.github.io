var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var yourLoc;

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();

    //locations
    var asheville = new google.maps.LatLng(35.5800, -82.5558);
    var hearns = new google.maps.LatLng(35.59349, -82.55603100000002);
    var youngblood = new google.maps.LatLng(35.6071183, -82.5534065);
    var beercity = new google.maps.LatLng(35.589679, -82.55121409999998); 
    var motion = new google.maps.LatLng(35.5283968, -82.60601559999998); 
    var liberty = new google.maps.LatLng(35.5234479, -82.52897619999999);
    
    //map display options
    var mapOptions = {
        zoom: 11,
        center: asheville
    };
        
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions-panel'));
    
    //geolocation
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            yourLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(yourLoc);
            var yourinfowindow = new google.maps.InfoWindow({
                map:map,
                position: yourLoc,
                content: 'You are here' //+ $.getJSON(ipinfo.io/yourloc)
            });
        }, function() {
            handleNoGeolocation(true);
           });
    } else {
  
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }

    //map controls
    var control = document.getElementById('control');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
    
    ////////Youngblood
    var contentString = '<div id="content">'+
        '<div id="bodyContent">'+
        '<b>Youngblood Bikes</b>'+
        '<br>233 Merrimon Ave<br>Asheville, NC 28801<br><b>(828) 251-4686</b><br>'+
        '</div>'+
        '</div>';
    //Youngblood infowindow
    var infowindow = new google.maps.InfoWindow({
          content: contentString
    });
    //Youngblood marker
    var marker = new google.maps.Marker({
        position: asheville,
        map: map,
        title: 'Youngblood Bikes',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.7|0|FF6666|12|_|1'
    });
    //Youngblood onclick
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    
    ////////Hearn's
    var contentString2 = '<div id="content">'+
        '<div id="bodyContent">'+
        "<b>Hearn’s Cycling & Fitness</b>"+
        '<br>28 Asheland Ave<br>Asheville, NC 28801<br><b>(828) 253-4800</b><br>'+
        '</div>'+
        '</div>';
    //Hean's infowindow
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
    //Hearn's marker
    var marker2 = new google.maps.Marker({
        position: hearns,
        map: map,
        title: 'Hearn’s Cycling & Fitness',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.7|0|FF6666|12|_|2'
    });
    //Hearn's onclick
    google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map,marker2);
    });
    
    ////////Beercity
    var contentString3 = '<div id="content">'+
        '<div id="bodyContent">'+
        "<b>Beer City Bicycles</b>"+
        '<br>144 Biltmore Ave<br>Asheville, NC 28801<br><b>(828) 575-BIKE</b><br>'+
        '</div>'+
        '</div>';
    //Beercity infowindow
    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    //Beercity marker
    var marker3 = new google.maps.Marker({
        position: beercity,
        map: map,
        title: 'Beer City Bicycles',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.7|0|FF6666|12|_|3'
    });
    //Beercity onclick
    google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map,marker3);
    });
    
    ////////Motion
    var contentString4 = '<div id="content">'+
        '<div id="bodyContent">'+
        "<b>Motion Makers Bicycle Shop</b>"+
        '<br>878 Brevard Rd Ave<br> Asheville, NC 28806<br><b>(828) 633-2227</b><br>'+
        '</div>'+
        '</div>';
    //Motion infowindow
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });
    //Motion marker
    var marker4 = new google.maps.Marker({
        position: motion,
        map: map,
        title: 'Motion Makers Bicycle Shop',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.7|0|FF6666|12|_|4'
    });
    //Motion onclick
    google.maps.event.addListener(marker4, 'click', function() {
        infowindow4.open(map,marker4);
    });
    
    ////////Liberty
    var contentString5 = '<div id="content">'+
        '<div id="bodyContent">'+
        "<b>Liberty Bicycles</b>"+
        '<br>1378 Hendersonville Rd<br> Asheville, NC 28803<br><b>(828) 274-BIKE</b><br>'+
        '</div>'+
        '</div>';
    //Liberty infowindow
    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5
    });
    //Liberty marker
    var marker5 = new google.maps.Marker({
        position: liberty,
        map: map,
        title: 'Liberty Bicycles',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_spin&chld=0.7|0|FF6666|12|_|5'
    });
    //liberty onclick
    google.maps.event.addListener(marker5, 'click', function() {
        infowindow5.open(map,marker5);
    });
}

//if no geolocation
function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
  } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
  }
}

//calculate route
function calcRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
        origin: yourLoc,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);