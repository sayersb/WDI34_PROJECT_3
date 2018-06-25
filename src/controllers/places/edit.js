function PlacesEditCtrl($scope, $http, $state) {

  $scope.updateLocation = function(location){
    $scope.data.location = location;
    $scope.$apply();
  };


  $scope.updatePlace = function() {
    $http({
      method: 'PUT',
      url: `/api/places/${$state.params.id}`,
      data: $scope.data
    })
      .then(() => $state.go('placesShow', { id: $state.params.id }));
  };

  $http({
    method: 'GET',
    url: `/api/places/${$state.params.id}`
  })
    .then(res => $scope.data = res.data);
}

export default PlacesEditCtrl;
