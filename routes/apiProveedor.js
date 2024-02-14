import  express  from "express"
const Proveedor = express();
import { getProveedor, 
        postProveedor, 
        putProveedor, 
        deleteProveedor
    } from "../controllers/ProveedoresController.js";

Proveedor.get('', getProveedor );

Proveedor.post('', postProveedor)

Proveedor.put( '/:id', putProveedor )

Proveedor.delete('/:id', deleteProveedor)

export { Proveedor }
