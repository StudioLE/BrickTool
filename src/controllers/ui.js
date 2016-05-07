'use strict'

angular.module('app.ui', [])

/*****************************************************************
*
* UI controlller
*
******************************************************************/
.controller('UICtrl', function($scope, Config) {

  var dim = {
    stretcher: 215,
    header: 102.5,
    height: 65,
    joint: 10
  }
  
  $scope.selected = false
  $scope.selectedMod = false

  $scope.courses = {
    x: 5,
    y: 6,
    co: 1
  }

  $scope.height = 0
  $scope.length = 0

  $scope.coType = function(num) {
    if(num === 2) {
      return 'CO+'
    }
    else if(num === 1) {
      return 'CO'
    }
    if(num === 0) {
      return 'CO-'
    }
    else {
      console.error('Unknown joint type')
      return false
    }
  }

  $scope.setLength = function() {
    $scope.length = (dim.stretcher + dim.joint) * $scope.courses.x + (dim.joint * ($scope.courses.co - 1))
  }

  $scope.setHeight = function() {
    $scope.height = (dim.height + dim.joint) * $scope.courses.y + (dim.joint * ($scope.courses.co - 1))
  }

  $scope.setDims = function() {
    $scope.setHeight()
    $scope.setLength()
  }

  $scope.repeatX = function(multiplier) {
    if( ! multiplier) multiplier = 1
    if(parseInt($scope.courses.x) > 1) {
      return new Array(parseInt($scope.courses.x * multiplier) - 1)
    }
    else {
      return []
    }
  }

  $scope.repeatY = function() {
    if(parseInt($scope.courses.y) > 0) {
      return new Array(parseInt($scope.courses.y))
    }
    else {
      return []
    }
  }

  $scope.isOdd = function(num) {
    return num % 2
  }

  $scope.setDims()

})
