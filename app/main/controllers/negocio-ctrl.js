'use strict';
angular.module('main')
.controller('NegocioCtrl', function ($scope) {
    $scope.tabU = true;
    $scope.tabD = false;
    $scope.tabT = false;
    $scope.tabCu = false;
    $scope.tabCi = false;
    
    $scope.tabUnofn = function () {
        $scope.tabU = true;
        $scope.tabD = false;
        $scope.tabT = false;
        $scope.tabCu = false;
        $scope.tabCi = false;
    }
    $scope.tabDosfn = function () {
        $scope.tabU = false;
        $scope.tabD = true;
        $scope.tabT = false;
        $scope.tabCu = false;
        $scope.tabCi = false;
    }
    $scope.tabTresfn = function () {
        $scope.tabU = false;
        $scope.tabD = false;
        $scope.tabT = true;
        $scope.tabCu = false;
        $scope.tabCi = false;
    }
    $scope.tabCuatrofn = function () {
        $scope.tabU = false;
        $scope.tabD = false;
        $scope.tabT = false;
        $scope.tabCu = true;
        $scope.tabCi = false;
    }
    $scope.tabCincofn = function () {
        $scope.tabU = false;
        $scope.tabD = false;
        $scope.tabT = false;
        $scope.tabCu = false;
        $scope.tabCi = true;
    }
    $scope.user= {
        min: 0,
        max: 100,
        value: 0
    }
    $scope.star= {
        min: 0,
        max: 100,
        value: 66.64
    }
    $scope.kilometro= {
        min: 1,
        max: 5,
        value: 1
    }

});
