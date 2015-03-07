/**
 * @ngdoc function
 * @name homeControlFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homeControlFrontendApp
 */
angular.module('homeControlFrontendApp')
.controller('LightingCtrl', [
    '$scope', 'lifx', function ($scope, lifx) {
    'use strict';

    $scope.l = lifx;

    $scope.colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'cyan',
        'blue',
        'black',
        'purple',
        'pink',
        'darkPink'
    ];

    $scope.selected = $scope.colors[0];

    $scope.$watch('selected', function (newColor) {
        if (newColor) {
            if ($scope.fade) {
                lifx.colorFade(newColor);
            } else {
                lifx.color(newColor);
            }
        }
    });




}]);
