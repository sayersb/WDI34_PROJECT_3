function secureState($q, $state, $auth, $rootScope) {
  return new $q(resolve => {
    if($auth.isAuthenticated()) return resolve();

    $rootScope.$broadcast('flashMessage', {
      type: 'warning',
      content: 'Please log in'
    });

    $state.go('login');
  });
}




function Router($stateprovider, $urlRouterProvider) {
  $stateprovider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'HomeCtrl'
    })
    .state('placesIndex', {
      url: '/places',
      templateUrl: './veiws/places/index.html',
      controller: 'PlacesIndexCtrl',
      params: { search: null }
    })
    .state('placesShow', {
      url: '/places/:id',
      templateUrl: './views/places/show.html',
      controller: 'PlacesShowCtrl'
    })
    .state('placesEdit', {
      url: '/places/:id/edit',
      templateUrl: './views/places/edit.html',
      controller: 'PlacesEditCtrl',
      resolve: { secureState }
    })
    .state('placesNew', {
      url: '/places/new',
      templateUrl: './views/places/new.html',
      controller: 'PlacesNewCtrl',
      resolve: { secureState }
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/auth/login.html',
      controller: 'AuthLoginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/auth/register.html',
      controller: 'AuthRegisterCtrl'
    });


  $urlRouterProvider.otherwise('/');
}

export default Router;
