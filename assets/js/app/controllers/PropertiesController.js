app.controller("PropertiesController", ['$scope','blockUI', 'PropertiesService','Upload','$compile', function ($scope,blockUI,dataService,Upload,$compile) {
	$scope.title = "Propiedades";
    $scope.paginationLimit = "5";
    $scope.filter = {
        $:''
    }
    
    
    $scope.check = function(){
        console.log("");
    }
    //________________________________________________________________________________________________________________
        //funcion para traer la propiedad al catalogo
        $scope.properties = [];
        $scope.getProperties = function(){
            var onSuccess = function(response){
                $scope.properties = angular.copy(response);
                $scope.properties.forEach(function(value,index,c){
                    $scope.properties[index].create_at = new Date(value.create_at);

                });
                blockUI.stop();
            }
            var onError = function(){
                
            }
            blockUI.start();
            dataService.getProperties(onSuccess,onError);
        }
        $scope.getProperties();
    //_______________________________________________________________________________________________________________________________
        $scope.place = '';
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
    //___________________________________________________________________________________________
        // funcion para traer todos los vendedores
        $scope.sellers=[];
        $scope.getSellers =function(){
            var onSuccess = function(response){
                $scope.sellers = angular.copy(response);
                blockUI.stop();
            }
            var onError = function(){
                
            }
            blockUI.start();
            dataService.getSellers(onSuccess,onError);
        }
        $scope.getSellers();
    //___________________________________________________________________________________________
        //funcion para traer todos los desarollos
        $scope.develops=[];
        $scope.getDevelops =function(){
            var onSuccess = function(develops){
                $scope.develops = angular.copy(develops);
                blockUI.stop();
            }
            var onError = function(){
                
            }
            blockUI.start();
            dataService.getDevelops(onSuccess,onError);
        }
        $scope.getDevelops();
    //__________________________________________________________________________________________
        // funcion para trer los tipos de propiedad
        $scope.kindproperty=[];
        $scope.getKindProperties =function(){
            var onSuccess = function(kinds){
                $scope.kindproperty = angular.copy(kinds);
                blockUI.stop();
            }
            var onError = function(){
                
            }
            blockUI.start();
            dataService.getKindProperties(onSuccess,onError);
        }
        $scope.getKindProperties();
    //______________________________________________________________________________________________ 
        // funcion para eliminar la propiedad
        $scope.deletePropertie = function(id,id_folder){
            IDS={'id':id,'id_folder':id_folder}
        var onSuccess = function(response){
            blockUI.stop();
            toastr.success(response.message);
            $scope.getProperties();
        }
        
        var onError = function(){
            blockUI.stop();
            toastr.error("Ha ocurrido un error!");
        }
        
        blockUI.start();
        dataService.deletePropertie(IDS,onSuccess,onError);
    }
    //____________________________________________________________________________________________________________________
        // funcion para mandar el formulario al servicio y al controlador    
        $scope.initProperties = function(){
            $scope.formData = {
                //primera seccion
                kindOfProperty: "0",
                development: '0',
                nameinmueble:'',
                sale:false,
                rent:false,
                trans:false,
                seller:"0",
                pricesale:'',
                pricerent:'',
                pricetrans:'',

                // datos de la propiedad cuartos,pisos etc...
                numrooms:'0',
                badroms:'0',
                halfbadroms:'0',
                age:'0',
                parking:'0',
                levelsbuilld:'0',
                services:'0',
                levels:'0',
                flors:'0',
                areateritori:'',
                areaconstruct:'',
                areabode:'',
                areaoficce:'',
                areacros:'',
                areadeep:'',
                capacity:{
                    areateritori:'M2',
                    areaconstruct:'M2',
                    areabode:'M2',
                    areaoficce:'M2',
                    areacros:'M2',
                    areadeep:'M2'
                },
                furnished:'no',
                
                 //datos adicionales
                kindterren:'0',
                coments:'',
                coments1:'',
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
                   value10 : false,
                   value11 : false,
                   value12 : false,
                   value13 : false,
                   value14 : false,
                   value15 : false,
                   value16 : false,
                   value17 : false,
                   value18 : false,
                   value19 : false,
                   value20 : false,
                   value21 : false,
                   value22 : false,
                   value23 : false,
                   value24 : false,
                   value25 : false,
                   value26 : false,
                   value27 : false,
                   value28 : false,
                   value29 : false,
                   value30 : false
                },
                
               //segunda seccion ubicacion
              
                postalcode:'',
                estate:'',
                city:'',
                hood:'',
                street:'',
                inside:'',
                outside:'',
                directions:'',
                publicc:'si',
                
                //Tercera seccion operativos
                oficine:'Guadalajara',
                clavewords:'',

                //fotos

                // ultima seccion 
                destacate:'no',
                id_folder:'vacio',
                mainHome:'',
                mainHood:''
            }
            $scope.location = {
                state: '',
                country: '',
                neighborhood: ''
            }
        } 
        $scope.initProperties();
        $scope.OnSendDataForm=function(){
            var onSuccess = function(data){
                blockUI.stop();
                toastr.success(data.message);
                $scope.initProperties();
                window.location.href= "http://localhost/floresDupont/home/admin#/propiedades";
                //$location.path('http://localhost/floresDupont/home/admin#/propiedades');
            }
            
            var onError = function(dataerror){
                blockUI.stop();
                toastr.error(dataerror.message);
                $scope.initProperties();
            }
            blockUI.start();
            dataService.OnSendDataForm($scope.formData,onSuccess,onError);
        }
    //______________________________________________________________________________________________________________________
        //funcion para subir la imagen en la carpeta de la propiedad
        $scope.submit = function(folder,id_folder) {
          $scope.uploadFiles($scope.file,folder,id_folder);
        };
        $scope.count=1;
        $scope.uploadFiles = function (file,folder,id_folder) {
            Upload.upload({
                url: 'http://localhost/floresDupont/Properties/uploadImages',
                data: {archivo: file, carpeta:{carpeta:folder, id_carpeta: id_folder}}
            }).then(function (resp) {
                $scope.file=null;
                $scope.formData.id_folder=angular.copy(resp.data.id);
                if(resp.data.result != 2){
                    var route="'./assets/img/properties/"+resp.data.id+"/"+resp.data.kindfolder+"/"+resp.data.name+"'";
                    if (resp.data.kindfolder=='home') {
                        angular.element(document.getElementById('homepicture')).append($compile('<div style="float:left;width: 50%;height: 50%;" id="'+$scope.count+'">'+ 
                                                                                        '   <img style="width: 50%;height: 80%;" src="../assets/img/properties/'+resp.data.id+'/'+resp.data.kindfolder+'/'+resp.data.name+'">'+
                                                                                        '       <button style="width: 50%;float: right;" type="button" class="btn btn-default btn-sm" ng-click="remove('+route+','+$scope.count+');">'+
                                                                                        '           <span class="glyphicon glyphicon-remove"></span> Eliminar '+
                                                                                        '       </button>'+
                                                                                        '       <label class="radio-inline" style="width: 50%;float: right; bottom: 35px;">'+
                                                                                        '           <input type="radio" value="'+resp.data.name+'" ng-model="formData.mainHome">Principal'+
                                                                                        '       </label>'+
                                                                                        ' </div>')($scope)); 
                    }else{
                        angular.element(document.getElementById('hoodpicture')).append($compile('<div style="float:left;width: 50%;height: 50%;" id="'+$scope.count+'">'+ 
                                                                                        '   <img style="width: 50%;height: 80%;" src="../assets/img/properties/'+resp.data.id+'/'+resp.data.kindfolder+'/'+resp.data.name+'">'+
                                                                                        '       <button style="width: 50%;float: right;" type="button" class="btn btn-default btn-sm" ng-click="remove('+route+','+$scope.count+');">'+
                                                                                        '           <span class="glyphicon glyphicon-remove"></span> Eliminar '+
                                                                                        '       </button>'+
                                                                                        '       <label class="radio-inline" style="width: 50%;float: right; bottom: 35px;">'+
                                                                                        '           <input type="radio" value="'+resp.data.name+'" ng-model="formData.mainHood">Principal'+
                                                                                        '       </label>'+
                                                                                        ' </div>')($scope)); 
                    }
                    $scope.count++;
                }else{
                 toastr.success('La imagen: '+resp.data.name+' ya existe');
                }
                //console.log($scope.formData.id_folder);
                //console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ');
            });
        };
    //___________________________________________________________________________________________________________________________
      //funcion para remover la imajn desde el template de registro
      $scope.remove=function(route,id){
        var ruta={'ruta':route,'id':id};
        var onSuccess = function(data){
                blockUI.stop();
                toastr.success(data.message);
                if (data.kind=='home') {
                    if($scope.formData.mainHome==data.name){
                        $scope.formData.mainHome='';
                    }
                }else{
                    if($scope.formData.mainHood==data.name){
                        $scope.formData.mainHood='';
                    }
                }
                angular.element(document.getElementById(""+data.id+"")).remove();
                //$location.path('http://localhost/floresDupont/home/admin#/propiedades');
            }
            var onError = function(dataerror){
                blockUI.stop();
                toastr.error('error');
            }
            blockUI.start();
            dataService.remove(ruta,onSuccess,onError);
      }
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


