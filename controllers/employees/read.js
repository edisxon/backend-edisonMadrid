import Employee from "../../models/Employee.js";

let allEmployees = async (req, res, next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let employeesByName = async (req, res, next) => {
    try {
        let name = req.params.name
        
        let employee = await Employee.find({name: name})
        return res.status(200).json({
            response: employee
        })
    } catch (error) {
        next(error)
    }
}

let employeesByAge = async (req, res, next) => {
    try {
        let age = req.params.age
        
        let employee = await Employee.find({age: age})
        return res.status(200).json({
            response: employee
        })
    } catch (error) {
        next(error)
    }
}






export {allEmployees, employeesByName, employeesByAge}