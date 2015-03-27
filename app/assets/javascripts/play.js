var myAppModule = angular.module('hither', []);

(function(){


  myAppModule.controller('FlightController', function() {
    this.flights = flights;
    this.duration = function(flight) {
      var dur = ((new Date(flight.arrive)) - (new Date(flight.depart)));
      return dur;
    };
  });

  var flights = [
    {name: "flight1", price: "800", depart: "2015-03-24T06:57:23+00:00", arrive: "2015-03-24T09:57:23+00:00"},
    {name: "flight2", price: "300", depart: "2015-03-24T04:57:23+00:00", arrive: "2015-03-24T10:57:23+00:00"},
    {name: "flight3", price: "400", depart: "2015-03-24T06:57:23+00:00", arrive: "2015-03-24T06:57:23+00:00"}
  ];

})();

thing = {
  "request": {
    "slice": [
      {
        "origin": "JAN",
        "destination": "KTN",
        "date": "2015-03-27"
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
}
