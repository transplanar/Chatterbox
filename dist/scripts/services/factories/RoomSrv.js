(function() {
  function RoomSrv($firebaseArray) {
    var RoomSrv = {};
    
    var firebaseRef = new Firebase("https://incandescent-heat-1344.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    
    RoomSrv.getRooms = function(){
      return rooms;
    };
    
    RoomSrv.addRoom = function(room){
      rooms.$add(room);
    }
    
    RoomSrv.updateRoom = function(id){
      rooms.$save(id);
    }
    
    RoomSrv.removeRoom = function(id){
      rooms.$remove(id);
    }
    
    //NOTE: FOR DEBUGGING
    RoomSrv.clearRooms = function(){
      firebaseRef.remove();
    }
    
    return RoomSrv;
  }

  angular
    .module('chatterBox')
    .factory('RoomSrv', ['$firebaseArray', RoomSrv]);
})();