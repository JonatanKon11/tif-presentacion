import mongoose from "mongoose";
const{Schema, model} = mongoose;

const padronSchema = new Schema({
    dni:{
        type: String,
        unique: true,
        
    },
    cuit:{
        type: String,
        unique: true,
        
    },
    denominacion:{
        type: String,
    }
});

export const Padron = model('padron', padronSchema);
