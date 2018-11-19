angular.module("phoneBook").service("companiesAPI", function ($http, config) {
    this.getCompanies = function () {
        return $http.get(config.baseUrl + "/companies");
    };
});