import Product from "../../models/Product.js"

let allProducts = async (req, res, next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}


let productsByName = async (req, res, next) => {
    try {
        let name = req.params.name
        let product = await Product.find({name: name})
        return res.status(200).json({
            response: product
        })
    } catch (error) {
        next(error)
    }
}


let productsByType = async (req, res, next) => {
    try {
        let type = req.params.type
        let product = await Product.find({type: type})
        return res.status(200).json({
            response: product
        })
    } catch (error) {
        next(error)
    }
}




export {allProducts, productsByName, productsByType}