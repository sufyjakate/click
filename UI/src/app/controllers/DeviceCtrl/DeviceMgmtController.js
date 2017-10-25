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


           $http({
                url: 'http://localhost:3333/cards',
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).then(function success(response, status, headers, config) {
                console.log('Card GET successful');
                console.log(response);
                var cardsFromRest = response.data;
                console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log(cardsFromRest);
                var maxCardId = 0 ;
                var cardRest;
                for (cardRest in cardsFromRest) {
                    if(cardsFromRest[cardRest].cardid > maxCardId ) {
                        maxCardId = cardsFromRest[cardRest].cardid;
                    }
                    $scope.widgets.push(cardsFromRest[cardRest]);
                }
                cardid = maxCardId;
               console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");


           });




            $scope.addWidget = function() {

                var newWidget = {x:0, y:0, width:4, height:1};
                cardid++;
                newWidget.cardid = cardid;
                newWidget.title = 'Device Management';
                newWidget.deviceName = $scope.data;
                //JSON.stringify(newWidget);

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




                icc.publish('list_mgmt.update', $scope.widgets);
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

            $scope.data = $scope.tempdevices;
            
            $scope.addDevice = function () {

                $mdDialog.show({
                    templateUrl: 'app/views/devices/add_device.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose:true
                });

            }


    }

})();
