function ProfilesShowCtrl($scope, $http, $state) {

  $scope.data = {};

  $scope.deleteProfile = function() {
    $http({
      method: 'DELETE',
      url: `/api/profiles/${$state.params.id}`
    })
      .then(() => $state.go('profilesIndex'));
  };


}

export default ProfilesShowCtrl;
