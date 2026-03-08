import express from "express"
import {
  listDoctors,
  changeAvailability,
  loginDoctor,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile
} from "../controllers/doctorController.js"
import authAdmin from "../middlewares/authAdmin.js"
import authDoctor from "../middlewares/authDoctor.js"
import upload from "../middlewares/multer.js"

const doctorRouter = express.Router()

doctorRouter.get('/list', listDoctors)
doctorRouter.post('/change-availability', authAdmin, changeAvailability)
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', upload.single('image'), authDoctor, updateDoctorProfile)

export default doctorRouter

