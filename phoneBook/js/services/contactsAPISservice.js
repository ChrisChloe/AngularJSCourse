angular.module("phoneBook").factory("contactsAPI", function ($http, config) {
    var _getContacts = function () {
        return  $http.get(config.baseUrl + "/contacts");
    };
    var _getContact = function (id) {
        return  $http.get(config.baseUrl + "/contacts/" + id);
    };
    var _saveContact = function (contact) {
        return  $http.post(config.baseUrl + "/contacts", contact);
    };

    return {
        getContacts: _getContacts,
        getContact: _getContact,
        saveContact: _saveContact
    };
});