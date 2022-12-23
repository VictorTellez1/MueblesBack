import mongoose from "mongoose";

const productoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    },
    precio:{
        type:Number,
        required:true
    },
    categoria:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categoria"
    },
    descuento:{
        type:Boolean,
        default:false
    },
    imagen:{
        type:String,
        required:true
    }
    },
    {
        timestamps:true
    }
)

const Producto=mongoose.model('Producto',productoSchema)
export default Producto;
