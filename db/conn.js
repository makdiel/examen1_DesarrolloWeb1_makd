import pg from 'pg-promise'
import dotenv from 'dotenv';
dotenv.config();
const pgp = pg();

const user=process.env.USER;
const pass = process.env.PASS;
const dataBase = process.env.DB;
const host = process.env.HOST;
const portDb = process.env.PORT_DB;
const portDb2 = process.env.PORT_DB;


//const cnstr = `postgresql://${user}:${pass}@${host}:${portDb}/${dataBase}`; 
const cnstr = `postgresql://postgres:ServerAcceso.1@localhost:${portDb}/api_zoologico`; 
//const cnstr = `postgresql://postgres:ServerAcceso.1@localhost:5432/api_zoologico`; 

const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }