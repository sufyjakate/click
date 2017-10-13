/**
 * Created by sufyjakate on 13.10.17.
 */
(function () {

    angular.module('app')
        .controller('DevControlController', ['InterControllerCommunication', '$scope', '$mdDialog'
            , DevControlController]);

    function DevControlController(icc, $scope, $mdDialog){



        $scope.widgets = [];

        var cardid = 0;
        $scope.addWidget = function(id) {
            var newWidget = {x:0, y:0, width:4, height:1};

            //newWidget.id = 1;
            cardid++;
            newWidget.cardid = cardid;
            newWidget.title = id;
            $scope.widgets.push(newWidget);

            icc.publish('list.update', $scope.widgets);
            console.log($scope.widgets);
        };


        // $scope.removeCard = function(index) {
        //     // cards.splice
        //     $scope.cards.splice(index, 1);
        //     console.log(cards);
        //
        // };


        $scope.shut = function(id) {
            console.log("Removed");
            $mdDialog.hide();
        }


    }
})();
