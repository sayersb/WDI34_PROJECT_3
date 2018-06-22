function PlacesIndexCtrl($scope, $http) {

  $http({
    method: 'GET',
    url: '/api/places'
  })
    .then(res => $scope.places = res.data);
}

export default PlacesIndexCtrl;
