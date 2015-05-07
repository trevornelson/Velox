/**
Service for querying Zilyo API and storing a collection of accommedations
**/
App.service('HotelSvc', ['$rootScope', '$http',
                function( $rootScope,   $http, ) {

  var service = {
    hotels: [],

    zilyoAuth: {
      headers: { "X-Mashape-Authorization": "S4ftN0SMuLmsh8gvTCpVF3OfIcRKp1CTJqMjsnUJuNbU826Uz4"}
    },

    createRequest: function(destination) {
      return 'https://zilyo.p.mashape.com/search?latitude='+ destination.lat + '&longitude=' + destination.lng + '&maxdistance=100';
    },

    fetch: function(opts) {
      var url = service.createRequest(opts.arrival_location);

      return $http.get(url, service.zilyoAuth);
    },

    // Once all queries are done, set hotels collection and broadcast hotels.update event.
    updateHotels: function(hotels) {
      service.hotels = hotels;
      $rootScope.$broadcast('hotels.update');
    }
  }

  return service;
}]);