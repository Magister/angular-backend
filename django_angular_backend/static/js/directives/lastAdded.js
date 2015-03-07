'use strict';

angular.module('test.lastAddedDirective', [])

.directive('lastAdded', function($templateCache) {

    return {
        restrict: 'EA',
        scope: {
            count: '=',
            contacts: '=model'
        },
        templateUrl: function(elem, attrs) {
            return attrs.templateUrl;
        }
    }
});
