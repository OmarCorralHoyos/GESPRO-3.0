/* Conexion base de datos */ 

const mysql = require("mysql");

require('dotenv').config({path:'./.env'})

const conexion = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME, 
    ssl:{rejectUnauthorized: false}
});

conexion.query('select 1 + 1', (err, rows) => { 
     if(err){
        console.err('El error de conexion es: '+err);
        return
    }
    console.log('¡Conectado a la db gespro del proyecto!');
});

module.exports=conexion




