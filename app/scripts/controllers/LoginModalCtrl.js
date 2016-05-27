(function(){
  function LoginModalCtrl($scope, $uibModalInstance) {
    $scope.userName = '';

    $scope.submit = function(){
      $uibModalInstance.close($scope.userName);
    };
  }

  angular
    .module('chatterBox')
    .controller('LoginModalCtrl', ['$scope', '$uibModalInstance', LoginModalCtrl]);
})();

