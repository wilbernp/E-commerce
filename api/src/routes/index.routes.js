const {Router} = require("express")
const productsRoutes = require("./products.routes")

const router = Router()

// /api/products
router.use("/products", productsRoutes)

module.exports = router

