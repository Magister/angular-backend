'use strict';

describe('test.lastAddedDirective module', function() {

    beforeEach(module('test.lastAddedDirective'));

    describe('LastAdded directive:', function(){

        var $compile, $rootScope, scope;

        beforeEach(inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
        }));

        it('should replace the element with appropriate content', inject(function($templateCache) {
            scope.contacts = [
                {
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
                },
                {
                    "birth_date": "1963-09-23",
                    "cellphone_number": "",
                    "date_created": "2014-05-24T09:28:20.149000",
                    "email": "",
                    "first_name": "Bruce",
                    "id": 2,
                    "jabber_id": "",
                    "last_name": "Ableson",
                    "phone_number": "",
                    "resource_uri": "/api/v1/contact/2"
                },
                {
                    "birth_date": "1945-12-31",
                    "cellphone_number": "",
                    "date_created": "2014-05-24T09:28:54.875000",
                    "email": "",
                    "first_name": "Leonard",
                    "id": 3,
                    "jabber_id": "",
                    "last_name": "Adleman",
                    "phone_number": "",
                    "resource_uri": "/api/v1/contact/3"
                },
                {
                    "birth_date": "1976-07-21",
                    "cellphone_number": "",
                    "date_created": "2014-05-24T09:30:13.729000",
                    "email": "",
                    "first_name": "Paul ",
                    "id": 4,
                    "jabber_id": "",
                    "last_name": "Allen",
                    "phone_number": "",
                    "resource_uri": "/api/v1/contact/4"
                },
                {
                    "birth_date": "1953-04-01",
                    "cellphone_number": "",
                    "date_created": "2014-05-24T09:30:56.328000",
                    "email": "dankottke@gmail.com",
                    "first_name": "Daniel ",
                    "id": 5,
                    "jabber_id": "",
                    "last_name": "Kottke",
                    "phone_number": "",
                    "resource_uri": "/api/v1/contact/5"
                }
            ];
            $templateCache.put('lastAdded.html', '<div>'
                           + '<div class="panel panel-default" ng-repeat="contact in contacts | orderBy:\'date_created\':true | limitTo:count">'
                           + '<div class="panel-body">'
                           + '<address>{{ contact.first_name }} {{ contact.last_name }} <br>{{ contact.phone_number}}</address>'
                           + '</div></div></div>');

            var element = $compile('<last-added count="3" model="contacts" template-url="lastAdded.html"></last-added>')(scope);
            scope.$digest();
            // notice order: Daniel Kottke should be before Paul Allen
            expect(element.html()).toMatch(/<address.+>\s*Daniel\s+Kottke.*<address.+>\s*Paul\s+Allen/);
        }));

    });
});
