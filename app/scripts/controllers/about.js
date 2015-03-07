'use strict';

/**
 * @ngdoc function
 * @name homeControlFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homeControlFrontendApp
 */
angular.module('homeControlFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
