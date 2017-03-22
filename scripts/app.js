var studentenAppFilters = angular.module('studentenApp.filters', []);

var studentenApp = angular.module('studentenApp', ['ngRoute', 'studentenApp.filters']);

studentenApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .otherwise({ redirectTo: '/' });
});