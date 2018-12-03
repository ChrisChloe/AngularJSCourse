angular.module("phoneBook").controller("newContactCtrl", function ($scope, contactsAPI, serialGenerator, $location, companies) {
    
    $scope.companies = companies.data;

    $scope.addContact = function (contact) {
        contact.serial = serialGenerator.generate();
        contactsAPI.saveContact(contact).then( function (response) {
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            $location.path("/contacts");
        });
    };
});