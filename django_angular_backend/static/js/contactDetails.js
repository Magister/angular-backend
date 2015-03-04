'use strict';

angular.module('test.contactDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/:contactId', {
    templateUrl: 'static/partials/contactDetails.html',
    controller: 'ContactDetails'
  });
}])

.controller('ContactDetails', ['$scope', '$routeParams', 'ContactsService', function($scope, routeParams, ContactsService) {
    
}]);
