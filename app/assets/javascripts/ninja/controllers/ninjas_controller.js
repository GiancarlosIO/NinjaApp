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
        vm.removeAll = removeAll;
        vm.noData= false;
        vm.dataCount;

        // get the data for a promise
        ninjasService.getNinjas()
          .then(function(response){
            vm.data = response.data;
            vm.dataCount = response.data.length;
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
            vm.noData = vm.data.length == 1 ? true : false
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
            vm.noData = false;
        };

        function removeAll(){
          vm.data = [];
          vm.noData = true;
        };
    };
})();
