angular.module('myApp').service('serv',function($http,$q){

	
	this.setData=function(d) {
		
		this.data=d;
	}

	this.getData=function(){

		return this.data;
	}

	this.setIndex=function(i){
		 this.index=i;
	}

	this.getIndex=function() {
		return this.index;
	}
	this.setCart=function(c) {
		
		this.cart=c;
	}

	this.getCart=function(){

		return this.cart;
	}

})