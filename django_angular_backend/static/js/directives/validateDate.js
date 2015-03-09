angular.module('test.validateDateDirective', [])

.directive('validateDate', [function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, controller) {
            scope.$watch(attrs.ngModel, function(value) {
                var validDate = !isNaN(Date.parse(value));
                var validDateFormat = (value !== undefined) && value.match(/^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/) !== null;
                controller.$setValidity('date', validDate && validDateFormat);
            });
        }
    }
}]);
