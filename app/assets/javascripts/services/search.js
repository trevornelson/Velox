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
    createRequest: function(opts) {
      return {
      "request": {
        "slice": [
        {
          "origin": opts.arrival_location.code,
          "destination": opts.depart_location.code,
          "date": opts.depart_date
        }
        ],
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
    },
    fetch: function() {

    }
  }

return $.ajax({
      type: 'POST',
      url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=',
      contentType: 'application/json',
      data: JSON.stringify(thing),
      dataType: "json"
    });
});