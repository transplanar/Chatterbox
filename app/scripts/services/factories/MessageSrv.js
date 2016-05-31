(function(){
  function MessageSrv($firebaseArray){
    var firebaseRef = new Firebase("https://incandescent-heat-1344.firebaseio.com/");
    var messages = $firebaseArray(firebaseRef.child('messages'));
    
    var MessageSrv = {};
    
    MessageSrv.getAllMessages = function(){
      return messages;
    };

    MessageSrv.getMessage = function(id){
      return messages[id];
    }

    MessageSrv.addMessage = function(message){
      messages.$add(message);
      console.log('added message ', message);
    }

    MessageSrv.updateMessage = function(id){
      messages.$save(id);
    }

    MessageSrv.removeMessage = function(id){
      messages.$remove(id);
    }
    
//    MessageSrv.getTimeStamp = function(){
//      return MessageSrv.serverTime - Date.now();
//    }
//    
//    firebaseRef("/.info/serverTimeOffset").on('value', function(offset) {
//      var offsetVal = offset.val()||0;
//      MessageSrv.serverTime = Date.now() + offsetVal;
//    });
    
    return MessageSrv;
  }
  
  angular
    .module('chatterBox')
    .factory('MessageSrv', ['$firebaseArray', MessageSrv]);
})();