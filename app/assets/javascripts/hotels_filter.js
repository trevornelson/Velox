//app module declaration
var myAppModule = angular.module('hither', []);

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
  myAppModule.controller('HotelController', ['$scope', 'HotelFactory', function($scope, HotelFactory) {
    HotelFactory.fetchHotels().success(function(data) {
        $scope.hotels =  data.result.map(function(hotel_data) {
        return new Hotel(hotel_data);
      });
     });
  }] );

  // create hotel factory
  myAppModule.factory('HotelFactory', ['$http', 'searchFactory', function($http, searchFactory) {
    var factory = {};
    var httpConfig = {  headers:{ "X-Mashape-Authorization": "N7SrCXP14imshrRVT7zdeMHz9NeLp1va6vFjsnpDJD7Fi1jnFg"}};
    factory.fetchHotels = function() {
      console.log("runs this only once before search is filled");
      return $http.get('https://zilyo.p.mashape.com/search?latitude='+ String(searchFactory.search.depart_location.latitude) +'&longitude=' + String(searchFactory.search.depart_location.longitude) + '', httpConfig);
    };

    return factory;
  }] );
