'use strict';

// Declare app level module which depends on views, and components
angular.module('test', [
    'ngRoute',
    'test.userData',
    'test.contacts',
    'test.contactsService',
    'test.contactDetails',
    'test.phoneFilter',
    'test.lastAddedDirective',
    'test.jqDatePickerDirective'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);
