'use strict';
angular.module('main').controller('FacturasCtrl', function ($scope) {
    $scope.tabU = true;
    $scope.tabD = false;
    $scope.tabT = false;
    $scope.tabUnofn = function () {
        $scope.tabU = true;
        $scope.tabD = false;
        $scope.tabT = false;
    }
    $scope.tabDosfn = function () {
        $scope.tabU = false;
        $scope.tabD = true;
        $scope.tabT = false;
    }
    $scope.tabTresfn = function () {
        $scope.tabU = false;
        $scope.tabD = false;
        $scope.tabT = true;
    }
});