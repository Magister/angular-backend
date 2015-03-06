'use strict';

angular.module('test.contactDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/:contactId', {
    templateUrl: 'static/partials/contactDetails.html',
    controller: 'ContactDetails'
  });
}])

.controller('ContactDetails', ['$scope', '$routeParams', 'ContactsService', function($scope, routeParams, ContactsService) {
    
    $scope.schema = ContactsService.schema();
    $scope.contact = ContactsService.get({contactId: routeParams.contactId});
    $scope.contact.$promise.then(function(result) {
        $scope.contact = result;
        $scope.contact.birth_date = new Date($scope.contact.birth_date);
    });

    $scope.update = function() {
        if (!$scope.frm_contact_details.$valid) {
            alert('Please, fill the form correctly.')
            return;
        }
        ContactsService.update($scope.contact, function() {
            $scope.showSuccess = true;
        }, function() {
            $scope.showError = true;
        });
    }

}]);
