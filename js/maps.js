function initMap() {
  var latlong = {lat: -21.76256298, lng: -41.32012436};
	
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: -21.76256298, lng: -41.32142436},
    mapTypeControl: false,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: false,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: false,
    streetViewControl: false,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    }
  });

  var marker = new google.maps.Marker({
	position: latlong,
	map: map,
	title: 'Hello World!'
  });
}