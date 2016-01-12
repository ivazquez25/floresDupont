app.controller("SellersController",["$scope","blockUI","SellersDataService",function($scope,blockUI,dataService){
    
    $scope.formData = {};
    $scope.paginationLimit = '5';
    $scope.isUpdateModal = false;
    $scope.id = 0;
    
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
    
    $scope.changeToSaveData = function(){
        $scope.initSellers();
        $scope.isUpdateModal = false;
    }
    
    $scope.sendFormData = function(){
        var onSuccess = function(response){
            blockUI.stop();
            toastr.success(response.message);
            $scope.getSellers();
        }
        
        var onError = function(){
            blockUI.stop();
            var stringError = ($scope.isUpdateModal)?"Ha ocurrido un error al actualizar los datos!":"Ha ocurrido un error al guardar los datos";
            toastr.error(stringError);
        }
        
        blockUI.start();
        if(!$scope.isUpdateModal)
            dataService.addSeller($scope.formData,onSuccess,onError);
        else{
            updateFormData = angular.copy($scope.formData);
            updateFormData.id = $scope.id;
            dataService.updateSeller(updateFormData,onSuccess,onError);
        }
    }
    
    $scope.getSelectedSeller = function(id){
        $scope.id = id;
        $scope.isUpdateModal = true;
        var onSuccess = function(response){
            $scope.formData = {
                name: response.name,
                lastName: response.lastname,
                cellphone: response.cellphone,
                officephone: response.officephone,
                email: response.email,
            }
        }
        
        var onError = function(){
            toastr.error("Ha ocurrido un error al traer los datos!");
        }
        
        dataService.getSelectedSeller(id,onSuccess,onError);
    }
    
    $scope.deleteSeller = function(){
        
    }
    
    $scope.deleteSeller = function(id){
        var onSuccess = function(response){
            blockUI.stop();
            toastr.success(response.message);
            $scope.getSellers();
        }
        
        var onError = function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error!");
        }
        
        blockUI.start();
        dataService.deleteSeller(id,onSuccess,onError);
    }
}]);