(function() {
    "use strict";
    angular
        .module('ninjaApp', ['ngRoute', 'templates', 'ngAnimate'])
        .config(configApp);

    configApp.$inject = ['$routeProvider', '$locationProvider'];

    function configApp($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/home', {
          templateUrl: 'home_template.html',
          controller: 'NinjasController as ninjas'
        })
        .when('/contact', {
          templateUrl: 'contact_template.html',
          controller: 'ContactController as contact'
        })
        .when('/contact-success', {
          templateUrl: 'contact_success_template.html'
        })
        .when('/directory', {
          templateUrl: 'directory_template.html',
          controller: 'NinjasController as ninjas'
        }).otherwise({
          redirectTo: '/home'
        })
    }
})();
