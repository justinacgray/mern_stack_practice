const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String, 
		required: [true, "Title is required"], 
		minlength: [3, "Title must be a least 3 charactes long"]
	},
	price: { 
		type: Number, 
		required: [true, "A valid number must be entered "],
		min: [1, "Price must be entered"]
	},
	description: { 
		type: String, 
		required: [true, "Description is required"], 
		minlength: [10, "Description must be a least 10 charactes long"]
	}
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;