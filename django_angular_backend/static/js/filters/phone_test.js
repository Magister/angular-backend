'use strict';

describe('test.phoneFilter module:', function() {

    beforeEach(module('test.phoneFilter'));

    describe('Phone filter', function(){

        var phoneFilter;

        beforeEach(inject(function($filter) {
            phoneFilter = $filter('phone');
        }));

        it('should add (USA) prefix to phones starting with +1', function() {
            expect(phoneFilter('+12345678')).toMatch(/\(USA\)\s+\+12345678/);
            expect(phoneFilter('1+2345678')).toBe('1\+2345678');
        });

        it('should leave phones in all other zones unchanged', inject(function(phoneFilter) {
            expect(phoneFilter('+3801234578')).toBe('+3801234578');
        }));

    });
});
