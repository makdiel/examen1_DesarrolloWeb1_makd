import  express  from "express"
const EncabezadoVenta = express();
import { getEncabezadoVenta, 
        postEncabezadoVenta, 
        putEncabezadoVenta, 
        deleteEncabezadoVenta
    } from "../controllers/encabezadoventaController.js";

EncabezadoVenta.get('', getEncabezadoVenta );

EncabezadoVenta.post('', postEncabezadoVenta)

EncabezadoVenta.put( '/:documento', putEncabezadoVenta )

EncabezadoVenta.delete('/:documento', deleteEncabezadoVenta)

export { EncabezadoVenta }
