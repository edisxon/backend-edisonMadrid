import { Router } from "express";
import  {allEmployees, employeesByName, employeesByAge}  from "../controllers/employees/read.js"

const router = Router()

router.get("/all", allEmployees)
router.get("/name/:name", employeesByName)
router.get("/age/:age", employeesByAge)

export default router