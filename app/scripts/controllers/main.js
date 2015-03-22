angular.module('homeControlFrontendApp')
    .controller('MainCtrl', [
        '$scope',
        function ($scope) {
            'use strict';
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }]);
