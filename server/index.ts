import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose'

import docSchema from './models/Document'
import userSchema from './models/User'
import { docRoute } from './routes/docRoute'
// import { userRoute } from './routes/userRoute'

dotenv.config();

const app = express()
const Port = process.env.PORT || 3000;
const MonUrl = process.env.MONGO_URI || ''


mongoose.connect(MonUrl)
console.log(MonUrl)


app.use(cors({
	origin: '*',
	credentials: true
}))

app.use('/api/docs', docRoute)