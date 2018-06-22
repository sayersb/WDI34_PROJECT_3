function PlacesIndexCtrl($scope, $http, $stateParams) {
  $scope.search = $stateParams.search || '';
  $scope.sort = 'name';

  $http({
    method: 'GET',
    url: '/api/places'
  })
    .then(res => $scope.places = res.data);
}

export default PlacesIndexCtrl;
