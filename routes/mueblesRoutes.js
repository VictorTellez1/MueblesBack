import express from 'express'
import { crearProducto,crearCategoria,obtenerProductos,productos } from '../controllers/mublesController.js';
const router=express.Router()


router.get('/productos-categoria/:nombre',obtenerProductos)
router.get('/productos',productos)

router.post('/agregar-categoria',crearCategoria)

router.post('/agregar-producto',crearProducto)

export default router;