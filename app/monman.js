'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'kendo.directives'
]).controller("myCtrl", function($scope) {
  $scope.count = 3;
  $scope.greeting = "howdy";
  $scope.ngversion = angular.version.full;
});

