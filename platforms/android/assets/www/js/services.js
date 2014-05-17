angular.module('starter.services', ['http-auth-interceptor'])
.factory('AuthenticationService', function($rootScope, $http, authService, $httpBackend) {
  var service = {
    login: function(user) {
      $http.post('https://login', { user: user }, { ignoreAuthModule: true })
      .success(function (data, status, headers, config) {

      $http.defaults.headers.common.Authorization = data.authorizationToken;  // Step 1
      console.log(data.authorizationToken);
        
      // Need to inform the http-auth-interceptor that
        // the user has logged in successfully.  To do this, we pass in a function that
        // will configure the request headers with the authorization token so
        // previously failed requests(aka with status == 401) will be resent with the
        // authorization token placed in the header
        authService.loginConfirmed(data, function(config) {  // Step 2 & 3
          config.headers.Authorization = data.authorizationToken;
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


/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http) {
  // Might use a resource here that returns a JSON array
  return {
    all: function() {
      var friends = [];
      $http.get('http://192.168.0.194:3000/users').success(function (result) {
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

.factory('MyUser', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var user = { id: 99, name: 'Heisenberg', description:'Breaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking badBreaking bad', avatar: 'img/avatars/heisenberg.jpg' };

  return {
    get: function() {
      // Simple index lookup
      return user;
    }
  }
})

.factory('Ubicacions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dies = [
    { data: '01-05-2001', ubicacionsDia: [
      {id: 0,hora: '20:00', lloc: 'Burriach', imatge: 'img/burriach.jpg', 
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {id: 1,hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', 
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {id: 2,hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', 
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {id: 3,hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', 
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                    ]},
      { data: '03-05-2014', ubicacionsDia: [
      {id: 4, hora: '20:00', lloc: 'Burriach', imatge: 'img/ionic.png', 
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {id: 5,hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', 
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {id: 6,hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', 
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {id: 7,hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', 
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                    ]},

      { data: '02-03-2014', ubicacionsDia: [
      {id: 8,hora: '20:00', lloc: 'Burriach', imatge: 'img/ionic.png', 
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {id: 9,hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', 
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {id: 10,hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', 
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {id: 11,hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', 
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                   ]},

      { data: '18-05-2012', ubicacionsDia: [
      {id: 12,hora: '20:00', lloc: 'Burriach', imatge: 'img/ionic.png', 
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {id: 13,hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', 
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {id: 14,hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', 
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {id: 15,hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', 
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                   ]}
    ];

  return {
    all: function() {
      return dies;
    },
    get: function(data, ubicacioID) {
      console.log('data');
      console.log(dies[0].ubicacionsDia[0].hora);
      return dies[0].ubicacionsDia[0];
    }
  }
})

.factory('Accessos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dies = [
    { data: '01/05/2001', accessosDia: [
      {hora: '20:00', lloc: 'Burriach', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                    ]},

    { data: '03/05/2014', accessosDia: [
      {hora: '20:00', lloc: 'Burriach', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                    ]},

      { data: '02/03/2014', accessosDia: [
      {hora: '20:00', lloc: 'Burriach', imatge: 'img/ionic.png', resultat: false,
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', resultat: false,
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', resultat: false,
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                   ]},

      { data: '18/05/2012', accessosDia: [
      {hora: '20:00', lloc: 'Burriach', imatge: 'img/ionic.png', resultat: false,
      descripcio: 'El Castell de Burriac, o Castell de Sant Vicenç, és un castell que salça sobre el turó de Burriac, al terme Cabrera de Mar i tocant al dArgentona. Per la seva situació és molt visible des de bona part del Maresme central.'},
      {hora: '17:00', lloc: 'Barcelona', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Barcelona és una ciutat i metròpoli a la costa mediterrània de la península Ibèrica. És la capital per antonomàsia de Catalunya essent-ho tant de la comunitat autònoma, com de la província de Barcelona i de la comarca del Barcelonès i la segona ciutat en població i pes econòmic de la península Ibèrica.'},
      {hora: '23:00', lloc: 'VDM', imatge: 'img/ionic.png', resultat: false,
      descripcio: 'Vilassar de mar és un pòbñle de 2000000 habitans'},
      {hora: '05:00', lloc: 'Clap', imatge: 'img/ionic.png', resultat: true,
      descripcio: 'Clapo mataró, dicoteca emblemàtica de mataró.'}
                   ]}
];

  return {
    all: function() {
      return dies;
    },
    get: function(userId) {
      // Simple index lookup
      return dies;
    }
  }
})

.factory('NewsFeed', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [
    { id: 0, userName: 'Batman', avatar: 'img/avatars/batman.jpg', tipus: 'acces', 
    comment: 'Comencem la setmana...', img: 'img/porta.jpg', lloc: 'Porta Feina'},
    { id: 1 ,userName: 'Spiderman', avatar: 'img/avatars/spiderman.jpg', tipus: 'ubicacio',
    comment: 'És una passada aquesta muntanya :)', img: 'img/burriach.jpg', lloc: 'Burriach' }
  ];

  return {
    all: function() {
      return news;
    }
  }
})

.factory('LeftPanel', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    { title: "Home", link:"#/app", type:"item item-icon-left", icon:"icon ion-home"},
    { title: "Perfil", link:"#/app/perfil", type:"item item-icon-left", icon:"icon ion-person"},
    { title: "Ubicacions", link:"#/app/friend/0/ubicacions", type:"item item-icon-left", icon:"icon ion-android-location"},
    { title: "Acces", link:"#/app/friend/0/accessos", type:"item item-icon-left", icon:"icon ion-key"},
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
