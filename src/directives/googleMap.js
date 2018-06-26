/* global google */

function googleMap(){
  return {
    restrict: 'A',
    template: '<div class="map">GOOGLE MAP</div>',
    replace: true,
    scope: {
      location: '='
    },
    link($scope, $element) {


      $scope.$watch('location', () => console.log($scope.location));
      const map =  new google.maps.Map($element[0], {
        zoom: 14
      });

      const icon = {
        url: 'http://www.stickpng.com/assets/images/58c5828a09e8bc1b42c7794b.png',
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0)
      };


      const marker =  new google.maps.Marker({
        map: map,
        icon: icon,
        // position: { lat: 51.51, lng: -0.085 },
        animation: google.maps.Animation.DROP
      });

      $scope.$watch('location', () => {
        map.setCenter($scope.location);
        marker.setPosition($scope.location);
      });


    }
  };
}

export default googleMap;
