var app = angular.module("FloresDupontApp",["ngRoute","ngResource","siTable","blockUI","ngAnimate","uiGmapgoogle-maps","ngFileUpload"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/propiedades',{templateUrl:'../assets/js/app/templates/properties/properties.html'})
	.when('/propiedades/nueva-propiedad',{templateUrl:'../assets/js/app/templates/properties/propertyForm.html'})
	.when('/dashboard',{templateUrl:'../assets/js/app/templates/dashboard.html'})
	.when('/desarrollos',{templateUrl:'../assets/js/app/templates/developments/developments.html'})
	.when('/vendedores',{templateUrl:'../assets/js/app/templates/sellers/sellers.html'})
	.otherwise('/dashboard',{templateUrl:'../assets/js/app/templates/dashboard.html'})
});

app.config(function(blockUIConfig) {
  // Tell blockUI not to mark the body element as the main block scope.
  blockUIConfig.autoInjectBodyBlock = false;  
});

app.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'places' // Required for SearchBox.
  });
})