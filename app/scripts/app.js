angular.module('homeControlFrontendApp', [ 'ngResource', 'ngRoute' ])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/home', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/lighting', {
                templateUrl: 'views/lighting.html',
                controller: 'LightingCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });
