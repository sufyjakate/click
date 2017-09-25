/**
 * Created by sufyjakate on 21.09.17.
 */
(function () {

    angular.module('app')
        .controller('TemplateController', ['InterControllerCommunication', '$scope', '$mdDialog'
        , TemplateController]);

        function TemplateController(icc, $scope, $mdDialog){

            var cards = [];

            $scope.addCard = function(id) {
                var card = {};
                card.id = 1;
                card.title = id;
                cards.push(card);
                //$rootScope.$broadcast('Hello');
                icc.publish('list.update', cards);
                console.log(cards);
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
