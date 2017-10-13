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
                console.log(ruleOptions);
            });



        vm.addWidget = function() {
            var newWidget = { x:0, y:0, width:1, height:1 };
            vm.widgets.push(newWidget);
            console.log("new widget added");
        };
        vm.moveWidget = function() {
            vm.widgets[0].x = 1;
            vm.widgets[0].width = 2;
            vm.widgets[0].height = 2;
            // console.log(event);console.log(ui);
            console.log("new widget added");

        };
        vm.removeWidget = function(w) {
            var index = vm.widgets.indexOf(w);
            vm.widgets.splice(index, 1);
            console.log(w);
        };
        vm.onChange = function(event, items) {
            console.log("onChange event: "+event+" items:"+items);
            console.log(event);console.log(items);
        };
        vm.onDragStart = function(event, ui) {
            console.log("onDragStart event: "+event+" ui:"+ui);
            console.log(event);console.log(ui);
        };
        vm.onDragStop = function(event, ui) {
            console.log("onDragStop event: "+event+" ui:"+ui);
            console.log(event);console.log(ui);
        };
        vm.onResizeStart = function(event, ui) {
            console.log("onResizeStart event: "+event+" ui:"+ui);
            console.log(event);console.log(ui);
        };
        vm.onResizeStop = function(event, ui) {
            console.log("onResizeStop event: "+event+" ui:"+ui);
            console.log(event);console.log(ui);
            var newHeight = $(event.target).height();
            console.log(newHeight);
            console.log(event.target);
            var element = $(event.target).find('section')[0];
            console.log("ELEMENT");
            console.log(element);
            $(element).height(newHeight*.95);
            // $(element).find('.ng-scope').height("50%");
            // $(element).find('.ng-scope').height(newHeight-150);



        };
        vm.onItemAdded = function(item) {
            console.log("onItemAdded item: "+item);
            console.log(item);
        };
        vm.onItemRemoved = function(item) {
            console.log("onItemRemoved item: "+item);
            console.log(item);
        };
        
    }

})();
