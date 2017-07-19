'use strict';
angular.module('main')
.controller('HistorialClinicoCtrl', function ($scope) {
	$scope.tabU = true;
    $scope.tabD = false;

	$scope.tabUnofn = function () {
        $scope.tabU = true;
        $scope.tabD = false;
    }
    $scope.tabDosfn = function () {
        $scope.tabU = false;
        $scope.tabD = true;
    }

});
