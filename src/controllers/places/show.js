function PlacesShowCtrl($scope, $http, $state) {

  $scope.data = {};

  $scope.deletePlace = function() {
    $http({
      method: 'DELETE',
      url: `/api/places/${$state.params.id}`
    })
      .then(() => $state.go('placesIndex'));
  };

  $scope.createComment = function() {
    $http({
      method: 'POST',
      url: `/api/places/${$state.params.id}/comments`,
      data: $scope.data
    })
      .then(res => $scope.place = res.data);
  };

}
export default PlacesShowCtrl;
