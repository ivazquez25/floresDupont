app.factory('DevelopmentsDataService',  ['$http', function ($http) {
	    var factory =
	    {
	    		getDevelopments: function(callback, errorCallback){
	    			$http.post('/floresDupont/developments/getDevelopments').success(callback).error(errorCallback);	    			
	    		},
                addDevelopment: function(name,callback, errorCallback){
	    			$http.post('/floresDupont/developments/addDevelopment',name).success(callback).error(errorCallback);	    			
	    		},
                deleteDevelopment: function(id,callback, errorCallback){
	    			$http.post('/floresDupont/developments/deleteDevelopment',id).success(callback).error(errorCallback);	    			
	    		},
                updateDevelopment: function(formData,callback, errorCallback){
	    			$http.post('/floresDupont/developments/updateDevelopment',formData).success(callback).error(errorCallback);	    			
	    		},
	    		
	    };
	    return factory;
	    
}]);