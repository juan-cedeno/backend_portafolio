import mongoose from 'mongoose'

export const dbConecction = async() => {
    try {
        await mongoose.connect(process.env.DB_CONECCTION || '');
        console.log('connect database');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectarse con la base de datos')
        
    }
}



