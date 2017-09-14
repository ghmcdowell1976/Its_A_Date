var PerfectDate = require('../models/Date');

module.exports = function(app) { 
/*---------------------
    Get Routes
----------------------*/
	app.get("/api/dates", function(req,res){
		PerfectDate.findAll().then(function(dates) {
			res.json(dates);
		}).catch(function(err) {
			console.log(err);
		})
	});
	
	// console.log("Route Hit");
};