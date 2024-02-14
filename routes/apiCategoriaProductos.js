import  express  from "express"
const CategoriaProducto = express();
import { getCategoriaProducto, 
        postCategoriaProducto, 
        putCategoriaProducto, 
        deleteCategoriaProducto
    } from "../controllers/categoriaproductosController.js";

CategoriaProducto.get('', getCategoriaProducto );

CategoriaProducto.post('', postCategoriaProducto)

CategoriaProducto.put( '/:id', putCategoriaProducto )

CategoriaProducto.delete('/:id', deleteCategoriaProducto)

export { CategoriaProducto }
