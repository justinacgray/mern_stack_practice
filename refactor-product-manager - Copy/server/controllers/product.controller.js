const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts })) //if'ts true
        .catch(err => res.json({ message: "Oh no! Something went wrong!", error: err })); //if it's false
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: "Oh no! Something went wrong!", error: err }));
};

module.exports.createNewProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body) // used .body b/c of new info
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: "Oh no! Something went wrong!", error: err }));
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) //this would always be true. so it doesn't give you the old info but the new updated info
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Oh no! Something went wrong!", error: err }));
};

module.exports.deleteOneProduct = (req, res) => {
    console.log(req);
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Oh no! Something went wrong!", error: err }));
};
