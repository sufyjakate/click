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



/**
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
 **/