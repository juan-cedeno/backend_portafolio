import { Router } from 'express';
import { createSkill, getSkill } from '../controllers/skillController';

const skillRouter = Router()

skillRouter.post('/' , createSkill)
skillRouter.get('/' , getSkill)


export default skillRouter