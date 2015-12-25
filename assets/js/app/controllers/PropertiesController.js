app.controller("PropertiesController", ['$scope','blockUI', 'PropertiesService', "Upload", function ($scope,blockUI,dataService,Upload) {
	$scope.title = "Propiedades";
    $scope.paginationLimit = "5";
    $scope.filter = {
        $:''
    }
    
    $scope.initProperties = function(){
        $scope.formData = {
            //datos basicos
            kindOfProperty: "0",
            development: '',
            introduction: '',
            //datos generales
            salerent:"",
            nameinmueble:'',
            pricesale:'',
            pricerent:'',
            seller:"0",
            description:'',
            //datos especificos
            areateritori:'',
            capacity:"0",
            numrooms:'',
            badroms:'',
            halfbadroms:'',
            furnished:'0',
            //ubicaciones
            estate:'',
            city:'',
            hood:'',
            postalcode:'',
            directions:'',
            publicc:'',
            //Fotos
            picturehome:'',
            picturehood:'',
            //operativos
            estateoperative:'0',
            oficine:'0',
            destacate:'',
            clavewords:'',
            //adicionales
            levels:'',
            services:'0',
            espace:'',
            kindair:'0',
            kindterren:'0',
            coments:'',
            chekboxes:{
               value0 : false,
               value1 : false,
               value2 : false,
               value3 : false,
               value4 : false,
               value5 : false,
               value6 : false,
               value7 : false,
               value8 : false,
               value9 : false,
               value10: false,
               value11: false
            }
        }
        $scope.location = {
            state: '',
            country: '',
            neighborhood: ''
        }
    }
    
    $scope.initProperties();
    
    $scope.employees = [];
    
    $scope.check = function(){
        console.log("");
    }
    
    $scope.getProperties = function(){
        var onSuccess = function(response){
            $scope.employees = angular.copy(response);
            blockUI.stop();
        }
        
        var onError = function(){
            
        }
        
        blockUI.start();
        dataService.getProperties(onSuccess,onError);
    }
    $scope.place = '';
    $scope.getProperties();
    
    $scope.map = {center: {latitude: 20.6659078, longitude: -103.4013342 }, zoom: 14 };
        $scope.options = {scrollwheel: false};
       $scope.marker = {
        id: 0,
        coords: {
            latitude: 52.47491894326404,
            longitude: -1.8684210293371217
        },
        options: { draggable: true },
        events: {
            dragend: function (marker, eventName, args) {

                $scope.marker.options = {
                    draggable: true,
                    labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                    labelAnchor: "100 0",
                    labelClass: "marker-labels"
                };
            }
        }
    };
var events = {
    places_changed: function (searchBox) {
        var place = searchBox.getPlaces();
        if (!place || place == 'undefined' || place.length == 0) {
            console.log('no place data :(');
            return;
        }

        $scope.map = {
            "center": {
                "latitude": place[0].geometry.location.lat(),
                "longitude": place[0].geometry.location.lng()
            },
            "zoom": 18
        };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: place[0].geometry.location.lat(),
                longitude: place[0].geometry.location.lng()
            }
        };
    }
};
        $scope.searchbox = { template:'searchbox.tpl.html', events:events};
    
    angular.element(document).ready(function () {
       $('[data-toggle="tooltip"]').tooltip();
    });
    
    /*$scope.hood = null;
    $scope.home = null;*/
    $scope.submit = function(folder) {
      //if(form.file.$valid && $scope.file) {
        $scope.uploadFiles($scope.file,folder);
      //}
    };
    
     $scope.uploadFiles = function (file,folder) {
        Upload.upload({
            url: 'http://localhost/floresDupont/home/uploadImages',
            data: {file: file, folder: folder}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };

}])

.directive('uploaderModel',["$parse",function($parse){

   return{

        restrict: 'A',
        link:function(scope,iElement,iAttrs){
           iElement.on("change",function(e){
              $parse(iAttrs.uploaderModel).assing(scope.iElement[0].file[0]);
           });
        }
   };
}])