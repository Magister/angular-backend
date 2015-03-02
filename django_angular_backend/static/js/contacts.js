'use strict';

angular.module('test.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/', {
    templateUrl: 'static/partials/contacts.html',
    controller: 'Contacts'
  });
}])

.controller('Contacts', ['$scope', 'ContactsService', function($scope, ContactsService) {
    
    $scope.contacts = ContactsService.query();

}]);
