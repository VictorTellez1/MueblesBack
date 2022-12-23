import mongoose from "mongoose";

const veterinarioSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    },
    {
        timestamps:true
    }
)

const Categoria=mongoose.model("Categoria",veterinarioSchema)

export default Categoria