angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $state, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/login.html', function(modal) {
    console.log('Apunt de saltar el modal....');
      $scope.loginModal = modal;
    },
    {
      scope: $scope,
      animation: 'slide-in-left',
      focusFirstInput: true
    }
  );
  //Be sure to cleanup the modal by removing it from the DOM
  $scope.$on('$destroy', function() {
    $scope.loginModal.remove();
  });
})


.controller('HomeController', function($scope, NewsFeed, Friends, $timeout, DireccioServer) {
  // Pensar com carregar les imatges
  $scope.news = NewsFeed.all();
  $scope.DireccioServer = DireccioServer.getDir();
  $scope.doRefresh = function() {
        
        console.log('Refreshing!');
        $timeout( function() {
        $scope.news = NewsFeed.all();
        //var llistaNovetats = NewsFeed.all();
       /* for (var i=llistaNovetats.length-1; i>=0; i--) {
           $scope.news.unshift(llistaNovetats[i]);
        }*/

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
  };
})

.controller('indexController', function($scope, $location, LastScan) {
  $scope.textCodi='';
 
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        
    }
     $scope.fesFoto = function() {
      //$scope.$apply();
      // Take picture using device camera and retrieve image as base64-encoded string
      cordova.plugins.barcodeScanner.scan(
          function (result) {
              // Canviem de vista segons el que es llegeixi del QR
                var json_obj = JSON.parse( result.text );
                LastScan.setScanJson(json_obj);
                if (json_obj.tipus == "novaUbicacio") {
                  $location.path('/app/novaUbicacio');
                  $scope.$apply();
                }
                else if (json_obj.tipus == "nouAcces") {
                  $location.path('/app/nouAcces');
                  $scope.$apply();
                }
          }, 
          function (error) {
              alert("Scanning failed: " + error);
          }
       );
       
    }
})

.controller('FriendsCtrl', function($scope, $http, DireccioServer) {
  $scope.friends = [];
  $scope.DireccioServer = DireccioServer.getDir();
  $http.get(DireccioServer.getDir() + '/users').success(function (result) {
      $scope.friends = result;
  }).error(function (data) {
    console.log('-------error------');
  });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, $http, DireccioServer) {
  var friend = $stateParams.friendName;
  if (friend == '***')
    friend = $http.defaults.headers.common.username;
  $scope.friend = [];
  $scope.DireccioServer = DireccioServer.getDir();
  $http.get(DireccioServer.getDir() + '/users/' + friend).success(function (result) {
      $scope.friend = result;
      $scope.apply();
  }).error(function (data) {
    console.log('-------error------');
  });
 
})

.controller('ProfileController', function($scope, MyUser) {
  $scope.friend = MyUser.get();
})



.controller('UbicacionsController', function($scope, $stateParams, $http, DireccioServer) {
  $scope.userName = $stateParams.userName;
  if ($stateParams.userName=='***')
    $scope.userName=$http.defaults.headers.common.username;
  console.log($scope.userName);
  $scope.ubicacions = [];
  $http.get(DireccioServer.getDir() + '/ubicacions/' + $stateParams.userName).success(function (result) {
      $scope.ubicacions = result;
  }).error(function (data) {
    console.log('-------error------');
  });
})

.controller('novaUbicacioController', function($scope, $stateParams, $http, $ionicPopup,
        $location, LastScan, DireccioServer) {
  $scope.ubicacio = LastScan.getScanJson();
  $scope.comment = {text: ''};
  $scope.DireccioServer = DireccioServer.getDir();
  //Pensar si fer els gets aquí o al server.
  var data = new Date();
  $scope.moment = {objecteDate: data
                  , hora: data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
                  , data: data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear()
                  , string: data.toDateString()};
  $scope.pujarUbicacio = function() {
    var data = {lloc: $scope.ubicacio.lloc, data: $scope.moment.data, hora: $scope.moment.hora
                , comentari: $scope.comment.text };
    $http.post(DireccioServer.getDir() + '/ubicacions/nova', data).success(function (result) {
        console.log('SUCCES');

            $ionicPopup.alert({
              title: 'Operació completada',
              content: 'Ubicació pujada correctament!'
            }).then(function(res) {
                $location.path('/tab/home');
                $scope.$apply();
            });

       
    }).error(function (data) {
      console.log('-------error------');
    });

    };
})


.controller('nouAccesController', function($scope, $stateParams, $http, $ionicPopup,
        $location, LastScan, DireccioServer) {
  $scope.acces = LastScan.getScanJson();
  $scope.DireccioServer = DireccioServer.getDir();
  //Pensar si fer els gets aquí o al server.
  var data = new Date();
  $scope.moment = {objecteDate: data
                  , hora: data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
                  , data: data.getDate() + '-' + data.getMonth() + '-' + data.getFullYear()
                  , string: data.toDateString()};
  $scope.demanarAcces = function() {
    var data = {idPorta: $scope.acces.id, data: $scope.moment.data, hora: $scope.moment.hora};
    $http.post(DireccioServer.getDir() + '/accessos/nou', data).success(function (result) {
            $ionicPopup.alert({
              title: 'Operació completada',
              content: result.resolucioAcces
            }).then(function(res) {
                $location.path('/tab/home');
                $scope.$apply();
            });

       
    }).error(function (data) {
      console.log('-------error------');
    });

    };
})
  .controller('LoginController', function($scope, $http, $state, $ionicPopup, AuthenticationService) {
  $scope.message = "";
  
  $scope.user = {
    username: null,
    password: null
  };
 
  $scope.login = function() {
    console.log($scope.user);
    AuthenticationService.login($scope.user);
  };
 
  $scope.$on('event:auth-loginRequired', function(e, rejection) {
   
      $scope.data = {}

      // Popup personalitzat
      var popup = $ionicPopup.show({
        templateUrl: 'templates/loginPopup.html',
        title: 'LOGIN',
        subTitle: $scope.message,
        scope: $scope,
        buttons: [
          {
            text: 'Submit',
            type: 'button-positive',
            onTap: function(e) {
              if($scope.user.password==null) {
                console.log('nuuuuulllllllll');
                //e.preventDefault();
                return $scope.data;
              }
              else {
                 return $scope.data;
              }
             
            }
          },
        ]
      });
      popup.then(function(res) {
        $scope.login();  
      });

  });
 
 //Deixar que desaparegui el popup.
  $scope.$on('event:auth-loginConfirmed', function() {
   $scope.username = null;
   $scope.password = null;
     $scope.loginModal.hide();
  });
  
  //Aquí hauré de mostrar un altre popup dient que algo de la autenticació falla.
  $scope.$on('event:auth-login-failed', function(e, status) {
    var error = "Login failed.";
    if (status == 401) {
      error = "Invalid Username or Password.";
    }
    $scope.message = error;
  });
 
  $scope.$on('event:auth-logout-complete', function() {
    $state.go('app.home', {}, {reload: true, inherit: false});
  });     
})




.controller('AccessosController', function($scope, $stateParams, $http, DireccioServer) {
  $scope.userName = $stateParams.userName;
  if ($stateParams.userName=='***')
    $scope.userName=$http.defaults.headers.common.username;
  $scope.accessos = [];
  $http.get(DireccioServer.getDir() + '/accessos/' + $stateParams.userName).success(function (result) {
      console.log(result);
      $scope.accessos = result;
  }).error(function (data) {
    console.log('-------error------');
  });
})


.controller('detallsUbicacioController', function($scope, $stateParams, Ubicacions, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
  $scope.ubicacio = Ubicacions.get($stateParams.data ,$stateParams.ubicacioId);
})



.controller('LeftPanelController', function($scope, LeftPanel) {

  $scope.items = LeftPanel.all();
})

.controller('SettingsController', function($scope, $ionicPopup, $http, DireccioServer) {
  $scope.password = {old: '', new1:'', new2:''};
  $scope.estat = {text:''};
  $scope.modificaContrassenya = function(){
     var popup = $ionicPopup.show({
        templateUrl: 'templates/popupContrasenya.html',
        title: 'Modifica Contrassenya',
        subTitle: $scope.message,
        scope: $scope,
        buttons: [
          {
            text: 'Submit',
            type: 'button-positive',
            onTap: function(e) {
              if ($scope.password.old == '' || $scope.password.new1 == '' || $scope.password.new2 == '') {
                $ionicPopup.alert({
                  title: 'Alerta',
                  content: 'Tots els camps són obligatoris'
                });
              }
              else if ($scope.password.new1 != $scope.password.new2 ) {
                $ionicPopup.alert({
                  title: 'Alerta',
                  content: 'La nova contrasenya no concorda.'
                });
              }
              else
                return $scope.password;
            }
          },
          {
            text: 'Cancel',
            type: 'button-dark',
            onTap: function() { 
              console.log($scope.password);
              $scope.tanca = true;
            return $scope.password;    
            }
          }


        ]
      });
      popup.then(function(res) {
        //Funcio que envii la contrassenya.
        console.log('then');
        if ($scope.tanca) {
          $scope.password = {old: '', new1:'', new2:''};
          $scope.tanca = false;
        }
        else {
          $http.put(DireccioServer.getDir() + '/modificaPassword', $scope.password).success(function (result) {
            console.log('SUCCES');

                $ionicPopup.alert({
                  title: 'Operació completada',
                  content: result.resolucio
                }).then(function(res) {
                    //$location.path('/tab/home');
                    //$scope.$apply();
                });

           
        }).error(function (data) {
          console.log('-------error------');
        });
          
        }
      });


  };

  $scope.modificaEstat = function(){
     var popup = $ionicPopup.show({
        templateUrl: 'templates/popupNouEstat.html',
        title: 'Modifica frase estat',
        scope: $scope,
        buttons: [
          {
            text: 'Submit',
            type: 'button-positive',
            onTap: function(e) {
              if ($scope.estat.text == '') {
                $ionicPopup.alert({
                  title: 'Alerta',
                  content: 'Tots els camps són obligatoris'
                });
              }
              else
                return $scope.estat;
            }
          },
          {
            text: 'Cancel',
            type: 'button-dark',
            onTap: function() { 
              $scope.tanca = true;
            return $scope.estat;    
            }
          }


        ]
      });
      popup.then(function(res) {
        //Funcio que envii la contrassenya.
        console.log('then');
        if ($scope.tanca) {
          $scope.estat = {text: ''};
          $scope.tanca = false;
        }
        else {
          $http.put(DireccioServer.getDir() + '/modificaEstat', $scope.estat).success(function (result) {
            console.log('SUCCES');

                $ionicPopup.alert({
                  title: 'Operació completada',
                  content: result.resolucio
                }).then(function(res) {
                    //$location.path('/tab/home');
                    //$scope.$apply();
                });

           
        }).error(function (data) {
          console.log('-------error------');
        });
          
        }
      });


  };

 /* function uploadPhoto(imageURI) {
      var options = new FileUploadOptions();
      options.fileKey="file";
      options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
      options.mimeType="text/plain";

      var params = new Object();

      options.params = params;

      //provar si arribar aqui
      $scope.infoImatge = {nom: 'yayy mass'}

      var ft = new FileTransfer();
      ft.upload(imageURI, encodeURI("http://192.168.1.37:3000/modificaAvatar"), win, fail, options);
  }   */
  $scope.modificaAvatar = function(){
    navigator.camera.getPicture(uploadPhoto,
            function(message) { alert('get picture failed'); },
            { quality: 50, 
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
            );

    function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.png';
    options.mimeType="text/plain";
    var params = new Object();
    options.params = params;
    var headers={'username': $http.defaults.headers.common.username};

    options.headers = headers;
    $scope.infoImatge = {nom: imageURI};
    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI("http://192.168.1.37:3000/modificaAvatar"), win, fail, options);
    }

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
  };

})

