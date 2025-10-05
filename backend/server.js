import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.route.js';
import { mongoDB } from './config/mongodb.js';

const app = express()

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRouter)


const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
    console.log("Running on port no: ", PORT)
    mongoDB()
})