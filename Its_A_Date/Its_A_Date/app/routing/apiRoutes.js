var connection = require('../config/connection');

module.exports = function(app) { 
/*---------------------
    Get Routes
----------------------*/
	app.get("/api/dates", function(req,res){
		console.log("Route Hit");
	// console.log(result);
	// res.json(result);
	});
	
	// console.log("Route Hit");
};