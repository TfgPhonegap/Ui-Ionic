angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Batman', description:'gotham city', avatar: 'img/avatars/batman.jpg' },
    { id: 1, name: 'Spiderman', description:'web', avatar: 'img/avatars/spiderman.jpg' },
    { id: 2, name: 'Wolverine', description:'Not xman', avatar: 'img/avatars/wolverine.jpg' },
    { id: 3, name: 'Captain America', description:'USA', avatar: 'img/avatars/america.jpg' },
    { id: 4, name: 'IronMan', description:'Money', avatar: 'img/avatars/ironman.png' },
    { id: 5, name: 'Fantastic four', description:'Lets go', avatar: 'img/avatars/4.jpg' },
    { id: 6, name: 'Thor', description:'!!!', avatar: 'img/avatars/thor.jpg' },
    { id: 7, name: 'Hulk', description:'Bussy', avatar: 'img/avatars/hulk.jpg' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      console.log(friends[friendId].id);
      return friends[friendId];
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
    { title: "Home", link:"#/tab", type:"item item-icon-left", icon:"icon ion-home"},
    { title: "Perfil", link:"#/tab/perfil", type:"item item-icon-left", icon:"icon ion-person"},
    { title: "Ubicacions", link:"#/tab/friend/0/ubicacions", type:"item item-icon-left", icon:"icon ion-android-location"},
    { title: "Acces", link:"#/tab/friend/0/accessos", type:"item item-icon-left", icon:"icon ion-key"},
    { title: "Friends", link:"#/tab/friends", type:"item item-icon-left", icon:"icon ion-android-friends"},
    { title: "Settings", link:"#/tab/friends", type:"item item-icon-left", icon:"icon ion-gear-a"},
    { title: "http", link:"#/tab/http", type:"item item-icon-left", icon:"icon ion-ios7-world"},
    { title: "Infinite", link:"#/tab/infinite", type:"item item-icon-left", icon:"icon ion-loading-b"}
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
