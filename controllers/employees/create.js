import Employee from "../../models/Employee.js";


let createEmployee = async (req, res, next) => {
    try {
        let employee = req.body
        let all = await Employee.create(employee)
        return res.status(201).json({
            response: all
        })
    }catch (error) {
        next(error)
    }
}


let createManyEmployees = async (req, res, next) => {
    try {
        let employees = req.body
        let all = await Employee.insertMany(employees)
        return res.status(201).json({
            response: all
        })
    }catch (error) {
        next(error)
    }
}


export {createEmployee, createManyEmployees}