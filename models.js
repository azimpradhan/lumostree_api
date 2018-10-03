'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TreeSchema = new Schema({
	nodeName: String,
	children: []
});

const Tree = mongoose.model("Tree", TreeSchema);

module.exports.Tree = Tree;













