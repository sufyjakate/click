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

                // $http({
                //             url: 'http://localhost:3333/cards',
                //             method: 'GET',
                //             headers: {'Content-Type': 'application/json'}
                //         }).then(function successcallback(response, status, headers, config) {
                //
                //             $scope.widgets = response.data;
                //             console.log('Getting the data');
                //             console.log($scope.widgets);
                //
                //         }, function errorcallback(response, status, headers, config) {
                //             $scope.status = status;
                //             alert('Data Retrieving Failed');
                //         });



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
                icc.publish('list.update', $scope.widgets);
                console.log($scope.widgets);

            };
            

            $scope.shut = function(id) {
                console.log("Removed");
                $mdDialog.hide();
            }


    }
})();
