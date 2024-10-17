import Product from "../../models/Product.js"

let allProducts = async (req, res) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


let productsByName = async (req, res) => {
    try {
        let name = req.params.name
        let product = await Product.find({name: name})
        return res.status(200).json({
            response: product
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


let productsByType = async (req, res) => {
    try {
        let type = req.params.type
        let product = await Product.find({type: type})
        return res.status(200).json({
            response: product
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}




export {allProducts, productsByName, productsByType}