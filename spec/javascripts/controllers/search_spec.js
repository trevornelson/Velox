'use strict';

describe('SearchController', function() {

  var $rootScope, $scope, $controller, searchFactory;

  beforeEach(function() {

    module('hither');

    inject(function(_$rootScope_, _$controller_, _searchFactory_) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      $controller = _$controller_;
      searchFactory = _searchFactory_;

      $controller('SearchController', {'$rootScope': $rootScope, '$scope': $scope});
    });
  });

  xit('should contain injected searchFactory dependency', function() {
    expect($controller.searchFactory).toBeDefined();
  });

  xit('should call searchFactory query function when keyup event is triggered', function() {
    spyOn(searchFactory, 'query');
    angular.element('#depart-autocomplete').trigger('keyup');
    expect(searchFactory.query).toHaveBeenCalled();
  });

})
