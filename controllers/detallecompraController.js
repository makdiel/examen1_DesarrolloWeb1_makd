import {db} from '../db/conn.js';

const getDetalleCompra = async(req, res)=>{

    const sql = `select * from TBLDetalleCompra`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postDetalleCompra = async (req, res)=>{
    const { documento , idProducto, cantidad,costo} = req.body;
    const params =  [documento, idProducto, cantidad,costo];

    const sql = `insert into TBLDetalleCompra 
    (documento,idProducto,cantidad,costo)
    values 
    ($1,$2,$3,$4) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putDetalleCompra = async (req, res)=>{

    const {  cantidad,costo} = req.body;
    const {documento , idProducto} = req.params;
    
    const params =  [documento, idProducto, cantidad,costo];

    const sql = `update TBLDetalleCompra
    set cantidad = $3, 
    set costo = $4, 
    where documento = $1 and idProducto = $2 
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteDetalleCompra = async (req, res)=>{

    const {documento, idProducto} = req.params;
    const params = [ documento, idProducto];

    const sql = `delete from TBLDetalleCompra
    where documento = $1 and idProducto = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getDetalleCompra, postDetalleCompra, putDetalleCompra, deleteDetalleCompra}