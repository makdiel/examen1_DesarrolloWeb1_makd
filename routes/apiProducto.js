import  express  from "express"
const Producto = express();
import { getProducto, 
        postProducto, 
        putProducto, 
        deleteProducto
    } from "../controllers/productosController.js";

Producto.get('', getProducto );

Producto.post('', postProducto)

Producto.put( '/:id', putProducto )

Producto.delete('/:id', deleteProducto)

export { Producto }
