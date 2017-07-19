'use strict';
angular.module('main')
.controller('Videoconsulta6Ctrl', function ($scope) {
	$scope.tabUno = false;
    $scope.cambiarTabUno = function () {
        $scope.tabUno = !$scope.tabUno;
        $scope.tabdos = !$scope.tabdos;
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

});
