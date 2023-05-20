import express from "express"
import { getCustomers, createCustomerController } from "../controllers/customerController"
import { authHandler } from "../middlewares/authHandler"

const router = express.Router()

router.get("/customers", authHandler ,getCustomers)
router.post("/customers", createCustomerController )


export default router