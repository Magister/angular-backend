'use strict';

describe('test.userData module', function() {

    beforeEach(function(){
        jasmine.addMatchers({
            toEqualData: function(util, customEqualityTesters) {
                return {
                    compare: function(actual, expected) {
                        return {
                            pass: angular.equals(actual, expected)
                        };
                    }
                };
            }
        });
    });

    beforeEach(module('test.userData'));
    beforeEach(module('test.contactsService'));

    describe('UserData controller', function(){

        var MyData, scope, $httpBackend;

        beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api/v1/contact').respond({
                "meta": {
                    "limit": 1000,
                    "next": null,
                    "offset": 0,
                    "previous": null,
                    "total_count": 1
                },
                "objects": [
                    {"birth_date": "1933-03-02",
                     "cellphone_number": "",
                     "date_created": "2014-05-24T09:27:44.306000",
                     "email": "robertabbot@gmail.com",
                     "first_name": "Robert",
                     "id": 1,
                     "jabber_id": "",
                     "last_name": "Abbott",
                     "phone_number": "",
                     "resource_uri": "/api/v1/contact/1"}
                ]
            });
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
            expect(scope.userdata.contacts).toBeDefined();
            expect(scope.userdata.contacts.length).not.toBeLessThan(1);
        });

        it('should create "contacts" model with one contact fetched from API', function() {
            $httpBackend.flush();
            expect(scope.contacts).toEqualData(
                [
                    {"birth_date": "1933-03-02",
                     "cellphone_number": "",
                     "date_created": "2014-05-24T09:27:44.306000",
                     "email": "robertabbot@gmail.com",
                     "first_name": "Robert",
                     "id": 1,
                     "jabber_id": "",
                     "last_name": "Abbott",
                     "phone_number": "",
                     "resource_uri": "/api/v1/contact/1"}
                ]
            );
        });

    });
});
