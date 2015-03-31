myAppModule.factory('userSession', ['$http', function($http) {
  var factory = {}

  factory.user = null;

  factory.checkSession = function() {
    if (factory.user == null) {
      return $http.get('/sessions/fetch');
    } else {
      return factory.user;
    }
  }

  return factory;
}]);
