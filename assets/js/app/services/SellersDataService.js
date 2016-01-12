app.factory('SellersDataService',  ['$http', function ($http) {
	    var factory =
	    {
	    		getSellers: function(callback, errorCallback){
	    			$http.get('/floresDupont/sellers/getSellers').success(callback).error(errorCallback);	    			
	    		},
                addSeller:function(formData, callback, errorCallback){
	    			$http.post('/floresDupont/sellers/addSeller',formData).success(callback).error(errorCallback);	    			
	    		},
                getSelectedSeller:function(id, callback, errorCallback){
	    			$http.post('/floresDupont/sellers/getSelectedSeller',id).success(callback).error(errorCallback);	    			
	    		},
                updateSeller:function(formData, callback, errorCallback){
	    			$http.post('/floresDupont/sellers/updateSeller',formData).success(callback).error(errorCallback);	    			
	    		},
                deleteSeller:function(id, callback, errorCallback){
	    			$http.post('/floresDupont/sellers/deleteSeller',id).success(callback).error(errorCallback);	    			
	    		},
            
	    };
	    return factory;
	    
}]);