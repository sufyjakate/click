/**
 * Created by sufyjakate on 13.10.17.
 */
angular.module('app')
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('red').dark();
        $mdThemingProvider.theme('pink').dark();
        $mdThemingProvider.theme('purple').dark();
        $mdThemingProvider.theme('deep-purple').dark();
        $mdThemingProvider.theme('indigo').dark();
        $mdThemingProvider.theme('blue').dark();
        $mdThemingProvider.theme('light-blue').dark();
        $mdThemingProvider.theme('cyan').dark();
        $mdThemingProvider.theme('teal').dark();
        $mdThemingProvider.theme('green').dark();
        $mdThemingProvider.theme('light-green').dark();
        $mdThemingProvider.theme('lime').dark();
        $mdThemingProvider.theme('yellow').dark();
        $mdThemingProvider.theme('amber').dark();
        $mdThemingProvider.theme('orange').dark();
        $mdThemingProvider.theme('deep-orange').dark();
        $mdThemingProvider.theme('brown').dark();
        $mdThemingProvider.theme('blue-grey').dark();

        $mdThemingProvider.theme('dark-orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').dark();
        $mdThemingProvider.theme('grey').dark();
        $mdThemingProvider.alwaysWatchTheme(true);

    })

    .controller('CardNotificationController', [ 'InterControllerCommunication', '$scope', '$log', '$mdDialog', '$mdToast' , '$http' , '$q'  ,function (icc, $scope, $log, $mdDialog, $mdToast, $http, $q) {

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
            limit: 5,
            page: 1
        };
        $scope.selected = [];

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

        $scope.loadAllNotifications = function (query) {
            /**
             * Query expects that `limit`,`page`, and `order` fields be present
             */
            query = query || {limit:10,page:1};

            var list = [];
            var start = (query.page-1)*query.limit;
            var end = start + query.limit;
            for (var i = start; i < end; i++) {
                // var f = PickRandom();
                var f = NotificationData[i];
                f.id = i+1;
                list.push(f);
            }
            return $q.when({items:list,count:10});

            // return $q.when(ruleNotificationData);
        };

        $scope.GetItemsData = function (query) {

                $scope.loadAllNotifications(query)
                .then(function (cardNotifications) {

                    $scope.cardNotifications =  cardNotifications.items;
                    $scope.totalItems = cardNotifications.count;

                    console.log(cardNotifications);
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


        $scope.selectedColor = "";

        $scope.showDarkTheme = 'grey';


        $scope.themeList = [
            // 'dark-grey',
            // 'dark-orange',

            // 'red',
            // 'pink',
            // 'purple',
            // 'indigo',
            // 'blue',
            // 'teal',
            // 'light-green',
            // 'yellow',
            // 'amber',
            // 'orange',
            // 'brown',
            // 'blue-grey',

            //+++++++++++++++++++++++==
            'dark-purple',
            'dark-blue',

            // 'deep-purple',

            // 'light-blue',
            // 'cyan',

            // 'green',

            // 'lime',
            'deep-orange',
            'grey',
            'default'
        ];

        $scope.switchTheme = function (ev, widget) {


            var item = $scope.themeList[Math.floor(Math.random() * $scope.themeList.length)];

            while(item == widget.themeColor){

                item = $scope.themeList[Math.floor(Math.random() * $scope.themeList.length)];
            }

            // vm.showDarkTheme = 'dark-purple';
            widget.themeColor = item;
            console.log("theme switched to " + widget.themeColor);
        };
        $scope.Widgets = ["Toast Widget"];

        var WidgetType;

        $scope.Toasts = [
            {text: 'Device Working Properly'} ,
            {text: 'Device Stopped Working'},
            {text: 'Device Restarted'}
        ];

        $scope.randomQuote = $scope.Toasts[Math.floor(Math.random() * $scope.Toasts.length)];
        console.log($scope.randomQuote);


        console.log(WidgetType);


        $scope.options = {
            cellHeight: 300,
            verticalMargin: 1
        };
        $scope.addGuage = function () {
            // var index = $scope.widgets.indexOf(w);
            // console.log('Open card'+ index);
            $mdDialog.show( {

                templateUrl: 'app/views/devices/guage.html',
                clickOutsideToClose:true
            });
        };
        $scope.moveWidget = function() {
            $scope.widgets[0].x = 1;
            $scope.widgets[0].width = 2;
            $scope.widgets[0].height = 1;
        };
        $scope.removeWidget = function(w) {
            var index = $scope.widgets.indexOf(w);
            $scope.widgets.splice(index, 1);

            // $http({
            //     url: 'http://localhost:3333/cards',
            //     method: 'DELETE',
            //     data: $scope.widgets[index],
            //     headers: {'Content-Type': 'application/json'}
            // }).then(function success(response, status, headers, config) {
            //     console.log('Device GET successful');
            //     console.log(response);
            //
            // });
        };
        $scope.onChange = function(event, items) {
            $log.log("onChange event: "+event+" items:"+items);
        };
        $scope.onDragStart = function(event, ui) {
            $log.log("onDragStart event: "+event+" ui:"+ui);
        };
        $scope.onDragStop = function(event, ui) {
            $log.log("onDragStop event: "+event+" ui:"+ui);
        };
        $scope.onResizeStart = function(event, ui) {
            $log.log("onResizeStart event: "+event+" ui:"+ui);
        };
        $scope.onResizeStop = function(event, ui) {
            $log.log("onResizeStop event: "+event+" ui:"+ui);
        };
        $scope.onItemAdded = function(item) {
            $log.log("onItemAdded item: "+item);
        };
        $scope.onItemRemoved = function(item) {
            $log.log("onItemRemoved item: "+item);
        };

        var NotificationData = [
            {
                notId: 1,
                NotificationTitle: "Device Working Properly",
                time: "2017-10-31 21:27:38",
                status: 'OK'
            },
            {
                notId: 2,
                NotificationTitle: "Device Restarted",
                time: "2017-10-31 21:28:38",
                status: 'Device Reboot'
            },
            {
                notId: 3,
                NotificationTitle: "Lights OFF",
                time: "2017-10-31 21:29:38",
                status: 'General'
            },
            {
                notId: 4,
                NotificationTitle: "Switch off lights",
                time: "2017-10-31 21:27:38",
                status: 'DONE'
            },
            {
                notId: 5,
                NotificationTitle: "Music OFF",
                time: "2017-10-31 21:29:38",
                status: 'General'
            }
        ];

    }])

    .directive('cardmgmtview', function () {
        return {
            restrict: 'EA',
            templateUrl: 'app/views/devices/guage.html'

        }
    });


