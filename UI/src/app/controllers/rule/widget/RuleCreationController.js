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


        vm.leveloneItem = {};

        vm.selectLevelOneItem = function (item) {
            vm.leveloneItem = item;
            console.log("1st level item : ");
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
