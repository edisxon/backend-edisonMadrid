import Store from "../../models/Store.js";



let createStore = async (req, res) => {
    try {
        let store = req.body
        let all = await Store.create(store)
        return res.status(201).json({
            response: all
        })
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}




export {createStore}