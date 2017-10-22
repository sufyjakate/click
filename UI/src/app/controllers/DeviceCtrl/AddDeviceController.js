/**
 * Created by sufyjakate on 21.10.17.
 */

angular
    .module('app')
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('blue')
            .dark();

    })
    .controller('AddDeviceController', ['InterControllerCommunication', '$scope', '$mdDialog', '$http'
    , AddDeviceController]);

        function AddDeviceController(icc, $scope, $mdDialog, $http) {

            $scope.states = ('ON OFF').split(' ').map(function(state) {
                return {abbrev: state};
            });

            $scope.device = {
                name: '',
                DeviceID: '',
                DeviceType: '',
                DeviceStatus: ''
            };



            //console.log(state);
            $scope.addDevice = function () {
                console.log($scope.device);

                //var newdevice = $scope.device;
                //var myJSON = JSON.stringify($scope.device);

                $http({
                    url: 'http://localhost:3333/devices',
                    method: 'POST',
                    data: $scope.device,
                    headers: {'Content-Type': 'application/json'}
                }).then (function successcall(data, status, headers, config) {

                    $scope.device = data;
                    console.log('Getting the data');
                    console.log($scope.device);

                }, function errorcall(data, status, headers, config) {
                    $scope.status = status;
                    alert('Data Sending Failed');
                });
            }
        }

