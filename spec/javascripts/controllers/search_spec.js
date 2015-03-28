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

  it('should contain injected searchFactory dependency', function() {
    expect($controller.searchFactory).toBeDefined();
  });

  it('should call searchFactory query function when keyup event is triggered', function() {

  });

  it('should update departing location results dropdown when departing keyup event is triggered', function() {

  });

  it('should update destination location results dropdown when destination keyup event is triggered', function() {

  });

  it('should not update destination location results dropdown when departing keyup event is triggered', function() {

  });

  it('should not update departing location results dropdown when destination keyup event is triggered', function() {

  });

})
