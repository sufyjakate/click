(function(){

    angular
        .module('app')
        .controller('RuleNotificationController', [
            'ruleService',
            '$scope',
            RuleNotificationController

        ]);

    function RuleNotificationController(ruleService , $scope) {
        var vm = this;

        vm.tableData = [];
        vm.totalItems = 0;

        vm.selected = [];

        vm.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
        vm.selected = [];

        vm.render = function (T) {
            return T;
        }
        var lastQuery = null;
        vm.getItems = function () {
            /**
             * I don't know why this function is being called too many times,
             * it supposed to call once per pagination, so the next 3 lines are only to avoid
             * multiple requests.
             */
            var query = JSON.stringify(vm.query);
            if (query == lastQuery) return;
            lastQuery = query;
            GetItemsData(vm.query);

        }

        function GetItemsData(query) {



            ruleService
                .loadAllRuleNotifications(query)
                .then(function (ruleNotifications) {

                    vm.ruleNotifications =  ruleNotifications.items;
                    vm.totalItems = ruleNotifications.count;

                    console.log(ruleNotifications);
                });


            // tableService
            //     .loadByPagination(query)
            //     .then(function(tableData) {
            //         vm.tableData =  tableData.items;
            //         // Represents the count of database count of records, not items array!
            //         vm.totalItems = tableData.count;
            //
            //     });

        }

        GetItemsData(vm.query);




    }

})();
