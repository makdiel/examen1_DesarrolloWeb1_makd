import {db} from '../db/conn.js';

const getProveedor = async(req, res)=>{

    const sql = `select * from TBLProveedores`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postProveedor = async (req, res)=>{
    const { nombre_proveedor , direccion, contacto} = req.body;
    const params =  [nombre_proveedor, direccion, contacto];

    const sql = `insert into TBLProveedores 
    (nombre_proveedor,direccion,contacto)
    values 
    ($1,$2,$3) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putProveedor = async (req, res)=>{

    const { nombre_proveedor , direccion, contacto} = req.body;
    const {id} = req.params;
    
    const params =  [nombre_proveedor, direccion, contacto,id];

    const sql = `update TBLProveedores
    set nombre_proveedor = $1, 
    set direccion = $2, 
    set contacto = $3, 
    where id = $4
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteProveedor = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from TBLProveedores
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getProveedor, postProveedor, putProveedor, deleteProveedor}