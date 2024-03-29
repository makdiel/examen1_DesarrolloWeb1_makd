import {db} from '../db/conn.js';

const getEncabezadoCompra = async(req, res)=>{

    const sql = `select a.documento,b.nombre_proveedor,a.observacion from TBLEncabezadoCompra a 
                 inner join TBLProveedores b on b.id = a.idProveedor`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postEncabezadoCompra = async (req, res)=>{
    const {  idProveedor, observacion,documento} = req.body;
    const params =  [ idProveedor, observacion,documento];

    const sql = `insert into TBLEncabezadoCompra 
    (idProveedor,observacion,documento)
    values 
    ($1,$2,$3) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putEncabezadoCompra = async (req, res)=>{

    const { idProveedor, observacion} = req.body;
    const {documento} = req.params;
    
    const params =  [ idProveedor, observacion,documento];

    const sql = `update TBLEncabezadoCompra
    set idProveedor = $1,
    observacion = $2 
    where documento = $3
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteEncabezadoCompra = async (req, res)=>{

    const {documento} = req.params;
    const params = [ documento];

    const sql = `delete from TBLEncabezadoCompra
    where documento = $3
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getEncabezadoCompra, postEncabezadoCompra, putEncabezadoCompra, deleteEncabezadoCompra}