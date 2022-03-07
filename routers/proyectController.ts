import { Router } from 'express';
import { createProyect, getProyects } from '../controllers/proyectController';


const proyectRouter = Router()

proyectRouter.post('/' , createProyect)
proyectRouter.get('/' , getProyects)



export default proyectRouter