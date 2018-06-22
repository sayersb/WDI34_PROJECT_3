function Router($stateprovider, $urlRouterProvider) {
  $stateprovider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })

    .state('placesIndex', {
      url: '/places',
      templateUrl: './veiws/places/index.html',
      controller: 'PlacesIndexCtrl'
    })

  $urlRouterProvider.otherwise('/');
}

export default Router;
