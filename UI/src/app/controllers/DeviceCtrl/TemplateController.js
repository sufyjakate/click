/**
 * Created by sufyjakate on 21.09.17.
 */
(function () {

    angular.module('app')
        .controller('DeviceMgmtController', ['InterControllerCommunication', '$scope', '$mdDialog'
        , DeviceMgmtController]);

        function DeviceMgmtController(icc, $scope, $mdDialog){



            $scope.widgets = [];

            var cardid = 0;
            $scope.addWidget = function(id) {
                var newWidget = {x:0, y:0, width:4, height:1};

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
