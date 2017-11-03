(function () {

    angular
        .module('app')
        .controller('RuleCreationController', [
            '$timeout', '$q', 'countriesService',
            RuleCreationController
        ]);

    function RuleCreationController($timeout, $q, countriesService) {
        var vm = this;

        console.log("rule Creation controller");

        vm.options = {
            content: 'Menu',
            isOpen: true,
            toggleOnClick: true,
            items: [
                {
                    content: 'About',
                    onclick: function () {
                        console.log('About');
                    }
                }
            ]
        };


        vm.ruleParameters = {
            triggers: [
                {
                    id: 1,
                    name: 'Temporal',
                    icon: 'access_time',
                    link: '',
                    children: [
                        {
                            id: 1,
                            name: 'Dates of Month',
                            icon: 'access_time',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'First Week of every month',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'First Weekend of every month',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Mid of the month',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'access_time',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Every Weekend',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Weekday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Monday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Tuesday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Wednesday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Thursday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Friday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Saturday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Sunday',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 1,
                            name: 'Time',
                            icon: 'access_time',
                            link: '',
                            children: [

                                {
                                    id: 1,
                                    name: 'Every Morning',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Afternoon',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Eventing',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Night',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                            ]
                        }
                        ,
                        {
                            id: 1,
                            name: 'Duration',
                            icon: 'access_time',
                            link: '',
                            children: [

                                {
                                    id: 1,
                                    name: 'After one hour of',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'One day after',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'One week after',
                                    icon: 'access_time',
                                    link: '',
                                    children: []
                                },
                            ]
                        }

                    ]
                },
                {
                    id: 1,
                    name: 'Spatial',
                    icon: 'location_on',
                    link: '',
                    children: [
                        {
                            id: 1,
                            name: 'Dates of Month',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Times',
                            icon: 'time',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Duration',
                            icon: 'time',
                            link: '',
                            children: []
                        }

                    ]
                },
                {
                    id: 1,
                    name: 'Situation',
                    icon: 'traffic',
                    link: '',
                    children: [
                        {
                            id: 1,
                            name: 'Dates of Month',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Times',
                            icon: 'time',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Duration',
                            icon: 'time',
                            link: '',
                            children: []
                        }

                    ]
                },
                {
                    id: 1,
                    name: 'Communication',
                    icon: 'chat',
                    link: '',
                    children: [
                        {
                            id: 1,
                            name: 'Dates of Month',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Times',
                            icon: 'time',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Duration',
                            icon: 'time',
                            link: '',
                            children: []
                        }

                    ]
                },
                {
                    id: 1,
                    name: 'Service',
                    icon: 'cloud',
                    link: '',
                    children: [
                        {
                            id: 1,
                            name: 'Dates of Month',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Times',
                            icon: 'time',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Duration',
                            icon: 'time',
                            link: '',
                            children: []
                        }

                    ]
                },
                {
                    id: 1,
                    name: 'Physical Entity',
                    icon: 'accessibility',
                    link: '',
                    children: [
                        {
                            id: 1,
                            name: 'Dates of Month',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Times',
                            icon: 'time',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Duration',
                            icon: 'time',
                            link: '',
                            children: []
                        }

                    ]
                },
                {
                    id: 1,
                    name: 'Operator',
                    icon: 'more',
                    link: '',
                    children: [
                        {
                            id: 1,
                            name: 'Dates of Month',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'time',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Times',
                            icon: 'time',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Duration',
                            icon: 'time',
                            link: '',
                            children: []
                        }

                    ]
                },

            ],
            actions: []
        }


        vm.items = ['Temporal', 'Spatial', 'Situation', 'Communication', 'Service', 'Physical Entity', 'Operator'];


        vm.levelItem1 = {};
        vm.levelitem2= {};
        vm.levelitem3= {};

        vm.selectLevelOneItem = function (item) {
            vm.levelItem1 = item;
            console.log("1st level item : ");
            console.log(item);
        }

        vm.selectLevelTwoItem = function (item) {
            vm.levelItem2 = item;
            console.log("2nd level item : ");
            console.log(item);
        }


        vm.selectLevelThreeItem = function (item) {
            vm.levelItem2 = item;
            console.log("3rd level item : ");
            console.log(item);
        }



        vm.countries = countriesService.loadAll();
        vm.selectedCountry = null;
        vm.searchText = null;
        vm.querySearch = querySearch;
        vm.disableCaching = true;

        function querySearch(query) {
            var results = query ? vm.countries.filter(createFilterFor(query)) : [],
                deferred;
            deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }
})();
