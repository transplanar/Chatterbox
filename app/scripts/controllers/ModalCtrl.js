(function(){
  function ModalCtrl($scope, $log, $uibModal){
    var size = 'sm';
    
    $scope.open = function(size){
      console.log('open modal');
      
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size
//        resolve:
//          {
//            result: function(){
//              return $scope.message;
//            }
//          }
      });
      
      modalInstance.result.then(

        function(testVar){ $scope.message = testVar; }
//        function(){/*on close/dismiss */}
        //Create new room using desired room name
      );
    };
  }

  angular
    .module('chatterBox')
    .controller('ModalCtrl', ['$scope', '$log', '$uibModal', ModalCtrl]);
})();