/**
 * Created by erik on 3/22/15.
 */



angular.module('homeControlFrontendApp').directive('navBar', [
    function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {  },
            templateUrl: 'views/nav-bar.html',
            transclude: true,
            link: function (scope, elems, attrs) {

                scope.active = false;

                scope.toggleActive = function () {
                    scope.active = !scope.active;
                };

            }
        }


    }
]);

