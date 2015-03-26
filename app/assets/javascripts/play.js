
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