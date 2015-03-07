'use strict';

/**
 * @ngdoc function
 * @name homeControlFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeControlFrontendApp
 */
angular.module('homeControlFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
