(function(){

  angular
    .module('app')
    .controller('RuleController', [
      'ruleService',
      RuleController
    ]);

  function RuleController(ruleService) {
    var vm = this;

    vm.ruleData = [];

    ruleService
      .loadAllItems()
      .then(function(ruleData) {
        vm.ruleData = [].concat(ruleData);
      });
  }

})();
