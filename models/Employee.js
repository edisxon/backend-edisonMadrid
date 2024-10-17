import {Schema,model} from "mongoose"

const collection = "employees"

const employeeSchema = new Schema({
    name:{type: String, required: true},
    age:{type: Number, required: true}, 
    position:{type: String, required: true},
    salary:{type: Number, required: true}, 
},{
    timestamps: true    
})

const Employee = model(collection, employeeSchema)

export default Employee