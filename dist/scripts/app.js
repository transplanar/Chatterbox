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
        controller: 'RoomCtrl as Rooms',
        templateUrl: '/templates/home.html'
      });
  }
  
  angular
    .module('chatterBox', ['ui.router', 'firebase'])
    .config(config);
})();