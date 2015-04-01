//app module declaration
var myAppModule = angular.module('hither', []);

//Hotel class definition
var Hotel = function(data) {
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

  //create hotel controller
  myAppModule.controller('HotelController', ['$scope', '$rootScope', 'HotelFactory', function($scope, $rootScope, HotelFactory) {
    $scope.$watch(function() {return $rootScope.search}, function(newValue, oldValue){
      HotelFactory.fetchHotels(newValue.arrival_location.latitude, newValue.arrival_location.longitude).success(function(data) {
        $scope.hotels = data.result.map(function(hotel_data) {
          return new Hotel(hotel_data);
        });
        $scope.resultingHotels = $scope.hotels.filter(function(ele){
          return ele.provider !== 'Airbnb';
        });
        $rootScope.hotels = $scope.hotels
      }).error(function() {
        $scope.hotels = stub_hotels.result.map(function(hotel_data) {
          return new Hotel(hotel_data);
        });
        $scope.resultingHotels = $scope.hotels.filter(function(ele){
          return ele.provider !== 'Airbnb';
        });
        $rootScope.hotels = $scope.hotels
      });
    });
    $scope.hotel_index = 0;
    $rootScope.hotel_index = 0;
    $scope.next_hotel = function () {
      if ($scope.hotel_index >= $scope.resultingHotels.length - 1) {
        $scope.hotel_index = 0;
        $rootScope.hotel_index = 0;
      } else {
        $scope.hotel_index++;
        $rootScope.hotel_index++;
      }
    };

    // hotel switch filters
    $scope.airBnb_status = false;

    $scope.airBnb = function() {
      if ($scope.airBnb_status == false) {
        $scope.resultingHotels = $scope.hotels.filter(function(ele){
          return ele.provider !== 'Airbnb';
        });
      } else {
        $scope.resultingHotels = $scope.hotels.filter(function(ele){
          return ele.provider == 'Airbnb';
        });
      };
    };

  }]);

  // create hotel factory
  myAppModule.factory('HotelFactory', ['$http', function($http) {
    var factory = {};
    var httpConfig = {  headers:{ "X-Mashape-Authorization": "N7SrCXP14imshrRVT7zdeMHz9NeLp1va6vFjsnpDJD7Fi1jnFg"}};
    factory.fetchHotels = function(lat, lng) {
      console.log("runs this only once before search is filled");
      return $http.get('https://zilyo.p.mashape.com/search?latitude='+ lat + '&longitude=' + lng + '&maxdistance=35', httpConfig);
    };

    return factory;
  }] );
