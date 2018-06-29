function HomeCtrl($scope, $state) {
  $scope.query = '';

  $scope.$watch('query', () => console.log($scope.query));

  $scope.searchPlaces = function() {
    $state.go('placesIndex', { search: $scope.query });
  };
}

export default HomeCtrl;
