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
        .controller('DeviceController', ['InterControllerCommunication', '$scope', '$http', '$mdBottomSheet' ,function(icc, $scope, $http, $mdBottomSheet, $mdToast) {
            $scope.alert = '';

            $scope.widgets = [];
            $http({
                url: 'http://localhost:3333/cards',
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).then(function successcallback(response, status, headers, config) {

                $scope.widgets = response.data;
                console.log('Getting the data');
                console.log($scope.widgets);

            }, function errorcallback(response, status, headers, config) {
                $scope.status = status;
                alert('Data Retrieving Failed');
            });

            $scope.showGridBottomSheet = function() {
                $scope.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'app/views/devices/bottomsheetdev.html',
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



            var handler_mgmt = function (ea, data) {
                $scope.widgets = data;
            };
            var list_mgmt = icc.subscribe('list_mgmt.update', handler_mgmt);
            console.log(list_mgmt);

            var handler_control = function (ea, data) {
                $scope.widgets = data;
            };
            var list_control = icc.subscribe('list_control.update', handler_control);
            console.log(list_control);

            var handler_upgrade = function (ea, data) {
                $scope.widgets = data;
            };
            var list_upgrade = icc.subscribe('list_upgrade.update', handler_upgrade);
            console.log(list_upgrade);

            var handler_suggest = function (ea, data) {
                $scope.widgets = data;
            };
            var list_suggest = icc.subscribe('list_suggest.update', handler_suggest);
            console.log(list_suggest);

            var handler_notif = function (ea, data) {
                $scope.widgets = data;
            };
            var list_notif = icc.subscribe('list_notif.update', handler_notif);
            console.log(list_notif);

        }])

        .directive('cardview', function () {

            return {
                restrict: 'E',
                compile: function (element, attrs) {
                    element.append('<div ng-include="\'app/views/devices/' + attrs.type + '.html\'"></div>');
                }
            }


        })


    
        .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet, $mdDialog) {
            $scope.items = [
                { name: 'Device Management', icon: 'devmgmt'},
                { name: 'Device Controls', icon: 'devctrl' },
                { name: 'Suggest Me', icon: 'suggest' },
                { name: 'Upgrade Center', icon: 'upgrade' },
                { name: 'Notification Control', icon: 'notif' }
            ];

            $scope.listItemClick = function($index, ev, $rootScope) {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);

                if ($index == 0) {
                    $mdDialog.show(
                        {
                            templateUrl: 'app/views/devices/template.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true
                        })
                }
                if ($index == 1) {
                    $mdDialog.show(
                        {
                            templateUrl: 'app/views/devices/devctrl.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true
                        })

                }
                if ($index == 2) {
                    $mdDialog.show(
                        {
                            templateUrl: 'app/views/devices/suggest.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose: true
                        }
                    )
                }
                if ($index == 3) {
                    $mdDialog.show({
                        templateUrl: 'app/views/devices/upgrade.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                }
                if ($index == 4) {
                    $mdDialog.show({
                        templateUrl: 'app/views/devices/notification.html',
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
