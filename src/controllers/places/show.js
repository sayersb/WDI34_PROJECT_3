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

  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/places/${$state.params.id}/comments/${comment._id}`
    })
      .then(res => $scope.place = res.data);
  };

  $http({
    method: 'GET',
    url: `/api/places/${$state.params.id}`
  })
    .then(res => {
      $scope.place = res.data;

      return $http({
        method: 'GET',
        url: '/api/forecast',
        params: { lat: $scope.place.location.lat, lng: $scope.place.location.lng }
      });
    })
    .then(res => $scope.forecast = res.data);

  $scope.upVote = function(comment) {
    comment.votes.count ++;
    $http({
      method: 'PUT',
      url: `/api/places/${$state.params.id}/comments/${comment._id}`,
      data: comment
    })
      .then((res) => $scope.place = res.data);
  };

  $scope.downVote = function(comment) {
    comment.votes.count --;
    $http({
      method: 'PUT',
      url: `/api/places/${$state.params.id}/comments/${comment._id}`,
      data: comment
    })
      .then((res) => $scope.place = res.data);
  };
}
export default PlacesShowCtrl;
