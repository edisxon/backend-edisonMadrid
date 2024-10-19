import Store from "../../models/Store.js";



let createStore = async (req, res, next) => {
    try {
        let store = req.body
        let all = await Store.create(store)
        return res.status(201).json({
            response: all
        })
    }catch (error) {
        next(error)
    }
}

let createManyStores = async (req, res, next) => {
    try {
        let stores = req.body
        let all = await Store.insertMany(stores)
        return res.status(201).json({
            response: all
        })
    }catch (error) {
        next(error)
    }
}




export {createStore, createManyStores}