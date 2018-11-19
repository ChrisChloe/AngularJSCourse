angular.module("phoneBook").factory("contactsAPI", function ($http, config) {
    var _getContacts = function () {
        return  $http.get(config.baseUrl + "/contacts");
    };
    var _saveContact = function (contact) {
        return  $http.post(config.baseUrl + "/contacts", contact);
    };

    return {
        getContacts: _getContacts,
        saveContact: _saveContact
    };
});