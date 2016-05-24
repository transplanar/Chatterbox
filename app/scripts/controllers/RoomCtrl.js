(function(){
  function RoomCtrl(RoomSrv){
    this.rooms = RoomSrv.getRooms();
    
    this.addRoom = function(room){
      RoomSrv.addRoom(room);
    };
    
    this.updateRoom = function(id){
      RoomSrv.updateRoom(id);
    };
    
    this.removeRoom = function(id){
      RoomSrv.removeRoom(id);
    };
    
    this.clearRooms = function(){
      RoomSrv.clearRooms();
    }
  };
  
  angular
    .module('chatterBox')
    .controller('RoomCtrl', RoomCtrl);
})();