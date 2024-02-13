import {db} from '../db/conn.js';

const getTipoProducto = async(req, res)=>{

    const sql = `select * from TBLTipoProducto`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postTipoProducto = async (req, res)=>{
    const { nombre_Tipo } = req.body;
    const params =  [nombre_Tipo];

    const sql = `insert into TBLTipoProducto 
    (nombre_Tipo)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putTipoProducto = async (req, res)=>{

    const { nombre_Tipo  } = req.body;
    const {id} = req.params;
    
    const params =  [nombre_Tipo, id];

    const sql = `update TBLTipoProducto
    set nombre_Tipo = $1   
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteTipoProducto = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from TBLTipoProducto
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getTipoProducto, postTipoProducto, putTipoProducto, deleteTipoProducto}