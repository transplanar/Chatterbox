(function(){
  function RoomCtrl($scope, RoomSrv){
    $scope.rooms = RoomSrv.getRooms();
    
    $scope.addRoom = function(room){
      RoomSrv.addRoom(room);
    };
    
    $scope.updateRoom = function(id){
      RoomSrv.updateRoom(id);
    };
    
    $scope.removeRoom = function(id){
      RoomSrv.removeRoom(id);
    };
    
    $scope.getRoom = function(id){
      RoomSrv.getRoom(id);
    };
    
    $scope.clearRooms = function(){
      RoomSrv.clearRooms();
    };
    
    $scope.getMessages= function(id){
      $scope.messages = RoomSrv.getMessages(id);
//      $scope.setSelected(id);
    };
    
    $scope.setSelected = function(id){
      $scope.selectedRoom = $scope.getRoom(id);
    }
    
    $scope.$on('createNewRoom', function(event, args){
      $scope.addRoom({name: args});
    });
  };
  
  angular
    .module('chatterBox')
    .controller('RoomCtrl', ['$scope', 'RoomSrv', RoomCtrl]);
})();