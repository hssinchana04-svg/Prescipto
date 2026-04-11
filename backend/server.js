import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    // Allow requests from allowedOrigins
    // Allow requests from any .onrender.com subdomain
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.onrender.com')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}))

// api endpoints
app.use('/api/admin', adminRouter)      // localhost:4000/api/admin
app.use('/api/doctor', doctorRouter)    // localhost:4000/api/doctor
app.use('/api/user', userRouter)        // localhost:4000/api/user

app.get('/', (req, res) => {
  res.send('API WORKING')
})

app.listen(port, () => console.log("Server Started on port", port))