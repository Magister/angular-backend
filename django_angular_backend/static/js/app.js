'use strict';

// Declare app level module which depends on views, and components
angular.module('test', [
    'ngRoute',
    'test.userData',
    'test.contacts',
    'test.contactsService'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);
