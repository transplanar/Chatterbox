(function(){
  function ModalCtrl($scope, $log, $uibModal){
    var size = 'sm';
    
    $scope.open = function(size){
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size
      });
      
      modalInstance.result.then(
        function(roomName){
         $scope.$emit('createNewRoom', roomName); 
        }
      );
    };
  
    //NOTE use submit instead?
//    $scope.submit = function(){
//      console.log('submit triggered');
//    }
  }

  angular
    .module('chatterBox')
    .controller('ModalCtrl', ['$scope', '$log', '$uibModal', ModalCtrl]);
})();