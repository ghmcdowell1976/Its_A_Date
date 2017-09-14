var path = require('path');

module.exports = function(app) { 
/*---------------------
    Get Routes
----------------------*/
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../views/index.html'));
	});
};