( function(){
  "use strict";
  angular
  .module('ninjaApp', [])
  .controller('NinjasController', NinjasController);

  // NinjasController.$inject = ['$http', '$location'];

  function NinjasController() {
    var vm = this;
    vm.name = 'Ruy';
  }
})();
