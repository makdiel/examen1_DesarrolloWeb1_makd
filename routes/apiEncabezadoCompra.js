import  express  from "express"
const EncabezadoCompra = express();
import { getEncabezadoCompra, 
        postEncabezadoCompra, 
        putEncabezadoCompra, 
        deleteEncabezadoCompra
    } from "../controllers/encabezadocompraController.js";

EncabezadoCompra.get('', getEncabezadoCompra );

EncabezadoCompra.post('', postEncabezadoCompra)

EncabezadoCompra.put( '/:id', putEncabezadoCompra )

EncabezadoCompra.delete('/:id', deleteEncabezadoCompra)

export { EncabezadoCompra }
