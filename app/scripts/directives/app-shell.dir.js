angular.module('homeControlFrontendApp')
    .directive('appShell', [
        '$location',
        'Pages',
        function ($location, Pages) {
            'use strict';
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'views/app-shell.html',
                transclude: true,
                link: function (scope, elems, attrs) {

                    scope.clickedItem = function (title) {
                        scope.pageTitle = title;
                    };

                    scope.menuItems = _.chain(Pages.settings)
                        .values()
                        .filter('active')
                        .map(function (obj) {
                            var ret = obj.menu;
                            ret.location = obj.location;
                            return ret
                        })
                        .value();
                    console.log(scope.menuItems);

                    scope.active = false;

                    scope.pageTitle = '';

                }
            }
        }
    ]);

