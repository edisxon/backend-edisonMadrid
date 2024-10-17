import { Schema, model } from "mongoose";

let collection = "stores"

let storeSchema = new Schema({
    name:{type: String, required: true},
    address:{type: String, required: true},
    phone:{type: Number, required: true},
    email:{type: String, required: true},
},{
    timestamps: true
})

let Store = model(collection, storeSchema)
export default Store