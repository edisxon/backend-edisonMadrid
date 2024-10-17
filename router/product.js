import { Router } from "express";
import  {allProducts, productsByName, productsByType}  from "../controllers/products/read.js"

const router = Router()

router.get("/all", allProducts)
router.get("/name/:name", productsByName)
router.get("/type/:type", productsByType)

export default router