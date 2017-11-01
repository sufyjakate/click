'use strict';

angular.module('app')
  .directive('panelWidget', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: { title: '@', template: '@', options: '@'},
      template: '' +
                '<section layout-margin class=" panel-widget ">' +
                '  <md-toolbar md-theme="" class="md-hue-1 panel-widget-toolbar">' +
                '    <div class="md-toolbar-tools">' +
                '      <h3 class="panel-widget-tittle" >{{title}}</h3>' +
                '      <span flex></span>' +
                // '      <md-button ng-show="options" ng-click="$showOptions = !$showOptions" class="md-icon-button" aria-label="Show options">' +
                // '        <i class="material-icons">expand_more</i>' +
                // '      </md-button>' +

                // '<md-content ng-show="$showOptions" class="options"> '+

                '</md-content>'+

                '    </div>' +
                '  </md-toolbar>' +
                '  <div md-colors="{background: \'default-background-hue-1\'}" ng-include="template"/>' +
                '</section>',
      compile: function(element, attrs, linker) {
        return function(scope, element) {
          linker(scope, function(clone) {
            element.append(clone);
          });
        };
      }
    };
  });
