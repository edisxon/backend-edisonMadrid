import { Router } from "express";
import storesRouter from "./store.js";
import employeesRouter from "./employee.js";
import productRouter from "./product.js";



const router = Router()

router.use("/stores", storesRouter)
router.use("/employees", employeesRouter)
router.use("/products", productRouter)



export default router