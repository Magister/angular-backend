'use strict';

describe('test.contactDetails module', function() {

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

    beforeEach(module('test.contactDetails'));
    beforeEach(module('test.contactsService'));

    describe('ContactDetails controller', function(){

        var ContactDetails, scope, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api/v1/contact/schema').respond({
                "allowed_detail_http_methods": [
                    "get",
                    "post",
                    "put",
                    "delete",
                    "patch"
                ],
                "allowed_list_http_methods": [
                    "get",
                    "post",
                    "put",
                    "delete",
                    "patch"
                ],
                "default_format": "application/json",
                "default_limit": 1000,
                "fields": {
                    "cellphone_number": {
                        "blank": true,
                        "default": "",
                        "help_text": "Unicode string data. Ex: \"Hello World\"",
                        "nullable": false,
                        "readonly": false,
                        "type": "string",
                        "unique": false
                    },
                    "first_name": {
                        "blank": false,
                        "default": "No default provided.",
                        "help_text": "Unicode string data. Ex: \"Hello World\"",
                        "nullable": false,
                        "readonly": false,
                        "type": "string",
                        "unique": false
                    }
                }
            });
            $httpBackend.expectGET('api/v1/contact/1').respond({
                "birth_date": "1933-03-02",
                "cellphone_number": "",
                "date_created": "2014-05-24T09:27:44.306000",
                "email": "robertabbot@gmail.com",
                "first_name": "Robert",
                "id": 1,
                "jabber_id": "",
                "last_name": "Abbott",
                "phone_number": "",
                "resource_uri": "/api/v1/contact/1"
            });
            scope = $rootScope.$new();
            ContactDetails = $controller('ContactDetails', {
                $scope: scope,
                $routeParams: {contactId: 1}
            });
        }));

        it('should create a "schema" model and a "contact" model with a contact fetched from API', function() {
            expect(scope.contact).toEqualData({});
            expect(scope.schema).toEqualData({});
            $httpBackend.flush();
            expect(scope.schema.fields.cellphone_number.blank).toBe(true);
            expect(scope.schema.fields.first_name.blank).toBe(false);
            expect(scope.contact).toEqualData({
                "birth_date": "1933-03-02",
                "cellphone_number": "",
                "date_created": "2014-05-24T09:27:44.306000",
                "email": "robertabbot@gmail.com",
                "first_name": "Robert",
                "id": 1,
                "jabber_id": "",
                "last_name": "Abbott",
                "phone_number": "",
                "resource_uri": "/api/v1/contact/1"
            });
        });

        it('should send changed contact using PUT request and set a success flag', function() {
            expect(scope.contact).toEqualData({});
            $httpBackend.flush();
            scope.contact = {
                "birth_date": "1930-02-01",
                "cellphone_number": "+1234567890",
                "date_created": "2014-05-24T09:27:44.306000",
                "email": "some_mail@gmail.com",
                "first_name": "User",
                "id": 1,
                "jabber_id": "jid@jabber.com",
                "last_name": "Changed",
                "phone_number": "+9876543210",
                "resource_uri": "/api/v1/contact/1"
            };
            $httpBackend.expectPUT('api/v1/contact/1', {
                    "birth_date": "1930-02-01",
                    "cellphone_number": "+1234567890",
                    "date_created": "2014-05-24T09:27:44.306000",
                    "email": "some_mail@gmail.com",
                    "first_name": "User",
                    "id": 1,
                    "jabber_id": "jid@jabber.com",
                    "last_name": "Changed",
                    "phone_number": "+9876543210",
                    "resource_uri": "/api/v1/contact/1"
                }).respond(200);
            scope.update();
            $httpBackend.flush();
            expect(scope.showSuccess).toBe(true);
        });

        it('should set an error flag in case of server error', function() {
            expect(scope.contact).toEqualData({});
            $httpBackend.flush();
            scope.contact = {
                "birth_date": "1930-02-01",
                "cellphone_number": "+1234567890",
                "date_created": "2014-05-24T09:27:44.306000",
                "email": "some_mail@gmail.com",
                "first_name": "User",
                "id": 0,
                "jabber_id": "jid@jabber.com",
                "last_name": "Changed",
                "phone_number": "+9876543210",
                "resource_uri": "/api/v1/contact/1"
            };
            $httpBackend.expectPUT('api/v1/contact/0', {
                    "birth_date": "1930-02-01",
                    "cellphone_number": "+1234567890",
                    "date_created": "2014-05-24T09:27:44.306000",
                    "email": "some_mail@gmail.com",
                    "first_name": "User",
                    "id": 0,
                    "jabber_id": "jid@jabber.com",
                    "last_name": "Changed",
                    "phone_number": "+9876543210",
                    "resource_uri": "/api/v1/contact/1"
                }).respond(403);
            scope.update();
            $httpBackend.flush();
            expect(scope.showError).toBe(true);
        });

    });
});
