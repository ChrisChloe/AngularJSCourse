angular.module("phoneBook").config(function ($routeProvider) {
    $routeProvider.when("/contacts", {
        templateUrl: "view/contacts.html",
        controller: "phoneBookCtrl",
        resolve: {
            contacts: function (contactsAPI) {
                return contactsAPI.getContacts();
            },
            companies: function (companiesAPI) {
                return companiesAPI.getCompanies();
            }
        }
    });
    $routeProvider.when("/newContact", {
        templateUrl: "view/newContact.html",
        controller: "newContactCtrl",
        resolve: {
            companies : function (companiesAPI) {
                return companiesAPI.getCompanies();
            }
        } 
    });
    $routeProvider.when("/contactDetails/:id", {
        templateUrl: "view/contactDetails.html",
        controller: "contactDetailsCtrl",
        resolve: {
            contact: function (contactsAPI, $route) {
                return contactsAPI.getContact($route.current.params.id);
            }
        }
    });
    $routeProvider.when("/error", {
        templateUrl: "view/error.html",
    });
    $routeProvider.otherwise({redirectTo: "/contacts"});
});