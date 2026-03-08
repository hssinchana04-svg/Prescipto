import express from "express";
import { addDoctor, loginAdmin, getAllDoctors, getAllAppointments, cancelAppointment, completeAppointment, adminDashboard } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.get('/all-doctors', authAdmin, getAllDoctors)
adminRouter.get('/appointments', authAdmin, getAllAppointments)
adminRouter.post('/cancel-appointment', authAdmin, cancelAppointment)
adminRouter.post('/complete-appointment', authAdmin, completeAppointment)
adminRouter.get('/dashboard', authAdmin, adminDashboard)

export default adminRouter
