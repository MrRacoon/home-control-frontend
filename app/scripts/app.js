angular.module('homeControlFrontendApp', [ 'ngResource', 'ngRoute' ])
    .constant('Pages', {

        // The default page, use the pages defined key

        default: 'home',

        // The following configurations will produce pages
        // The order here, dictates the order in which the appropriate menu entries will be made

        settings: {
            home: {
                active: true,
                location: '/home',
                menu: {
                    title: 'Home',
                    icon: 'home',
                    order: 0
                },
                page: {
                    pageTitle: 'Home'
                },
                routing: {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                }
            },
            lighting: {
                active: true,
                location: '/lighting',
                menu: {
                    title: 'Lighting Control',
                    icon: 'lightbulb-o',
                    order: 1
                },
                page: {
                    pageTitle: 'Lighting Controller'
                },
                routing: {
                    templateUrl: 'views/lighting.html',
                    controller: 'LightingCtrl'
                }
            },
            about: {
                active: true,
                location: '/about',
                menu: {
                    title: 'About this App',
                    icon: 'at',
                    order: 2
                },
                page: {
                    pageTitle: 'About Me and this wonderful page',
                },
                routing: {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl'
                }
            },
            contact: {
                active: true,
                location: '/contact',
                menu: {
                    title: 'Contact me',
                    icon: 'phone',
                    order: 3
                },
                page: {
                    pageTitle: 'Contact Me'
                },
                routing: {
                    templateUrl: 'views/contact.html',
                    controller: 'ContactCtrl'
                }
            }
        }
    })
    .config(['$routeProvider','Pages',
        function ($routeProvider, Pages) {
            'use strict';

            // Fill the route provider with all settings pages defined above
            _.forOwn(Pages.settings, function (value, key) {
                $routeProvider.when(value.location, value.routing)
            });

            // The default case
            $routeProvider.otherwise({
                redirectTo: Pages.settings[Pages.default].location
            });
        }
    ]);
