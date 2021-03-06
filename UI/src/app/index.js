'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app' , 'md.data.table',
    // 'circularMenu-directive',
    'angularCircularNavigation'
])

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      // .state('home.dashboard', {
      //   url: '/dashboard',
      //   templateUrl: 'app/views/default/dashboard.html',
      //   data: {
      //     title: 'Dashboard'
      //   }
      // })
      .state('home.device', {
        url: '/device',
        templateUrl: 'app/views/devices/device.html',
        controller: 'DeviceController',
        controllerAs: 'vm',
        data: {
          title: 'Device'
        }
      })
      .state('home.rule', {
          url: '/rule',
          controller: 'RuleController',
          controllerAs: 'vm',
          templateUrl: 'app/views/rule/rule.html',
          data: {
              title: 'Rule'
          }
      })
      // .state('home.table', {
      //     url: '/table',
      //     controller: 'TableController',
      //     controllerAs: 'vm',
      //     templateUrl: 'app/views/default/table.html',
      //     data: {
      //         title: 'Profile'
      //     }
      // })
      // .state('home.data-table', {
      //   url: '/data-table',
      //   controller: 'DataTableController',
      //   controllerAs: 'vm',
      //   templateUrl: 'app/views/default/data-table.html',
      //   data: {
      //     title: 'Table'
      //   }
      // })
    ;

    $urlRouterProvider.otherwise('/device');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  });
