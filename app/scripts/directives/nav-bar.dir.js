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
                    scope.pageTitle = '';
                    scope.menuItems = [
                        {
                            title: 'Home',
                            location: '/home',
                            icon: 'home'
                        },
                        {
                            title: 'Lighting',
                            location: '/lighting',
                            icon: 'lightbulb-o'
                        },
                        {
                            title: 'About',
                            location: '/about',
                            icon: 'at'
                        },
                        {
                            title: 'Contact',
                            location: '/contact',
                            icon: 'phone'
                        }
                    ]


                }
            }
        }
    ]);

