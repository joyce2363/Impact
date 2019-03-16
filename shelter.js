function initialize() {
  var myPosition = new google.maps.LatLng(46.0, -125.9);

// function map() {
//   console.log("abc")
//   var mapProp= {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:5,
//   };
//   var map = new google.maps.Map(document.getElementById("map"),mapProp);
//
//   var marker = new google.maps.Marker({
//     /* position:myCenter, */
//     icon:'house.png'
//   });
//   var infowindow = new google.maps.InfoWindow({
//     content:"Find shelter!"
//   });
//
//   infowindow.open(map,marker);
//
//   marker.setMap(map);
//   }

  var mapOptions = {
    zoom: 5,
    center: myPosition,
    mapTypeId: 'terrain'
  };

  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  var cascadiaFault = new google.maps.Polyline({
    path: [
      new google.maps.LatLng(38.603119, -121.516825),
      new google.maps.LatLng(38.661640, -121.495386),
      new google.maps.LatLng(38.603119, -121.516825),
      new google.maps.LatLng(38.604858, -121.483948),
      new google.maps.LatLng(38.603119, -121.516825),
    ]
  });

  cascadiaFault.setMap(map);

  if (google.maps.geometry.poly.isLocationOnEdge(myPosition, cascadiaFault, 10e-1)) {
    alert("Relocate!");
  }
}



// google.maps.event.addDomListener(window, 'load', initialize);
