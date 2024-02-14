import  express  from "express"
const DetalleVenta = express();
import { getDetalleVenta, 
        postDetalleVenta, 
        putDetalleVenta, 
        deleteDetalleVenta
    } from "../controllers/detalleventaController.js";

DetalleVenta.get('', getDetalleVenta );

DetalleVenta.post('', postDetalleVenta)

DetalleVenta.put( '/:id', putDetalleVenta )

DetalleVenta.delete('/:id', deleteDetalleVenta)

export { DetalleVenta }
