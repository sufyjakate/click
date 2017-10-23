/**
 * Created by sufyjakate on 23.10.17.
 */
(function () {

    angular.module('app')
        .controller('NotificationController', ['InterControllerCommunication', '$scope', '$mdDialog', '$http'
            , NotificationController]);

    function NotificationController(icc, $scope, $mdDialog, $http){



        $scope.widgets = [];

        var cardid = 0;
        $scope.addWidget = function() {
            var newWidget = {x:0, y:0, width:4, height:1};
            $scope.data = $scope.tempdevices[0].name;

            //newWidget.id = 1;
            cardid++;
            newWidget.cardid = cardid;
            newWidget.title = 'Notification Center';
            newWidget.deviceName = $scope.data;

            $http({
                url: 'http://localhost:3333/cards',
                method: 'POST',
                data: newWidget,
                headers: {'Content-Type': 'application/json'}
            }).then(function successcallback(data, status, headers, config) {

                newWidget = data;


            }, function errorcallback(data, status, headers, config) {
                $scope.status = status;
            });


            $scope.widgets.push(newWidget);

            icc.publish('list.update', $scope.widgets);
            console.log($scope.widgets);
        };



        $scope.shut = function() {
            console.log("Removed");
            $mdDialog.hide();
        };

        $scope.tempdevices = [];
        $http({
            url: 'http://localhost:3333/devices',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(function success(response, status, headers, config) {
            console.log('Device GET successful');
            console.log(response);
            $scope.devices = response.data;
            $scope.tempdevices = $scope.devices;
            console.log($scope.devices);

        });

        $scope.data = $scope.tempdevices[0];


    }
})();
