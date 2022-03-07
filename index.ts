import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import coursesRouter from './routers/coursesRouter'
import { dbConecction } from './db/dbConecction';
import skillRouter from './routers/skillRouter';
import proyectRouter from './routers/proyectController';
dotenv.config()

const app = express()
app.use(cors())
dbConecction()

app.use(express.json())
app.use('/api/courses' , coursesRouter)
app.use('/api/skill' , skillRouter)
app.use('/api/proyect' , proyectRouter)


app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
    
})
