(function(){
//  function MessageCtrl($scope, MessageSrv){
  function MessageCtrl($scope, MessageSrv, $cookies){
    $scope.send = function(){
      var date = new Date();
      
//      console.log('Timestamp', MessageSrv.getTimeStamp());
      
      MessageSrv.addMessage(
        {
          content: $scope.messageContent,
          roomID: $scope.selectedRoom.$id,
          sentAt: date.toString(),
          username: $cookies.get('currentUser')
        }
      );
      
      $scope.messageContent = '';
    }
  }

  angular
    .module('chatterBox')
    .controller('MessageCtrl', ['$scope', 'MessageSrv', '$cookies', MessageCtrl]);
})();