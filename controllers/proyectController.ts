import { Request, Response } from 'express';
import { Proyect } from '../interfaces/Proyect';
import Proyects from '../model/Proyect';


export const createProyect = async (req: Request<any , any , Proyect> , res: Response) => {

    const proyect = new Proyects(req.body)

    try {
        const {name,image,languaje} = await proyect.save()

        res.status(201).json({
            ok: true,
            name,
            image,
            languaje
        })
    } catch (error) {
        console.log(error);
    }
}

export const getProyects = async(req: Request , res: Response) => {
    try {
        const proyects = await Proyects.find()

        res.status(200).json({
            proyects
        })
    } catch (error) {
        console.log(error);
        
    }
}