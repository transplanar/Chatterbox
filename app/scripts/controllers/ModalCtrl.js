(function(){
  function ModalCtrl($scope, $log, $uibModal){
    var size = 'sm';
    
    $scope.open = function(size){
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        windowClass: 'modal-window'
      });
      
      modalInstance.result.then(
        function(roomName){
         $scope.$emit('createNewRoom', roomName); 
        }
      );
    };
  }

  angular
    .module('chatterBox')
    .controller('ModalCtrl', ['$scope', '$log', '$uibModal', ModalCtrl]);
})();