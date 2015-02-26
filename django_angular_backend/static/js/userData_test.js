'use strict';

describe('test.userData module', function() {

    beforeEach(module('test.userData'));

    describe('UserData controller', function(){

        var MyData, scope;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            MyData = $controller('UserData', {
                $scope: scope
            });
        }));

        it('should have an object with user data', function() {
            expect(scope.userdata).toBeDefined();
            expect(scope.userdata.firstname).toBeDefined();
            expect(scope.userdata.lastname).toBeDefined();
            expect(scope.userdata.dateofbirth).toBeDefined();
            expect(scope.userdata.bio).toBeDefined();
            expect(scope.userdata.email).toBeDefined();
            expect(scope.userdata.jabber).toBeDefined();
            expect(scope.userdata.skype).toBeDefined();
            expect(scope.userdata.other).toBeDefined();
        });

    });
});
