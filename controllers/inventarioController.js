import {db} from '../db/conn.js';

const getInventario = async(req, res)=>{

    const sql = `select c.nombre_PuntoVenta , a.idProducto , b.nombre_producto , d.nombre_Tipo , b.precio , a.existencia 
                 from TBLInventario a 
                 inner join TBLProducto b on b.id = a.idProducto
                 inner join TBLPuntoVenta c on c.id = a.idPuntoVenta 
                 inner join TBLTipoProducto d on d.id = b.id_tipo`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postInventario = async (req, res)=>{
    const { existencia,idProducto , idPuntoVenta} = req.body;
    const params =  [existencia,idProducto, idPuntoVenta];

    const sql = `insert into TBLInventario 
    (existencia,idProducto,idPuntoVenta)
    values 
    ($1,$2,$3) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putInventario = async (req, res)=>{

    const {existencia} = req.body;
    const {idProducto , idPuntoVenta} = req.params;
    
    const params =  [existencia,idProducto, idPuntoVenta ];

    const sql = `update TBLInventario
    set existencia = $1    
    where idProducto = $2 and idPuntoVenta = $3
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteInventario = async (req, res)=>{

    const {idProducto , idPuntoVenta} = req.params;
    const params = [ idProducto , idPuntoVenta];

    const sql = `delete from TBLInventario
    where idProducto = $2 and idPuntoVenta = $3
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getInventario, postInventario, putInventario, deleteInventario}