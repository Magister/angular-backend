'use strict';

angular.module('test.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'static/partials/contacts.html',
    controller: 'Contacts'
  });
}])

.controller('Contacts', ['$scope', 'ContactsService', 'filterFilter', function($scope, ContactsService, filterFilter) {
    
    $scope.page_size = 5;
    $scope.current_page = 0;

    $scope.contacts = ContactsService.query();
    $scope.contacts.$promise.then(function(result) {
        $scope.contacts = result;
        $scope.updateFilter();
    });

    $scope.sort_fields = [
               {id: "first_name+last_name", value: "Name"},
               {id: "email", value: "Email"},
               {id: "cellphone_number", value: "Cell phone"},
               {id: "phone_number", value: "Landline"}
           ];

    $scope.sort_by = $scope.sort_fields[0];

    $scope.updateFilter = function(term) {
        if ($scope.contacts.objects === undefined) {
            // data are not ready, nothing to filter
            return;
        }
        if (term === undefined) {
            term = $scope.filter_by;
        }
        $scope.filtered_contacts = filterFilter($scope.contacts.objects, function(value, index) {
            var pattern = new RegExp(term, 'i');
            return (value.first_name + value.last_name).match(pattern)
                || value.email.match(pattern)
                || value.cellphone_number.match(pattern)
                || value.phone_number.match(pattern);
        });
        $scope.total_pages = Math.ceil($scope.filtered_contacts.length / $scope.page_size);
        if ($scope.current_page * $scope.page_size >= $scope.filtered_contacts.length - $scope.page_size) {
            $scope.current_page = Math.ceil($scope.filtered_contacts.length / $scope.page_size) - 1;
        }
    };

    $scope.$watch('filter_by', function(term) {
        $scope.updateFilter(term);
    });

    $scope.nextPage = function() {
        if (($scope.current_page + 1) * $scope.page_size < $scope.filtered_contacts.length) {
            $scope.current_page += 1;
        }
    }

    $scope.prevPage = function() {
        if ($scope.current_page > 0) {
            $scope.current_page -= 1;
        }
    }

}]);
