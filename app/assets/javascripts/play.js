
function playCtrl($scope) {
  $scope.flights = [
  {name: "flight1", price: "800", depart: "2015-03-24T06:57:23+00:00", arrive: "2015-03-24T09:57:23+00:00"},
  {name: "flight2", price: "300", depart: "2015-03-24T04:57:23+00:00", arrive: "2015-03-24T10:57:23+00:00"},
  {name: "flight3", price: "400", depart: "2015-03-24T06:57:23+00:00", arrive: "2015-03-24T06:57:23+00:00"}
  ];
  $scope.duration = function(flight) {
    var dur = ((new Date(flight.arrive)) - (new Date(flight.depart)));
    return dur;
  }
}

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

  $.ajax({
    type: 'POST',
    url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDskBz8WieP74_yU_hA7tVRvL1Ifl4ED1w',
    contentType: 'application/json',
    data: JSON.stringify(thing),
    dataType: "json",
    success: function(resp) {
      console.log(JSON.stringify(resp));
    }
  })

})
