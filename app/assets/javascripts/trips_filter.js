myAppModule.controller('TripController', ['$scope', '$rootScope', 'FlightFactory', 'FilterFactory',function($scope, $rootScope, FlightFactory, FilterFactory) {
  $scope.options = {};
  $scope.banned = [];
  $scope.$watch(function() {return $rootScope.search}, function(newValue, oldValue){
    var api_req = {
      "request": {
        "slice": [
        {
          "origin": newValue.depart_location.airport_code,
          "destination": newValue.arrival_location.airport_code,
          "date": newValue.depart_date
        }
        ],
        "passengers": {
          "adultCount": 1,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "childCount": 0,
          "seniorCount": 0
        },
        "solutions": 5,
        "refundable": false
      }
    };

    // set to false initially, to be toggled when api call complete. Bound to ng-hide on query in process animation.
    $rootScope.flightApiComplete = false;

    FlightFactory.fetchFlights(api_req).success(function(data) {
      $rootScope.flightApiComplete = true;
      FlightFactory.checkQueryStatus();

      var trip_input = data.trips.tripOption;
      $scope.trips = trip_input.map(function(flight_input) {
        return new Trip(createFlights(flight_input.slice[0].segment), flight_input);
      });
      $scope.resultingTrips = $scope.trips;
      $rootScope.trips = $scope.trips;
      $scope.$apply();
    }).error(function(data) {
      var trip_input = stub_trips.trips.tripOption;
      $scope.trips = trip_input.map(function(flight_input) {
        return new Trip(createFlights(flight_input.slice[0].segment), flight_input);
      });
      $rootScope.trips = $scope.trips;
      $scope.resultingTrips = $scope.trips;
      $scope.$apply();
    });
  });

  $scope.trip_index = 0;
  $rootScope.trip_index = 0;
  //switch to next trip
  $scope.next = function () {
      if ($scope.trip_index >= $scope.resultingTrips.length - 1) {
          $scope.trip_index = 0;
          $rootScope.trip_index = 0;
      } else {
          $scope.trip_index++;
          $rootScope.trip_index++;
      }
  };
  //switch to previous trip
  $scope.prev = function () {
      if ($scope.trip_index <= 0) {
          $scope.trip_index = $scope.resultingTrips.length - 1;
          $rootScope.trip_index = $scope.resultingTrips.length - 1;
      } else {
          $scope.trip_index--;
          $rootScope.trip_index--;
      }
  };

  //Direct flight filters
  $scope.options.direct_status = false;
  $scope.options.departam_status = true;
  $scope.options.departpm_status = true;
  $scope.options.arriveam_status = true;
  $scope.options.arrivepm_status = true;

  $scope.updateFlights = function() {
    $scope.resultingTrips = FilterFactory.returnFlights($scope.trips, $scope.options.direct_status, $scope.options.departam_status, $scope.options.departpm_status, $scope.options.arriveam_status, $scope.options.arrivepm_status, $scope.banned);
    $scope.trip_index = 0;
    //save filters in root scope for email notifications
    $rootScope.saved_filters = {
      "direct_status": $scope.options.direct_status,
      "departam_status": $scope.options.departam_status,
      "departpm_status": $scope.options.departpm_status,
      "arriveam_status": $scope.options.arriveam_status,
      "arrivepm_status": $scope.options.arrivepm_status
    };
  };

  //on click, add banned airline codes to banned array
  $scope.addBanned = function(curr_trip) {
    var airCode = curr_trip.flights[0].carrier_full;
    if ($scope.banned.indexOf(airCode) == -1) {
      $scope.banned.push(airCode);
    };
    $scope.updateFlights();
  };

  //on click, un-ban airline codes
  $scope.unBan = function(carrier) {
    $scope.banned = $scope.banned.filter(function(el) {
      return el !== carrier;
    });
    $scope.updateFlights();
  };
}] );

myAppModule.factory('FlightFactory', ['$http', '$rootScope', function($http, $rootScope) {
  var factory = {};


// api key AIzaSyAZwVwEPSvSSXXKzLrt-h-lQMN2T3woqCs

  factory.fetchFlights = function(thing) {
    return $.ajax({
      type: 'POST',
      url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAZwVwEPSvSSXXKzLrt-h-lQMN2T3woqCs',
      contentType: 'application/json',
      data: JSON.stringify(thing),
      dataType: "json"
    });
  };

  factory.checkQueryStatus = function() {
    if ($rootScope.flightApiComplete && $rootScope.hotelApiComplete) {
      jQuery('#query-in-process-modal').modal('hide');
    }
  };

  return factory;
}] );

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
  return flight_input.map(function(flight_data) {return new Flight(flight_data)})
}

function Trip(flight_array, flight_input){
  this.price = flight_input.saleTotal.replace( /^\D+/g, '');;
  this.flights = flight_array;
  this.duration = flight_input.slice[0].duration;
}