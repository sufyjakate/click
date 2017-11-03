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
                            icon: 'today',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'First Week of every month',
                                    icon: 'event_available',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'First Weekend of every month',
                                    icon: 'today',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Mid of the month',
                                    icon: 'event_busy',
                                    link: '',
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 1,
                            name: 'Days of Week',
                            icon: 'date_range',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Every Weekend',
                                    icon: 'date_range',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Weekday',
                                    icon: 'date_range',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Monday',
                                    icon: 'date_range',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Tuesday',
                                    icon: 'date_range',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Wednesday',
                                    icon: 'date_range',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Thursday',
                                    icon: 'date_range',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'Every Friday',
                                    icon: 'date_range',
                                    link: '',
                                    children: []
                                },
                                // {
                                //     id: 1,
                                //     name: 'Every Saturday',
                                //     icon: 'date_range',
                                //     link: '',
                                //     children: []
                                // },
                                // {
                                //     id: 1,
                                //     name: 'Every Sunday',
                                //     icon: 'date_range',
                                //     link: '',
                                //     children: []
                                // },
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
                            icon: 'timelapse',
                            link: '',
                            children: [

                                {
                                    id: 1,
                                    name: 'After one hour of',
                                    icon: 'timelapse',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'One day after',
                                    icon: 'timelapse',
                                    link: '',
                                    children: []
                                },
                                {
                                    id: 1,
                                    name: 'One week after',
                                    icon: 'timelapse',
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
                            name: 'Fixed Location',
                            icon: 'business',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Bedroom',
                                    icon: 'local_hotel',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Garage',
                                    icon: 'local_car_wash',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Living Room',
                                    icon: 'weekend',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Restaurant',
                                    icon: 'restaurant',
                                    link: '',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 1,
                            name: 'Moving Location',
                            icon: 'motorcycle',
                            link: '',
                            children: [

                                {
                                    id: 1,
                                    name: 'University',
                                    icon: 'school',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Work',
                                    icon: 'work',
                                    link: '',
                                    children: []
                                }

                                ,
                                {
                                    id: 1,
                                    name: 'Home',
                                    icon: 'home',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Hiking',
                                    icon: 'terrain',
                                    link: '',
                                    children: []
                                }

                                ,
                                {
                                    id: 1,
                                    name: 'Shopping',
                                    icon: 'store_mall_directory',
                                    link: '',
                                    children: []
                                }



                            ]
                        },

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
                            name: 'User Moods',
                            icon: 'mood_bad',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Happy',
                                    icon: 'sentiment_very_satisfied',
                                    link: '',
                                    children: [

                                    ]
                                },
                                {
                                    id: 1,
                                    name: 'Sad',
                                    icon: 'sentiment_very_dissatisfied',
                                    link: '',
                                    children: [

                                    ]
                                },
                                {
                                    id: 1,
                                    name: 'Neutral',
                                    icon: 'sentiment_neutral',
                                    link: '',
                                    children: [

                                    ]
                                },
                                {
                                    id: 1,
                                    name: 'Enjoy',
                                    icon: 'favorite',
                                    link: '',
                                    children: [

                                    ]
                                },
                                {
                                    id: 1,
                                    name: 'excited',
                                    icon: 'mood',
                                    link: '',
                                    children: [

                                    ]
                                },
                            ]
                        },
                        {
                            id: 1,
                            name: 'Weather',
                            icon: 'grain',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Cloudy',
                                    icon: 'wb_cloudy',
                                    link: '',
                                    children: [

                                    ]
                                },{
                                    id: 1,
                                    name: 'Sunny',
                                    icon: 'wb_sunny',
                                    link: '',
                                    children: [

                                    ]
                                },{
                                    id: 1,
                                    name: 'Windy',
                                    icon: 'swap_horiz',
                                    link: '',
                                    children: [

                                    ]
                                },{
                                    id: 1,
                                    name: 'Rainy',
                                    icon: 'grain',
                                    link: '',
                                    children: [

                                    ]
                                },

                            ]
                        },
                        {
                            id: 1,
                            name: 'Activity',
                            icon: 'directions_run',
                            link: '',
                            children: [

                                {
                                    id: 1,
                                    name: 'Driving',
                                    icon: 'time_to_leave',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Sleeping',
                                    icon: 'airline_seat_individual_suite',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Sitting',
                                    icon: 'airline_seat_recline_extra',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Walking',
                                    icon: 'directions_walk',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Running',
                                    icon: 'directions_run',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Cycling',
                                    icon: 'directions_bike',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Eating',
                                    icon: 'local_dining',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Music',
                                    icon: 'audiotrack',
                                    link: '',
                                    children: [

                                    ]
                                }
                                ,
                            ]
                        }
                        // ,
                        // {
                        //     id: 1,
                        //     name: 'Agenda',
                        //     icon: 'view_agenda',
                        //     link: '',
                        //     children: []
                        // }

                        ,
                        {
                            id: 1,
                            name: 'Traffic Situation',
                            icon: 'traffic',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Traffic High',
                                    icon: 'trending_up',
                                    link: '',
                                    children: [

                                    ]
                                },
                                {
                                    id: 1,
                                    name: 'Traffic low',
                                    icon: 'trending_down',
                                    link: '',
                                    children: [

                                    ]
                                },
                                {
                                    id: 1,
                                    name: 'Public Transport ',
                                    icon: 'directions_transit',
                                    link: '',
                                    children: [

                                    ]
                                }
                            ]
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
                            name: 'Call',
                            icon: 'call',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'SMS',
                            icon: 'sms',
                            link: '',
                            children: []
                        },
                        {
                            id: 1,
                            name: 'Email',
                            icon: 'email',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Post',
                            icon: 'markunread_mailbox',
                            link: '',
                            children: []
                        }
                        ,
                        {
                            id: 1,
                            name: 'Notification',
                            icon: 'vibration',
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
                            name: 'Physical Service',
                            icon: 'markunread_mailbox',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Post Received',
                                    icon: 'markunread_mailbox',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Package Recieved',
                                    icon: 'card_giftcard',
                                    link: '',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 1,
                            name: 'Non Physical Service',
                            icon: 'cloud',
                            link: '',
                            children: [
                                {
                                    id: 1,
                                    name: 'Entry in Database',
                                    icon: 'cloud_upload',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Entry in Logs',
                                    icon: 'receipt',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Data from Web Service',
                                    icon: 'swap_vertical_circle',
                                    link: '',
                                    children: []
                                }
                                ,
                                {
                                    id: 1,
                                    name: 'Social Network',
                                    icon: 'public',
                                    link: '',
                                    children: []
                                }
                            ]
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
        vm.levelItem2= {};
        vm.levelItem3= {};

        vm.selectLevelOneItem = function (item) {

            vm.levelItem2= null;
            vm.levelItem3= null;
            vm.levelItem1 = null;

            vm.levelItem1 = item;
            console.log("1st level item : ");
            console.log(item);

            logAllLevelItems();
        }


        function logAllLevelItems() {
            console.log("1st level item : ");
            console.log(vm.levelItem1);
            console.log("2nd level item : ");
            console.log(vm.levelItem2);
            console.log("3rd level item : ");
            console.log(vm.levelitem3);


        }

        vm.selectLevelTwoItem = function (item) {


            vm.levelItem2= null;

            vm.levelItem2 = item;
            console.log("2nd level item : ");
            console.log(item);

            vm.levelitem3= null;
            logAllLevelItems();

        }


        vm.selectLevelThreeItem = function (item) {
            vm.levelItem3 = item;
            console.log("3rd level item : ");
            console.log(item);
            logAllLevelItems();

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
