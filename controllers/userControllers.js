import { db } from "../db/conn.js";

const getAuth = async (req, res) => {
    const { nombre_usuario, pass } = req.params;

    const sql = ` select nombre_usuario from tbl_usuarios 
                    where nombre_usuario = $1 
                    and contrasena = $2  `;
    const result = await db.query(sql, [nombre_usuario, pass]);

    if (result.length === 0) {
        res.status(404).json({ mensaje: "Usuario y Contraseña no coinciden" })
    } else {
        res.json(result);
    }
}

const postUsuario = async (req, res) => {
    try {
        const { nombre_usuario,
            correo_electronico,
            contrasena,
            nombre,
            confirmacion_con } = req.body;

        const {
                buffer,
                mimetype,
                originalname
            } = req.file;

        const params = [buffer, mimetype, originalname,nombre_usuario,
            correo_electronico,contrasena,confirmacion_con,nombre, 2];

        const sql = ` insert into tbl_usuarios 
                    (foto_perfil, mime_type, nombre_archivo,nombre_usuario, 
                    correo_electronico, contrasena,nombre,id_rol)
                    values 
                    ($1, $2, $3, $4,$5,$6,$7, 2) returning *, 'creado con exito' mensaje `;

        if (contrasena === confirmacion_con) {
            const result = await db.query(sql, params);
            res.status(200).json(result)
        } else {
            res.status(400).json({ mensaje: "Las contraseñas no coinciden" })
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const getListaUsuarios = async(req, res)=>{
    const sql = `select a.nombre , a.nombre_usuario,a.correo_electronico,a.id_rol,encode(a.foto_perfil, 'base64') foto_perfil,a.mime_type,a.nombre_archivo , b.nombre_rol
                 from tbl_usuarios a 
                 inner join tbl_rol b on b.id = a.id_rol
                 where a.activo = true order by a.fecha_creacion desc`;

    const result = await db.query(sql);
    res.json(result);
}

const getUsuario = async (req, res) => {
    try {
        const nombre_usuario = req.params.nombre_usuario;
        const sql = `select *                           
                        from tbl_usuarios where nombre_usuario = $1`;
        const result = await db.query(sql, [nombre_usuario]);
        if (result.length === 0) {
            res.status(404).json({ mensaje: "No hay registros" })
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }

}

const putUsuario = async (req, res) => {
    try {
        const { correo_electronico,
            nombre } = req.body;
        const nombre_usuario = req.params.nombre_usuario;
        const params = [correo_electronico, nombre, nombre_usuario];
        const sql = `update tbl_usuarios 
                    set correo_electronico = $1, 
                        nombre = $2                        
                    where nombre_usuario = $3 returning nombre_usuario , 'actualizado con exito' mensaje `;
        const result = await db.query(sql, params);
        if (result.length === 0) {
            res.status(404).json({ mensaje: "Registro no existe no puede ser actualizado" })
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
}

const actualizarContrasena = async (req, res) => {
    try {
        const nombre_usuario = req.params.nombre_usuario;
        const { contrasena, confirmacion_con } = req.body;
        const params = [contrasena, nombre_usuario];

        const sql = `update tbl_usuarios 
                    set contrasena = $1
                where nombre_usuario = $2 returning nombre_usuario , 'actualizacion exitosa' mensaje`;

        if (contrasena === confirmacion_con) {
            const result = await db.query(sql, params);
            if (result.length === 0) {
                res.status(404).json({ mensaje: "Usuario no existente" })
            } else {
                res.status(200).json(result)
            }
        } else {
            res.status(404).json({ mensaje: "Contraseñas no coinciden" })
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message })
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const params = [req.params.nombre_usuario];
        const sql = `update tbl_usuarios 
                    set activo = false 
                where nombre_usuario = $1 
                returning id, 'Usuario Borrado' mensaje `;

        const result = await db.query(sql, params);

        res.json(result);

    } catch (err) {
        
        res.status(500).json({mensaje : err.message})

    }


}

export {
    postUsuario,
    getUsuario,
    putUsuario,
    deleteUsuario,
    actualizarContrasena,
    getListaUsuarios,
    getAuth
}