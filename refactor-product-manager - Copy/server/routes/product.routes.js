const ProductController = require("../controllers/product.controller");


module.exports = app => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/update/:id", ProductController.updateProduct);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteOneProduct);
};

