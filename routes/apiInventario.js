import  express  from "express"
const Inventario = express();
import { getInventario, 
        postInventario, 
        putInventario, 
        deleteInventario
    } from "../controllers/inventarioController.js";

Inventario.get('', getInventario );

Inventario.post('', postInventario)

Inventario.put( '/:idProducto', putInventario )

Inventario.delete('/:idProducto', deleteInventario)

export { Inventario }
