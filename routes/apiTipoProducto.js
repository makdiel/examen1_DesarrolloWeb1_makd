import  express  from "express"
const TipoProducto = express();
import { getTipoProducto, 
        postTipoProducto, 
        putTipoProducto, 
        deleteTipoProducto
    } from "../controllers/tipoproductosController.js";

TipoProducto.get('', getTipoProducto );

TipoProducto.post('', postTipoProducto)

TipoProducto.put( '/:id', putTipoProducto )

TipoProducto.delete('/:id', deleteTipoProducto)

export { TipoProducto }
