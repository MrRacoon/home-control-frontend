'use strict';

/**
 * @ngdoc overview
 * @name homeControlFrontendApp
 * @description
 * # homeControlFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('homeControlFrontendApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lighting', {
        templateUrl: 'views/lighting.html',
        controller: 'LightingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
