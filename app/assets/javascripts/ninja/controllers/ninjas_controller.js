(function() {
  angular.module('ninjaApp')
  .controller('NinjasController', NinjasController);

  // NinjasController.$inject = ['$http', '$location'];

  function NinjasController() {
    var vm = this;
    vm.orderNinjaBy = '';
    vm.data = [];
    vm.newNinja = {};
    vm.orderByName = orderByName;
    vm.orderByRate = orderByRate;
    vm.remove = remove;
    vm.createNinja = createNinja;

    vm.data = [
      {
        name: 'Yoshi',
        belt: 'green',
        rate: 50,
        available: true
      },
      {
        name: 'Crystal',
        belt: 'yellow',
        rate: 30,
        available: true
      },
      {
        name: 'Ryu',
        belt: 'orange',
        rate: 10,
        available: false
      },
      {
        name: 'Shaun',
        belt: 'black',
        rate: 1000,
        available: true
      }

    ];
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
