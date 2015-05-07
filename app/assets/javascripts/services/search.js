/**
Service for storing the search inputs and initiating resulting API queries.
Dependencies: $rootScope, FlightSvc, 
**/
App.service('SearchSvc', ['$rootScope', 'FlightSvc', 'HotelSvc',
                  function($rootScope,   FlightSvc,   HotelSvc) {

  var service = {
    searchOptions: {
      arrival_location: '',
      depart_location: '',
      depart_date: '',
      return_date: ''
    },
    queryAPIs: function() {
      var flightsPromise = FlightSvc.fetch(service.searchOptions);
      var rentalsPromise = RentalSvc.fetch(service.searchOptions);

      $q.all([flightsPromise, rentalsPromise]).then(function(data){
        trips.concat(data[0]);
        hotels.concat(data[1]);
        $rootScope.$broadcast('result.update');
      });
    }
  }

  return service;
}]);
