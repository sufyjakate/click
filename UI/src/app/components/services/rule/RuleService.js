(function () {
    'use strict';

    angular.module('app')
        .service('ruleService', [
            '$q',
            '$http',
            ruleService
        ]);

    function ruleService($q, $http) {


        var documentID = "59e694b00185326f1d387691";    //remote database
        var documentID = "59ea17f5f182e10f81bfaa97";    //loacl database

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

        var ruleNotificationData = [
            {
                ruleId: 1,
                ruleTitle: "This is Rule 1",
                ruleIcon:"home",
                time: "2017-10-31 21:27:38",
                status: 'created'
            },
            {
                ruleId: 2,
                ruleTitle: "This is Rule 2",
                ruleIcon:"work",
                time: "2017-10-31 21:28:38",
                status: 'triggered'
            },
            {
                ruleId: 3,
                ruleTitle: "This is Rule 3",
                ruleIcon:"fingerprint",
                time: "2017-10-31 21:29:38",
                status: 'activated'
            },
            {
                ruleId: 4,
                ruleTitle: "This is Rule 4",
                ruleIcon:"motorcycle",
                time: "2017-10-31 21:30:38",
                status: 'deactivated'
            },
            {
                ruleId: 5,
                ruleTitle: "This is Rule 5",
                ruleIcon:"store",
                time: "2017-10-31 21:31:38",
                status: 'deleted'
            },
            {
                ruleId: 1,
                ruleTitle: "This is Rule 1",
                ruleIcon:"home",
                time: "2017-10-31 21:27:38",
                status: 'created'
            },
            {
                ruleId: 2,
                ruleTitle: "This is Rule 2",
                ruleIcon:"work",
                time: "2017-10-31 21:28:38",
                status: 'triggered'
            },
            {
                ruleId: 3,
                ruleTitle: "This is Rule 3",
                ruleIcon:"fingerprint",
                time: "2017-10-31 21:29:38",
                status: 'activated'
            },
            {
                ruleId: 4,
                ruleTitle: "This is Rule 4",
                ruleIcon:"motorcycle",
                time: "2017-10-31 21:30:38",
                status: 'deactivated'
            },
            {
                ruleId: 5,
                ruleTitle: "This is Rule 5",
                ruleIcon:"store",
                time: "2017-10-31 21:31:38",
                status: 'deleted'
            },
        ];

        var ruleOptions = {
            cellHeight: 180,
            verticalMargin: 10,
            animate : true,
            auto : true,
            disableDrag : true
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
            return Object.assign({}, ruleNotificationData[Math.floor(Math.random() * ruleNotificationData.length)]);
        }

        function getAllRuleData() {
            var test = {};
            $http.get('http://localhost:3333/rules').then(function (response) {
                test.rules = response.data;
                console.log(test);
            });
        }

        function loadWidgetsData(documentID) {
            return $http.get('http://localhost:3333/ruleWidgetsDashboard/' + documentID).then(function (response) {

                if(response.data !==null){

                    var ruleWidgetDataResult = response.data.state;
                    console.log("In Get All RuleWidgetDashboard State Function in exports");
                    console.log(ruleWidgetDataResult);
                    return ruleWidgetDataResult;

                }
            });
        }

        function createNewDashboard() {
            //POST
            var config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };

            var url = 'http://localhost:3333/ruleWidgetsDashboard/';
            console.log(url);


            var data = {
                state: [],
                widgetType: "def"
            }

            return $http.post(url, data, config).then(function (response) {
                var afterSaving = response.data;
                console.log("Widget Dashboard Created");
                console.log(afterSaving);
                console.log(response);


                return afterSaving._id;
            }, function (errorResponse) {
                console.log(errorResponse);
            });


        }

        function getAllRuleWidgetsData() {
            // return $http.get('http://localhost:3333/ruleWidgets').then(function (response) {
            //     var ruleWidgetDataResult = response.data;
            //     console.log("In Get All RuleWidget Function in exports");
            //     console.log(ruleWidgetDataResult);
            //     return ruleWidgetDataResult;
            // });


            return $http.get('http://localhost:3333/ruleWidgetsDashboard/').then(function (response) {

                if(response.data !==null && response.data.length !==0){
                    documentID = response.data[0]._id;
                    console.log("In Get All RuleWidgetDashboard State Function Dashboard Existing : Document ID");
                    console.log(documentID);

                    return loadWidgetsData(documentID);

                }
                else{   //Dashboard not found

                    return createNewDashboard();

                }
            });


        }

        function createRuleWidgetData(newWidgetData) {

            //POST
            var config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };


            var value = newWidgetData;


            // angular.forEach(values, function (value, key) {

            $http.post('http://localhost:3333/ruleWidgets', value, config).then(function (response) {
                var afterSaving = response.data;
                console.log(afterSaving);
            }, function (errorResponse) {
                console.log(errorResponse);
            });

            // });

        }

        function updateRuleWidgetData(updatedRuleWidgetData) {

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

            angular.forEach(values, function (value, key) {

                if (value._id !== null && value._id !== undefined) {
                    console.log(value._id);
                    var url = 'http://localhost:3333/ruleWidgets/' + value._id;
                    console.log(url);


                    $http.put(url, value, config).then(function (response) {
                        var afterSaving = response.data;
                        console.log("Widget Updated");
                        console.log(afterSaving);
                    }, function (errorResponse) {
                        console.log(errorResponse);
                    });
                }
            }, log);
        }

        function updateDashboardState(newState) {
            //PUT
            var config = {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };

            var url = 'http://localhost:3333/ruleWidgetsDashboard/' + documentID;
            console.log(url);


            var data = {
                state: newState,
                widgetType: "def"
            }

            return $http.put(url, data, config).then(function (response) {
                var afterSaving = response.data;
                console.log("Widget Dashboard Updated");
                console.log(afterSaving);
                console.log(response);
                return afterSaving;
            }, function (errorResponse) {
                console.log(errorResponse);
            });
        }

        return {
            updateDashboardState: function (newState) {
                return $q.when(updateDashboardState(newState));
            },
            createRuleWidgetData: function (newWidgetData) {
                createRuleWidgetData(newWidgetData);
                return $q.when(ruleWidgetData);
            },
            updateRuleWidgetsData: function (updatedRuleWidgetData) {
                updateRuleWidgetData(updatedRuleWidgetData);
                return $q.when(ruleWidgetData);
            },
            loadAllRuleWidgets: function () {
                // getAllRuleWidgetsData();
                return $q.when(getAllRuleWidgetsData());
            },
            loadAllRuleNotifications: function (query) {
                /**
                 * Query expects that `limit`,`page`, and `order` fields be present
                 */
                query = query || {limit:10,page:1};

                var list = [];
                var start = (query.page-1)*query.limit;
                var end = start + query.limit;
                for (var i = start; i < end; i++) {
                    // var f = PickRandom();
                    var f = ruleNotificationData[i];
                    f.id = i+1;
                    list.push(f);
                }
                return $q.when({items:list,count:10});

                // return $q.when(ruleNotificationData);
            },
            loadWidgetsOptions: function () {
                return $q.when(ruleOptions);
            },
            loadAllItems: function () {
                return $q.when(tableData);
            },
            loadWidgetConfig: function (widgetType) {
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
