'use strict';

describe('HotelSvc', function() {
  var HotelSvc, $httpBackend, $scope;
  var location = { arrival_location: {
                    name: 'Laguardia Airport',
                    city: 'New York',
                    code: 'LGA',
                    lat: '104.2345216',
                    lng: '89.5235634'
                    }
                  };

  beforeEach(function() {
    module('app');

    inject(function(_HotelSvc_, _$httpBackend_, $rootScope ) {
      HotelSvc = _HotelSvc_;
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
    });
  });

  describe('createRequest', function() {

    it('should return a valid query request', function() {
      var queryRequest = HotelSvc.createRequest(location.arrival_location);
      expect(queryRequest).toEqual('https://zilyo.p.mashape.com/search?latitude=104.2345216&longitude=89.5235634&maxdistance=100');
    });

  });

  describe('fetch', function() {

    it('should return a valid response', function() {
      $httpBackend.expectGET(/https:\/\/zilyo\.p\.mashape\.com\/search.*/).respond(stub_hotels);

      HotelSvc.fetch(location).then(function(response) {
        var hotelId = response.data.result[0].id;
        expect(hotelId).toEqual('hma1554297');
      });

      $scope.$apply();
      $httpBackend.flush();
    });

  });

  describe('parseZilyo', function() {

    it('should update the hotels collection', function() {
      HotelSvc.parseZilyo(stub_hotels);
      expect(HotelSvc.hotels.length).toEqual(14);
    });

    it('should update the hotel collection with Hotel objects', function() {
      HotelSvc.parseZilyo(stub_hotels);
      var firstHotel = HotelSvc.hotels[0];
      expect(firstHotel.constructor.name).toEqual('Hotel');
    });

  });

});