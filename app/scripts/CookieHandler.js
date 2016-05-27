(function(){
  function CookieHandler($cookies, $uibModal){
    console.log('cookie time');
    var currentUser = $cookies.get('currentUser');
    
    if(!currentUser || currentUser === ''){
      $uibModal.open({
        templateUrl: 'templates/modals/loginModal.html',
        controller: 'LoginModalCtrl',
        size: 'sm',
        windowClass: 'modal-window'
      });
    }
  };
  
  angular
    .module('chatterBox')
    .run(['$cookies', '$uibModal', CookieHandler]);
})();