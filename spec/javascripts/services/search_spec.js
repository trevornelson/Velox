'use strict';

describe('SearchSvc', function() {

  var SearchSvc, FlightSvc, HotelSvc, $httpBackend, $scope;

  var qpxMock = {

  }

  var zilyoMock = {

  }

  beforeEach(function() {
    module('app');

    inject(function(_SearchSvc_, _FlightSvc_, _HotelSvc_, _$httpBackend_, $rootScope) {
      SearchSvc = _SearchSvc_;
      FlightSvc = _FlightSvc_;
      HotelSvc = _HotelSvc_;
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
    });

    $httpBackend.expectPOST(/https:\/\/www\.googleapis\.com\/qpxExpress\/v1\/trips\/search.*/).respond(qpxMock);
    $httpBackend.expectGET(/https:\/\/zilyo\.p\.mashape\.com\/search.*/).respond(zilyoMock);
  });

  describe('queryApis', function() {

    it('should call the fetch FlightSvc function', function() {
      spyOn(FlightSvc, 'fetch');
      SearchSvc.queryAPIs();
      expect(FlightSvc.fetch).toHaveBeenCalled();
    });

    it('should call the fetch HotelSvc function', function() {
      spyOn(HotelSvc, 'fetch');
      SearchSvc.queryAPIs();
      expect(HotelSvc.fetch).toHaveBeenCalled();
    });

    it('should call the updateTrips function', function() {
      spyOn(FlightSvc, 'updateTrips');

      var deferredResponse = SearchSvc.queryAPIs();
      deferredResponse.then(function() {
        expect(FlightSvc.updateTrips).toHaveBeenCalled();
      });

      // $scope.$apply needed to manually resolve promises
      $scope.$apply();
      $httpBackend.flush();
    });

    it('should call the updateHotels function', function() {
      spyOn(HotelSvc, 'updateHotels');

      var deferredResponse = SearchSvc.queryAPIs();
      deferredResponse.then(function() {
        expect(HotelSvc.updateHotels).toHaveBeenCalled();
      });

      // $scope.$apply needed to manually resolve promises
      $scope.$apply();
      $httpBackend.flush();
    });



  });

});