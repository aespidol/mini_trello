trelloApp.controller("loginsController", function($location){
	var that = this;
	that.Login = function(){
		console.log("hello")
		$location.path("/dash")
	}
})