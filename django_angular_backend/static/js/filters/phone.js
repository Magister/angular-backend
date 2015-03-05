'use strict';

angular.module('test.phoneFilter', [])

.filter('phone', function() {
    return function(input) {
        return input;
    };
});