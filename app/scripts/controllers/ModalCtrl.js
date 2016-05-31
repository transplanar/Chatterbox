(function(){
  function ModalCtrl($scope, $uibModal){
    var size = 'sm';
    
    $scope.open = function(size){
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modals/newRoomModal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        windowClass: 'modal-window'
      });
      
      //NOTE is this correct?
      modalInstance.result.then(
        function(roomName){
         $scope.$emit('createNewRoom', roomName);
        }
      );
    };
  }

  angular
    .module('chatterBox')
    .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();