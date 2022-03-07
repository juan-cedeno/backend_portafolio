import { Schema, model } from 'mongoose';
import { Skill } from '../interfaces/Skill';

const SkillSchema = new Schema<Skill> ({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    }
})

export default model('Skills' , SkillSchema)