(function() {
    "use strict";
    angular
        .module('ninjaApp', ['ngRoute', 'templates', 'ngAnimate'])
        .config(configApp);

    configApp.$inject = ['$routeProvider'];

    function configApp($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'home_template.html',
          controller: 'NinjasController as ninjas'
        })
        .when('/directory', {
          templateUrl: 'directory_template.html',
          controller: 'NinjasController as ninjas'
        }).otherwise({
          redirectTo: '/home'
        })
    }
})();
