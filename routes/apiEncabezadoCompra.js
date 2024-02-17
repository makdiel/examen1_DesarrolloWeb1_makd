import  express  from "express"
const EncabezadoCompra = express();
import { getEncabezadoCompra, 
        postEncabezadoCompra, 
        putEncabezadoCompra, 
        deleteEncabezadoCompra
    } from "../controllers/encabezadocompraController.js";

EncabezadoCompra.get('', getEncabezadoCompra );

EncabezadoCompra.post('', postEncabezadoCompra)

EncabezadoCompra.put( '/:documento', putEncabezadoCompra )

EncabezadoCompra.delete('/:documento', deleteEncabezadoCompra)

export { EncabezadoCompra }
