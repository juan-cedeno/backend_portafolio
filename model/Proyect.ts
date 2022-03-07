import { Schema, model } from 'mongoose';
import { Proyect } from '../interfaces/Proyect';

const ProyectSchema = new Schema<Proyect>({
    image: {
        type: String
    },
    languaje: {
        type: String
    },
    name: {
        type: String
    }
})

export default model('Proyects' , ProyectSchema)