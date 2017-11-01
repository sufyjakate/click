/**
 * Created by sufyjakate on 13.10.17.
 */
angular.module('app')
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

    })

    .controller('deviceSuggestionCtrl', [ 'InterControllerCommunication', '$scope', '$log', '$mdDialog', '$mdToast' , '$http' ,function (icc, $scope, $log, $mdDialog, $mdToast, $http) {

        // var handler = function (ea, data) {
        //     $scope.widgets = data;
        //     console.log($scope.widgets);
        // };
        // var list = icc.subscribe('list.update', handler);
        // console.log(list);

        $scope.Toasts = [
            {text: 'Device 1'} ,
            {text: 'Device 2'},
            {text: 'Device 3'}
        ];

        $scope.randomProduct = $scope.Toasts[Math.floor(Math.random() * $scope.Toasts.length)];
        console.log($scope.randomProduct);

        $scope.shut = function() {
            console.log("Removed");
            $mdDialog.hide();
        };


    }]);


