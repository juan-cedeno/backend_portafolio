import { Request, Response } from "express";
import { Course } from '../interfaces/Course';
import Courses from "../model/Course";

export const createCourses = async (req: Request<any , any , Course> , res: Response) => {
    const courses = new Courses(req.body)
    try {

        const courseSave = await courses.save()

        res.status(201).json({
            ok: true,
            name : courseSave.name,
            teacher: courseSave.teacher,
            time: courseSave.time
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Comunicarse con el administrador'
        })
        
    }
}

export const getCourses = async (req: Request<any , any , Course> , res: Response) => {
    try {
        const courses = await Courses.find()
        
        res.status(200).json({
            ok: true,
            courses
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Comunicarse con el administrador'
        })
    }
}