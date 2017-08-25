var app = angular.module('manoApplikacija', ["ngRoute"]);

app.config(function($routeProvider, $httpProvider, $locationProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    $routeProvider
        .when("/", {
            templateUrl : "main.html"
        })
        .when("/Evaldas", {
            templateUrl : "Evaldas.html"
        })
        .when("/Tautvydas", {
            templateUrl : "tautvydas.html"
        })
        .when("/Paulius", {
            templateUrl : "paulius.html"
        })
        .when("/Gytis", {
            templateUrl : "Gytis.html"
        })
        .when("/Vytenis", {
            templateUrl : "vytenis.html"
        })
        .when("/Mantas", {
            templateUrl : "mantas.html"
        })
        .when("/Rytis", {
            templateUrl : "Rytis.html"
        })
        .when("/Andrius", {
            templateUrl : "andrius.html"
        });
    $locationProvider.html5Mode(true);

});