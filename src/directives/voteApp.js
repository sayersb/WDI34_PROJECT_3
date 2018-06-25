const app = angular.module('voteApp', []);

app.controller('VotesCtrl', function ($scope) {
  $scope.upVote = function () {
    $scope.vote++;
  };

  $scope.downVote = function () {
    $scope.vote--;
  };

  $scope.vote = 0;
});
