(function(){
  function ModalInstanceCtrl($scope, $uibModalInstance) {
    $scope.testVar = 'Variable passed successfully!';
    
    $scope.submit = function(){
      $uibModalInstance.close($scope.testVar);
//      $uibModalInstance.close($scope.roomName);
    };

    $scope.close = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }
  
  
  angular
    .module('chatterBox')
    .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);
})();

