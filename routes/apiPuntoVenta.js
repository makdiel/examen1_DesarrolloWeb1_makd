import  express  from "express"
const PuntoVenta = express();
import { getPuntoVenta, 
        postPuntoVenta, 
        putPuntoVenta, 
        deletePuntoVenta
    } from "../controllers/puntoventaController.js";

PuntoVenta.get('', getPuntoVenta );

PuntoVenta.post('', postPuntoVenta)

PuntoVenta.put( '/:id', putPuntoVenta )

PuntoVenta.delete('/:id', deletePuntoVenta)

export { PuntoVenta }
