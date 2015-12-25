app.factory('PropertiesService',  ['$http', function ($http) {
	    var factory =
	    {
	    		getProperties: function(callback, errorCallback){
	    			$http.get('/floresDupont/home/getProperties').success(callback).error(errorCallback);	    			
	    		},
	    		
	    };
	    return factory;
	    
}]);