import angular from 'angular';

import './directive.js';
import './controller.js';

angular.module('app', ['directive', 'controller']);

angular.element(document).ready(() => angular.bootstrap(document, ["app"]));