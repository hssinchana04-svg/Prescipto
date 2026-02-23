import express from "express"
import { listDoctors, changeAvailability } from "../controllers/doctorController.js"
import authAdmin from "../middlewares/authAdmin.js"

const doctorRouter = express.Router()

doctorRouter.get('/list', listDoctors)
doctorRouter.post('/change-availability', authAdmin, changeAvailability)

export default doctorRouter
