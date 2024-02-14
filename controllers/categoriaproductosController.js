import {db} from '../db/conn.js';

const getCategoriaProducto = async(req, res)=>{

    const sql = `select * from TBLCategoriaProducto`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postCategoriaProducto = async (req, res)=>{
    const { nombre_categoria } = req.body;
    const params =  [nombre_categoria];

    const sql = `insert into TBLCategoriaProducto 
    (nombre_categoria)
    values 
    ($1) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putCategoriaProducto = async (req, res)=>{

    const { nombre_categoria  } = req.body;
    const {id} = req.params;
    
    const params =  [nombre_categoria, id];

    const sql = `update TBLCategoriaProducto
    set nombre_categoria = $1   
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteCategoriaProducto = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from TBLCategoriaProducto
    where id = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getCategoriaProducto, postCategoriaProducto, putCategoriaProducto, deleteCategoriaProducto}