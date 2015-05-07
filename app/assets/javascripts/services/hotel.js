/**
Service for querying Zilyo API and storing a collection of accommedations
**/
App.service('HotelSvc', ['$http',
                  function($http) {

  var service = {
    hotels: [];
  }

  return service;
}]);