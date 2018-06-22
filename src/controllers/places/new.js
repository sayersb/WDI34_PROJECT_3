function PlacesNewCtrl($scope, $http, $state) {
  $scope.data = {};

  $scope.updateLocation = function(location) {
    $scope.data.location = location;
    $scope.$apply();
  };

  $scope.createPlace = function() {
    $http({
      url: '/api/places',
      method: 'POST',
      data: $scope.data
    })
      .then(() => $state.go('placesIndex'));
  };
}

export default PlacesNewCtrl;
