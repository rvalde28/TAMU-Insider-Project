var myLatlng = new google.maps.LatLng(lat, lon)

var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
});

marker.setPosition(new google.maps.LatLng(lat, lon));

//When user clicks tab1:
changeMarkerPos(marker, tab1lat, tab1lon);

//When user clicks tab1:
changeMarkerPos(marker, tab2lat, tab2lon);

function changeMarkerPos(marker, lat, lon){
    marker.setPosition(new google.maps.LatLng(lat, lon));
}