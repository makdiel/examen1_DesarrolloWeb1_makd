import {db} from '../db/conn.js';

const getTipoProducto = async(req, res)=>{

    const sql = `select * from TBLTipoProducto where activo = true order by id asc`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postTipoProducto = async (req, res)=>{
    const { nombre_tipo } = req.body;
    const params =  [nombre_tipo];

    const sql = `insert into TBLTipoProducto 
    (nombre_tipo)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putTipoProducto = async (req, res)=>{

    const { nombre_tipo  } = req.body;
    const {id} = req.params;
    
    const params =  [nombre_tipo, id];

    const sql = `update TBLTipoProducto
    set nombre_tipo = $1   
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteTipoProducto = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `update TBLTipoProducto
    set activo = false   
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getTipoProducto, postTipoProducto, putTipoProducto, deleteTipoProducto}