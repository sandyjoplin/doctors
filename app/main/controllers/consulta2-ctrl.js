'use strict';
angular.module('main')
.controller('Consulta2Ctrl', function ($scope, $stateParams, $ionicSlideBoxDelegate) {
	$scope.slide = function(to) {
        $scope.current = to;
        $ionicSlideBoxDelegate.slide(to);
    }
    $scope.tabU = true;
    $scope.tabD = false;
    $scope.tabT = false;
    $scope.tabCu = false;
    
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

});
