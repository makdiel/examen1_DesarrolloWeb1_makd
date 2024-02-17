import pg from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();
const pgp = pg();

const user=process.env.USER;
const pass = process.env.PASS;
const dataBase = process.env.DB;
const host = process.env.HOST;
const portDb = process.env.PORT_DB;



//const cnstr = `postgresql://${user}:${pass}@${host}:${portDb}/${dataBase}`; 
//const cnstr = `postgresql://postgres:ServerAcceso.1@localhost:${portDb}/TiendaEnLinea`; 
const cnstr = `postgresql://postgres:ServerAcceso.1@localhost:5432/tiendaenlinea`; 

const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }