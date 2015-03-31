myAppModule.controller('ItineraryController', ['$scope', '$rootScope', '$http',
    function($scope, $rootScope, $http) {


      $scope.create = function() {
        var user_id = $rootScope.user.id

        if (user_id) {
          var json_itinerary = {
                                user_id: user_id,
                                hotels: $rootScope.hotels[$rootScope.hotel_index],
                                trips: [$rootScope.trips[$rootScope.trip_index]]
                                };

          $http.post('/users/' + $rootScope.user.id + '/itineraries', json_itinerary).success(function(data) {
            console.log(data);  // Redirect view in angular to user account page
          });
        } else {
          $('#login-modal').modal();
        }
      };
    }
  ]);
