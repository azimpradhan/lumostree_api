'use strict';

const express = require("express");
const router = express.Router();
const Tree = require("./models").Tree;

router.param("id", function(req,res,next,id){
	Tree.findById(id, function(err, doc){
		if(err) return next(err);
		if(!doc) {
			err = new Error("Not Found");
			err.status = 404;
			return next(err);
		}
		req.tree = doc;
		return next();
	});
});


// GET /trees
// Route for trees collection
router.get("/", function(req, res, next){
	Tree.find({})
				.exec(function(err, trees){
					if(err) return next(err);
					res.json(trees);
				});
});

// POST /trees
// Route for creating trees
router.post("/", function(req, res, next){
	const tree = new Tree(req.body);
	tree.save(function(err, tree){
		if(err) return next(err);
		res.status(201);
		res.json(tree);
	});
});

// PUT /trees
// Route for updating trees
router.put('/:id', function(req, res, next) {
	const tree = new Tree(req.body);
	req.tree.nodeName = tree.nodeName;
	req.tree.children = tree.children;
	req.tree.save(function(err, tree) {
		if (err) return next(err);
		res.status(200);
		res.json(tree);
	});
});

// GET /trees/:id
// Route for specific trees
router.get("/:id", function(req, res, next){
	res.json(req.tree);
});



module.exports = router;
