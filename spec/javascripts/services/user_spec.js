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

  describe('getUser', function() {

    it('should contain a user service object', function() {
      expect(UserSvc).not.toEqual(null);
    });

    it('should return user when the session has been authenticated', function() {
      httpBackend.whenGET('/sessions/fetch').respond({
        "username": "testUsername",
        "password": "HdtyJ842Jghgk498KSLgnd32Fvb"
      });

      UserSvc.getUser().then( function(user) {
        expect(user.username).toEqual("testUsername");
      });

      httpBackend.flush();
    });
  });

});