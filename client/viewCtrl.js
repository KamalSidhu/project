angular.module('myApp').controller('view_ctrl',function($scope,$state,serv){
	
	 if(serv.getCart()){
	 	$scope.obj = serv.getCart();
	 }
	 else{
	 	$scope.obj = {};
	 }
	 //console.log($scope.obj.length)

	 $scope.total=function()
	 {
	 	var t=0;
	 	for(var i=0;i<$scope.obj.length;i++){
	 		t = t +parseInt($scope.obj[i].price);
	 	}
	 	return t;
		
	 }

	 $scope.delete = function(index){

			
	 		$scope.obj.splice(index,1);
	 		serv.setCart($scope.obj);
	 		//console.log($scope.obj)
			

	 }

})