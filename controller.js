import angular from 'angular';

import {Service}from 'service.js';
import Apple from 'Apple.js';

angular.module('service', [])
.service('Service', Service)

angular.module('controller', ['service'])
.controller('Controller', function($scope, Service) {
        $scope.myvar = Service.ping;
        var apple = new Apple();
        apple.tellColor();
    })
