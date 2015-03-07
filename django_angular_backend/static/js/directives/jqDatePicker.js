'use strict';

angular.module('test.jqDatePickerDirective', [])

.directive('jqDatePicker', ['$parse', function($parse) {

    function link(scope, element, attributes) {
        var model = $parse(attributes.ngModel);
        angular.element(element).datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function(dateText) {
                scope.$apply(function(scope) {
                    model.assign(scope, dateText);
                });
            }
        });
    }

    return {
        restrict: 'A',
        link: link
    }

}]);
