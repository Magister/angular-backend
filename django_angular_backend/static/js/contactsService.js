'use strict';

angular.module('test.contactsService', ['ngResource'])

.factory('ContactsService', ['$resource', function($resource) {
    
    return $resource('api/v1/contact/:contactId', {}, {
        query: {method: 'GET', params:{contactId:''}, isArray: false},
        update: {method: 'PUT', params:{contactId: '@id'}},
        schema: {method: 'GET', params:{contactId: 'schema'}}
    });

}]);
