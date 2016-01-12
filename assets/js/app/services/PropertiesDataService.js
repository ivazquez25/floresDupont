app.factory('PropertiesService',  ['$http', function ($http) {
	    var factory =
	    {
	    		getProperties: function(callback, errorCallback){
	    			$http.get('/floresDupont/properties/getProperties').success(callback).error(errorCallback);	    			
	    		},
	    		getSellers: function(callback, errorCallback){
	    			$http.get('/floresDupont/properties/getSellers').success(callback).error(errorCallback);	    			
	    		},
	    		getDevelops: function(callback, errorCallback){
	    			$http.get('/floresDupont/properties/getDevelops').success(callback).error(errorCallback);	    			
	    		},
	    		getKindProperties: function(callback, errorCallback){
	    			$http.get('/floresDupont/properties/getKindProperties').success(callback).error(errorCallback);	    			
	    		},
	    		OnSendDataForm: function(properties,callback, errorCallback){
	    			$http.post('/floresDupont/properties/AddPropertie',properties).success(callback).error(errorCallback);
	    		},
	    		deletePropertie:function(id, callback, errorCallback){
	    			$http.post('/floresDupont/properties/deletePropertie',IDS).success(callback).error(errorCallback);	    			
	    		},
	    		remove:function(route, callback, errorCallback){
	    			$http.post('/floresDupont/properties/removeFile',route).success(callback).error(errorCallback);	    			
	    		},
	    };
	    return factory;
	    
}]);