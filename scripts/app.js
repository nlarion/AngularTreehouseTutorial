angular.module("todoListApp",[])
.controller('mainCtrl', function($scope){
	$scope.helloWorld = function(){
		console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
	};
})
.controller('coolCtrl', function($scope){
	$scope.whoAmI = function(){
		console.log("Hello there, this is the coolCtrl function!");
	};
	//you can override methods!!!!
	$scope.helloWorld = function(){
		console.log("This is not the main ctrl!");
	}
})
.controller('imASibling', function($scope){
	$scope.foobar = 1234;
	//do some cool stuff here!!!
});
