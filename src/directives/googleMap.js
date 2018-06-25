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


      const marker =  new google.maps.Marker({
        map: map,
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
