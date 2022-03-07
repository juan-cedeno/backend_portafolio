import {Schema , model} from 'mongoose';
import { Course } from '../interfaces/Course';

const CoursesSchema = new Schema<Course>({
    name: {
        type: String,
        required: true
    },
    teacher:{
        type: String
    },
    time: {
        type: Number
    }
})

export default model('Courses' , CoursesSchema)