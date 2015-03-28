describe('searchFactory', function() {

  beforeEach(module('searchFactory'));

  describe('selectResult', function() {
    it('should create a Search object', function() {

    });

  });

  describe('hydrateResults', function() {
    it('should return an array', function() {

    });

    it('should return searchResult objects', function() {

    });

  });

  describe('callback', function() {
    it('should return null if query status is not OK', function() {

    });

    it('should call hydrateResults function if query status is OK', function() {

    });
  });

  describe('queryApi', function() {
    it('should return null if query input is empty', function() {

    });

    it('should call callback function if query is valid', function() {

    });
  });








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
