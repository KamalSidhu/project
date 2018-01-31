angular.module('myApp').controller('detail_ctrl',function($scope,$http,$state,$stateParams,serv){


   // console.log($stateParams.id);

	if(serv.getCart()){
	$scope.cart=serv.getCart();
	}
	else{
		$scope.cart=[];
	}
	$scope.indexData=serv.getIndex();
	console.log(serv.getIndex())
	$scope.obj=serv.getData();
	$scope.detailProduct = $scope.obj[$scope.indexData];

	$scope.add=function(){
    	
    	$scope.cart.push($scope.detailProduct);
     	serv.setCart($scope.cart);
     	alert("Added to cart");
     	$state.go("view");
     	
};
});

