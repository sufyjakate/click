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

    .controller('CardDevMgmtController', [ 'InterControllerCommunication', '$scope', '$log', '$mdDialog' ,function (icc, $scope, $log, $mdDialog) {

        var handler = function (ea, data) {
            $scope.widgets = data;
            console.log($scope.widgets);
        };
        var list = icc.subscribe('list.update', handler);
        console.log(list);

        $scope.options = {
            cellHeight: 300,
            verticalMargin: 1
        };
        $scope.addGuage = function (w, ev) {
            var index = $scope.widgets.indexOf(w);
            console.log('Open card'+ index);
        };
        $scope.moveWidget = function() {
            $scope.widgets[0].x = 1;
            $scope.widgets[0].width = 2;
            $scope.widgets[0].height = 1;
        };
        $scope.removeWidget = function(w) {
            var index = $scope.widgets.indexOf(w);
            $scope.widgets.splice(index, 1);
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

    .directive('cardmgmtview', function () {
            return {
                restrict: 'A',
                templateUrl: 'app/views/guage.html'

            }
        });


