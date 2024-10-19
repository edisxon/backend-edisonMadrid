import { Router } from "express";
import  {allEmployees, employeesByName, employeesByAge}  from "../controllers/employees/read.js"
import  {createEmployee, createManyEmployees}  from "../controllers/employees/create.js"
import check_age from "../middlewares/check_age.js"

const router = Router()

router.get("/all", allEmployees)
router.get("/name/:name", employeesByName)
router.get("/age/:age", employeesByAge)
router.post("/create", check_age, createEmployee)
router.post("/createMany", check_age , createManyEmployees)

export default router