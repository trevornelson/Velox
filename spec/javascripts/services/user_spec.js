'use strict';

describe('UserSvc', function() {

  var UserSvc, $httpBackend, $scope;

  beforeEach(function() {
    module('app');

    inject(function(_UserSvc_, _$httpBackend_, $rootScope) {
      UserSvc = _UserSvc_;
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
    });
  });

  describe('login', function() {

    xit('should return user when a user correctly logs in', function() {
      $httpBackend.expect('POST', '/sessions').respond({
        "username": "testUsername",
        "password": "HdtyJ842Jghgk498KSLgnd32Fvb"
      });

      var deferredResponse = UserSvc.login({username: 'testUsername', password: '12345'});
      deferredResponse.then(function() {
        expect(UserSvc.user['username']).toEqual("testUsername");
      });

      $scope.$apply();
      $httpBackend.flush();
    });
  });

}); 