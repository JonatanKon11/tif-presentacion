import mongoose from "mongoose";
const{Schema, model} = mongoose;

const deudorSchema = new Schema({
    dni:{
        type: String,
        unique: true,
        
    },
    cuit:{
        type: String,
        unique: true,
        
    },
    numeroCheque:{
        type: String,
        unique: true,
    },
    monto:{
        type: String,
    }
});

export const Deudor = model('deudor', deudorSchema);