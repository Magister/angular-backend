'use strict';

angular.module('test.contactDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/:contactId', {
    templateUrl: 'static/partials/contactDetails.html',
    controller: 'ContactDetails'
  });
}])

.controller('ContactDetails', ['$scope', '$routeParams', 'ContactsService', function($scope, routeParams, ContactsService) {
    
    // check if browser supports input type=date...
    // in real big project it's better to use something like Modernizr, 
    // but here we need only one check - so stay with manual way for now
    var i = document.createElement("input");
    i.setAttribute("type", "date");
    $scope.date_input_supported = (i.type === "date");

    $scope.schema = ContactsService.schema();
    $scope.contact = ContactsService.get({contactId: routeParams.contactId});
    $scope.contact.$promise.then(function(result) {
        $scope.contact = result;
        if ($scope.date_input_supported) {
            $scope.contact.birth_date = new Date($scope.contact.birth_date);
        }
    });

    $scope.update = function() {
        ContactsService.update($scope.contact, function() {
            $scope.showSuccess = true;
        }, function() {
            $scope.showError = true;
        });
    }

}]);
