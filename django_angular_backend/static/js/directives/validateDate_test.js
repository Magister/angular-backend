'use strict';

describe('test.validateDateDirective module', function() {

    beforeEach(module('test.validateDateDirective'));

    describe('ValidateDate directive:', function(){

        var $compile, $rootScope, scope;

        beforeEach(inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
        }));

        it('should set "ng-invalid-date" class on an invalid date', function() {
            scope.invalidDate = "1995-01-0";
            var element = $compile('<input type="text" ng-model="invalidDate" validate-date/>')(scope);
            scope.$digest();
            expect(element.hasClass('ng-invalid-date')).toBe(true);
        });

        it('should set "ng-invalid-date" class on a valid date formatted other than yyyy-mm-dd', function() {
            scope.invalidDate = "1995/01/01";
            var element = $compile('<input type="text" ng-model="invalidDate" validate-date/>')(scope);
            scope.$digest();
            expect(element.hasClass('ng-invalid-date')).toBe(true);
        });

        it('should set "ng-valid-date" class on a valid date formatted as yyyy-mm-dd', function() {
            scope.validDate = "1995-01-20";
            var element = $compile('<input type="text" ng-model="validDate" validate-date/>')(scope);
            scope.$digest();
            expect(element.hasClass('ng-valid-date')).toBe(true);
        });
    });
});
