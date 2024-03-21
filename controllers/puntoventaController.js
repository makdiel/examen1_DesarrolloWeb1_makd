import {db} from '../db/conn.js';

const getPuntoVenta = async(req, res)=>{

    const sql = `select * from TBLPuntoVenta where activo = true order by id asc`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postPuntoVenta = async (req, res)=>{
    const { nombre_puntoventa , direccion, contacto} = req.body;
    const params =  [nombre_puntoventa, direccion, contacto];

    const sql = `insert into TBLPuntoVenta 
    (nombre_puntoventa,direccion,contacto)
    values 
    ($1,$2,$3) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putPuntoVenta = async (req, res)=>{

    const { nombre_puntoventa , direccion, contacto} = req.body;
    const {id} = req.params;
    
    const params =  [nombre_puntoventa, direccion, contacto,id];

    const sql = `update TBLPuntoVenta
    set nombre_puntoVenta = $1, 
    direccion = $2,
    contacto = $3 
    where id = $4
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deletePuntoVenta = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `update TBLPuntoVenta 
    set activo = false
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getPuntoVenta, postPuntoVenta, putPuntoVenta, deletePuntoVenta}