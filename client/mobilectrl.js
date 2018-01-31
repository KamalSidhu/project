
angular.module('myApp').controller('mobilectrl',function($scope,$http,$state,serv) {
        
	  //$scope.mobiles=[];
	  //$scope.cart=[];

     // var request={
     	//       method:'get',
     	  //     url:'db.json',
     	    //   dataType:'json',
     	      // contentType:'application/json'

     //};
     //$http(request).then(function(jdata){
     	// $scope.db=jdata.data;
         //console.log(jdata);
//console.log($scope.mobiles[0]);
     //})


 $http.get('/mobiles').then(function(response){
    console.log(response);
        $scope.db=response.mobiles;
        
        serv.setData($scope.db);

    })
 $scope.detailsRedirect=function(index){
        serv.setIndex(index);
        
        $state.go("detailView");
        
    }
  
});
