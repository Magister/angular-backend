'use strict';

angular.module('test.userData', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'static/partials/userData.html',
    controller: 'UserData'
  });
}])

.controller('UserData', ['$scope', function($scope) {

    $scope.userdata = {
        "firstname": "Misha",
        "lastname": "Padalka",
        "bio": "Male",
        "dateofbirth": new Date("1985-05-08"),
        "email": "misha.cn.ua@gmail.com",
        "jabber": "magister@jabber.ua",
        "skype": "magister.7",
        "other": "empty"
    };

}]);
