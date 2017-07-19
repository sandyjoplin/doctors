'use strict';
angular.module('main')
.controller('PerfilCtrl', function ($scope) {
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

   $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  $scope.toggleGroup2 = function(group1) {
    if ($scope.isGroupShown2(group1)) {
      $scope.shownGroup2 = null;
    } else {
      $scope.shownGroup2 = group1;
    }
  };
  $scope.isGroupShown2 = function(group1) {
    return $scope.shownGroup2 === group1;
  };


});
