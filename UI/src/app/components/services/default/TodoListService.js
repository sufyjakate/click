(function(){
  'use strict';

  angular.module('app')
        .service('todoListService', [
        '$q',
      todoList
  ]);

  function todoList($q){
    var todos = [
      {text: 'Switch off lights', done: false},
      {text: 'Turn on music when I come home', done: true},
        {text: 'Turn off lights after 11pm', done: false},
        {text: 'Send me a message when my son leaves school', done: false},
        {text: 'Notify me daily to throw the trash out.', done: false}
    ];

    return {
      loadAllItems : function() {
        return $q.when(todos);
      }
    };
  }
})();
