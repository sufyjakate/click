(function () {
    angular
        .module('app')
        .config(function ($mdThemingProvider) {

            //
            // red, pink, purple, deep-purple, indigo, blue, light-blue,
            //     cyan, teal, green, light-green, lime, yellow, amber,
            //     orange, deep-orange, brown, grey, blue-grey

            $mdThemingProvider.theme('red');
            $mdThemingProvider.theme('pink');
            $mdThemingProvider.theme('purple');
            $mdThemingProvider.theme('deep-purple');
            $mdThemingProvider.theme('indigo');
            $mdThemingProvider.theme('blue');
            $mdThemingProvider.theme('light-blue');
            $mdThemingProvider.theme('cyan');
            $mdThemingProvider.theme('teal');
            $mdThemingProvider.theme('green');
            $mdThemingProvider.theme('light-green');
            $mdThemingProvider.theme('lime');
            $mdThemingProvider.theme('yellow');
            $mdThemingProvider.theme('amber');
            $mdThemingProvider.theme('orange');
            $mdThemingProvider.theme('deep-orange');
            $mdThemingProvider.theme('brown');
            $mdThemingProvider.theme('blue-grey');

            $mdThemingProvider.theme('dark-grey').dark();
            $mdThemingProvider.theme('dark-orange');
            $mdThemingProvider.theme('dark-purple').backgroundPalette('grey').dark();
            $mdThemingProvider.theme('dark-blue').dark();
            $mdThemingProvider.theme('grey').dark();
        })
        .controller('RuleManagementController', [
            'ruleService',
            RuleManagementController
        ]);

    function RuleManagementController(ruleService) {
        var vm = this;

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
