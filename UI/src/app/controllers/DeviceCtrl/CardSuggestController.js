/**
 * Created by sufyjakate on 29.10.17.
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

    .controller('CardSuggestController', [ 'InterControllerCommunication', '$scope', '$log', '$mdDialog', '$http', '$interval' ,function (icc, $scope, $log, $mdDialog, $http, $interval) {

        // var handler = function (ea, data) {
        //     $scope.widgets = data;
        //     console.log($scope.widgets);
        // };
        // var list = icc.subscribe('list.update', handler);
        // console.log(list);
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
            'default',
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
        $scope.Widgets = ["Suggest Widget"];


        var WidgetType;

        console.log(WidgetType);


        $scope.options = {
            cellHeight: 300,
            verticalMargin: 1
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
        $scope.showProgress = false;
        $scope.determinateValue = 10;

        $scope.productSuggest = function () {

            $scope.showProgress = true;

            interval = $interval(function () {
                $scope.determinateValue += 1;
                if ($scope.determinateValue > 100) {
                    $scope.determinateValue = 10;
                    $scope.showProgress = false;
                    $scope.showAlert();
                    $interval.cancel(interval)
                }
            }, 50, 0, true);
        };
        $scope.showAlert = function () {
            $mdDialog.show({
                templateUrl: 'app/views/devices/device_suggestion.html',
                clickOutsideToClose:true
            })
        }

    }])

    .directive('cardmgmtview', function () {
        return {
            restrict: 'EA',
            templateUrl: 'app/views/devices/guage.html'

        }
    });



