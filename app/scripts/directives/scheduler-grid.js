'use strict';

angular.module('schedulerGridApp')
  .directive('schedulerGrid', function () {
    return {
      templateUrl: 'views/scheduler-grid.html',
      restrict: 'E',
      controller: function ($scope) {

        $scope.schedule = [
          {on:true,dateTime:new Date('2017-01-11'),enabled:true},
          {on:false,dateTime:new Date('2017-12-11'),enabled:true},
          {on:true,dateTime:new Date('2017-08-21'),enabled:false},
        ];
        
        $scope.addRow = function () { 
          var d = new Date();
          d.setMilliseconds(0);
          $scope.schedule.push({on:true,dateTime:d,enabled:true}); 
        };
        $scope.removeRow = function (index) { 
          $scope.schedule.splice(index,1); 
        };
      }
    };
  });
