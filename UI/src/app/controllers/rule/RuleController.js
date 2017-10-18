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

        vm.$log = function (text) {
//            console.log(text);
        }

        vm.$log(vm.ruleWidgetData);

        vm.loadAllItems = function () {
            ruleService
                .loadAllItems()
                .then(function (ruleData) {
                    vm.ruleData = [].concat(ruleData);
                });
        };

        vm.loadWidgetsOptions = function () {
            ruleService
                .loadWidgetsOptions()
                .then(function (ruleOptions) {
                    vm.ruleOptions = [].concat(ruleOptions);
                    console.log(ruleOptions);
                });
        };

        vm.updateWidgetState = function () {

            // var sequence = 0;
            //
            // angular.forEach(vm.ruleWidgetData, function (value, key) {
            //     value.sequence = sequence;
            //     sequence++;
            // });


            console.log("currentstate ");
            console.log(vm.ruleWidgetData);





            ruleService
                .updateRuleWidgetsData(vm.ruleWidgetData)
                .then(function (ruleWidgetDataAfterUpdate) {
                    vm.ruleWidgetDataAfterUpdate = ruleWidgetDataAfterUpdate;
                    console.log(ruleWidgetDataAfterUpdate);
                });

            ruleService
                .updateDashboardState(vm.ruleWidgetData)
                .then(function (ruleWidgetDataAfterUpdate) {
                    // vm.ruleWidgetData = ruleWidgetDataAfterUpdate;
                    console.log(ruleWidgetDataAfterUpdate);
                });

        };

        vm.loadAllRuleWidgetData = function () {

            console.log("in load rule widget function");
            console.log(vm.ruleWidgetData);

            ruleService
                .loadAllRuleWidgets()
                .then(function (ruleWidgetData) {

                    console.log("_________________________");
                    console.log("vm.ruleWidgetData in load rule widget function - in THEN Before Assigning");
                    console.log(vm.ruleWidgetData);
                    console.log("_________________________");

                    console.log("Service Result.ruleWidgetData in controller function in load rule widgets");
                    console.log(ruleWidgetData);
                    console.log("_________________________");

                    // vm.ruleWidgetData = [].concat(ruleWidgetData);
                    // vm.ruleWidgetData = [];

                    vm.ruleWidgetData = ruleWidgetData;
                    console.log("_________________________");

                    console.log("vm.ruleWidgetData in load rule widget function - in THEN After Assigning");
                    console.log(vm.ruleWidgetData);

                    // vm.updateWidgetState();


                });
        }

        vm.createRuleWidgets = function (newWidgetData) {

            // ruleService
            //     .createRuleWidgetData(newWidgetData)
            //     .then(function (ruleWidgetDataResult) {
            //         console.log("in Rule controller function in create rule widgets ");
            //         console.log(ruleWidgetDataResult);
            //         // vm.ruleWidgetData = [].concat(ruleWidgetData);
            //     });
            vm.updateWidgetState(vm.ruleWidgetData);
        }

        vm.widgetTypeDetailEnum = {

            "0": {
                "widgetType": "0",
                "widgetView": "app/views/partials/visitors.html",
                "widgetTitle": "Site visitors"
            },

            "1": {
                "widgetType": "1",
                "widgetView": "app/views/partials/warnings.html",
                "widgetTitle": "Warnings"
            },

            "2": {
                "widgetType": "2",
                "widgetView": "app/views/partials/memory.html",
                "widgetTitle": "Memory load"
            },
            "3": {
                "widgetType": "3",
                "widgetView": "app/views/partials/controlPanel.html",
                "widgetTitle": "Server Control Panel"
            },

            "4": {
                "widgetType": "4",
                "widgetView": "app/views/partials/usage.html",
                "widgetTitle": "Usage Stats"
            },

            "5": {
                "widgetType": "5",
                "widgetView": "app/views/partials/autocomplete.html",
                "widgetTitle": "Autocomplete Input"
            },

            "6": {
                "widgetType": "6",
                "widgetView": "app/views/partials/performance.html",
                "widgetTitle": "Performance"
            },

            "7": {
                "widgetType": "7",
                "widgetView": "app/views/partials/checkboxes.html",
                "widgetTitle": "TODO list"
            }
        };

        vm.addWidget = function (widgetType,data) {

            var newWidget  =
                {
                    widgetType:widgetType,
                    widgetView: vm.widgetTypeDetailEnum[widgetType].widgetView,
                    widgetTitle: vm.widgetTypeDetailEnum[widgetType].widgetTitle,
                    x: 0,
                    y: 0,
                    width: 4,
                    height: 4
                };

            vm.ruleWidgetData.push(newWidget);
            vm.$log("new widget added");
            vm.$log(newWidget);

            vm.createRuleWidgets(newWidget);

        };

        vm.moveWidget = function () {
            // console.log(vm.ruleWidgetData);
            // vm.ruleWidgetData[0].x = 1;
            // vm.ruleWidgetData[0].width = 2;
            // vm.ruleWidgetData[0].height = 2;
            vm.$log(event);vm.$log(ui);
            vm.$log("widget moved");

            // vm.updateWidgetState();
        };
        vm.removeWidget = function (w) {
            var index = vm.ruleWidgetData.indexOf(w);
            vm.ruleWidgetData.splice(index, 1);
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

            // vm.updateWidgetState();
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
            // var newHeight = $(event.target).height();
            // vm.$log(newHeight);
            // vm.$log(event.target);
            // var element = $(event.target).find('section')[0];
            // vm.$log("ELEMENT");
            // vm.$log(element);
            // $(element).height(newHeight * .95);
            // $(element).find('.ng-scope').height("50%");
            // $(element).find('.ng-scope').height(newHeight-150);
            // vm.updateWidgetState();
        };
        vm.onItemAdded = function (item) {
            vm.$log("onItemAdded item: " + item);
            vm.$log(item);
            // vm.updateWidgetState();
        };
        vm.onItemRemoved = function (item) {
            vm.$log("onItemRemoved item: " + item);
            vm.$log(item);
            // vm.updateWidgetState();
        };

        vm.loadAllRuleWidgetData();



    }

})();
