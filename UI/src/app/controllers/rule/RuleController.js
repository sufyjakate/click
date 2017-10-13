(function () {

    angular
        .module('app')
        .controller('RuleController', [
            'ruleService',
            RuleController,
        ]);

    function RuleController(ruleService) {
        var vm = this;

        vm.ruleData = [];
        vm.ruleWidgetData = [];
        vm.ruleOptions = {};


        ruleService
            .loadAllItems()
            .then(function (ruleData) {
                vm.ruleData = [].concat(ruleData);
            });

        ruleService
            .loadAllRuleWidgets()
            .then(function (ruleWidgetData) {
                vm.ruleWidgetData = [].concat(ruleWidgetData);
            });

        ruleService
            .loadWidgetsOptions()
            .then(function (ruleOptions) {
                vm.ruleOptions = [].concat(ruleOptions);
            });


    }

})();
