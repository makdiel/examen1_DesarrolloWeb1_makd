import {db} from '../db/conn.js';

const getProducto = async(req, res)=>{

    const sql = `select a.id ,a.mime_type,encode(a.imagen, 'base64') imagen , a.nombre_producto,a.precio,b.nombre_proveedor,c.nombre_Tipo ,d.nombre_categoria ,a.fposteo,a.id_tipo,a.id_proveedor,a.id_categoria from TBLProducto a
                 inner join TBLProveedores b on b.id = a.id_proveedor
                 inner join TBLTipoProducto c on c.id = a.id_tipo
                 inner join TBLCategoriaProducto d on d.id =a.id_categoria 
                 where a.activo = true order by a.fposteo desc`;

    const result = await db.query(sql);
   
    res.json(result);

}

const postProducto = async (req, res)=>{
    const { nombre_producto , precio, id_tipo,id_proveedor,id_categoria} = req.body;
    //const { buffer,mimetype,originalname } = req.file;
    //const params =  [buffer, mimetype, originalname,nombre_producto, Precio, id_tipo,id_proveedor,id_categoria];
    const params =  [nombre_producto, precio, id_tipo,id_proveedor,id_categoria];

    const sql = `insert into TBLProducto 
    (nombre_producto,precio,id_tipo,id_proveedor,id_categoria)
    values 
    ($1,$2,$3,$4,$5) returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

const putProducto = async (req, res)=>{

    const { nombre_producto , precio, id_tipo,id_proveedor,id_categoria} = req.body;
    const {id} = req.params;
    
    const params =  [nombre_producto, precio, id_tipo,id_proveedor,id_categoria,id];

    const sql = `update TBLProducto
    set nombre_producto = $1, 
    precio = $2,
    id_tipo = $3, 
    id_proveedor = $4, 
    id_categoria = $5 
    where id = $6
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

const deleteProducto = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `update TBLProducto
    set activo = false 
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getProducto, postProducto, putProducto, deleteProducto}