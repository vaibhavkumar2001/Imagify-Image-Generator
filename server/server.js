import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/user.routes.js'
import imageRouter from './routes/imagesroutes.js'

const PORT = process.env.PORT || 8000
const app = express()


const allowedOrigins = ['http://localhost:5173','https://imagify-image-generator-frontend.vercel.app']

app.use(express.json())
app.use(cors({origin: allowedOrigins,credentials:true}))
await connectDB();


app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/', (req,res) => res.send("API Working"))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));