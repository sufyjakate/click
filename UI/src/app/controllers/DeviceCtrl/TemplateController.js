/**
 * Created by sufyjakate on 21.09.17.
 * Modified again on 17.10.17
 */
(function () {

    angular.module('app')
        .controller('DeviceMgmtController', ['InterControllerCommunication', '$scope', '$mdDialog', '$http'
        , DeviceMgmtController]);

        function DeviceMgmtController(icc, $scope, $mdDialog, $http){



            $scope.widgets = [];

            var cardid = 0;
            $scope.addWidget = function() {
                var newWidget = {x:0, y:0, width:4, height:1};

                cardid++;
                newWidget.cardid = cardid;
                newWidget.title = 'Device Management';
                $scope.widgets.push(newWidget);

                $http.post('http://localhost:3333/devices')
                    .then(function success(data){
                        console.log('Connection Successful');
                        $scope.widgets = data;
                    },
                    function error(data) {
                        console.log('Connection Problem');
                        $scope.widgets = []
                });
                icc.publish('list.update', $scope.widgets);
                console.log($scope.widgets);
            };
            

            $scope.shut = function(id) {
                console.log("Removed");
                $mdDialog.hide();
            }


    }
})();
