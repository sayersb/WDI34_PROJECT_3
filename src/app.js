import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';
import 'angular-messages';
import 'filepicker-js';
import 'angular-filepicker/dist/angular_filepicker';
import 'bulma';
import './scss/style.scss';

import Router from './config/routes';
import Auth from './config/satellizer';
import Upload from './config/filepicker';
import MainCtrl from './controllers/main';
import HomeCtrl from './controllers/home';
import PlacesIndexCtrl from './controllers/places/index';
import PlacesShowCtrl from './controllers/places/show';
import PlacesNewCtrl from './controllers/places/new';
import PlacesEditCtrl from './controllers/places/edit';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';
import bulmaCard from './directives/bulmaCard';
import googleMap from './directives/googleMap';
import googleAutocomplete from './directives/googleAutocomplete';
import filePicker from './directives/filePicker';
import ProfilesShowCtrl from './controllers/profiles/show';

angular.module('placesApi', [
  'ui.router',
  'satellizer',
  'ngMessages',
  'angular-filepicker'
])
  .config(Router)
  .config(Auth)
  .config(Upload)
  .controller('MainCtrl', MainCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('PlacesIndexCtrl', PlacesIndexCtrl)
  .controller('PlacesShowCtrl', PlacesShowCtrl)
  .controller('PlacesNewCtrl', PlacesNewCtrl)
  .controller('PlacesEditCtrl', PlacesEditCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('ProfilesShowCtrl', ProfilesShowCtrl)
  .directive('bulmaCard', bulmaCard)
  .directive('googleMap', googleMap)
  .directive('googleAutocomplete', googleAutocomplete)
  .directive('filePicker', filePicker);
