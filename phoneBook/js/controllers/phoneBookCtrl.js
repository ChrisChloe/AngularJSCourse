
        angular.module("phoneBook").controller("phoneBookCtrl", function ($scope, contacts, companies, serialGenerator) {
            
            $scope.app = "Phone Book";
            $scope.contacts = contacts.data;
            $scope.companies = companies.data;
            
            var generateSerial = function (contacts) {
                contacts.forEach(function(item) {
                    item.serial = serialGenerator.generate();
                });
            };

            $scope.addContact = function (contact) {           
                contact.serial = serialGenerator.generate();
                contactsAPI.saveContact(contact).then( function (response) {
                    delete $scope.contact;
                    $scope.contactForm.$setPristine();
                    loadContacts();
                });
            };
            $scope.deleteContact = function (contacts) {
                $scope.contacts = contacts.filter(function (contact) {
                    if (!contact.selected) return contact;
                });
            };
           
            $scope.isContactSelected = function (contacts) {
                return contacts.some(function (contact) {
                    return contact.selected;
                });
            };
            $scope.orderBy = function (field) {
                $scope.orderCriteria = field;
                $scope.orderDirection = !$scope.orderDirection;
            };

            generateSerial($scope.contacts);          
        });