import  express  from "express"
const Inventario = express();
import { getInventario, 
        postInventario, 
        putInventario, 
        deleteInventario
    } from "../controllers/inventarioController.js";

Inventario.get('', getInventario );

Inventario.post('', postInventario)

Inventario.put( '/:id', putInventario )

Inventario.delete('/:id', deleteInventario)

export { Inventario }
