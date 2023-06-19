import mongoose from "mongoose";

try{
    await mongoose.connect('mongodb+srv://jkondratiuk:kondratiuk@cluster0.vqvsqze.mongodb.net/pruebasAPI')
    console.log('conexion exitosa')
}catch (error) {
    console.log('error de conexion')

}