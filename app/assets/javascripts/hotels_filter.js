//Hotel class definition
var Hotel = function(data) {
  this.name = data.attr.heading;
  this.city = data.location.city;
  this.neighbourhood = data.location.neighbourhood;
  this.postalCode = data.location.postalCode;
  this.streetName = data.location.streetName;
  this.price = data.price.nightly;
  this.provider = data.provider.full;
  this.availability = data.availability;
  this.photo_url = data.photos[0].xlarge;
  this.url = data.provider.url;
};

  //create hotel controller
  angular.module('hither').controller('HotelController', ['$scope', 'HotelFactory', function($scope, HotelFactory) {
    HotelFactory.fetchHotels().success(function(data) {
        $scope.hotels =  data.result.map(function(hotel_data) {
        return new Hotel(hotel_data);
      });
     });
  }] );

  // create hotel factory
  angular.module('hither').factory('HotelFactory', ['$http', function($http) {
    var factory = {};
    var httpConfig = {  headers:{ "X-Mashape-Authorization": "N7SrCXP14imshrRVT7zdeMHz9NeLp1va6vFjsnpDJD7Fi1jnFg"}};

    factory.fetchHotels = function() {
      return $http.get('https://zilyo.p.mashape.com/search?latitude=52.5306438&longitude=13.3830683&pricemax=200&provider=airbnb', httpConfig);
    };

    return factory;
  }] );