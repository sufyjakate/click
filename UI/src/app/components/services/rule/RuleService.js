(function () {
    'use strict';

    angular.module('app')
        .service('ruleService', [
            '$q',
            '$http',
            ruleService
        ]);

    function ruleService($q, $http) {
        var tableData = [
            {
                issue: 'Nested views',
                progress: 100,
                status: 'Done',
                class: 'md-accent'
            },
            {
                issue: 'Table component',
                progress: 40,
                status: 'Feedback',
                class: ''
            },
            {
                issue: 'Dashboard tiles',
                progress: 100,
                status: 'Done',
                class: 'md-accent'
            },
            {
                issue: 'Panel widget',
                progress: 84,
                status: 'In progress',
                class: 'orange'
            },
            {
                issue: 'Form',
                progress: 100,
                status: 'Done',
                class: 'md-accent'
            },
            {
                issue: 'Custom CSS',
                progress: 20,
                status: 'Feedback',
                class: ''
            },
            {
                issue: 'Add backend',
                progress: 1,
                status: 'To do',
                class: 'md-warn'
            },
            {
                issue: 'Layout with sidebar',
                progress: 100,
                status: 'Done',
                class: 'md-accent'
            }
        ];

        var ruleOptions = {
            cellHeight: 200,
            verticalMargin: 10
        };

        var ruleWidgetData = [];

        // var ruleWidgetData =
        //     [
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/visitors.html",
        //             widgetTitle: "Site visitors",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/warnings.html",
        //             widgetTitle: "Warnings",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/memory.html",
        //             widgetTitle: "Memory load",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/controlPanel.html",
        //             widgetTitle: "Server Control Panel",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/usage.html",
        //             widgetTitle: "Usage Stats",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/autocomplete.html",
        //             widgetTitle: "Autocomplete Input",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/performance.html",
        //             widgetTitle: "Performance",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //         {
        //             widgetType: 0,
        //             widgetView: "app/views/partials/checkboxes.html",
        //             widgetTitle: "TODO list",
        //             x: 0,
        //             y: 0,
        //             width: 4,
        //             height: 4
        //         },
        //
        //     ];






        function PickRandom() {
            return Object.assign({}, tableData[Math.floor(Math.random() * tableData.length)]);
        }

        function getAllRuleData(){
            var test = {};
            $http.get('http://localhost:3333/rules').then(function (response) {
                test.rules = response.data;
                console.log(test);
            });
        }

        function getAllRuleWidgetsData(){
            $http.get('http://localhost:3333/ruleWidgets').then(function (response) {
                ruleWidgetData= response.data;
                console.log("In Get All RuleWidget Function in exports");
                console.log(ruleWidgetData);
            });
        }


        function createRuleWidgetData(createRuleWidgetData){
            //POST
            var config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };

            var log = [];
            var values = [];
            // values = ruleWidgetData;
            angular.forEach(values, function(value, key) {

                $http.post('http://localhost:3333/ruleWidgets', value, config).then(function (response) {
                    var afterSaving = response.data;
                    console.log(afterSaving );
                }, function (errorResponse) {
                    console.log(errorResponse);
                });
            }, log);
        }

        function updateRuleWidgetData(updatedRuleWidgetData){

            //PUT
            var config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };

            var values = updatedRuleWidgetData;
            var log = [];

            console.log("update widget data");
            console.log(updatedRuleWidgetData)

            angular.forEach(values, function(value, key) {

                console.log(value._id);
                var url = 'http://localhost:3333/ruleWidgets/'+value._id;
                console.log(url);


                $http.put(url, value, config).then(function (response) {
                    var afterSaving = response.data;
                    console.log("Widget Updated" );
                    console.log(afterSaving );
                }, function (errorResponse) {
                    console.log(errorResponse);
                });
            }, log);
        }

        return {
            updateRuleWidgetsData: function (updatedRuleWidgetData) {
                updateRuleWidgetData(updatedRuleWidgetData);
                return $q.when(ruleWidgetData);
            },
            loadAllRuleWidgets: function () {
                getAllRuleWidgetsData();
                return $q.when(ruleWidgetData);
            },
            loadWidgetsOptions: function () {
                return $q.when(ruleOptions);
            },
            loadAllItems: function () {
                return $q.when(tableData);
            },
            /**
             * Query expects that `limit`,`page`, and `order` fields be present
             */
            loadByPagination: function (query) {
                query = query || {limit: 10, page: 1};

                var list = [];
                var start = (query.page - 1) * query.limit;
                var end = start + query.limit;
                for (var i = start; i < end; i++) {
                    var f = PickRandom();
                    f.id = i + 1;
                    list.push(f);
                }
                return $q.when({items: list, count: 800});
            }
        };
    }
})();
