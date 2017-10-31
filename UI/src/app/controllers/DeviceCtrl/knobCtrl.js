/**
 * Created by sufyjakate on 31.10.17.
 */
(function () {

    angular.module('app')
        .controller('knobCtrl', ['InterControllerCommunication', '$scope', '$mdDialog'
            , knobCtrl]);

    function knobCtrl(icc, $scope, $mdDialog) {

        $scope.value = Math.floor((Math.random() * 100) + 1);
        $scope.options = {
            bgColor: '#2C3E50',
            trackWidth: 50,
            barWidth: 30,
            barColor: '#FFAE1A',
            textColor: '#eee'
        };

    }
})();
