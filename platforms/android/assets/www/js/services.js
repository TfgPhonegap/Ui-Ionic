angular.module('starter.services', ['http-auth-interceptor'])
.factory('AuthenticationService', function($rootScope, $http, authService, $httpBackend) {
  var service = {
    login: function(user) {
      $http.post('https://192.168.0.194:3043/login', { user: user }, { ignoreAuthModule: false })
      .success(function (data, status, headers, config) {

      $http.defaults.headers.common.Authorization = data.authorizationToken;  // Step 1
      $http.defaults.headers.common.username = data.username;
      console.log(data.authorizationToken);
        
      // Need to inform the http-auth-interceptor that
        // the user has logged in successfully.  To do this, we pass in a function that
        // will configure the request headers with the authorization token so
        // previously failed requests(aka with status == 401) will be resent with the
        // authorization token placed in the header
        // També afegim el nom d'usuari perquè el servidor sàpiga qui s'està conectat a ell.
        authService.loginConfirmed(data, function(config) {  // Step 2 & 3
          config.headers.Authorization = data.authorizationToken;
          config.headers.username = data.username;
          return config;
        });
      })
      .error(function (data, status, headers, config) {
        $rootScope.$broadcast('event:auth-login-failed', status);
      });
    },
    logout: function(user) {
      $http.post('https://logout', {}, { ignoreAuthModule: true })
      .finally(function(data) {
        delete $http.defaults.headers.common.Authorization;
        $rootScope.$broadcast('event:auth-logout-complete');
      });     
    },  
    loginCancelled: function() {
      authService.loginCancelled();
    }
  };
  return service;
})

.factory('userApp', function() {
  // Might use a resource here that returns a JSON array
  var username = "";
  
  return {
    getUsername: function() {
      // Simple index lookup
      return username;
    },
    setUsername: function(name) {
      username = name;
    }
  }
})

.factory('DireccioServer', function() {
  // Might use a resource here that returns a JSON array
  var ip = "https://192.168.0.194:3043";
  
  return {
    getDir: function() {
      // Simple index lookup
      return ip;
    }
  }
})


/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http) {
  // Might use a resource here that returns a JSON array
  return {
    all: function() {
      var friends = [];
      $http.get('https://192.168.0.194:3043/users').success(function (result) {
        console.log('SUCCEEEEEEEEES');
        console.log(result);
        return result;

      }).error(function (data) {
        console.log('-------error------');
      });
    },
    get: function(friendId) {
      // Simple index lookup
      console.log(friends[friendId].id);
      return friends[friendId];
    }
  }
})

.factory('LastScan', function() {
  // Might use a resource here that returns a JSON array
  var scan = "";
  
  return {
    getScanJson: function() {
      // Simple index lookup
      return scan;
    },
    setScanJson: function(newObj) {
      scan = newObj;
    }
  }
})





.factory('NewsFeed', function($http) {
  var news = [];
  return {
    all: function() {
      $http.get('https://192.168.0.194:3043/novetats').success(function (result) {
          news = result;
      }).error(function (data) {
        console.log('-------error------');
      });
      return news;
    }
  }
})

.factory('LeftPanel', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    { title: "Home", link:"#/app", type:"item item-icon-left", icon:"icon ion-home"},
    { title: "Perfil", link:"#/app/friend/***", type:"item item-icon-left", icon:"icon ion-person"},
    { title: "Ubicacions", link:"#/app/friend/***/ubicacions", type:"item item-icon-left", icon:"icon ion-android-location"},
    { title: "Acces", link:"#/app/friend/***/accessos", type:"item item-icon-left", icon:"icon ion-key"},
    { title: "Friends", link:"#/app/friends", type:"item item-icon-left", icon:"icon ion-android-friends"},
    { title: "Settings", link:"#/app/friends", type:"item item-icon-left", icon:"icon ion-gear-a"},
    { title: "http", link:"#/app/http", type:"item item-icon-left", icon:"icon ion-ios7-world"},
    { title: "Infinite", link:"#/app/infinite", type:"item item-icon-left", icon:"icon ion-loading-b"}
  ];

  return {
    all: function() {
      return items;
    },
    get: function(friendId) {
      // Simple index lookup
      return items[title];
    }
  }
});
