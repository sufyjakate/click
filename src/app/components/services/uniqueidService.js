/**
 * Created by sufyjakate on 25.09.17.
 */
angular.module("app").service("UniqueIdService", function(){

    var nextId = 1;

    this.getUniqueId = function(){
        return nextId++;
    }
});
