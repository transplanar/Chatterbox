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
    
    $scope.clearRooms = function(){
      RoomSrv.clearRooms();
    }
    
    $scope.$on('createNewRoom', function(event, args){
      $scope.addRoom({name: args});
    });
  };
  
  angular
    .module('chatterBox')
    .controller('RoomCtrl', ['$scope', 'RoomSrv', RoomCtrl]);
})();