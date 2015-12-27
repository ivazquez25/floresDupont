app.controller("SellersController",["$scope","blockUI","SellersDataService",function($scope,blockUI,dataService){
    
    $scope.formData = {};
    $scope.paginationLimit = '5';
    
    $scope.initSellers = function(){
        $scope.formData = {
            name: '',
            lastName: '',
            cellphone: '',
            officephone: '',
            email: '',
        }
    }
    
    $scope.initSellers();
    
    $scope.getSellers = function(){
        var onSuccess = function(response){
            $scope.sellers = angular.copy(response);
            blockUI.stop();
        }
        
        var onError = function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error al traer los datos!");
        }
        
        blockUI.start();
        dataService.getSellers(onSuccess,onError);
    }
    
    $scope.getSellers();
    
    $scope.addSellers = function(){
        var onSuccess = function(response){
            blockUI.stop();
            toastr.success(response.message);
            $scope.getSellers();
        }
        
        var onError = function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error al traer los datos!");
        }
        
        blockUI.start();
        dataService.addSeller($scope.formData,onSuccess,onError);
    }
}]);