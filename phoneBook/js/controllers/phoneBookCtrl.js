
        angular.module("phoneBook").controller("phoneBookCtrl", function ($scope, contactsAPI, companiesAPI, serialGenerator) {
            
            $scope.app = "Phone Book";
            $scope.contacts = [];
            $scope.companies = [];
            
            var loadContacts = function () {
               contactsAPI.getContacts().then(function (response) {
                    $scope.contacts = response.data;
                }).then(function (response) {
                    $scope.message = "Não foi possível carregar os dados";
                });
            };

            var loadCompanies = function () {
                companiesAPI.getCompanies().then( function (response) {
                    $scope.companies = response.data;
                });
            }

            $scope.addContact = function (contact) {           
                contact.serial = serialGenerator.generate();
                contact.date = new Date();
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
            }
            $scope.isContactSelected = function (contacts) {
                return contacts.some(function (contact) {
                   return contact.selected;
               });
            };
            $scope.orderBy = function (field) {
                $scope.orderCriteria = field;
                $scope.orderDirection = !$scope.orderDirection;
            };

            loadContacts();
            loadCompanies();
        });