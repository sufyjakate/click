angular
  .module('MyApp')
  .controller('sampleCtrl', sampleCtrl);


function sampleCtrl($scope, $http){

    // prepare the widget data
    $http.get("/example/data/engine.json").success(function(data){
        $scope.data = {};
        $scope.data.WEconfiguration = data;
        $scope.data.WEconfiguration2 = angular.copy(data);
        $scope.data.WEcallback = function(e, configuration){
            console.log(e, configuration);
        };
    });


}