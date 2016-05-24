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
//        controller: 'RoomCtrl as Rooms',
        controller: 'RoomCtrl',
        templateUrl: '/templates/home.html'
      });
  }
  
  angular
    .module('chatterBox', ['ui.bootstrap', 'ui.router', 'firebase'])
    .config(config);
})();