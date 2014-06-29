angular.module('starter.services', ['http-auth-interceptor'])
.factory('AuthenticationService', function($rootScope, $http, authService, $httpBackend) {
  var service = {
    login: function(user) {
      $http.post('https://192.168.0.196:3043/login', { user: user }, { ignoreAuthModule: false })
      .success(function (data, status, headers, config) {

      $http.defaults.headers.common.Authorization = data.authorizationToken;
      $http.defaults.headers.common.username = data.username;
        
        // També afegim el nom d'usuari perquè el servidor sàpiga qui s'està conectat a ell.
        authService.loginConfirmed(data, function(config) { 
          config.headers.Authorization = data.authorizationToken;
          config.headers.username = data.username;
          return config;
        });
      })
      .error(function (data, status, headers, config) {
        $rootScope.$broadcast('event:auth-login-failed', status);
      });
    }
  };
  return service;
})

.factory('userApp', function() {
  var username = "";
  
  return {
    getUsername: function() {
      return username;
    },
    setUsername: function(name) {
      username = name;
    }
  }
})

.factory('DireccioServer', function() {
  var ip = "https://192.168.0.196:3043";
  
  return {
    getDir: function() {
      return ip;
    }
  }
})



.factory('Friends', function($http) {
  
  return {
    all: function() {
      var friends = [];
      $http.get('https://192.168.0.196:3043/users').success(function (result) {
        console.log('SUCCEEEEEEEEES');
        console.log(result);
        return result;

      }).error(function (data) {
        console.log('-------error------');
      });
    },
    get: function(friendId) {
      console.log(friends[friendId].id);
      return friends[friendId];
    }
  }
})

.factory('LastScan', function() {
  var scan = "";
  
  return {
    getScanJson: function() {
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
      $http.get('https://192.168.0.196:3043/novetats').success(function (result) {
          news = result;
      }).error(function (data) {
        console.log('-------error------');
      });
      return news;
    }
  }
})

.factory('LeftPanel', function() {
  var items = [
    { title: "Novetats", link:"#/app", type:"item item-icon-left", icon:"icon ion-home"},
    { title: "Perfil", link:"#/app/friend/***", type:"item item-icon-left", icon:"icon ion-person"},
    { title: "Ubicacions", link:"#/app/friend/***/ubicacions", type:"item item-icon-left", icon:"icon ion-android-location"},
    { title: "Accessos", link:"#/app/friend/***/accessos", type:"item item-icon-left", icon:"icon ion-key"},
    { title: "Amistats", link:"#/app/friends", type:"item item-icon-left", icon:"icon ion-android-friends"},
    { title: "Configuració", link:"#/app/settings", type:"item item-icon-left", icon:"icon ion-gear-a"}
  ];

  return {
    all: function() {
      return items;
    },
    get: function(friendId) {
      return items[title];
    }
  }
});
