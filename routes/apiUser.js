import  Express  from "express";
const usuario = Express();
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer( {storage : storage} );
import { postUsuario, getUsuario,
         putUsuario, deleteUsuario,
         actualizarContrasena,getListaUsuarios, getAuth } from "../controllers/userControllers.js"

usuario.use(Express.json());
usuario.post('',upload.single('foto_perfil'), postUsuario);
usuario.get('/:nombre_usuario', getUsuario);
usuario.get('', getListaUsuarios);
usuario.get('/auth/:nombre_usuario/:pass', getAuth);
usuario.put('/:nombre_usuario', putUsuario);
usuario.put('/actualizar_pass/:nombre_usuario', actualizarContrasena);
usuario.delete('/:nombre_usuario', deleteUsuario);

export {usuario}