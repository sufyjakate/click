/**
 * Created by sufyjakate on 21.10.17.
 */

angular
    .module('app')
    .config(function($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

    })
    .controller('AddDeviceController', ['InterControllerCommunication', '$scope', '$mdDialog', '$http'
    , AddDeviceController]);

        function AddDeviceController(icc, $scope, $mdDialog, $http) {

        $scope.device = {
            Name: '',
            DeviceID: '',
            DeviceType: '',
            DeviceStatus: ''
        };

        $scope.states = ('ON OFF').split(' ').map(function(state) {
            return {abbrev: state};
        });
    }

