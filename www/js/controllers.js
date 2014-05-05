angular.module('starter.controllers', [])

.controller('HomeController', function($scope, NewsFeed, Friends, $timeout) {
  // Pensar com carregar les imatges
  $scope.news = NewsFeed.all();
  $scope.doRefresh = function() {
        
        console.log('Refreshing!');
        $timeout( function() {
        var friend = Friends.get(Math.floor(Math.random() * 8));
        console.log(friend.name);

        $scope.news.unshift({id: friend.id, userName: friend.name, avatar: friend.avatar, tipus: 'ubicacio', 
    comment: 'Caminata', img: 'img/burriach.jpg', lloc: 'Burriach'});

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
  };
})

.controller('indexController', function($scope) {
  $scope.textCodi='';
 
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        
    }
     $scope.fesFoto = function() {
      // Take picture using device camera and retrieve image as base64-encoded string
      cordova.plugins.barcodeScanner.scan(
          function (result) {
              alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
              $scope.textCodi = result.text;
          }, 
          function (error) {
              alert("Scanning failed: " + error);
          }
       );
    }

  /*  



    //----------- PROVES CAMERA ---------------

    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
   $scope.fesFoto = function() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }




    //-----------------------------------------*/


})

.controller('FriendsCtrl', function($scope, $http) {
  $scope.friends = [];
  $http.get('http://192.168.0.196:3000/users').success(function (result) {
      $scope.friends = result;
  }).error(function (data) {
    console.log('-------error------');
  });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, $http) {
  $scope.friend = [];
  $http.get('http://192.168.0.196:3000/users/' + $stateParams.friendName).success(function (result) {
      $scope.friend = result;
  }).error(function (data) {
    console.log('-------error------');
  });
 
})

.controller('ProfileController', function($scope, MyUser) {
  $scope.friend = MyUser.get();
})



.controller('UbicacionsController', function($scope, $stateParams, $http) {
  $scope.userName = $stateParams.userName;
  console.log($scope.userName);
  $scope.ubicacions = [];
  $http.get('http://192.168.0.196:3000/ubicacions/' + $stateParams.userName).success(function (result) {
      $scope.ubicacions = result;
  }).error(function (data) {
    console.log('-------error------');
  });
})

.controller('AccessosController', function($scope, $stateParams, $http) {
  $scope.userName = $stateParams.userName;
  console.log($stateParams.userName);
  $scope.accessos = [];
  $http.get('http://192.168.0.196:3000/accessos/' + $stateParams.userName).success(function (result) {
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

.controller('httpController', function($scope, $timeout, $http) {
  $scope.users = [];
  console.log('fora');
  $http.get('http://192.168.0.196:3000/users').success(function (result) {
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
})





.controller('AccountCtrl', function($scope) {
});
