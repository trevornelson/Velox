/**
Service for storing the search inputs and initiating resulting API queries.
Dependencies: $rootScope, FlightSvc, 
**/
myAppModule.service('SearchSvc', ['$rootScope', 'FlightSvc',
                                  function($rootScope, FlightSvc) {
  var service = {
    searchOptions: {
      arrival_location: '',
      depart_location: '',
      depart_date: '',
      return_date: ''
    }
  }

  return service;
}]);

/**
Service for querying Google QPX Api and storing responses
**/
myAppModule.service('FlightSvc', function() {
  var service = {
    getRequestTemplate: function() {
      var reqTemplate = {
      "request": {
        "slice": [],
        "passengers": {
          "adultCount": 1,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "childCount": 0,
          "seniorCount": 0
        },
        "solutions": 50,
        "refundable": false
      }
    };

    return reqTemplate;
    },
    createRequest: function(opts) {
      var req = getRequestTemplate();
      var trip_leg = {
                      "origin": opts.arrival_location.code,
                      "destination": opts.depart_location.code,
                      "date": opts.depart_date
                      }

      // push trip leg into slice array to make implementing two-way trips easier later
      req.request.slice.push(trip_leg);

      return JSON.stringify(req);
    },
    fetch: function(opts) {
      // queries QPX API, returns a promise until query is complete.
      request = service.createRequest(opts);

      return $http.post('/https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCN4pjLu5qK0ylXiV3wlEkrBXUKCz6BuLE',
                  request);
    }
  }
});