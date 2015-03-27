'use strict';

describe('SearchController', function() {

  var $rootScope, $scope, $controller;

  beforeEach(module('hither'));

  beforeEach(inject(function(_$rootScope_, _$controller_){
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;

    $controller('SearchController', {'$rootScope': $rootScope, '$scope': $scope});
  }));

  it('should initialize an AutoCompleteService object for departing location', function() {
    expect($scope.departing.constructor.name == 'Ll');
  });

  it('should initialize an AutoCompleteService object for returning location', function() {
    expect($scope.returning.constructor.name == 'Ll');
  });

})
