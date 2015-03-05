'use strict';

angular.module('test.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'static/partials/contacts.html',
    controller: 'Contacts'
  });
}])

.controller('Contacts', ['$scope', 'ContactsService', function($scope, ContactsService) {
    
    $scope.contacts = ContactsService.query();
    $scope.sort_fields = [
               {id: "first_name+last_name", value: "Name"},
               {id: "email", value: "Email"},
               {id: "cellphone_number", value: "Cell phone"},
               {id: "phone_number", value: "Landline"}
           ];
    $scope.sort_by = $scope.sort_fields[0];

}]);
