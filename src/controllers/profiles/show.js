function ProfilesShowCtrl($scope, $http, $state) {

  $scope.data = {};

  $scope.deleteProfile = function() {
    $http({
      method: 'DELETE',
      url: `/api/profiles/${$state.params.id}`
    })
      .then(() => $state.go('profilesIndex'));
  };
  $http({
    method: 'GET',
    url: `/api/profiles/${$state.params.id}`
  })
    .then(res => {
      $scope.place = res.data;

      return $http({
        method: 'GET',
        url: '/api/forecast',
        params: { lat: $scope.profile.location.lat, lng: $scope.profile.location.lng }
      });
    })
    .then(res => $scope.forecast = res.data);


}

export default ProfilesShowCtrl;
