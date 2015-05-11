'use strict';

describe('FlightSvc', function() {
  var FlightSvc, $httpBackend, $scope;
  var searchInputs = {depart_location: { code: 'LGA' },
                      arrival_location: { code: 'DFW' },
                      depart_date: '2015-09-09'
  };

  beforeEach(function() {
    module('app');

    inject(function(_FlightSvc_, _$httpBackend_, $rootScope) {
      FlightSvc = _FlightSvc_;
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
    });
  });

  describe('createRequest', function() {
    
    it('should return a query string', function() {
      var queryRequest = FlightSvc.createRequest(searchInputs);
      expect(typeof queryRequest).toEqual('string');
    });

    it('should add an element to the slice array', function() {
      var queryRequest = FlightSvc.createRequest(searchInputs);
      var parsedRequest = JSON.parse(queryRequest);
      expect(parsedRequest.request.slice.length).toEqual(1);
    });

  });

  describe('fetch', function() {

    it('should return a valid response', function() {
      $httpBackend.expectPOST(/https:\/\/www\.googleapis\.com\/qpxExpress\/v1\/trips\/search.*/).respond(stub_trips);

      FlightSvc.fetch(searchInputs).then(function(response) {
        expect(response.data.kind).toEqual('qpxExpress#tripsSearch');
      });

      $scope.$apply();
      $httpBackend.flush();
    });

  });

  describe('parseQPX', function() {

    it('should update the trips collection', function() {
      FlightSvc.parseQPX(stub_trips);
      expect(FlightSvc.trips.length).toEqual(40)
    });

    it('should update the trips collection with Trip objects', function() {
      FlightSvc.parseQPX(stub_trips);
      var firstTrip = FlightSvc.trips[0];
      expect(firstTrip.constructor.name).toEqual('Trip');
    });

    it('should nest Flight objects inside of updated Trip objects', function() {
      FlightSvc.parseQPX(stub_trips);
      var firstTrip = FlightSvc.trips[0];
      var firstFlight = firstTrip.flights[0];
      expect(firstFlight.constructor.name).toEqual('Flight');
    });

  });

});