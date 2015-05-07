/**
Service for querying Zilyo API and storing a collection of accommedations
**/
App.service('HotelSvc', ['$http',
                function( $http ) {

  var service = {
    hotels: [],
    zilyoAuth: {
      headers: { "X-Mashape-Authorization": "S4ftN0SMuLmsh8gvTCpVF3OfIcRKp1CTJqMjsnUJuNbU826Uz4"}
    },
    createRequest: function(destination) {
      'https://zilyo.p.mashape.com/search?latitude='+ destination.lat + '&longitude=' + destination.lng + '&maxdistance=100'

    },
    fetch: function(destination) {
      var url = service.createRequest(destination);

      return $http.get(url, service.zilyoAuth);
    } 
  }

  return service;
}]);