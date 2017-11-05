/**
 * Created by sufyjakate on 13.10.17.
 */
angular.module('app')
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

    })

    .controller('deviceSuggestionCtrl', [ 'InterControllerCommunication', '$scope', '$log', '$mdDialog', '$mdToast' , '$http', '$q' ,function (icc, $scope, $log, $mdDialog, $mdToast, $http, $q) {

        // var handler = function (ea, data) {
        //     $scope.widgets = data;
        //     console.log($scope.widgets);
        // };
        // var list = icc.subscribe('list.update', handler);
        // console.log(list);
        $scope.tableData = [];
        $scope.totalItems = 0;

        $scope.selected = [];

        $scope.query = {
            order: 'name',
            limit: 2,
            page: 1
        };

        $scope.render = function (T) {
            return T;
        };
        var lastQuery = null;
        $scope.getItems = function () {
            /**
             * I don't know why this function is being called too many times,
             * it supposed to call once per pagination, so the next 3 lines are only to avoid
             * multiple requests.
             */
            var query = JSON.stringify($scope.query);
            if (query == lastQuery) return;
            lastQuery = query;
            $scope.GetItemsData($scope.query);

        };

        $scope.loadAllProducts = function (query) {
            /**
             * Query expects that `limit`,`page`, and `order` fields be present
             */
            query = query || {limit:2,page:1};

            var list = [];
            var start = (query.page-1)*query.limit;
            var end = start + query.limit;
            for (var i = start; i < end; i++) {
                // var f = PickRandom();
                var f = ProductsData[i];
                f.id = i+1;
                list.push(f);
            }
            return $q.when({items:list,count:2});

            // return $q.when(ruleNotificationData);
        };

        $scope.GetItemsData = function (query) {

            $scope.loadAllProducts(query)
                .then(function (cardProduct) {

                    $scope.cardProduct =  cardProduct.items;
                    $scope.totalItems = cardProduct.count;

                    console.log(cardProduct);
                });


            // tableService
            //     .loadByPagination(query)
            //     .then(function(tableData) {
            //         vm.tableData =  tableData.items;
            //         // Represents the count of database count of records, not items array!
            //         vm.totalItems = tableData.count;
            //
            //     });
            //$scope.GetItemsData($scope.query);

        };

        $scope.shut = function() {
            console.log("Removed");
            $mdDialog.hide();
        };

        var ProductsData = [
            {
                prodId: 1,
                ProductName: "Device 1"
            },
            {
                prodId: 2,
                ProductName: "Device ABC"
            }
        ];


    }]);


