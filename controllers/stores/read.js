import Store from "../../models/Store.js";

let allStores = async (req, res, next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let storesByName = async (req, res, next) => {
    try {
        let name = req.params.name
        
        let store = await Store.find({name: name})
        return res.status(200).json({
            response: store
        })
    } catch (error) {
        next(error)
    }
}

let storesByPhone = async (req, res, next) => {
    try {
        let phone = req.params.phone
        
        let stores = await Store.find({phone: phone})
        return res.status(200).json({
            response: stores
        })
    } catch (error) {
        next(error)
    }
}




export {allStores, storesByName, storesByPhone}
