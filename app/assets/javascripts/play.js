//Create Hotel Class
var Hotel = function(data) {
  this.name = data.attr.heading;
  this.city = data.location.city;
  this.neighbourhood = data.location.neighbourhood;
  this.postalCode = data.location.postalCode;
  this.streetName = data.location.streetName;
  this.price = data.price.nightly;
  this.provider = data.provider.full;
  this.availability = data.availabity;
  this.photo_url = data.photos[0].xlarge;
  this.url = data.provider.url;
};

//hydrates hotel objects from API output
var createHotels = function(data) {
  var hotels = [];
  for (i=0; i<data.length; i++) {
    hotels.push(new Hotel(data[i]));
  }
  return hotels;
};

//create function to fetch hotels from API
var fetchHotels = function() {
  $.ajax({
    url: 'https://zilyo.p.mashape.com/search?latitude=52.5306438&longitude=13.3830683&pricemax=200&provider=airbnb',
    type: 'POST',
    dataType: 'json',
    success: function(data) {
      hotels = createHotels(data.result);
      console.log(hotels);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "N7SrCXP14imshrRVT7zdeMHz9NeLp1va6vFjsnpDJD7Fi1jnFg");
    }
  });
}

//enclosure containing hither module
// (function(){

  var myAppModule = angular.module('hither', []);

  //create hotel controller
  myAppModule.controller('HotelController', function() {
    this.hotels = [];

  });

// })();

$(document).on("ready", function(){

  fetchHotels();

})
