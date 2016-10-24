(function() {
  "user strict";
  angular.module('ninjaApp')
    .factory('ninjasService', ninjasService);

  ninjasService.$inject = ['$http'];

  function ninjasService($http) {
    return {
      getNinjas : getNinjas
    };
    function getNinjas() {
      // getting data for public folder (refactor)
      return $http.get('/ninjas.json');
    };
  };
})();
