var app = angular.module('manoApplikacija', []);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.htm"
        })
        .when("/red", {
            templateUrl : "red.htm"
        })
        .when("/green", {
            templateUrl : "green.htm"
        })
        .when("/blue", {
            templateUrl : "blue.htm"
        });
});