.controller('httpController', function($scope, $timeout, $http, DireccioServer) {
  $scope.users = [];
  console.log('fora');
  $http.get(DireccioServer.getDir() + '/users').success(function (result) {
      console.log('dins');
      $scope.users = result;
  }).error(function (data) {
    console.log('-------error------');
  });
 /*$http.get('http://localhost:3000/users')
    .success(function(data, status, headers, config){
      console.log("**** SUCCESS ****");
      console.log(status);
    })
    .error(function(data, status, headers, config){
      console.log("**** ERROR ****");
      console.log(status);
      console.log(data);
    })
    .then(function(response){
      console.log("**** THEN ****");

      var jsonData = response.data.mythings;
      var jsonKeys = Object.keys(jsonData);

      for (var i = 0; i < jsonKeys.length; i++) {
        var jsonSingle = jsonData[jsonKeys[i]];
        things.push(jsonSingle);
      }
    })

  return {
    all: function() {
      return things;
    }
  }*/

 
})
.controller('InfiniteController', function($scope, $timeout) {

  $scope.llista2 = ['Item 1', 'Item 2', 'Item 3'];
    
    
  $scope.loadMore = function() {
        
        console.log('Scrolling!');
        $timeout( function() {

        $scope.llista2.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        $scope.llista2.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        $scope.llista2.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        $scope.llista2.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.infiniteScrollComplete');
        
        }, 1000);
};
});
