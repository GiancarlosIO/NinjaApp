(function() {
  "use strict";
    angular.module('ninjaApp')
        .controller('NinjasController', NinjasController);

    // NinjasController.$inject = ['$http', '$location'];
    NinjasController.$inject = ['ninjasService'];

    function NinjasController(ninjasService) {
        var vm = this;
        vm.orderNinjaBy = '';
        vm.data = [];
        vm.newNinja = {};
        vm.orderByName = orderByName;
        vm.orderByRate = orderByRate;
        vm.remove = remove;
        vm.createNinja = createNinja;

        // get the data for a promise
        ninjasService.getNinjas()
          .then(function(response){
            vm.data = response.data;
            console.log(response);
            console.log(response.data);
          }, function(err){
            console.log('data not found')
          });

        vm.newNinja = {
            name: '',
            belt: '',
            rate: 0,
            available: true
        }

        function orderByName() {
            vm.orderNinjaBy = 'name';
        };

        function orderByRate() {
            vm.orderNinjaBy = 'rate';
        }

        function remove(ninja) {
            let ninjaToRemove = vm.data.indexOf(ninja);
            vm.data.splice(ninjaToRemove, 1);
        };

        function createNinja() {
            vm.data.push({
                name: vm.newNinja.name,
                belt: vm.newNinja.belt,
                rate: vm.newNinja.rate,
                available: true
            });
            vm.newNinja.name = '';
            vm.newNinja.belt = '';
            vm.newNinja.rate = 0;
        }
    };
})();
