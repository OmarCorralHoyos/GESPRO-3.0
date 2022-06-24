/* Conexion base de datos */ 

const mysql = require("mysql");

const conexion = mysql.createConnection({
    host:'j3kq4eog6ra2.aws-sa-east-1-1.psdb.cloud',
    user:'0gekc4etxnzc',
    password:'pscale_pw_nkTiO89g8IRWcoBBWFHB-n06K1xulrOJ9j3qV2jiN5w',
    database:'gespro', 
    ssl: {
        rejectUnauthorized: false
    }
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la db gespro del proyecto!');
})

module.exports=conexion




