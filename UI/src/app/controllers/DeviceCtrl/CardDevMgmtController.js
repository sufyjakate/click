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

    .controller('CardDevMgmtController', [ 'InterControllerCommunication', '$scope', '$log', '$mdDialog', '$http' ,function (icc, $scope, $log, $mdDialog, $http) {

        // var handler = function (ea, data) {
        //     $scope.widgets = data;
        //     console.log($scope.widgets);
        // };
        // var list = icc.subscribe('list.update', handler);
        // console.log(list);

        $scope.Widgets = ["Guage Widget","Slider Widget"];


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

            $http({
                url: 'http://localhost:3333/cards',
                method: 'DELETE',
                data: $scope.widgets,
                headers: {'Content-Type': 'application/json'}
            }).then(function success(data, status, headers, config) {
                console.log('Device GET successful');
                console.log(data);
                $scope.widgets = data;

            });
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




    }])

    .directive('guagecharts', function () {
            return {
                restrict: 'EA',
                templateUrl: 'app/views/devices/guage.html'

            }
        })

    .directive('slidercharts', function () {
        return {
            restrict: 'EA',
            templateUrl: 'app/views/devices/slider.html'

        }
    });


