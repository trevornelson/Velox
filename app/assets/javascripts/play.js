(function(){

  var myAppModule = angular.module('hither', []);

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

$(document).on("ready", function(){

  // $.ajax({
  //   type: 'POST',
  //   url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDskBz8WieP74_yU_hA7tVRvL1Ifl4ED1w',
  //   contentType: 'application/json',
  //   data: JSON.stringify(thing),
  //   dataType: "json",
  //   success: function(resp) {
  //     // console.log(JSON.stringify(resp));
  //   }
  // });

  // $.ajax({
  //   url: 'https://zilyo.p.mashape.com/search?latitude=52.5306438&longitude=13.3830683&pricemax=200&provider=airbnb',
  //   type: 'POST',
  //   dataType: 'json',
  //   success: function(data) {
  //     // console.log(data)
  //   },
  //   beforeSend: function(xhr) {
  //     xhr.setRequestHeader("X-Mashape-Authorization", "N7SrCXP14imshrRVT7zdeMHz9NeLp1va6vFjsnpDJD7Fi1jnFg");
  //   }
  // });

})
