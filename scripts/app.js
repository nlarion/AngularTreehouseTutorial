angular.module("todoListApp",[])
.controller('mainCtrl', function($scope){
	$scope.learningNgChange = function(){
		console.log("an input changed!");
	};
	$scope.todos = [
		{"name":"cleanm the aslkjasdkljasdf"},
		{"name":"water the asdihasdjhioasdfoij"},
		{"name":"dog the walk"},
		{"name":"poop"},
		{"name":"pick up sticks"}

	]
});