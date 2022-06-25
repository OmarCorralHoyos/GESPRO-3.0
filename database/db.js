/* Conexion base de datos */ 

const mysql = require("mysql");
const { path } = require("../app");

require('dotenv').config({path:'./.env'})

const conexion = mysql.createConnection({
    host:"us-cdbr-east-05.cleardb.net",
    user:"b138f12fd71727",
    password:"4cd940ed",
    database:"heroku_5b04aad607e484f", 
    port:"5432",
    ssl:{rejectUnauthorized: false}
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la db gespro del proyecto!');
})

module.exports=conexion




