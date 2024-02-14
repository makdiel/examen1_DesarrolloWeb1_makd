import  express  from "express"
const DetalleCompra = express();
import { getDetalleCompra, 
        postDetalleCompra, 
        putDetalleCompra, 
        deleteDetalleCompra
    } from "../controllers/detallecompraController.js";

DetalleCompra.get('', getDetalleCompra );

DetalleCompra.post('', postDetalleCompra)

DetalleCompra.put( '/:id', putDetalleCompra )

DetalleCompra.delete('/:id', deleteDetalleCompra)

export { DetalleCompra }
