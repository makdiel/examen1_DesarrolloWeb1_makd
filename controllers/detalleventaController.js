import {db} from '../db/conn.js';

const getDetalleVenta = async(req, res)=>{

    const sql = `select * from TBLDetalleVenta`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postDetalleVenta = async (req, res)=>{
    const { documento , idProducto, cantidad,precio,descuento} = req.body;
    const params =  [documento, idProducto, cantidad,precio,descuento];

    const sql = `insert into TBLDetalleVenta 
    (documento,idProducto,cantidad,precio,descuento)
    values 
    ($1,$2,$3,$4,$5) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putDetalleVenta = async (req, res)=>{

    const {  cantidad,precio,descuento} = req.body;
    const {documento , idProducto} = req.params;
    
    const params =  [documento, idProducto, cantidad,precio,descuento];

    const sql = `update TBLDetalleVenta
    set cantidad = $3, 
    set precio = $4, 
    descuento = $5
    where documento = $1 and idProducto = $2 
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteDetalleVenta = async (req, res)=>{

    const {documento, idProducto} = req.params;
    const params = [ documento, idProducto];

    const sql = `delete from TBLDetalleVenta
    where documento = $1 and idProducto = $2
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getDetalleVenta, postDetalleVenta, putDetalleVenta, deleteDetalleVenta}