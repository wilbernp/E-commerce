const {productModel} = require("../schemas/Products.schema")

// /api/products
async function getAllProducts(req, res){
    let products = await productModel.find().exec()
    res.send(products)
}

module.exports={getAllProducts}