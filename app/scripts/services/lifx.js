angular.module('homeControlFrontendApp').service('lifx', [
    '$http',
    'Settings',
    function ($http, Settings) {
        'use strict';

        var makeRoute = function(endPoint) {
            return 'http://' + Settings.lighting.host + ':' + Settings.lighting.port + endPoint;
        };

        var hit = function (route) {
            $http.get(makeRoute(route));
        };

        this.lightsOn = function () {
            hit('/lighting/on');
        };

        this.lightsOff = function () {
            return hit('/lighting/off');
        };

        this.bulbs = function () {
            return hit('/lighting/bulbs');
        };

        this.colorFade = function (color) {
            return hit('/lighting/colorFade/' + color);
        };

        this.color = function (color) {
            return hit('/lighting/color/' + color);
        };

}]);
