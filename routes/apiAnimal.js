import  express  from "express"
const animal = express();
import { getAnimal, 
        postAnimal, 
        putAnimal, 
        deleteAnimal
    } from "../controllers/animalController.js";

animal.get('', getAnimal );

animal.post('', postAnimal)

animal.put( '/:id', putAnimal )

animal.delete('/:id', deleteAnimal)

export { animal }
