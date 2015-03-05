'use strict';

describe('test.contacts module:', function() {

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

    beforeEach(module('test.contacts'));
    beforeEach(module('test.contactsService'));

    describe('Contacts controller', function(){

        var Contacts, scope, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
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
            Contacts = $controller('Contacts', {
                $scope: scope
            });
        }));

        it('should create "contacts" model with one contact fetched from API', function() {
            expect(scope.contacts.objects).toBeUndefined();
            $httpBackend.flush();
            expect(scope.contacts.objects).toEqualData(
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

        it('should create an array with sort options', function() {
           expect(scope.sort_fields.length).toBeGreaterThan(1);
        });

        it('should set initial sort order', function() {
            expect(scope.sort_by).toBeDefined();
        })

    });
});
