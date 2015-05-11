/**
Service for querying Zilyo API and storing a collection of accommedations
**/
App.service('HotelSvc', ['$rootScope', '$http',
                function( $rootScope,   $http ) {

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

    parseZilyo: function(response) {
      function Hotel(data) {
        this.name = data.attr.heading;
        this.city = data.location.city;
        this.neighbourhood = data.location.neighbourhood;
        this.postal_code = data.location.postalCode;
        this.street_name = data.location.streetName;
        this.price = data.price.nightly;
        this.provider = data.provider.full;
        this.availability = data.availability;
        this.photo_url = data.photos[0].large;
        this.url = data.provider.url;
      };


      var hotels = response.result.map(function(hotel_data) {
        return new Hotel(hotel_data);
      });

      service.updateHotels(hotels);
    },

    // Once all queries are done, set hotels collection and broadcast hotels.update event.
    updateHotels: function(hotels) {
      service.hotels = hotels;
      $rootScope.$broadcast('hotels.update');
    }
  }

  return service;
}]);