var obj = require('./serv.js');
var express = require('express');
var app = express();
var fs = require('fs');
var bodyparser = require("body-parser");
//var bd = require('./index.js');
app.use(bodyparser.json());

exports.mainPage = function(req,res){

	app.use(express.static("C:\\Users\\HP PC\\Desktop\\shop_project\\client"));
}

exports.mobileData = function(req,res){
	
	//res.send("hello")
	fs.readFile("./db.json",function(err,data){
 	var d = JSON.parse(data);
	console.log(d);
 	res.json(d);
 })
}


exports.postMethod = function(req,res){
	console.log(req.body);
};
