'use strict';

angular.module('test.userData', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'static/partials/userData.html',
    controller: 'UserData'
  });
}])

.controller('UserData', ['$scope', 'ContactsService', function($scope, ContactsService) {

    $scope.userdata = {
        "firstname": "Misha",
        "lastname": "Padalka",
        "bio": "Male",
        "dateofbirth": new Date("1985-05-08"),
        contacts: [
            { type: "email", caption: "Email", value: "misha.cn.ua@gmail.com"},
            { type: "jabber", caption: "Jabber", value: "magister@jabber.ua"},
            { type: "skype", caption: "Skype", value: "magister.7"},
            { type: "other", caption: "Other", value: "some other contact data"},
        ]
    };

    $scope.contacts = ContactsService.query();
    $scope.contacts.$promise.then(function(result) {
        $scope.contacts = result.objects;
    });

}]);
