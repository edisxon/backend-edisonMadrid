import { Router } from "express";
import  {allProducts, productsByName, productsByType}  from "../controllers/products/read.js"
import  {createProduct, createManyProducts}  from "../controllers/products/create.js"

const router = Router()

router.get("/all", allProducts)
router.get("/name/:name", productsByName)
router.get("/type/:type", productsByType)
router.post("/create", createProduct)
router.post("/createMany", createManyProducts)

export default router