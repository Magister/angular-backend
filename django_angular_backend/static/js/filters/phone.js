'use strict';

angular.module('test.phoneFilter', [])

.filter('phone', function() {
    return function(input) {
        if (input.slice(0, 2) === '+1') {
            input = '(USA) ' + input;
        }
        return input;
    };
});
