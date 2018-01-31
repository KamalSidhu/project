
angular.module('myApp').controller('mobilectrl', function($scope,$http,$state,serv) {
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

      
    //var request = {
      //          method: 'get',
        //        url: 'db.json',
          //      dataType: 'json',
            //    contentType: "application/json"
            //};
    //$http(request).then(function (jsonData){
        //console.log(jsonData);
    //  $scope.products=jsonData.data;
    //  console.log($scope.products);

         $http.get('/mobiles').then(function(response){
    console.log(response.data.mobiles);
        $scope.db=response.data.mobiles;
        
        serv.setData($scope.db);

    })

 $scope.detailsRedirect=function(index){
        serv.setIndex(index);
        
        $state.go("detailView",{'id':index});
        
    }
  
});
