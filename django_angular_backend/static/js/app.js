'use strict';

// Declare app level module which depends on views, and components
angular.module('test', [
    'ngRoute',
    'test.userData',
    'test.contacts',
    'test.contactsService',
    'test.contactDetails',
    'test.phoneFilter'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);
