if (Meteor.isClient) {
  Template.maps.onRendered(function(){
     initMap();
    })
initMap = function(){
    var map;
    function initialize() {
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
      };
      map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
}

}
}
