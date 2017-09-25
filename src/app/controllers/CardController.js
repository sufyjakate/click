/**
 * Created by sufyjakate on 21.09.17.
 */
angular.module('app')

    .controller('CardController', [ 'InterControllerCommunication', '$scope', function (icc, $scope) {
        //
        // $scope.on('Hello', function () {
        //
        // });
        var handler = function (ea, data) {
            $scope.cards = data;
        };
        var list = icc.subscribe('list.update', handler);
        console.log(list);

        $scope.removeCard = function(index) {
            // cards.splice
            $scope.cards.splice(index, 1);

            icc.publish('list.delete', cards);
            console.log(index);

        };


    }]);

    