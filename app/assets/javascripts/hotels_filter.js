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
  myAppModule.controller('HotelController', ['$scope', '$rootScope', 'HotelFactory', 'FilterFactory', function($scope, $rootScope, HotelFactory, FilterFactory) {
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
      $scope.resultingHotels = FilterFactory.returnHotels($scope.airBnb_status, $scope.hotels);
      $scope.hotel_index = 0;
    };

  }]);

  // create hotel factory
  myAppModule.factory('HotelFactory', ['$http', function($http) {
    var factory = {};
    var httpConfig = {  headers:{ "X-Mashape-Authorization": "N7SrCXP14imshrRVT7zdeMHz9NeLp1va6vFjsnpDJD7Fi1jnFg"}};
    factory.fetchHotels = function(lat, lng) {
      return $http.get('https://zilyo.p.mashape.com/search?latitude='+ lat + '&longitude=' + lng + '&maxdistance=35', httpConfig);
    };

    return factory;
  }] );

  // Factory in charge of return resulting Hotels array depending on selected filters
  myAppModule.factory('FilterFactory', [function() {
    var factory = {};

    factory.returnHotels = function(status, hotels) {
      if (status == false) {
        return hotels.filter(function(ele){
          return ele.provider !== 'Airbnb';
        });
        $scope.hotel_index = 0;
      } else {
        return hotels.filter(function(ele){
          return ele.provider == 'Airbnb';
        });
        $scope.hotel_index = 0;
      };
    };

    factory.returnFlights = function(trips, dir_stat, dep_a_stat, dep_p_stat, arr_a_stat, arr_p_stat) {
      var depTimeRange = [dep_a_stat? 0 : 12, dep_p_stat? 23 : 12];
      var arrTimeRange = [arr_a_stat? 0 : 12, arr_p_stat? 23 : 12];
      var filtered = trips.filter(function(el) {
        var departure = new Date(el.flights[0].dep_time).getHours();
        var arrival = new Date(el.flights[el.flights.length - 1].arr_time).getHours();
        return (dir_stat ? el.flights.length == 1 : true) &&
          departure >= depTimeRange[0] &&
          departure <= depTimeRange[1] &&
          arrival >= arrTimeRange[0] &&
          arrival <= arrTimeRange[1];
      });
      console.log(filtered);
      return filtered;
    };


    //   if (dep_a_stat == true) {
    //     filtered = filtered.filter(function(el) {
    //       var d = new Date(el.flights[0].dep_time);
    //       return d.getHours() < 12;
    //     });
    //   };
    //   if (dep_p_stat == true) {
    //     filtered = filtered.filter(function(el) {
    //       var d = new Date(el.flights[0].dep_time);
    //       return d.getHours() >= 12;
    //     });
    //   };
    //   if (arr_a_stat == true) {
    //     filtered = filtered.filter(function(el) {
    //       var d = new Date(el.flights[el.flights.length - 1].arr_time);
    //       return d.getHours() < 12;
    //     });
    //   };
    //   if (arr_p_stat == true) {
    //     filtered = filtered.filter(function(el) {
    //       var d = new Date(el.flights[el.flights.length - 1].arr_time);
    //       return d.getHours() >= 12;
    //     });
    //   };
    //   console.log("returned filtered list");
    //   return filtered
    // };

    return factory;
  }] );