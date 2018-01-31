
var express = require('express');

var app = express();
module.exports=app;
app.use(express.static("client"));
require('./usrRouting.js')(app);
app.listen(3001,function(){
	console.log('running on port : 3001');
});

