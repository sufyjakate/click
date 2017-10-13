/**
 * Created by sufyjakate on 13.10.17.
 */
(function () {

    angular.module('app')
        .controller('DeviceUpgradeController', ['InterControllerCommunication', '$scope', '$mdDialog'
            , DeviceUpgradeController]);

    function DeviceUpgradeController(icc, $scope, $mdDialog){



        $scope.widgets = [];

        var cardid = 0;
        $scope.addWidget = function(id) {
            var newWidget = {x:0, y:0, width:4, height:1};

            //newWidget.id = 1;
            cardid++;
            newWidget.cardid = cardid;
            newWidget.title = id;
            $scope.widgets.push(newWidget);

            icc.publish('list.update', $scope.widgets);
            console.log($scope.widgets);
        };



        $scope.shut = function(id) {
            console.log("Removed");
            $mdDialog.hide();
        }


    }
})();
