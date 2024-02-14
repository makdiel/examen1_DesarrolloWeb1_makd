import {db} from '../db/conn.js';

const getEncabezadoVenta = async(req, res)=>{

    const sql = `select * from TBLEncabezadoVenta`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postEncabezadoVenta = async (req, res)=>{
    const { documento , idSucursal, cliente,cajero,vendedor} = req.body;
    const params =  [documento, idSucursal, cliente,cajero,vendedor];

    const sql = `insert into TBLEncabezadoVenta 
    (documento,idSucursal,cliente,cajero,vendedor)
    values 
    ($1,$2,$3,$4,$5) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putEncabezadoVenta = async (req, res)=>{

    const { idSucursal, cliente,cajero,vendedor} = req.body;
    const {documento} = req.params;
    
    const params =  [documento, idSucursal, cliente,cajero,vendedor];

    const sql = `update TBLEncabezadoVenta    
    set idSucursal = $2,
    cliente = $3, 
    cajero = $4, 
    vendedor = $5, 
    where documento = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteEncabezadoVenta = async (req, res)=>{

    const {documento} = req.params;
    const params = [ documento];

    const sql = `delete from TBLEncabezadoVenta
    where documento = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getEncabezadoVenta, postEncabezadoVenta, putEncabezadoVenta, deleteEncabezadoVenta}