(function() {
  function RoomSrv($firebaseArray) {
    var RoomSrv = {};

    var firebaseRef = new Firebase("https://incandescent-heat-1344.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    RoomSrv.getAllRooms = function(){
      return rooms;
    };

    RoomSrv.getRoom = function(id){
      return rooms[id];
    }

    RoomSrv.addRoom = function(room){
      rooms.$add(room);
    }

    RoomSrv.updateRoom = function(id){
      rooms.$save(id);
    }

    RoomSrv.removeRoom = function(id){
      rooms.$remove(id);
    }

    RoomSrv.getMessages = function(id){

      return $firebaseArray(firebaseRef.child('messages')
                                       .orderByChild('roomID')
                                       .equalTo(id));
    }

    //NOTE FOR DEBUGGING
    RoomSrv.clearRooms = function(){
      firebaseRef.remove();
    }

    return RoomSrv;
  }

  angular
    .module('chatterBox')
    .factory('RoomSrv', ['$firebaseArray', RoomSrv]);
})();
