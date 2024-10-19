import { Router } from "express";
import  {allStores, storesByName, storesByPhone}  from "../controllers/stores/read.js"
import  {createStore, createManyStores}  from "../controllers/stores/create.js"

const router = Router()

router.get("/all", allStores)
router.get("/name/:name", storesByName)
router.get("/phone/:phone", storesByPhone)
router.post("/create", createStore)
router.post("/createMany", createManyStores)

export default router