import {db} from '../db/conn.js'

const getAnimal = async (req,res)=>{

    const sql = `select a.id, 
                        a.nombre as nombre_animal, 
                        a.sonido, 
                        b.nombre as nombre_zona 
                    from tbl_animal a
                    inner join tbl_zona_zoologico b 
                    on a.id_zona = b.id`;
                    
    const result = await db.query(sql);
    res.json(result)

}

const postAnimal = async (req, res)=>{


    const { nombre , sonido, id_zona} = req.body;

    const params =  [nombre, sonido, id_zona];

    const sql = `insert into tbl_animal 
                (nombre, sonido, id_zona )
                values 
                ($1, $2, $3) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putAnimal = async (req, res)=>{

    const {sonido , nombre, id_zona} = req.body
    const {id} =req.params

    const params = [
        nombre, 
        sonido,
        id_zona, 
        id
    ]

    const sql = `update tbl_animal 
                  set
                   nombre = $1, 
                   sonido = $2, 
                   id_zona = $3
                where id = $4 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteAnimal = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_animal where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export {getAnimal, postAnimal, putAnimal, deleteAnimal}