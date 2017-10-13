(function(){
  'use strict';

  angular.module('app')
        .service('ruleService', [
        '$q',
      ruleService
  ]);

  function ruleService($q){
    var tableData = [
      {
        issue: 'Nested views',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Table component',
        progress: 40,
        status: 'Feedback',
        class: ''
      },
      {
        issue: 'Dashboard tiles',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Panel widget',
        progress: 84,
        status: 'In progress',
        class: 'orange'
      },
      {
        issue: 'Form',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Custom CSS',
        progress: 20,
        status: 'Feedback',
        class: ''
      },
      {
        issue: 'Add backend',
        progress: 1,
        status: 'To do',
        class: 'md-warn'
      },
      {
        issue: 'Layout with sidebar',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      }
    ];

    var ruleOptions = {
          cellHeight: 200,
              verticalMargin: 10
      };

      var ruleWidgetData =
          [
              {
                  widgetType: 0,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },
              {
                  widgetType: 1,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },
              {
                  widgetType: 2,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },
              {
                  widgetType: 3,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },
              {
                  widgetType: 4,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },
              {
                  widgetType: 5,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },
              {
                  widgetType: 6,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },
              {
                  widgetType: 7,
                  x: 0,
                  y: 0,
                  width: 4,
                  height: 4
              },

          ];

    function PickRandom() {
      return Object.assign({}, tableData[Math.floor(Math.random()*tableData.length)]);
    }

    return {
      loadAllRuleWidgets : function() {
          return $q.when(ruleWidgetData);
      },
      loadWidgetsOptions : function() {
          return $q.when(ruleOptions);
      },
      loadAllItems : function() {
        return $q.when(tableData);
      },
      /**
       * Query expects that `limit`,`page`, and `order` fields be present
       */
      loadByPagination: function (query) {
        query = query || {limit:10,page:1};

        var list = [];
        var start = (query.page-1)*query.limit;
        var end = start + query.limit;
        for (var i = start; i < end; i++) {
          var f = PickRandom();
          f.id = i+1;
          list.push(f);
        }
        return $q.when({items:list,count:800});
      }
    };
  }
})();
