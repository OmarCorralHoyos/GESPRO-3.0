const express = require('express');
const router = express.Router();

const conexion = require('../database/db');

router.get('/', (req, res)=>{
    res.render('login');
});

router.get('/proyectos', (req, res)=>{
    conexion.query('SELECT * FROM gestionproyecto',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('proyectos' , {results:results});
        }
    })
})
router.get('/proveedores', (req, res)=>{
    conexion.query('SELECT * FROM proveedores',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('proveedores' , {results:results});
        }
    })
})
router.get('/clientes', (req, res)=>{
    conexion.query('SELECT * FROM clientes',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('clientes' , {results:results});
        }
    })
})
router.get('/empleados', (req, res)=>{
    conexion.query('SELECT * FROM empleados',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('empleados' , {results:results});
        }
    })
})
router.get('/almacen', (req, res)=>{
    conexion.query('SELECT * FROM almacen',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('almacen' , {results:results});
        }
    })
})
router.get('/inicio', (req, res)=>{
    res.render('inicio');
})


module.exports=router;