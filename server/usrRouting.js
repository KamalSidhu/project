var ctrl = require('./ctrl.js');

module.exports=function(app){
	
app.get('/',ctrl.mainPage);
app.get('/mobiles',ctrl.mobileData);

};