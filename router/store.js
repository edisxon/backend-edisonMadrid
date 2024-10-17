import { Router } from "express";
import  {allStores, storesByName, storesByPhone}  from "../controllers/stores/read.js"
import  {createStore}  from "../controllers/stores/create.js"

const router = Router()

router.get("/all", allStores)
router.get("/name/:name", storesByName)
router.get("/phone/:phone", storesByPhone)
router.post("/create", createStore)

export default router