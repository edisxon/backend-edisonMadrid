import Product from "../../models/Product.js";

let createProduct = async (req, res, next) => {
    try {
        let product = req.body
        let all = await Product.create(product)
        return res.status(201).json({
            response: all
        })
    }catch (error) {
        next(error)
    }
}


let createManyProducts = async (req, res, next) => {
    try {
        let products = req.body
        let all = await Product.insertMany(products)
        return res.status(201).json({
            response: all
        })
    }catch (error) {
        next(error)
    }
}

export { createProduct, createManyProducts }