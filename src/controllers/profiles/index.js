function ProfilesIndexCtrl($scope, $http) {

  $http({
    method: 'GET',
    url: '/api/profile'
  })
    .then(res => $scope.places = res.data);
}

export default ProfilesIndexCtrl;
