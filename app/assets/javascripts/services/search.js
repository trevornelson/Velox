/**
Service for storing the search inputs and initiating resulting API queries.
Dependencies: $rootScope, FlightSvc, 
**/
App.service('SearchSvc', ['$rootScope', '$q', 'FlightSvc', 'HotelSvc',
                  function($rootScope,   $q,   FlightSvc,   HotelSvc) {

  var service = {
    searchOptions: {
      arrival_location: '',
      depart_location: '',
      depart_date: '',
      return_date: ''
    },

    // Query 3rd party APIs and update corresponding collections once they've resolved.
    queryAPIs: function() {
      var deferred = $q.defer();

      var flightsPromise = FlightSvc.fetch(service.searchOptions);
      var hotelsPromise = HotelSvc.fetch(service.searchOptions);

      $q.all([flightsPromise, hotelsPromise]).then(function(data){
        FlightSvc.updateTrips(data[0]);
        HotelSvc.updateHotels(data[1]);
        deferred.resolve(true);
      });

      return deferred.promise;
    }
  }

  return service;
}]);
