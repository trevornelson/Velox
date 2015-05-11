'use strict';

describe('UserSvc', function() {

  var UserSvc, httpBackend;

  beforeEach(function() {
    module('app');

    inject(function(_UserSvc_, $httpBackend) {
      UserSvc = _UserSvc_;
      httpBackend = $httpBackend;
    });
  });

  describe('login', function() {

    it('should return user when a user correctly logs in', function() {
      httpBackend.expect('POST', '/sessions').respond({
        "username": "testUsername",
        "password": "HdtyJ842Jghgk498KSLgnd32Fvb"
      });

      UserSvc.login({username: 'testUsername', password: '12345'});
      expect(UserSvc.user['username']).toEqual("testUsername");

      httpBackend.flush();
    });
  });

}); 