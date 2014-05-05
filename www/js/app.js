// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeController'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendName',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

     .state('tab.friend-ubicacions', {
      url: '/friend/:userName/ubicacions',
      views: {
        'ubicacions': {
          templateUrl: 'templates/ubicacions.html',
          controller: 'UbicacionsController'
        }
      }
    })

    .state('tab.detall-ubicacio', {
      url: '/friend/:friendId/ubicacions/:data/:ubicacioId',
      views: {
        'detallsUbicacio': {
          templateUrl: 'templates/detallsUbicacio.html',
          controller: 'detallsUbicacioController'
        }
      }
    })

    .state('tab.friend-accessos', {
      url: '/friend/:userName/accessos',
      views: {
        'accessos': {
          templateUrl: 'templates/accessos.html',
          controller: 'AccessosController'
        }
      }
    })
    .state('tab.perfil', {
      url: '/perfil',
      views: {
        'perfil': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'ProfileController'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })
    .state('tab.http', {
      url: '/http',
      views: {
        'http': {
          templateUrl: 'templates/http.html',
          controller: 'httpController'
        }
      }
    })
    .state('tab.infinite', {
      url: '/infinite',
      views: {
        'infinite': {
          templateUrl: 'templates/infinite.html',
          controller: 'InfiniteController'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

