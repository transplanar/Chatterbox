(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    
    $stateProvider
      .state('landing',{
        url:'/',
        controller: 'RoomCtrl',
        templateUrl: '/templates/home.html'
      });
  };
  
//  function CookieHandler($cookies, $uibModal){
//    var currentUser = $cookies.get('currentUser');
//
//    if(!currentUser || currentUser === ''){
//      $uibModal.open({
//        templateUrl: 'templates/modals/loginModal.html',
//        controller: 'LoginModalCtrl',
//        size: 'sm',
//        windowClass: 'modal-window'
//      });
//    }
//  };
  
  angular
    .module('chatterBox', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
    .config(config)
  
    //test
//    .run(['$cookies', '$uibModal', CookieHandler]);
})();