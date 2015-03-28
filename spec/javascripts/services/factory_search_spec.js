'use strict';

describe('searchFactory', function() {

  beforeEach(module('searchFactory'));

  describe('selectResult', function() {
    it('should create a Search object', function() {
      var returned_object = searchFactory.selectResult();
      expect(returned_object.constructor).toBe('Search');
    });

  });

  describe('hydrateResults', function() {
    beforeEach(function() {
      this.returned_object = searchFactory.hydrateResults();
    });

    it('should return an array', function() {
      expect(Array.isArray(this.returned_object)).toBeTruthy;
    });

    it('should return searchResult objects', function() {
      expect(this.returned_object[0].constructor).toBe('searchResult');
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


    it('should return null if query status is not OK', function() {
      var results = searchFactory.callback(this.predictions, 'ZERO_RESULTS');
      expect(results).toBe(null);
    });

    it('should call hydrateResults function if query status is OK', function() {
      spyOn(searchFactory, 'hydrateResults');
      searchFactory.callback(this.predictions, 'OK');
      expect(searchFactory.hydrateResults).toHaveBeenCalled();
    });
  });

  describe('queryApi', function() {
    it('should return null if query input is empty', function() {
      expect(searchFactory.queryApi()).toBe(null);
    });

    it('should call callback function if query is valid', function() {
      spyOn(searchFactory, 'callback');
      searchFactory.queryApi('texas');
      expect(searchFactory.callback).toHaveBeenCalled();
    });
  });

});
