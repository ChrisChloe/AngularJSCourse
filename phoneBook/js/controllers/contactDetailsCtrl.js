angular.module("phoneBook").controller("contactDetailsCtrl", function ($scope, $routeParams, contact) {
    $scope.contact = contact.data;

    console.log(contact.data);
    console.log($routeParams.id);
});