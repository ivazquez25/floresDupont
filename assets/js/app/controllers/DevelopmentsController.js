app.controller("DevelopmentsController", ['$scope','blockUI', 'DevelopmentsDataService', function ($scope,blockUI,dataService) {
    $scope.isUpdateModal = 0;
    $scope.paginationLimit = "5";
    $scope.developments = [];
    $scope.updateFormData = {
        id: "",
        name: ""
    };
    $scope.formData = {
        name: ""
    }
    
    $scope.initDevelopments = function(){
         $scope.formData = {
             name: ""
         }
         $scope.updateFormData = {
            id: "",
            name: ""
        };
    }
    
    $scope.getDevelopments = function(){
        var onSuccess = function(response){
            $scope.developments = angular.copy(response);
            blockUI.stop();
        }
        
        var onError= function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error al traer los datos!");
        }
        blockUI.start();
        dataService.getDevelopments(onSuccess,onError);
    }
    
    $scope.openUpdateModal = function(id){
        $scope.isUpdateModal = id;
    }
    
    $scope.openNewModal = function(){
        $scope.isUpdateModal = 0;
    }
    
    $scope.addNewDevelopment = function(){
        var onSuccess = function(data){
            $("#developmentsModal").modal("hide");
            $scope.getDevelopments();
             blockUI.stop();
            toastr.success(data.message);
            $scope.initDevelopments();
        }
        
        var onError = function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error al guardar los datos!");
        }
        blockUI.start();
        dataService.addDevelopment($scope.formData.name,onSuccess,onError);
    }
    
    $scope.updateDevelopment = function(){
        $scope.updateFormData = {
            id: $scope.isUpdateModal,
            name: $scope.formData.name
        };
        var onSuccess = function(data){
            $("#developmentsModal").modal("hide");
            $scope.getDevelopments();
             blockUI.stop();
            console.log(data);
            toastr.success(data.message);
            $scope.initDevelopments();
        }
        
        var onError = function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error al editar los datos!");
        }
        blockUI.start();
        dataService.updateDevelopment($scope.updateFormData,onSuccess,onError);
    }
    
    $scope.getDevelopments();
    
    $scope.deleteDevelopment = function(id){
        var onSuccess = function(data){
            $("#developmentsModal").modal("hide");
            $scope.getDevelopments();
             blockUI.stop();
            toastr.success(data.message);
        }
        
        var onError = function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error al eliminar el desarrollo!");
        }
        blockUI.start();
        dataService.deleteDevelopment(id,onSuccess,onError);
    }
}]);