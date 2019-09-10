const express = require("express");
const router = express.Router();
const burgers = require("../models/burger");

router.get("/", function(req, res){
	burgers.selectAll(function(data){
		let hbsObject = {
            burger: data
        };
        console.log("hbsObj");
        console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post("/api/burgers", function(req, res){
	burgers.create(req.body.burger_name, function(data){
		console.log(data);
		res.json(data);	
	});
});

router.put('/api/burgers/:id', function(req, res){
	var condition = "id = " + req.params.id;
	console.log("condition ", condition);

	burgers.update({"devoured": req.body.devoured}, condition, function(data){
		res.redirect("/");
	});
});
module.exports = router;