function MainCtrl($scope, $auth, $state, $rootScope, $timeout, $transitions) {
  $scope.isAuthenticated = $auth.isAuthenticated;
  $scope.navbarOpen = false;

  $transitions.onSuccess({}, () => {
    $scope.navbarOpen = false;
    $scope.isHomepage = $state.$current.name === 'home';
  });

  $rootScope.$on('flashMessage', (e, data) => {
    $scope.flashMessage = data;

    $timeout(() => $scope.flashMessage = null, 4000);
  });

  $scope.toggleMenu = function() {
    $scope.navbarOpen = !$scope.navbarOpen;
  };

  $scope.logout = function() {
    $auth.logout();
    $state.go('home');
  };
}

const app = angular.module('voteApp', []);

app.controller('MainCtrl', function ($scope) {
  $scope.upVote = function () {
    $scope.vote++;
  };

  $scope.downVote = function () {
    $scope.vote--;
  };

  $scope.vote = 0;
});



export default MainCtrl;
