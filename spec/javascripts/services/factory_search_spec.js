'use strict';

describe('searchFactory', function() {

  var searchFactory;

  beforeEach(function() {

    module('hither');

    inject(function(_searchFactory_) {
      searchFactory = _searchFactory_;
    });
  });

  describe('selectResult', function() {
    var search_options, returned_object;

    beforeEach(function() {
      search_options = {}
    });


    xit('should call buildSearch function', function() {
      spyOn(searchFactory, 'buildSearch');
      searchFactory.selectResult();
      expect(searchFactory.buildSearch).toHaveBeenCalled();
    });

  });

  describe('hydrateResults', function() {
    var search_results;

    beforeEach(function() {
       search_results = [{description: 'Laguardia Airport',
                        airport_code: 'LGA',
                        latitude: '86.12456',
                        longitude: '45.235721'
                        }]

      this.returned_object = searchFactory.hydrateResults(search_results);
    });

    xit('should return an array', function() {
      expect(Array.isArray(this.returned_object)).toBe(true);
    });

    xit('should return SearchResult objects', function() {
      expect(this.returned_object[0].airport_code).toBe('LGA');
    });

  });

  describe('callback', function() {

    beforeEach(function() {
      this.predictions = [{description: 'Telangana, India',
                          id: 'ca3459873460972346',
                          matched_substrings: [],
                          place_id: 'chIDSGHSGHGRDF',
                          reference: 'CjQoAAAA_0F2UzqpU053XGDKmR8B2K0WCkfTun8p_JL72TpL5uS',
                          terms: [],
                          types: []
                          },
                          {
                          description: 'Texas, United States',
                          id: 'fa1cc982068f7721fcb8400b99e927077f5aa25f',
                          matched_substrings: [],
                          place_id: 'ChIJSTKCCzZwQIYRPN4IGI8c6xY',
                          reference: 'CjQsAAAA0dDPP2hO7CQYy-h1VjkuOp0A3DfjGuNWiDrprL7aYLDiQp',
                          terms: [],
                          types: []
                        }];
    });


    xit('should return null if query status is not OK', function() {
      var results = searchFactory.callback(this.predictions, 'ZERO_RESULTS');
      expect(results).toBe(null);
    });

    xit('should call hydrateResults function if query status is OK', function() {
      spyOn(searchFactory, 'hydrateResults');
      searchFactory.callback(this.predictions, 'OK');
      expect(searchFactory.hydrateResults).toHaveBeenCalled();
    });
  });

  describe('query', function() {
    xit('should return null if query input is empty', function() {
      expect(searchFactory.query('')).toBe(null);
    });

    xit('should call callback function if query is valid', function() {
      spyOn(searchFactory, 'callback');
      searchFactory.query('texas');
      setTimeout(function() {
        expect(searchFactory.callback).toHaveBeenCalled();
      }, 200);

    });
  });

});
