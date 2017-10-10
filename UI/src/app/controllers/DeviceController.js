(function(){
    angular.module('app')

        .config(function($mdIconProvider) {
            $mdIconProvider
                .icon('devmgmt', 'assets/images/devices.svg', 24)
                .icon('devctrl', 'assets/images/machine.svg', 24)
                .icon('suggest', 'assets/images/suggest.svg', 24)
                .icon('upgrade', 'assets/images/sysupdate.svg', 24)
                .icon('notif', 'assets/images/notif.svg', 24);
        })
        .controller('DeviceController', ['InterControllerCommunication', '$scope', '$mdBottomSheet',function(icc, $scope, $mdBottomSheet, $mdToast) {
            $scope.alert = '';



            $scope.showGridBottomSheet = function() {
                $scope.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'app/views/bottomsheetdev.html',
                    controller: 'GridBottomSheetCtrl',
                    clickOutsideToClose: true
                }).then(function(clickedItem) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(clickedItem['name'] + ' clicked!')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                }).catch(function(error) {
                    // User clicked outside or hit escape
                });
            };

            var handler = function (ea, data) {
                $scope.widgets = data;
            };
            var list = icc.subscribe('list.update', handler);
            console.log(list);

        }])

        .directive('cardview', function () {
            return {
                restrict: 'EA',
                templateUrl: 'app/views/card.html'

            }
        })
    
        .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet, $mdDialog) {
            $scope.items = [
                { name: 'Device Data Manager', icon: 'devmgmt'},
                { name: 'Add/Remove Devices', icon: 'devctrl' },
                { name: 'Suggest Me', icon: 'suggest' },
                { name: 'Upgrade Center', icon: 'upgrade' },
                { name: 'Notification Center', icon: 'notif' }
            ];

            $scope.listItemClick = function($index, ev, $rootScope) {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);

                if ($index == 0) {
                    $mdDialog.show(
                        {
                            templateUrl: 'app/views/template.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true
                        })
                }
                if ($index == 1) {
                    $mdDialog.show(
                        {
                            templateUrl: 'app/views/devctrl.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true
                        })

                }
                if ($index == 2) {
                    $mdDialog.show(
                        {
                            templateUrl: 'app/views/suggest.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose: true
                        }
                    )
                }
                if ($index == 3) {
                    $mdDialog.show({
                        templateUrl: 'app/views/upgrade.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                }


            };

        })
        .run(function($templateRequest) {

            var urls = [
                'assets/images/devices.svg',
                'assets/images/machine.svg',
                'assets/images/suggest.svg',
                'assets/images/sysupdate.svg',
                'assets/images/notif.svg'
            ];

            angular.forEach(urls, function(url) {
                $templateRequest(url);
            });

        })
})();
