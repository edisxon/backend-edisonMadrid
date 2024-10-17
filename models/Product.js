import { Schema, model } from "mongoose";

const collection = "products"

const productSchema = new Schema({
    name:{type: String, required: true},
    brand:{type: String, required: true},
    type:{type: String, required: true},
    price:{type: Number, required: true}, 
},{
    timestamps: true
})

const Product = model(collection, productSchema)
export default Product