const {Router} = require("express")
const { getAllProducts } = require("../controllers/products.controllers")

const router = Router()

// /api/products
router.get("/", getAllProducts)

module.exports=router