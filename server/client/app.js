var routerApp = angular.module('myApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
    .state('mobile', {
      url: '/mobile',
      templateUrl: 'mobiles.html',
      controller: 'mobilectrl'
    })


.state("detailView", {
    url:"/details",
    templateUrl:"detail.html",
    controller:"detail_ctrl"
  })

.state('view',
  { 
    url:"/cart",
    templateUrl:"view.html",
    controller:"view_ctrl"
  })

 

  $urlRouterProvider.otherwise('/');
});

routerApp.controller('mainctrl',function($scope){

});


