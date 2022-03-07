import { Skill } from '../interfaces/Skill';
import { Request, Response } from 'express';
import Skills from '../model/Skill';


export const createSkill = async (req : Request<any,any,Skill> , res: Response) => {

    const skills = new Skills(req.body)

    try {
        
        const {name,image} = await skills.save()
        
        res.status(201).json({
            ok: true,
            name,
            image
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            message: 'Comunicarse con soporte'
        })
        
    }
}

export const getSkill = async (req : Request<any ,any , Skill> , res:Response) => {
    try {
        const skills = await Skills.find()

        res.status(200).json({
            ok: true,
            skills
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            message: 'Comunicarse con soporte'
        })
        
    }
}