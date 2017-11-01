(function () {
    angular
        .module('app')
        .controller('RuleManagementController', [
            'ruleService',
            '$scope',
            '$mdDialog',
            RuleManagementController
        ]);

    function RuleManagementController(ruleService, $scope, $mdDialog) {
        var vm = this;
        console.log("In the Rule Management controller");


        vm.selectedRule ;

        vm.loadAllItems = function () {
            ruleService
                .loadAllRuleData()
                .then(function (ruleData) {
                    vm.ruleData = [].concat(ruleData);
                    console.log(ruleData);
                });

        };

        vm.loadAllItems();

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
                .then(function (answer) {
                    console.log("In the Rule Management controller --- in then ");
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    console.log("In the Rule Management controller --- after then ");
                    $scope.status = 'You cancelled the dialog.';
                });
        };




        vm.loadRuleData = function (rule) {
            vm.selectedRule = rule;
            console.log("SELECTEDDDD");
            console.log(rule);
            console.log(vm.selectedRule);
        }





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
