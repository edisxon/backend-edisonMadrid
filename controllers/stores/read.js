import Store from "../../models/Store.js";

let allStores = async (req, res) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let storesByName = async (req, res) => {
    try {
        let name = req.params.name
        
        let store = await Store.find({name: name})
        return res.status(200).json({
            response: store
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let storesByPhone = async (req, res) => {
    try {
        let phone = req.params.phone
        
        let stores = await Store.find({phone: phone})
        return res.status(200).json({
            response: stores
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}




export {allStores, storesByName, storesByPhone}
