(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.message = "";
        $scope.classColor = "";

        $scope.checkDishes = function () {
            var numMenu = 0;

            $scope.lunchMenu.split(",").forEach(element => {
                if (!isNullOrWhiteSpace(element)) numMenu++;
            });

            if (numMenu == 0) {
                $scope.message = "Please enter data first.";
                $scope.classColor = "red";
            } 
            else if (numMenu >= 1 && numMenu <= 3) {
                $scope.message = "Enjoy!";
                $scope.classColor = "green";
            }
            else {
                $scope.message = "Too much!";
                $scope.classColor = "green";
            }
        };
    }
    

    function isNullOrWhiteSpace(str) {
        return (!str || str.length === 0 || /^\s*$/.test(str))
    }
})();
    