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

    parseQPX: function(response) {
      function Flight(flight_data){
        this.dep_time = flight_data.leg[0].departureTime;
        this.arr_time = flight_data.leg[0].arrivalTime;
        this.carrier_abbv = flight_data.flight.carrier;
        this.flight_num = flight_data.flight.number;
        this.carrier_full = airline_codes[this.carrier_abbv];
        this.airport_ori_code = flight_data.leg[0].origin;
        this.airport_dest_code = flight_data.leg[0].destination;
        this.duration = flight_data.leg[0].duration;
        this.cabin = flight_data.cabin;
      }

      function createFlights(flight_input){
        return 
      }

      function Trip(trip_details){
        function init() {
          var flightsArray = trip_details.slice[0].segment;
          this.flights = flightsArray.map(function(flight_data) {return new Flight(flight_data)})
        }

        this.price = trip_details.saleTotal.replace( /^\D+/g, '');
        this.duration = trip_details.slice[0].duration;
        // Use apply instead and a local function to keep function private.
        init.apply(this);
      }

      var flightResults = response.trips.tripOption; // array of trips
      var trips = flightResults.map(function(trip) {
        return new Trip(trip);
      });

      service.updateTrips(trips);
    },

    // Once all queries are done, set trips collection and broadcast trips.update event.
    updateTrips: function(trips) {
      service.trips = trips;
      $rootScope.$broadcast('trips.update');
    }
  }

  return service;
}]);
