/* Conexion base de datos */ 

const mysql = require("mysql");
const { path } = require("../app");

const conexion = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME, 
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




