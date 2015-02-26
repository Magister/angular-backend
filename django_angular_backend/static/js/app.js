'use strict';

// Declare app level module which depends on views, and components
angular.module('test', [
    'ngRoute',
    'test.userData'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);
