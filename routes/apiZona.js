import express  from "express";
const zona = express();

import { getZona, postZona, putZona, deleteZona } from "../controllers/zonaController.js";

zona.get('', getZona);
zona.post('', postZona);
zona.put('/:id', putZona);
zona.delete('/:id', deleteZona);

export {zona}