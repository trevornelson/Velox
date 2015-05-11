/**
Service for querying Google QPX Api and storing responses
**/
App.service('FlightSvc', ['$rootScope', '$http',
                  function($rootScope,   $http) {

  var service = {
    trips: [],
    qpxKey: 'AIzaSyCN4pjLu5qK0ylXiV3wlEkrBXUKCz6BuLE',

    // Returns json template for generating QPX API post query data
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

    // push trip leg into template's 'slice' array to make implementing two-way trips easier later.
    createRequest: function(opts) {
      var req = service.getRequestTemplate();
      var trip_leg = {
                      "origin": opts.arrival_location.code,
                      "destination": opts.depart_location.code,
                      "date": opts.depart_date
                      }

      req.request.slice.push(trip_leg);

      return JSON.stringify(req);
    },

    // queries QPX API, returns a promise and resolves with JSON query response
    fetch: function(opts) {
      var data = service.createRequest(opts);
      var url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=' + service.qpxKey;

      return $http.post(url, data);
    },

    // Once all queries are done, set trips collection and broadcast trips.update event.
    updateTrips: function(trips) {
      service.trips = trips;
      $rootScope.$broadcast('trips.update');
    }
  }

  return service;
}]);
