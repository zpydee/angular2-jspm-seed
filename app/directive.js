import angular from 'angular';

angular.module('directive', [])
    .directive('appDrct', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directive.html',
            controller: 'Controller'
        }
    })