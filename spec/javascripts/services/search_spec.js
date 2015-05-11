'use strict';

describe('SearchSvc', function() {

  var SearchSvc, FlightSvc, HotelSvc, $httpBackend;

  beforeEach(function() {
    module('app');

    inject(function(_SearchSvc_, _FlightSvc_, _HotelSvc_, _$httpBackend_) {
      SearchSvc = _SearchSvc_;
      FlightSvc = _FlightSvc_;
      HotelSvc = _HotelSvc_;
      $httpBackend = _$httpBackend_;
    });
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
      SearchSvc.queryAPIs();
      expect(FlightSvc.updateTrips).toHaveBeenCalled();
    });

    it('should call the updateHotels function', function() {
      spyOn(HotelSvc, 'updateHotels');
      SearchSvc.queryAPIs();
      expect(HotelSvc.updateHotels).toHaveBeenCalled();
    });



  });

});