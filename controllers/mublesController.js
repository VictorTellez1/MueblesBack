import Producto from "../models/Producto.js";
import Categoria from "../models/Categoria.js";

const crearCategoria=async(req,res)=>{
    const categoria=new Categoria(req.body)
    try {
        const categoriaAlmacenada=await categoria.save()
        res.json({msg:categoriaAlmacenada})
    } catch (error) {
        console.log(error)
    }
}


const crearProducto=async(req,res)=>{
    const producto=new Producto(req.body)
    try {
        const productoAlmacenado=await producto.save()
        res.json({msg:productoAlmacenado})
    } catch (error) {
        console.log(error)
    }
}

const obtenerProductos=async(req,res)=>{
    const {nombre}=req.params
    try {
        const categoria=await Categoria.findOne({nombre})
        const productos=await Producto.find().where("categoria").equals(categoria._id)
        res.json({productos})
    } catch (error) {
        console.log(error)
    }
}

const productos=async(req,res)=>{
    const productosObtenidos=await Producto.find().limit(6)
    res.json({productos:productosObtenidos})
}

export {crearProducto,crearCategoria,obtenerProductos,productos}