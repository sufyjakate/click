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
                console.log("in controller function main");
                console.log(ruleWidgetData);
                vm.ruleWidgetData = [].concat(ruleWidgetData);
            });

        ruleService
            .loadWidgetsOptions()
            .then(function (ruleOptions) {
                vm.ruleOptions = [].concat(ruleOptions);
                console.log(ruleOptions);
            });


        vm.updateWidgetState = function () {

            ruleService
                .updateRuleWidgetsData(vm.ruleWidgetData)
                .then(function (ruleWidgetDataAfterUpdate) {
                    vm.ruleWidgetDataAfterUpdate = [].concat(ruleWidgetDataAfterUpdate);
                    console.log(ruleWidgetDataAfterUpdate);
                });

        };

        vm.loadAllRuleWidgets = function () {

            ruleService
                .loadAllRuleWidgets()
                .then(function (ruleWidgetData) {
                    console.log("in controller function in load rule widgets controller function");
                    console.log(ruleWidgetData);
                    vm.ruleWidgetData = [].concat(ruleWidgetData);
                });
        }

        vm.addWidget = function () {

            // var newWidget = { x:0, y:0, width:1, height:1 };
            var newWidget = {
                widgetType: 0,
                widgetView: "app/views/partials/visitors.html",
                widgetTitle: "Site visitors",
                x: 0,
                y: 0,
                width: 4,
                height: 4
            };

            vm.ruleWidgetData.push(newWidget);
            vm.$log("new widget added");
            vm.$log(newWidget);

            vm.updateWidgetState();
        };
        vm.moveWidget = function () {
            // vm.widgets[0].x = 1;
            // vm.widgets[0].width = 2;
            // vm.widgets[0].height = 2;
            // vm.$log(event);vm.$log(ui);
            vm.$log("new widget added");

            vm.loadAllRuleWidgets();
        };
        vm.removeWidget = function (w) {
            var index = vm.widgets.indexOf(w);
            vm.widgets.splice(index, 1);
            vm.$log(w);
        };
        vm.onChange = function (event, items) {
            vm.$log("onChange event: " + event + " items:" + items);
            vm.$log(event);
            vm.$log(items);
        };
        vm.onDragStart = function (event, ui) {
            vm.$log("onDragStart event: " + event + " ui:" + ui);
            vm.$log(event);
            vm.$log(ui);
        };
        vm.onDragStop = function (event, ui) {
            vm.$log("onDragStop event: " + event + " ui:" + ui);
            vm.$log(event);
            vm.$log(ui);

            vm.updateWidgetState();
        };
        vm.onResizeStart = function (event, ui) {
            vm.$log("onResizeStart event: " + event + " ui:" + ui);
            vm.$log(event);
            vm.$log(ui);
        };
        vm.onResizeStop = function (event, ui) {
            vm.$log("onResizeStop event: " + event + " ui:" + ui);
            vm.$log(event);
            vm.$log(ui);
            var newHeight = $(event.target).height();
            vm.$log(newHeight);
            vm.$log(event.target);
            var element = $(event.target).find('section')[0];
            vm.$log("ELEMENT");
            vm.$log(element);
            $(element).height(newHeight * .95);
            // $(element).find('.ng-scope').height("50%");
            // $(element).find('.ng-scope').height(newHeight-150);


        };
        vm.onItemAdded = function (item) {
            vm.$log("onItemAdded item: " + item);
            vm.$log(item);
        };
        vm.onItemRemoved = function (item) {
            vm.$log("onItemRemoved item: " + item);
            vm.$log(item);
        };

        vm.$log = function (text) {
//            console.log(text);
        }


        vm.loadAllRuleWidgets();

    }

})();
