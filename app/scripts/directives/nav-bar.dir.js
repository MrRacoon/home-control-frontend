angular.module('homeControlFrontendApp')
    .directive('navBar', [
        '$location',
        function ($location) {
            'use strict';
            return {
                restrict: 'E',
                scope: {  },
                templateUrl: 'views/nav-bar.html',
                transclude: true,
                link: function (scope, elems, attrs) {
                    scope.active = false;
                    scope.title = $location.path();
                    scope.setPath = function (path) {
                        scope.title = path;
                    };
                }
            }
        }
    ]);

