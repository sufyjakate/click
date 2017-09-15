(function(){
    angular.module('app')
        .config(function($mdIconProvider) {
            $mdIconProvider
                .icon('devmgmt', 'assets/images/devices.svg', 24)
                .icon('devctrl', 'assets/images/machine.svg', 24)
                .icon('suggest', 'assets/images/phone.svg', 24)
                .icon('upgrade', 'assets/images/phone.svg', 24)
                .icon('notif', 'assets/images/phone.svg', 24);
        })
        .controller('DeviceController', function($scope, $timeout, $mdBottomSheet, $mdToast) {
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
        })
        .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet, $mdDialog) {
            $scope.items = [
                { name: 'Device Management', icon: 'devmgmt'},
                { name: 'Device Controls', icon: 'devctrl' },
                { name: 'Suggest Me', icon: 'suggest' },
                { name: 'Upgrade Center', icon: 'upgrade' },
                { name: 'Notification Center', icon: 'notif' }
            ];

            $scope.listItemClick = function($index, ev) {
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
                            templateUrl: 'app/views/template1.html',
                            controller: TemplateController,
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true
                        })

                }


            };



        })
        .controller('TemplateController', function($scope, $mdDialog, $mdBottomSheet){
            $scope.cards = [
                {name: 'Card 1', id: 1},
                {name: 'Card 2', id: 2},
                {name: 'Card 3', id: 3}
            ];

            $scope.addCard = function($event, ev) {
                console.log($event);
                var click = $scope.cards[$event];
                $mdBottomSheet.hide(click);
            };

            $scope.removeCard = function(id) {
               // cards.splice
            };

            $scope.shut = function () {
                console.log("Removed")
                $mdDialog.hide();
            }


        })
        .run(function($templateRequest) {

            var urls = [
                'assets/images/devices.svg',
                'assets/images/machine.svg',
                'assets/images/phone.svg',
                'assets/images/phone.svg',
                'assets/images/phone.svg'
            ];

            angular.forEach(urls, function(url) {
                $templateRequest(url);
            });

        })
})();
