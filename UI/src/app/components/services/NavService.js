(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Devices',
        icon: 'devices',
        sref: '.device'
      },
      {
          name: 'Rule',
          icon: 'view_module',
          sref: '.rule'
      },
      {
          name: 'Profile',
          icon: 'view_module',
          sref: '.table'
      },
      {
        name: 'Data Table',
        icon: 'view_module',
        sref: '.data-table'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
