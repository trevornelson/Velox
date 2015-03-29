// //create module called 'hither'
angular.module('hither', []);

//create hotel controller
angular.module('hither').controller('TripController', ['$scope', 'FlightFactory', function($scope, FlightFactory) {
  FlightFactory.fetchFlights().success(function(data) {
      var trip_input = data.trips.tripOption;
      $scope.trips = trip_input.map(function(flight_input) {
        return new Trip(createFlights(flight_input.slice[0].segment), flight_input);
      });
      $scope.$apply();
  });
}] );

// create flight factory
angular.module('hither').factory('FlightFactory', ['$http', function($http) {
  var factory = {};

  var thing = {
    "request": {
      "slice": [
      {
        "origin": "EWR",
        "destination": "SFO",
        "date": "2015-03-29"
      }
      ],
      "passengers": {
        "adultCount": 1,
        "infantInLapCount": 0,
        "infantInSeatCount": 0,
        "childCount": 0,
        "seniorCount": 0
      },
      "solutions": 2,
      "refundable": false
    }
  };

  var formatted_q = JSON.stringify(thing);

  factory.fetchFlights = function() {
    return $.ajax({
      type: 'POST',
      url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAZwVwEPSvSSXXKzLrt-h-lQMN2T3woqCs&',
      contentType: 'application/json',
      data: JSON.stringify(thing),
      dataType: "json"
    });
  };

  return factory;
}] );

//flight class definition
function Flight(flight_data){
  this.carrier_abbv = flight_data.flight.carrier;
  this.airport_ori_code = flight_data.leg[0].origin;
  this.airport_dest_code = flight_data.leg[0].destination;
  this.duration = flight_data.leg[0].duration;
}

//create flights function
function createFlights(flight_input){
  return flight_input.map(function(flight_data) {return new Flight(flight_data)})
}

//trip class definition
function Trip(flight_array, flight_input){
  this.price = flight_input.saleTotal;
  this.flights = flight_array;
  this.duration = flight_input.slice[0].duration;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
//Comment out everything except this to test API call...

//   var thing = {
//     "request": {
//       "slice": [
//       {
//         "origin": "EWR",
//         "destination": "SFO",
//         "date": "2015-03-29"
//       }
//       ],
//       "passengers": {
//         "adultCount": 1,
//         "infantInLapCount": 0,
//         "infantInSeatCount": 0,
//         "childCount": 0,
//         "seniorCount": 0
//       },
//       "solutions": 1,
//       "refundable": false
//     }
//   };

// $(document).ready(function() {

//   $.ajax({
//     type: 'POST',
//     url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAZwVwEPSvSSXXKzLrt-h-lQMN2T3woqCs',
//     contentType: 'application/json',
//     data: JSON.stringify(thing),
//     dataType: "json"
//   }).success(function(data) {console.log(data.trips.tripOption[0])});

// });
