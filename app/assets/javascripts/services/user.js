/**
Service for user authentication and querying app backend for user data.
**/
App.service('UserSvc', ['$rootScope',
                function($rootScope) {

  var service = {
    user: null,
    getUser: function() {
      if (!user) {
        $http.get('/sessions/fetch')
          .success( function(data) { service.user = data; }
        );
      }

      return user;
    }

  };

  return service;
}]);
