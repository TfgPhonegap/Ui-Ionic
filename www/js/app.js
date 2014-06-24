// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    StatusBar.styleDefault();
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    // Each tab has its own nav history stack:

    .state('app.home', {
      url: '/home',
      views: {
        'menu-content': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeController'
        }
      }
    })

    .state('app.novaUbicacio', {
      url: '/novaUbicacio',
      views: {
        'menu-content': {
          templateUrl: 'templates/novaUbicacio.html',
          controller: 'novaUbicacioController'
        }
      }
    })

    .state('app.nouAcces', {
      url: '/nouAcces',
      views: {
        'menu-content': {
          templateUrl: 'templates/nouAcces.html',
          controller: 'nouAccesController'
        }
      }
    })

    .state('app.friends', {
      url: '/friends',
      views: {
        'menu-content': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('app.friend-detail', {
      url: '/friend/:friendName',
      views: {
        'menu-content': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

     .state('app.friend-ubicacions', {
      url: '/friend/:userName/ubicacions',
      views: {
        'menu-content': {
          templateUrl: 'templates/ubicacions.html',
          controller: 'UbicacionsController'
        }
      }
    })

    .state('app.detall-ubicacio', {
      url: '/friend/:friendId/ubicacions/:data/:ubicacioId',
      views: {
        'menu-content': {
          templateUrl: 'templates/detallsUbicacio.html',
          controller: 'detallsUbicacioController'
        }
      }
    })

    .state('app.friend-accessos', {
      url: '/friend/:userName/accessos',
      views: {
        'menu-content': {
          templateUrl: 'templates/accessos.html',
          controller: 'AccessosController'
        }
      }
    })
    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menu-content': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'ProfileController'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menu-content': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsController'
        }
      }
    })


    .state('app.http', {
      url: '/http',
      views: {
        'menu-content': {
          templateUrl: 'templates/http.html',
          controller: 'httpController'
        }
      }
    })
    .state('app.infinite', {
      url: '/infinite',
      views: {
        'menu-content': {
          templateUrl: 'templates/infinite.html',
          controller: 'InfiniteController'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});

