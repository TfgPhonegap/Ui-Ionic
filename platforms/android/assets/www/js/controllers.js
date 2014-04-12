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

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('ProfileController', function($scope, MyUser) {
  $scope.friend = MyUser.get();
})



.controller('UbicacionsController', function($scope, $stateParams, Ubicacions, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
  $scope.dies = Ubicacions.all();
})

.controller('AccessosController', function($scope, $stateParams, Accessos, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
  $scope.dies = Accessos.all();
})


.controller('detallsUbicacioController', function($scope, $stateParams, Ubicacions, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
  $scope.ubicacio = Ubicacions.get($stateParams.data ,$stateParams.ubicacioId);
})



.controller('LeftPanelController', function($scope, LeftPanel) {

  $scope.items = LeftPanel.all();
})

.controller('httpController', function($scope, $timeout, $http) {
  $scope.msg = 'holaa';
  console.log('fora');
  $http.get('http://localhost:3000/ubicacions').success(function (result) {
      console.log('dins');
      $scope.msg = 'adeu';
  }).error(function (data) {
    console.log('error');
  });

 
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
