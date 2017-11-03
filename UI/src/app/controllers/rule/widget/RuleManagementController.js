(function () {
    angular
        .module('app')
        .controller('RuleManagementController', [
            'ruleService',
            '$scope',
            '$mdDialog',
            '$mdToast',
            RuleManagementController
        ]);

    function RuleManagementController(ruleService, $scope, $mdDialog,$mdToast) {
        var vm = !!vm ? vm : this;
        console.log("In the Rule Management controller");


        vm.selectedRule ;

        vm.loadAllItems = function () {
            ruleService
                .loadAllRuleData()
                .then(function (ruleData) {
                    vm.ruleData = [].concat(ruleData);
                    console.log(ruleData);
                    vm.selectedRule = vm.ruleData[Math.floor(Math.random() * vm.ruleData.length)];

                });

        };

        vm.loadAllItems();


        vm.hide = function () {
            $mdDialog.hide();
        };

        vm.cancel = function () {
            $mdDialog.cancel();
        };

        vm.answer = function (answer) {
            console.log(" value check");
            console.log(vm.selectedRule);
            $mdDialog.hide(answer);
        };

        vm.loadAllRules = function (ev) {

            $mdDialog.show({
                controller: RuleManagementController,
                templateUrl: 'app/views/rule/partial/SelectRuleFromAllDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                escapeToClose: true,
                // skipHide : true,
                multiple: true,
                // fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function (answer,j,i) {
                    debugger;
                    $scope.vm.selectedRule = answer;
                    console.log("In the Rule Management controller --- in then ");
                    $scope.status = 'You said the information was "' + answer + '".';

                }, function () {
                    console.log("In the Rule Management controller --- after then ");
                    $scope.status = 'You cancelled the dialog.';
                });
        };




        vm.loadRuleData = function (rule) {
            console.log("before");
            console.log(vm.selectedRule);
            vm.selectedRule = rule;
            console.log("after");
            console.log(rule);
            console.log(vm.selectedRule);

            vm.answer(vm.selectedRule);
        }

        vm.showToastMessage = function (message) {
            $mdToast.show(
                $mdToast.simple()
                // .textContent(clickedItem['name'] + ' clicked!')
                    .textContent(message)
                    .position('bottom right')
                    .hideDelay(1500)
            );

        }


        // var last = {
        //     bottom: false,
        //     top: true,
        //     left: false,
        //     right: true
        // };
        //
        // // $scope.toastPosition = angular.extend({},last);
        //
        // $scope.getToastPosition = function() {
        //     sanitizePosition();
        //
        //     return Object.keys($scope.toastPosition)
        //         .filter(function(pos) { return $scope.toastPosition[pos]; })
        //         .join(' ');
        // };
        //
        //
        // function sanitizePosition() {
        //     var current = $scope.toastPosition;
        //
        //     if ( current.bottom && last.top ) current.top = false;
        //     if ( current.top && last.bottom ) current.bottom = false;
        //     if ( current.right && last.left ) current.left = false;
        //     if ( current.left && last.right ) current.right = false;
        //
        //     // last = angular.extend({},current);
        // }
        //
        // $scope.showSimpleToast = function() {
        //     var pinTo = $scope.getToastPosition();
        //
        //     $mdToast.show(
        //         $mdToast.simple()
        //             .textContent('Simple Toast!')
        //             .position(pinTo )
        //             .hideDelay(3000)
        //     );
        // };
        //
        // $scope.showSimpleToast = function() {
        //     var pinTo = $scope.getToastPosition();
        //
        //     $mdToast.show(
        //         $mdToast.simple()
        //             .textContent('Simple Toast!')
        //             .position(pinTo )
        //             .hideDelay(3000)
        //     );
        // };



        vm.addTodo = addTodo;
        vm.remaining = remaining;
        vm.archive = archive;
        vm.toggleAll = toggleAll;
        vm.todos = [];

        ruleService
            .loadAllItems()
            .then(function (todos) {
                vm.todos = [].concat(todos);
            });

        function addTodo() {
            if (!vm.todoText) return;
            vm.todos.push({text: vm.todoText, done: false});
            vm.todoText = '';
        }

        function remaining() {
            var count = 0;
            angular.forEach(vm.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        }

        function archive(e) {
            // Prevent from submitting
            e.preventDefault();
            var oldTodos = vm.todos;
            vm.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) vm.todos.push(todo);
            });
        }

        function toggleAll() {
            if (remaining() == 0) {
                angular.forEach(vm.todos, function (todo) {
                    todo.done = false;
                });
            } else {
                angular.forEach(vm.todos, function (todo) {
                    todo.done = true;
                });
            }
        }
    }
})();
