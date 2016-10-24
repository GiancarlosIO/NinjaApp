(function(){
  "use strict";
  angular.module('ninjaApp')
    .directive('randomNinja', randomNinja);

  function randomNinja() {
    return {
      restrict: 'EA',
      scope: {
        ninjas: '=',
        title: '='
      },
      templateUrl: 'random_template.html',
      controller: function($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      }
    }
  };
})();
