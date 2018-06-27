function ProfilesEditCtrl($scope, $http, $state) {

  $scope.updateLocation = function(location){
    $scope.data.location = location;
    $scope.$apply();
  };


  $scope.updateProfile = function() {
    $http({
      method: 'PUT',
      url: `/api/profiles/${$state.params.id}`,
      data: $scope.data
    })
      .then(() => $state.go('profileShow', { id: $state.params.id }));
  };

  $http({
    method: 'GET',
    url: `/api/profiles/${$state.params.id}`
  })
    .then(res => $scope.data = res.data);
}

export default ProfilesEditCtrl;
