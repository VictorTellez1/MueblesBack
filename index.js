import express from 'express'
import conectarDB from './config/db.js';
import mueblesRoutes from './routes/mueblesRoutes.js'
import dotenv from 'dotenv'
import cors from 'cors'
const app=express();
dotenv.config()

conectarDB()
app.use(express.json())
const dominiosPermitidos=[process.env.FRONTEND_URL]

const corsOptions={
    origin:function(origin,callback){
        if(dominiosPermitidos.indexOf(origin)!==-1){ //-1 no lo encontro
            //El origin del Request esta permitido
            callback(null,true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}
app.use(cors(corsOptions))

//Definir las rutas 
app.use("/api/muebles",mueblesRoutes)

//Definir el puerto
const PORT=process.env.PORT || 4000 

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})