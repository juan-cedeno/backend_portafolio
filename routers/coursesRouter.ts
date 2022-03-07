import { Router } from "express";
import { createCourses, getCourses } from '../controllers/coursesController';

const coursesRouter = Router()

coursesRouter.post('/', createCourses)
coursesRouter.get('/' , getCourses)



export default coursesRouter