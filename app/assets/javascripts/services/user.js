/**
Service for user authentication and querying app backend for user data.
**/
App.service('UserSvc', ['$rootScope', '$http',
                function($rootScope,   $http) {

  var service = {
    user: null,
    errors: {
      username: null,
      password: null
    },

    // Attempts to authenticate user, takes the serialized inputs as an argument
    login: function(credentials) {
      $http.post('/sessions', credentials)
        .success( function(data, status, headers, config) {
          service.user = data;
          
          service.errors = { username: null, password: null };
        });
    },

    logout: function() {
      $http({ method: 'DELETE', url: '/sessions/' + user.id })
        .success(function(data) { service.user = null; }
      );
    }

  };

  return service;
}]);
