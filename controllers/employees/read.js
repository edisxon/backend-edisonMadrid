import Employee from "../../models/Employee.js";

let allEmployees = async (req, res) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let employeesByName = async (req, res) => {
    try {
        let name = req.params.name
        
        let employee = await Employee.find({name: name})
        return res.status(200).json({
            response: employee
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let employeesByAge = async (req, res) => {
    try {
        let age = req.params.age
        
        let employee = await Employee.find({age: age})
        return res.status(200).json({
            response: employee
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}






export {allEmployees, employeesByName, employeesByAge}